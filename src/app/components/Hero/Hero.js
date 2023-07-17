"use client";
import React from "react";
import Image from "next/image";
import styles from "./Hero.module.css";
import earth from "../../../../public/images/earth.svg";
import satellite from "../../../../public/images/satellite.svg";

function HeroSection() {
  return (
    <div className={`${styles.heroSection}`}>
      <Image src={earth} alt="earth" className={`${styles.heroimgearth}`} />
      <Image
        src={satellite}
        alt="sa"
        className={`${styles.heroimgsatellite}`}
      />
      <h1 className={`${styles.heading}`} style={{ marginBottom: "-16px" }}>
        Electronics & Communication
      </h1>
      <h1 className={`${styles.heading}`}> Engineering Society</h1>

      <p className={`${styles.subtext}`}>
        We are a team , an organisation, a family, a society.
      </p>
    </div>
  );
}

export default HeroSection;
