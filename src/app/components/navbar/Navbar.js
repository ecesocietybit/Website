"use client";
import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "./Navbar.module.css";

import { RiMenu3Line } from "react-icons/ri";
import { AiOutlineClose } from "react-icons/ai";
import Logo from "../../../../public/assets/logo.png";
const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef(null);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleClickOutside = (event) => {
    if (menuRef.current && !menuRef.current.contains(event.target)) {
      setIsMenuOpen(false);
    }
  };

  useEffect(()=>{

  },[isMenuOpen])

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <nav className="flex justify-between items-center p-4 bg-[#0D1116]">
      <div className="flex items-center justify-between w-full">
        <div className="text-white font-regular text-base mr-4 flex items-center">
          <Image className={"w-[65px] mr-2"} src={Logo} alt="Logo" />
          ECE SOCIETY
        </div>
        <div className="flex items-center">
        <div className="hidden md:flex space-x-4">
          {" "}
          <Link href="/" className="text-white px-4">
            Home
          </Link>
          <Link href="/about" className="text-white px-4">
            About
          </Link>
          <Link href="/events" className="text-white px-4">
            Events
          </Link>
          {/* <Link href="/articles" className="text-white px-4">
            Articles
          </Link> */}
          <Link href="/teams" className="text-white px-4">
            Members
          </Link>
        </div>
        <Link href='/#contact' className={`hidden md:flex space-x-4`}>
          <span className={`${styles.contactButton}`}>
            Contact Us
          </span>
        </Link>
        </div>
      </div>

      {/* Hamburger menu for smaller devices */}
      <div className="md:hidden flex  items-center">
        <button className="text-white pr-4" onClick={toggleMenu}>
          <RiMenu3Line size={25} />
        </button>
        {
          isMenuOpen && (
            <button className="text-white pr-4 z-50" onClick={toggleMenu}>
          <AiOutlineClose size={25} />
        </button>
          )
        }
      </div>
      {/* Drawer for smaller devices */}
      {isMenuOpen && (
        <div
          ref={menuRef}
          className="md:hidden z-10  mx-auto pt-8 absolute top-0 right-0 left-0 p-8 bg-gray-900 "
        >
          <div className="flex flex-col space-y-2 text-lg">
            <div className="flex flex-col space-y-2">
              <Link href="/" onClick={toggleMenu} className="text-white">
                Home
              </Link>
              <Link href="/about" onClick={toggleMenu} className="text-white">
                About
              </Link>
              <Link href="/events" onClick={toggleMenu} className="text-white">
                Events
              </Link>
              {/* <Link href="/articles" onClick={toggleMenu} className="text-white">
                Articles
              </Link> */}
              <Link href="/teams" onClick={toggleMenu} className="text-white">
                Members
              </Link>
            </div>
            <Link href='/#contact' onClick={toggleMenu} className="text-white">

            <span className={`${styles.contactButton} mt-4`}>
            Contact Us
          </span>
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
