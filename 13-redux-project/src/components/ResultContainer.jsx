import React, { useEffect, useState } from 'react'
import ResultCard from './ResultCard'
import { useDispatch, useSelector } from 'react-redux'
import { getGIFs, getImages, getVidoes } from '../api/mediaAPI';
import { clearResults, setResult } from '../store/features/searchSlice';

function ResultContainer() {
  const [counter,setCounter] = useState(0)
  const disptach = useDispatch();
  const {query,activeTab,result,loading,error} = useSelector((store) => store.search)

  useEffect(() => {
    async function fetchData(){
      disptach(clearResults())
      if(query.trim() === "") {
        return;
      }

      let data;
      if(activeTab === "photo"){
        const res = await getImages(query);
        data = res.map((photo) => {
          return ({
            id: photo.id,
            type: "photo",
            title: photo.alt_description,
            src: photo.urls.full,
            thumbnail: photo.urls.thumb
          })
        })
      }
      else if(activeTab === "video"){
        const res = await getVidoes(query);
        console.log(res);
        data = res.map((video) => {
          return ({
            id: video.id,
            type: "video",
            title: '',
            src: video.video_files[0].link,
            thumbnail: video.image
          })
        })
      }
      else{
        const res = await getGIFs(query);
        data = res.map((gif) => {
          return ({
            id: gif.id,
            type: "gif",
            title: gif.title,
            src: gif.images.original.url,
            thumbnail: gif.images.original.url
          })
        })
      }
      disptach(setResult(data))
    }
    fetchData()

  },[activeTab,query])

  return (
    <div className='w-full h-fit justify-center flex flex-wrap gap-5 p-5'>
      {result.map((_,i) => <ResultCard key={i} index={i}/>)}
    </div>
  )
}

export default ResultContainer