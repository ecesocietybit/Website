
import React from "react";
import styles from "./Form.module.css";
import { FaGithub } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { CgMail } from "react-icons/cg";
import { FaFacebook } from "react-icons/fa";
import { BsLinkedin } from "react-icons/bs";
import Link from "next/link";
import StyledText from "../text/StyledText";
import Form from "./Form";

const ICON_SIZE = 28;
const Contact = () => {
  
  return (
    <section id="contact" className={`${styles.contactform}`}>
      <div className={`${styles.contactLeft}`}>
        <div className={`${styles.contactLeftHead}`}>
          <h1 className={`${styles.contactHeading}  `}>
            <StyledText
              primary="#007cf0"
              secondary="#00dfd8"
              className="text-[36px] font-bold  mb-4"
            >
              Contact Us
            </StyledText>
          </h1>
          <h1 className={`pt-3 text-1xl text-white  `}>
            S-13 E.C.E Dept <br /> E.C.E Building B.I.T Sindri
          </h1>
        </div>
        <div className={`${styles.contactLeftMail}`}>
          <StyledText
            primary="#007cf0"
            secondary="#00dfd8"
            className="text-[36px] font-bold  mb-4"
          >
            Email:
          </StyledText>
          <a
            className={`${styles.link}  flex gap-2 justify-center sm:justify-start `}
            target="_blank"
            rel="noopener noreferrer"
            href={`mailto:ecesociety@bitsindri.ac.in`}
          >
            <CgMail
              size={ICON_SIZE}
              width={ICON_SIZE}
              className={`${styles.items} hover:scale-110 `}
            />
            <p className={"text-lg"}> ecesociety@bitsindri.ac.in</p>
          </a>
        </div>

        <div className={`${styles.contactLeftSocial}`}>
          <div className={`text-2xl`}>
            {" "}
            <StyledText
              primary="#007cf0"
              secondary="#00dfd8"
              className="text-[36px] font-bold mb-4"
            >
              Social Media:
            </StyledText>
          </div>

          <div className={`flex  gap-6 justify-center sm:justify-start `}>
            <Link
              href="https://instagram.com/ecesocietybits?igshid=MzRlODBiNWFlZA== "
              className={`${styles.link}`}
            >
              <AiFillInstagram
                size={ICON_SIZE}
                width={ICON_SIZE}
                className={`${styles.items} hover:scale-110`}
              />
            </Link>

            <Link
              href="https://www.linkedin.com/company/ece-society-bit-sindri/"
              className={`${styles.link}`}
            >
              <BsLinkedin
                size={ICON_SIZE}
                width={ICON_SIZE}
                className={`${styles.items} hover:scale-110`}
              />
            </Link>

            <Link
              href="https://github.com/ecesocietybit"
              className={`${styles.link}`}
            >
              <FaGithub
                size={ICON_SIZE}
                width={ICON_SIZE}
                className={`${styles.items}  hover:scale-110`}
              />
            </Link>
          </div>
        </div>
      </div>
      <div className={`${styles.contactRight}`}>
       <Form/>
      </div>
    </section>
  );
};

export default Contact;
