"use client";

import React from "react";
import Image from "next/image";
import styles from "./Navbar.module.css";
import Link from "next/link";
import Logo from "../../../../public/images/logo.png";

const Navbar = () => {
  return (
    <nav className={`${styles.navbar}`}>
      <div className={`${styles.navbarContainer}`}>
        <Image className={`${styles.navbarLogo}`} src={Logo} alt="Logo" />
        ECE SOCIETY
      </div>
      <ul className={`${styles.navbarMenu}`}>
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/blogs">Blogs</Link>
        </li>
        <li>
          <Link href="/events">Events</Link>
        </li>
        <li>
          <Link href="/teams">Members</Link>
        </li>
        <li>
          <Link href="/about">About</Link>
        </li>
      </ul>
      <div className={`${styles.navbarContact}`}>
        <a href="#" className={`${styles.contactButton}`}>
          Contact Us
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
