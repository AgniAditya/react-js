import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { clearResults } from '../store/features/searchSlice';
import { Star } from 'lucide-react'

function ResultCard(props) {
  const {result} = useSelector((store) => store.search)
  const [hover,setHover] = useState(false)
  const item = result[props.index]

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
        <button 
        className='absolute top-3 right-5 cursor-pointer bg-gray-950 rounded-full p-1'
        >
          <Star color='white'/>
        </button>
      </>
      : <></>}

    </div>
  )
}

export default ResultCard