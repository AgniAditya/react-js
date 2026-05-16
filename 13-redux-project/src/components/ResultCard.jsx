import React, { useEffect, useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Star } from 'lucide-react'
import { addCollection, addToast, removeCollection, removeToast } from '../store/features/collectionSlice'

function ResultCard({ item }) {
  const videoRef = useRef(null)
  const cardRef = useRef(null)
  const {activeTab} = useSelector((s) => s.search)
  const [hover,setHover] = useState(false)
  const [exist,setExist] = useState(isExistInCollection())
  const [isVisible, setIsVisible] = useState(false)
  const dispatch = useDispatch();

  function isExistInCollection() {
    const oldItems = JSON.parse(localStorage.getItem("collection")) || [];
    const isExist = oldItems.find((obj) => obj.id === item.id);
    return isExist;
  }

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if(entry.isIntersecting){
            setIsVisible(true)
            observer.unobserve(cardRef.current) 
        }
      })
    },{ threshold: 0.1 })

    if(cardRef.current){
      observer.observe(cardRef.current)
    }

    return () => observer.disconnect()
  },[])

  useEffect(() => {
    if(!videoRef.current) return;

    if(hover){
      videoRef.current.play()
      videoRef.current.controls = true
    } else {
      videoRef.current.pause()
      videoRef.current.controls = false
    }
  },[hover])

  return (
    <div ref={cardRef} className='w-65 h-80 flex flex-col justify-center items-center overflow-hidden object-contain rounded-3xl hover:scale-110 relative'
    onMouseEnter={() => setHover(true)}
    onMouseLeave={() => setHover(false)}
    >
      {isVisible ? 
      item.type === "video" ? 
        (<video ref={videoRef} muted poster={item.thumbnail} className='w-full h-full object-cover'>
          <source src={item.src}/>
        </video> ) 
        : 
        (<img className='w-full h-full object-cover' src={item.thumbnail} alt={item.title} typeof={item.type} />)
      : <div className='w-full h-full bg-gray-200 animate-pulse rounded-3xl' />
      }

      {hover ? 
      <>
        <div className='absolute text-md font-semibold text-white bottom-2 p-5'>{item.title}</div>
        {exist ? 
          <button
          onClick={() => {
            if(activeTab === "collection"){
              dispatch(removeCollection(item))
              dispatch(removeToast())
              setExist(false)
            }
          }} 
          className='absolute top-3 right-5 cursor-pointer bg-gray-950 rounded-full p-1'
          >
            <Star fill='white'/>
          </button> 
        : 
          <button
          onClick={() => {
            dispatch(addCollection(item))
            dispatch(addToast())
            setExist(true)
          }} 
          className='absolute top-3 right-5 cursor-pointer bg-gray-950 rounded-full p-1'
          >
            <Star color='white'/>
          </button>
        }
      </>
      : <div className="absolute inset-0 bg-black/30"></div>}

    </div>
  )
}

export default ResultCard