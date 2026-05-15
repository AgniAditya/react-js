import React, { useEffect, useState } from 'react'
import ResultCard from './ResultCard'
import { useDispatch, useSelector } from 'react-redux'
import { getGIFs, getImages, getVidoes } from '../api/mediaAPI';
import { clearResults, setError, setLoading, setResult } from '../store/features/searchSlice';
import Loading from './Loading';
import Error from './Error';
import EmptyCollection from './EmptyCollection';

function ResultContainer() {
  const disptach = useDispatch();
  const {query,activeTab,result,loading,error} = useSelector((store) => store.search)
  const {items} = useSelector((store) => store.collection)

  async function fetchData(){
    try {
      disptach(clearResults())
      if(query.trim() === "" && activeTab !== "collection") {
        return;
      }
      disptach(setLoading())
      
      let data;
      if(activeTab === "collection"){
        data = JSON.parse(localStorage.getItem("collection")) || [];
      }
      else if(activeTab === "photo"){
        const res = await getImages(query);
        data = res.map((photo) => {
          return ({
            id: photo.id,
            type: "photo",
            title: photo.alt_description,
            src: photo.urls.small,
            thumbnail: photo.urls.small
          })
        })
      }
      else if(activeTab === "video"){
        const res = await getVidoes(query);
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
      else if(activeTab === "gif"){
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
    } catch (error) {
      disptach(setError(error.message))
    }
  }
  useEffect(() => {
    fetchData()
  },[activeTab,query,items])

  return (
    <div className='w-full justify-center flex flex-wrap gap-5 p-5'>
      {result.map((obj) => <ResultCard key={obj.id} item={obj}/> )}
      {!loading && !error && result.length === 0 ? <EmptyCollection /> : <></>}
      {loading ? <Loading /> : <></>}
      {error ? <Error message={error.message}/> : <></>}
    </div>
  )
}

export default ResultContainer