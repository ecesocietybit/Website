
import React from 'react'
import style from './Footer.module.css'
import {FaGithub} from 'react-icons/fa'
import {AiFillInstagram} from 'react-icons/ai'
import {CgMail} from 'react-icons/cg'
import {FaFacebook} from 'react-icons/fa'
import {BsLinkedin} from 'react-icons/bs'
import Link from 'next/link'

const Footer = () => {
  return (
    <div className={`${style.footer} p-8 flex  flex-col w-full h-10vh`}>
        <div className={`${style.icons} flex  justify-center   w-100% ` }>

     <Link href='https://instagram.com/ecesocietybits?igshid=MzRlODBiNWFlZA== ' className={ `${style.link}`}>
        <AiFillInstagram className={ `${style.items}`}/>
     </Link>

     <Link href='https://www.instagram.com'  className={ `${style.link}`}>
        <FaFacebook className={ `${style.items}`}/>
     </Link>

     <Link href='https://github.com/ecesocietybit'  className={ `${style.link}`}>
        <FaGithub className={ `${style.items}`}/>
     </Link>

     <Link href='ecesociety@bitsindri.ac.in'  className={ `${style.link}`}>
        <CgMail className={ `${style.items}`}/>
     </Link>

     <Link href='https://www.linkedin.com/company/ece-society-bit-sindri/'  className={ `${style.link}`}>
        <BsLinkedin className={ `${style.items}`}/>
     </Link>


      </div>

      <div className={`${style.line}`}></div>


      <div className={`${style.copyright}`}>
      <h6>
          © {new Date().getFullYear()} ECE Society BIT Sindri. All rights
          reserved.
        </h6>
      </div>
      
      
      

    </div>
  )
}

export default Footer
