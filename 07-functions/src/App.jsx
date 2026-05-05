import React, { useState } from 'react'

function App() {
  
  const [obj,setObj] = useState({user: "Aditya", age: 20})
  function clicked(){
    obj.user = "Agnihotri"
    console.log(obj);
    setObj(obj)
  }

  return (
    <div>
        <h1>User is {obj.user}, {obj.age}</h1>
        <button onClick={clicked}>Click me</button>
    </div>
  )
}

export default App