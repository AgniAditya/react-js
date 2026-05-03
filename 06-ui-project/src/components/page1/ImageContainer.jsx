import React from 'react'
import { MoveRight } from 'lucide-react'

function ImageContainer() {

  return (
    <div className='flex gap-3 h-full'>
        <div className="relative bg-[url('https://images.unsplash.com/photo-1581403341630-a6e0b9d2d257?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] bg-cover bg-center h-150 w-75 rounded-4xl overflow-hidden">
            <div className="absolute inset-0 bg-black/40"></div>
            <div className="relative z-10 flex flex-col justify-between h-full">
                <div className="bg-white w-fit px-2 rounded-full  ml-8 mt-8">
                    1
                </div>
                <div className='flex flex-col justify-between py-10 px-5 h-[50%]'>
                    <p className="text-gray-200 text-md">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit impedit aliquam hic unde corrupti aliquid eveniet modi cupiditate, vel nobis?
                    </p>
                    <div className='w-full px-7 py-5 font-bold text-xl bg-blue-500 flex items-center justify-between rounded-4xl cursor-pointer hover:bg-blue-700'>
                        Satisfied
                        <MoveRight />
                    </div>
                </div>
            </div>
        </div>
        <div className="relative bg-[url('https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=988&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] bg-cover bg-center h-150 w-75 rounded-4xl overflow-hidden">
            <div className="absolute inset-0 bg-black/40"></div>
            <div className="relative z-10 flex flex-col justify-between h-full">
                <div className="bg-white w-fit px-2 rounded-full  ml-8 mt-8">
                    2
                </div>
                <div className='flex flex-col justify-between py-10 px-5 h-[50%]'>
                    <p className="text-gray-200 text-md">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit impedit aliquam hic unde corrupti aliquid eveniet modi cupiditate, vel nobis?
                    </p>
                    <div className='w-full px-7 py-5 font-bold text-xl bg-cyan-500 flex items-center justify-between rounded-4xl cursor-pointer hover:bg-cyan-700'>
                        Underserved
                        <MoveRight />
                    </div>
                </div>
            </div>
        </div>
        <div className="relative bg-[url('https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] bg-cover bg-center h-150 w-75 rounded-4xl overflow-hidden">
            <div className="absolute inset-0 bg-black/40"></div>
            <div className="relative z-10 flex flex-col justify-between h-full">
                <div className="bg-white w-fit px-2 rounded-full  ml-8 mt-8">
                    3
                </div>
                <div className='flex flex-col justify-between py-10 px-5 h-[50%]'>
                    <p className="text-gray-200 text-md">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit impedit aliquam hic unde corrupti aliquid eveniet modi cupiditate, vel nobis?
                    </p>
                    <div className='w-full px-7 py-5 font-bold text-xl bg-green-500 flex items-center justify-between rounded-4xl cursor-pointer hover:bg-green-700'>
                        Underbanked
                        <MoveRight />
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ImageContainer