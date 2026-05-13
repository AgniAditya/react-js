import React from 'react'
import { useSelector } from 'react-redux'
import { clearResults } from '../store/features/searchSlice';

function ResultCard(props) {
  const {activeTab,result} = useSelector((store) => store.search)

  return (
    <>
    <div className='w-60 flex items-center'>
      {activeTab === "video" ? 
        <video controls>
          <source src={result[props.index].src}/>
        </video> : <img src={result[props.index].thumbnail} alt={result[props.index].title} typeof={result[props.index].type} />
      }
    </div>
    </>
  )
}

export default ResultCard