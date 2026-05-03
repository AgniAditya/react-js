import React from 'react'
import LeftText from './LeftText'
import ImageContainer from './ImageContainer'

function Center() {
  return (
    <div className='flex items-center justify-between h-full'>
        <LeftText />
        <ImageContainer />
    </div>
  )
}

export default Center