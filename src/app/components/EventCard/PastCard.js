import React from 'react'
import Styles from "./PastCard.module.css";

const PastCard = ({title,content,imgSrc,link}) => {
    const bg='/pastevent/event.jpg'
  return (
    <div style={{ backgroundImage: `url(${imgSrc})` }} className={Styles.card}>
    <div className={Styles.cardBody}>
      <h2 className={Styles.cardTitle}>{title}</h2>
      <div className={Styles.underline}></div>
      <p>{content} </p>
      <a href={link} className={Styles.button}>
        Know More
      </a>
    </div>
  </div>
  )
}

export default PastCard
