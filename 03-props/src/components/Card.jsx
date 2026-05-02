import React from 'react'
import './Card.css'

function Card(props) {
  return (
    <div className='card'>
        <h1>{props.name}</h1>
        <h2>mail: {[props.mail]}</h2>
        <button>Follow</button>
    </div>
  )
}

export default Card