import React from 'react'
import Image from 'next/image'
import style from './TeamCard.module.css'
import StyledText from '../text/StyledText'

const TeamCard = ({name, pos,imgSrc,socials}) => {
  return (
    <div className={`border-2 border-white flex flex-col justify-center items-center w-[270px] h-[300px] text-[#fff] ${style.card}`}>
      <div className={`${style.imgBg} h-[150px] w-[150px]`}>
        <div>
            <Image
            className={`h-[101.75px] w-[101.75px] mx-auto object-cover object-top ${style.img}`}
            fill="true" 
            src={imgSrc}
            alt={name}
            />
        </div>
      </div>
      <div className='text-center'>
        <h2 className='text-xl font-medium mt-2 '>{name}</h2>
        <p>{pos}</p>
      </div>
      <div className={`${style.socials}`}>
      </div>
    </div>
  )
}

export default TeamCard
