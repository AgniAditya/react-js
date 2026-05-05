import React, { useState } from 'react'
import SideBar from './components/SideBar'
import HeroSection from './components/HeroSection'
import BorderLine from './components/BorderLine'
import { NotesContext } from './context/notesContext'


function App() {
  const data = [
    {
      content: "“I'm selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle.” ― Marilyn Monroe",
      date: "May 05,2026",
      color: "amber"
    }
  ];
  const [notes,setNotes] = useState(data);

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