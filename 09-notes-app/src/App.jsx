import React, { useState } from 'react'
import SideBar from './components/SideBar'
import HeroSection from './components/HeroSection'
import BorderLine from './components/BorderLine'
import { NotesContext } from './context/notesContext'

function App() {
  const showAddNotesColors = JSON.parse(localStorage.getItem("showAddNotesColors")) || false;
  const notesData = JSON.parse(localStorage.getItem('notes')) || [];
  const [notes,setNotes] = useState(notesData);

  return (
    <NotesContext.Provider value={[showAddNotesColors,notes,setNotes]}>
      <div className='bg-gray-200 h-screen w-lvw flex'>
        <SideBar />
        <BorderLine />
        <HeroSection />
      </div>
    </NotesContext.Provider>
  )
}

export default App