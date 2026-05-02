import React from 'react'
import './NavBar.css'

function NavBar() {
  return (
    <div className='nav'>
        <h1>Aditya Agnihotri</h1>
        <div className='nav-right'>
            <a href='#'>About me</a>
            <a href='#'>Projects</a>
            <a href='#'>Skills</a>
            <a href='#'>Contant me</a>
        </div>
    </div>
  )
}

export default NavBar