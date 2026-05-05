import React, { useState } from 'react'
import { Pencil , PencilOff} from 'lucide-react'
import { Trash2 } from 'lucide-react';

function NoteBox(props) {
    const [editable,setEditable] = useState(false);
    const [value,setValue] = useState(props.content);
    
    function editNote() {
        setEditable(!editable)
    }
    function setContent(e) {
        setValue(e.target.value)
    }

  return (
    <div className={`w-60 h-60 rounded-2xl bg-${props.color}-400 p-2 flex flex-col items-center justify-between text-sm`}>
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
            <button className='bg-black w-10 h-10 flex items-center justify-center rounded-full hover:bg-gray-700' onClick={() => editNote()}>
                {editable ? 
                <PencilOff color="#ffffff" size={15}/>
                : <Pencil color="#ffffff" size={15}/>}
            </button>
        </div>
    </div>
  )
}

export default NoteBox