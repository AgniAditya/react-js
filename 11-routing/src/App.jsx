import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './components/Home'

function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<h1>Main</h1>}/>
        <Route path='/home' element={<Home />}/>
        <Route path='*' element={<div>Not found</div>} />
      </Routes>
    </div>
  )
}

export default App