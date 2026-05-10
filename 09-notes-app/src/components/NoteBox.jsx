import React, { useState } from 'react'
import { Pencil , PencilOff} from 'lucide-react'
import { FileMinus } from 'lucide-react';
import { useContext } from 'react'
import { NotesContext } from '../context/notesContext'

function NoteBox(props) {
    const [editable,setEditable] = useState(false);
    const [value,setValue] = useState(props.content);
    const [notes,setNotes] = useContext(NotesContext)
    
    function setContent(e) {
        setValue(e.target.value)
    }
    function editNote() {
        setEditable(!editable)
        if(editable){
            const notes = JSON.parse(localStorage.getItem('notes'));
            notes[props.id].content = value;
            localStorage.setItem('notes',JSON.stringify([...notes]));
        }
    }
    function deleteNote(){
        const deletedNote = notes.find((_,index) => index === props.id)
        const newNotes = notes.filter((_,index) => {
            return index !== props.id;
        })
        localStorage.setItem('notes',JSON.stringify(newNotes))
        setEditable(false)
        setNotes(newNotes)
    }
        
    return (
    <div className={`w-50 h-50 md:w-60 md:h-60 rounded-2xl bg-${props.color}-400 p-2 flex flex-col items-center justify-between text-sm`}>
        <textarea
        defaultValue={value}
        disabled={!editable} 
        onChange={(e) => setContent(e)}
        className={`w-full h-full p-2 resize-none border-none outline-none notes-scroll rounded-2xl focus:outline-none ${editable ? `bg-gray-200` : ''}`}
        >
        </textarea>
        <div className='w-full flex justify-between items-center text-xs mt-2 p-2'>
            <div>
                {props.date}
            </div>
            <div className='flex gap-1'>
                {editable ?
                <button className='bg-black w-9 h-9 md:w-10 md:h-10 flex items-center justify-center rounded-full hover:bg-gray-700' onClick={() => deleteNote()}>
                    <FileMinus color="#ffffff" size={18}/> 
                </button>
                : <></>}
                <button className='bg-black w-9 h-9 md:w-10 md:h-10 flex items-center justify-center rounded-full hover:bg-gray-700' onClick={() => editNote()}>
                    {editable ? 
                    <PencilOff color="#ffffff" size={15}/>
                    : <Pencil color="#ffffff" size={15}/>}
                </button>
            </div>
        </div>
    </div>
  )
}

export default NoteBox