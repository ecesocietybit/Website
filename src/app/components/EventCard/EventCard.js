import React from "react";
import Countdown from "../counter/CountDown";
import styles from "./eventCard.module.css";
import Image from "next/image";

const EventCard = ({title,content,isUpcoming}) => {
  return (
    <div className={styles.eventBanner}>
      <div className={styles.eventWrapper}>
        <div className={styles.imgBanner}>
          <Image 
            className={styles.img} 
            width={350} height={350} 
            alt="webinar"  
            src="/images/webinar1.png"/>
        </div>
        <div className={styles.eventDetails}>
          <div className={styles.eventHeading}>
          <h3>{title}</h3></div>
          <div className={styles.eventPara}>
          <p>{content}</p>
          </div>
          <div className={styles.eventBottom}>
            <div className={styles.eventButton}>
              <button className={styles.btn}>
              Read More
              </button>
            </div>
            {
              isUpcoming &&(

                <div className={styles.counter}>
                <Countdown/>
                </div>
              )
            }
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventCard;
