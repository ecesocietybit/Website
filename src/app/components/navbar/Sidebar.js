import React from 'react'
import style from './Sidebar.module.css'
import Link from 'next/link'
import { AiFillInstagram } from 'react-icons/ai'
import { FaEnvelope, FaFacebook, FaGithub } from 'react-icons/fa'
import { BsLinkedin } from 'react-icons/bs'
const ICON_SIZE=32

const Sidebar = () => {
  return (
    <div className={`${style.icons} flex flex-col fixed right-0 min-h-screen items-end gap-5 bottom-0 justify-center m-4 w-100% ` }>

     <Link href='https://instagram.com/ecesocietybits?igshid=MzRlODBiNWFlZA== ' className={ `${style.link}`}>
        <AiFillInstagram size={ICON_SIZE} className={`hover:fill-[#00dfd8]`}/>
     </Link>


     <Link href='https://github.com/ecesocietybit'  className={ `${style.link}`}>
        <FaGithub size={ICON_SIZE} className={`hover:fill-[#00dfd8]`}/>
     </Link>

     <Link href='ecesociety@bitsindri.ac.in'  className={ `${style.link}`}>
        <FaEnvelope size={ICON_SIZE} className={`hover:fill-[#00dfd8]`}/>
     </Link>

     <Link href='https://www.linkedin.com/company/ece-society-bit-sindri/'  className={ `${style.link}`}>
        <BsLinkedin size={ICON_SIZE} className={` hover:fill-[#00dfd8]`}/>
     </Link>
      </div>
  )
}

export default Sidebar
