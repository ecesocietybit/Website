import React from 'react'
import style from './Navbar.module.css'
import Link from 'next/link'

const Navbar = () => {
  return (
    <nav className={`${style.nav}`}>
        <ul className={`flex gap-2 `}>
            <li>Home</li>
            <li>About</li>
            <li><Link href='/teams'>Team</Link></li>
            <li>Event</li>
            <li>Contact</li>
        </ul>
      
    </nav>
  )
}

export default Navbar
