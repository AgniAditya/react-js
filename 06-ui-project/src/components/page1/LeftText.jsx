import React from 'react'
import { ArrowUpRight } from 'lucide-react'

function LeftText() {
  return (
    <div className='h-full flex flex-col justify-between'>
        <div className='w-100 flex flex-col gap-5'>
                <div className='text-6xl flex flex-col font-semibold gap-2'>
                    Prospective
                        <div className='bg-gray-200 w-fit rounded-full pb-3 px-2'>
                            customer
                        </div>
                    segmentation
                </div>
                <p className='text-gray-400 text-2xl'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Accusantium libero dolores aut illum minima ducimus
                    repellat ipsum eum inventore voluptatibus.
                </p>
        </div>
        <ArrowUpRight size={70}/>
    </div>
  )
}

export default LeftText