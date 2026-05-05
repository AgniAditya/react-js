import React, { useState } from 'react'

function App() {

  const [titile,setTitle] = useState('');

  const onFormSubmit = (e) => {
    e.preventDefault();
    setTitle('');
    console.log("submited...")
  }

  const onFormInput = (e) => {
    console.log(e.target.value);
    setTitle(e.target.value)
  }


  return (
    <div>
      <form onSubmit={(e) => onFormSubmit(e)}>
        <input type="text" value={titile} onChange={(e) => onFormInput(e)}/>
        <button>submit</button> 
      </form>
    </div>
  )
}

export default App