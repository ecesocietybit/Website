"use client";
import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "./Navbar.module.css";

import { RiMenu3Line } from "react-icons/ri";
import Logo from "../../../../public/images/logo.png";
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
        <div className="hidden md:flex space-x-4">
          {" "}
          <a href="#" className="text-white px-4">
            Home
          </a>
          <a href="#" className="text-white px-4">
            Blogs
          </a>
          <a href="#" className="text-white px-4">
            Events
          </a>
          <a href="#" className="text-white px-4">
            Members
          </a>
          <a href="#" className="text-white px-4">
            About
          </a>
        </div>

        <div className={`hidden md:flex space-x-4 ${styles.navbarContact}`}>
          <a href="#" className={`${styles.contactButton}`}>
            Contact Us
          </a>
        </div>
      </div>

      {/* Hamburger menu for smaller devices */}
      <div className="md:hidden flex items-center">
        <button className="text-white" onClick={toggleMenu}>
          <RiMenu3Line size={25} />
        </button>
      </div>
      {/* Drawer for smaller devices */}
      {isMenuOpen && (
        <div
          ref={menuRef}
          className="md:hidden absolute top-0 right-0 left-0 p-4 bg-blue-500 "
        >
          <div className="flex flex-col space-y-2">
            <div className="flex flex-col space-y-2">
              <a href="#" className="text-white">
                Home
              </a>
              <a href="#" className="text-white">
                Blogs
              </a>
              <a href="#" className="text-white">
                Events
              </a>
              <a href="#" className="text-white">
                Members
              </a>
              <a href="#" className="text-white">
                About
              </a>
            </div>
            <button className="text-white">Contact Us</button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
