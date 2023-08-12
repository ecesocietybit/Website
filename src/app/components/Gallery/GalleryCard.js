import React from 'react'
import styles from "./galleryCard.module.css"
import Image from 'next/image'
const GalleryCard = (props) => {
  return (
    <div className={styles.galleryCard}>
      <div className={styles.galleryCardBanner}>
        <Image 
        src={props.img}
        fill
        className={styles.galleryImg}
        />
      </div>
    </div>
  )
}

export default GalleryCard
