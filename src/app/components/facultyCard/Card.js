import Image from 'next/image'
import React from 'react'

const Card = ({name,desg,imgSrc}) => {
  return (
    <div className='flex flex-row  w-4/5 '>
        <div className='mx-auto'>
        <Image 
        width={400}
        height={400}
        className='w-2/3 h-2/3'
        alt={name} 
        src={imgSrc}
       /> 
        </div>
        <div className='flex flex-col justify-center'>
          <h2>{name}</h2>
          <p>{desg}</p>
          <div>{}</div>
        </div>
    </div>
  )
}

export default Card
