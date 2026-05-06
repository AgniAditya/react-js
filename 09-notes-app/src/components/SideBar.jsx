import React from 'react'
import { Plus } from 'lucide-react';
import { useContext } from 'react'
import { NotesContext } from '../context/notesContext'

function SideBar() {
    const [notes,setNotes] = useContext(NotesContext)

    function addNewNote(e) {
        const content = "";
        const color = e.target.attributes["data-color"].value;
        const date = (new Date()).toLocaleDateString("en-US", {
            month: "long",
            day: "2-digit",
            year: "numeric",
        });
        const newNote = {content,date,color};
        setNotes([newNote,...notes]);
    }

  return (
    <div className='w-1/10 flex flex-col items-center gap-20 pt-10'>
        <div className=''>
            Docket
        </div>
        <div className='flex flex-col items-center gap-8'>
            <button className='bg-black w-10 h-10 flex items-center justify-center rounded-full hover:bg-gray-700'>
                <Plus color="#ffffff" />
            </button>
            <div className='flex flex-col justify-center gap-5'>
                <div onClick={(e) => addNewNote(e)} data-color="amber" className='w-4 h-4 bg-amber-400 rounded-full hover:bg-amber-400/50'></div>
                <div onClick={(e) => addNewNote(e)} data-color="cyan"  className='w-4 h-4 bg-cyan-400 rounded-full hover:bg-cyan-400/50'></div>
                <div onClick={(e) => addNewNote(e)} data-color="red" className='w-4 h-4 bg-red-400 rounded-full hover:bg-red-400/50'></div>
                <div onClick={(e) => addNewNote(e)} data-color="purple" className='w-4 h-4 bg-purple-400 rounded-full hover:bg-purple-400/50'></div>
                <div onClick={(e) => addNewNote(e)} data-color="green" className='w-4 h-4 bg-green-400 rounded-full hover:bg-green-400/50'></div>
            </div>
        </div>
    </div>
  )
}

export default SideBar