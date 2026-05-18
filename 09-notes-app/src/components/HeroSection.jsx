import React from 'react'
import NoteBox from './NoteBox'
import { useContext } from 'react'
import { NotesContext } from '../context/notesContext'

function HeroSection() {
  const [_,notes] = useContext(NotesContext)

  return (
    <div className='w-full pt-20 px-15 pb-5 flex flex-col gap-10'>
      <h1 className='text-4xl'>Notes</h1>
      <div className='flex flex-wrap gap-7 notes-container-scroll'>
        {notes.map((note) => {
          return <NoteBox 
          key={note.id} 
          id={note.id} 
          content={note.content} 
          date={note.date} 
          color={note.color}/>
        })}
      </div>
    </div>
  )
}

export default HeroSection