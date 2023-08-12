"use client";
import Image from "next/image";
import React, { useState } from "react";
import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import style from "./ProfDetail.module.css";
import StyledText from "../text/StyledText";

const ProfDetail = ({imgsrc,lazyImgSrc,name,pos,words,dept,socials}) => {
  const [showFullText, setShowFullText] = useState(false);
  let maxLength = 250;
  const ICON_SIZE = 28;

  const handleReadMoreClick = () => {
    setShowFullText(!showFullText);
  };

  return (
    <div className={`${style.header} flex  text-[#fff] py-8 px-4 `}>
      
    <div className={`${style.left} flex  flex-col `}>
     <div className={`${style.container} `}>
     <Image className={`${style.img} `}
        fill
        alt={name} 
        src={imgsrc}
        blurDataURL={lazyImgSrc}
        placeholder='blur'
      /> 
     </div>
     <div className={`${style.leftDown}`}>
     <div className={`flex flex-col `}>
     <p className={`${style.pos} `}>{pos}</p>
     <p className={`${style.dept} `}>{dept}</p>
     </div>
      <div className={`${style.socials}`}>
        {
          socials.github||socials.linkedin||socials.email||socials.insta ? (
            <>
            {socials.github && (
              <a
                target="_blank"
                rel="noopener noreferrer"
                href={`https://github.com/${socials.github}/`}
              >
                <FaGithub size={ICON_SIZE} width={ICON_SIZE} className={`hover:scale-110 `} />
              </a>
            )}

            {socials.linkedin && (
              <a
                target="_blank"
                rel="noopener noreferrer"
                href={`https://www.linkedin.com/in/${socials.linkedin}/`}
              >
                <FaLinkedin size={ICON_SIZE} className={`hover:scale-110 `} />
              </a>
            )}
            {socials.insta && (
              <a
                target="_blank"
                rel="noopener noreferrer"
                href={`https://instagram.com/${socials.insta}/`}
              >
                <AiFillInstagram size={ICON_SIZE} className={`hover:scale-110 `} />
              </a>
            )}
            {socials.email && (
              <a
                target="_blank"
                rel="noopener noreferrer"
                href={`mailto:${socials.email}`}
              >
                <FaEnvelope size={ICON_SIZE}  className={`hover:scale-110 `}/>
              </a>
            )}
          </>
          ) :(
            <span>
            </span>
          )
        }
      </div>
     </div>
 
    </div>
      
      <div className={`${style.right} flex  flex-col`}  >
      
        {/* <StyledText
          primary="#007cf0"
          secondary="#00dfd8"
          className="text-[36px] font-bold flex flex-col items-center mb-4"
        >
          {name}
        </StyledText> */}
        <h1 className="self-start text-[36px] font-bold">{name}</h1>

        {/* <div className={`${style.subsidary} `}>

      <div className={`${style.subsidary} `}>
        <p className={`${style.dept} `}> {dept}</p>
        <p className={`${style.college} `}>{college}</p>
      </div> */}

        <div className={`${style.word} `}>
          {showFullText ? (
            <div className="flex flex-col items-center justify-center gap-4">
              <p>{words}</p>
              <button
                onClick={handleReadMoreClick}
                className={`${style.readbtn} `}
              >
                show less
              </button>
            </div>
          ) : (
            <div className="flex flex-col items-center justify-center gap-4">
              <p>
                {words.length > maxLength
                  ? `${words.slice(0, maxLength)}...`
                  : words}
              </p>
              <button
                onClick={handleReadMoreClick}
                className={`${style.readbtn} `}
              >
                Read More
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProfDetail;
