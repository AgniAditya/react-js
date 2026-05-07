import React, { useEffect, useState } from 'react'
import SideBar from './components/SideBar'
import HeroSection from './components/HeroSection'
import BorderLine from './components/BorderLine'
import { NotesContext } from './context/notesContext'

function App() {
  const notesData = JSON.parse(localStorage.getItem('notes')) || [];
  const [notes,setNotes] = useState(notesData);

  return (
    <NotesContext.Provider value={[notes,setNotes]}>
      <div className='bg-gray-200 h-screen w-lvw flex'>
        <SideBar />
        <BorderLine />
        <HeroSection />
      </div>
    </NotesContext.Provider>
  )
}

export default App