import React from 'react'
import Header from './Header'
import Center from './Center'

function Page1() {
  return (
    <div className='h-screen w-full px-10 pt-10 flex flex-col gap-15'>
        <Header />
        <Center />
    </div>
  )
}

export default Page1