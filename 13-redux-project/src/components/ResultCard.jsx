import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { clearResults, setResult } from '../store/features/searchSlice';
import { Star } from 'lucide-react'
import { addCollection, addToast, removeCollection, removeToast } from '../store/features/collectionSlice'

function ResultCard(props) {
  const item = props.item
  const {activeTab} = useSelector((s) => s.search)
  const [hover,setHover] = useState(false)
  const [exist,setExist] = useState(isExistInCollection())
  const dispatch = useDispatch();

  function isExistInCollection() {
    const oldItems = JSON.parse(localStorage.getItem("collection")) || [];
    const isExist = oldItems.find((obj) => obj.id === item.id);
    return isExist;
  }

  return (
    <div className='w-65 h-80 flex flex-col justify-center items-center overflow-hidden object-contain rounded-3xl hover:scale-105 relative'
    onMouseEnter={() => setHover(true)}
    onMouseLeave={() => setHover(false)}
    >
      {item.type === "video" ? 
        (<video autoPlay muted poster={item.thumbnail} className='w-full h-full object-cover'>
          <source src={item.src}/>
        </video> ) 
        : 
        (<img className='w-full h-full object-cover' src={item.thumbnail} alt={item.title} typeof={item.type} />)
      }

      {hover ? 
      <>
        <div className="absolute inset-0 bg-black/30"></div>
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
      : <></>}

    </div>
  )
}

export default ResultCard