import React from 'react'
import style from './Navbar.module.css'

const Navbar = () => {
  return (
    <nav className='flex justify-between'>
        <div className={`${style.logo}`}>

        </div>
        <ul className='flex gap-4'>
            <li>Home</li>
            <li>Events</li>
            <li>About Us</li>
            <li>Team</li>
            <li>Alumni</li>
            <li>FAQ</li>
        </ul>
      
    </nav>
  )
}

export default Navbar
