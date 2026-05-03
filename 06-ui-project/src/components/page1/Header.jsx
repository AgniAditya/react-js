import React from 'react'
import {CornerDownRight} from 'lucide-react'

function Header() {
  return (
    <div className='flex justify-between'>
        <div className='bg-black text-white w-fit px-3 py-1 rounded-3xl uppercase'>
            Target Audience
        </div>
        <div className='bg-gray-300 px-5 rounded-2xl flex items-center justify-center gap-2 tracking-wide text-sm'>
            <CornerDownRight size={20}/>DIGITAL BANKING PLATFORM
        </div>
    </div>
  )
}

export default Header