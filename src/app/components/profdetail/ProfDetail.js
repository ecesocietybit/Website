import Image from 'next/image';
import React from 'react'
import style from './ProfDetail.module.css'

const ProfDetail = ({imgsrc,name,pos,words}) => {
    console.log(pos);
  return (
    <div className={`${style.header} flex `}>
      
    <div className={`${style.left} flex  flex-col`}>
     <div className={`${style.container} `}>
     <Image className={`${style.img} `}
       height={600}
       width={600}
        alt={name} 
        src={imgsrc}
      /> 
     </div>
      <p>{pos}</p>
    </div>
      
      <div className={`${style.left} flex  flex-col`}  >
      <p className={`${style.name} `}>{name}</p>
      <div className={`${style.word} `}>{words}</div>
      </div>
    </div>
  )
}

export default ProfDetail
