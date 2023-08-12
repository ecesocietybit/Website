import React from "react";
import styles from "./Gallery.module.css";
import { GalleryData } from "@/lib/data/GalleryData";
import GalleryCard from "./GalleryCard";
const Gallery = () => {
    console.log(GalleryData)
  return (
    <div className={styles.gallery}>
      
        {GalleryData.map((item) => {
            return(
          <GalleryCard key={item.id} title={item.title} img={item.imgSrc} />
          )
        })}
      </div>
  );
};

export default Gallery;
