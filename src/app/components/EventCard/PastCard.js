import React from 'react'
import Styles from "./PastCard.module.css";
import Image from 'next/image';

const PastCard = ({title,content,imgSrc,lazyImgSrc,link}) => {
    const bg='/pastevent/event.jpg'
    link=link.split('.')[0];
    link=link+'.pdf';
    // console.log(link);
  return (
    <div className={Styles.card}>
      <Image
            className={`h-[101.75px] w-[101.75px] mx-auto object-cover object-top`}
            fill
            sizes='(max-width:768px) 100vw,700px'
            src={imgSrc}
            placeholder='blur'
            blurDataURL={lazyImgSrc}
            alt={title}
            />
    <div className={Styles.cardBody}>
      <h2 className={Styles.cardTitle}>{title}</h2>
      {/* <div className={Styles.underline}></div> */}
      <p>{content} </p>
      <a href={link} target="_blank" rel="noopener noreferrer" className={Styles.button}>
        Know More
      </a>
    </div>
  </div>
  )
}

export default PastCard
