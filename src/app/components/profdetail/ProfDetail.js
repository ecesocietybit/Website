"use client"
import Image from 'next/image';
import React, { useState } from 'react'
import { FaEnvelope, FaGithub, FaLinkedin } from 'react-icons/fa';
import {AiFillInstagram} from 'react-icons/ai'
import style from './ProfDetail.module.css'
import StyledText from '../text/StyledText'

const ProfDetail = ({imgsrc,name,pos,words,college,dept,socials}) => {
  const [showFullText, setShowFullText] = useState(false);
  let maxLength=250;
  const ICON_SIZE = 28;

  const handleReadMoreClick = () => {
    setShowFullText(!showFullText);
  };

    console.log(pos);
  return (
    <div className={`${style.header} flex  text-[#fff] `}>
      
    <div className={`${style.left} flex  flex-col`}>
     <div className={`${style.container} `}>
     <Image className={`${style.img} `}
       height={100}
       width={100}
        alt={name} 
        src={imgsrc}
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
                <FaGithub size={ICON_SIZE} width={ICON_SIZE} />
              </a>
            )}

            {socials.linkedin && (
              <a
                target="_blank"
                rel="noopener noreferrer"
                href={`https://www.linkedin.com/in/${socials.linkedin}/`}
              >
                <FaLinkedin size={ICON_SIZE} />
              </a>
            )}
            {socials.insta && (
              <a
                target="_blank"
                rel="noopener noreferrer"
                href={`https://instagram.com/${socials.insta}/`}
              >
                <AiFillInstagram size={ICON_SIZE} />
              </a>
            )}
            {socials.email && (
              <a
                target="_blank"
                rel="noopener noreferrer"
                href={`mailto:${socials.email}`}
              >
                <FaEnvelope size={ICON_SIZE} />
              </a>
            )}
          </>
          ) :(
            <span>
              Socially Invisible
            </span>
          )
        }
      </div>
     </div>
 
    </div>
      
      <div className={`${style.right} flex  flex-col`}  >
      
        <StyledText
         primary="#007cf0"
         secondary="#00dfd8"
         className="text-[36px] font-bold flex flex-col items-center mb-4"
        >
        {name}
        </StyledText>
      

      {/* <div className={`${style.subsidary} `}>

      <div className={`${style.subsidary} `}>
        <p className={`${style.dept} `}> {dept}</p>
        <p className={`${style.college} `}>{college}</p>
      </div> */}

      <div className={`${style.word} `}>
        {showFullText ? (
          <div>
        <p>{words}</p>
        <button onClick={handleReadMoreClick} className={`${style.readbtn} `}>show less</button>
          </div>
        
      ) : (
        <div>

        <p>
          {words.length > maxLength ? `${words.slice(0, maxLength)}...` : words}
          </p>
          <button onClick={handleReadMoreClick} className={`${style.readbtn} `}>Read More</button>
        </div>
        
      )}
      </div>

      </div>
    </div>
  )
}

export default ProfDetail
