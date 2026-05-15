import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { clearResults, setResult } from '../store/features/searchSlice';
import { Star } from 'lucide-react'

function ResultCard(props) {
  const item = props.item
  const [hover,setHover] = useState(false)
  const [exist,setExist] = useState(isExistInCollections())

  function isExistInCollections() {
    const oldItems = JSON.parse(localStorage.getItem("collections")) || [];
    const isExist = oldItems.find((obj) => obj.id === item.id);
    return isExist;
  }

  function addToCollections() {
    const oldItems = JSON.parse(localStorage.getItem("collections")) || [];
    if(isExistInCollections()) return;
    const newItems = [...oldItems,item]
    localStorage.setItem("collections",JSON.stringify(newItems))
    setExist(true)
  }

  function removeFromCollections() {
    const oldItems = JSON.parse(localStorage.getItem("collections"))
    const newItems = oldItems.filter((obj) => obj.id !== item.id);
    localStorage.setItem("collections",JSON.stringify(newItems))
    setExist(false);
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
          onClick={() => removeFromCollections()} 
          className='absolute top-3 right-5 cursor-pointer bg-gray-950 rounded-full p-1'
          >
            <Star fill='white'/>
          </button> 
        : 
          <button
          onClick={() => addToCollections()} 
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