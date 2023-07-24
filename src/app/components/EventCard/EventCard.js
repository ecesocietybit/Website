import React from "react";
import Countdown from "../counter/CountDown";
import styles from "./eventCard.module.css";
import Image from "next/image";

const EventCard = () => {
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
          <h3>Seminar on GATE Talks</h3></div>
          <div className={styles.eventPara}>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusamus quam quidem id aspernatur praesentium earum dolore omnis ipsa. Minus porro id ipsa alias eius officia ab a sed voluptates perferendis. Soluta, neque.</p>
          </div>
          <div className={styles.eventBottom}>
            <div className={styles.eventButton}>
              <button className={styles.btn}>
              Read More
              </button>
            </div>
            <div className={styles.counter}>
            <Countdown/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventCard;
