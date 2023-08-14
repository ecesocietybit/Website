import Image from 'next/image'
import React from 'react'
import style from './Card.module.css'

const Card = ({name,desg,imgSrc,email,mobile}) => {
  return (
    <div className={`${style.infocardContainer} px-4 justify-evenly`}>
       <div className='flex items-center'>
       <div className={`${style.imgBg} h-[150px] w-[150px] `}>
        <div >
            <Image
            className={`h-[101.75px] w-[101.75px] mx-auto object-cover object-top ${style.img}`}
            fill
            sizes='(max-width:768px) 100vw,700px'
            src={imgSrc}
            alt={name}
            />
        </div>
      </div>
       </div>
        {/* <div className={style.main}>
        <Image 
        
        height={300}
        width={200}
        className={style.image} 
        alt={name} 
        src={imgSrc}
       /> 
        </div> */}
        <div className={style.text}>
          <h2 className={style.name}> <p className={style.detail}></p>{name}</h2>
          <h4 className={style.desg}>{desg}</h4>
          <a className={style.mail} href= "mailto:{email}"> <p className={style.detail}>Email:</p>{email}</a>
          <div className={style.mobile}> <p className={style.detail}>Mobile:</p>{mobile}</div>
          <div className={style.link}> <a href="" >Download</a></div>
        </div>
    </div>
  )
}

export default Card
