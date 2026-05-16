import React, { useEffect, useRef, useState } from 'react'
import ResultCard from './ResultCard'
import { useDispatch, useSelector } from 'react-redux'
import { getGIFs, getImages, getVidoes } from '../api/mediaAPI';
import { clearResults, setError, setLoading, setResult, appendResult } from '../store/features/searchSlice';
import Loading from './Loading';
import Error from './Error';
import EmptyCollection from './EmptyCollection';

function ResultContainer() {
  const moreDataRef = useRef(null)
  const disptach = useDispatch();
  const {query,activeTab,result,loading,error} = useSelector((store) => store.search)
  const {items} = useSelector((store) => store.collection)
  const [imagePage,setImagePage] = useState(1);
  const [videoPage,setVideoPage] = useState(1);
  const [gifOffest,setGifOffset] = useState(0);

  async function fetchData(){
    try {
      if(query.trim() === "" && activeTab !== "collection") {
        return;
      }
      disptach(setLoading(true))
      
      let data;
      if(activeTab === "collection"){
        data = JSON.parse(localStorage.getItem("collection")) || [];
        disptach(setResult(data))
        return;
      }
      else if(activeTab === "photo"){
        const res = await getImages(query,imagePage);
        if(res.total_pages < imagePage) {
          disptach(setLoading(false))
          return;
        }
        data = res.photos.map((photo) => {
          return ({
            id: photo.id,
            type: "photo",
            title: photo.alt_description,
            src: photo.urls.small,
            thumbnail: photo.urls.small
          })
        })
        setImagePage(prev => prev + 1);
      }
      else if(activeTab === "video"){
        const res = await getVidoes(query,videoPage);
        data = res.map((video) => {
          return ({
            id: video.id,
            type: "video",
            title: '',
            src: video.video_files[0].link,
            thumbnail: video.image
          })
        })
        setVideoPage(prev => prev + 1);
      }
      else if(activeTab === "gif"){
        const res = await getGIFs(query,gifOffest);
        if(res.total_count === 0) {
          disptach(setLoading(false))
          return;
        }
        data = res.gifs.map((gif) => {
          return ({
            id: gif.id,
            type: "gif",
            title: gif.title,
            src: gif.images.original.url,
            thumbnail: gif.images.original.url
          })
        })
        setGifOffset(prev => prev + res.count);
      }
      disptach(appendResult(data))
    } catch (error) {
      console.log(error);
      
      disptach(setError(error.message))
    }
  }
  useEffect(() => {
    disptach(clearResults())
    setImagePage(1)
    setVideoPage(1)
    setGifOffset(0)
    fetchData()
  },[activeTab,query,items])

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if(entry.isIntersecting){
        fetchData()
      }
    },{ threshold: 0.1 })

    if(moreDataRef.current && activeTab !== "collection"){
      console.log(moreDataRef.current);
      observer.observe(moreDataRef.current)
    }

    return () => observer.disconnect()
  },[imagePage,videoPage,gifOffest])

  return (
    <div className='w-full justify-center flex flex-wrap gap-5 p-5'>
      {result.map((obj) => <ResultCard key={obj.id} item={obj}/> )}
      {!loading && !error && result.length === 0 ? <EmptyCollection /> : <></>}
      {loading ? <Loading /> : <></>}
      {error ? <Error message={error.message}/> : <></>}
      {!loading ? <div ref={moreDataRef} className='w-full h-2'></div> : <></> }
    </div>
  )
}

export default ResultContainer