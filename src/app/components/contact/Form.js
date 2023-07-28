"use client"
import React, { useState } from "react";
import styles from "./Form.module.css";
import { FaGithub } from 'react-icons/fa'
import { AiFillInstagram } from 'react-icons/ai'
import { CgMail } from 'react-icons/cg'
import { FaFacebook } from 'react-icons/fa'
import { BsLinkedin } from 'react-icons/bs'
import Link from 'next/link'
import StyledText from '../text/StyledText'

const ICON_SIZE = 28;
const Form = () => {
  const [name, setname] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [comments, setcomments] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    // Perform account creation logic here
    console.log("Name:", name);
    console.log("Email:", email);
    console.log("Phone:", phone);
    console.log("Comments:", comments);


    // Reset form fields
    setname("");
    setEmail("");
    setPhone("");
    setcomments("");
  };
  return (
    <section id="contact" className={`${styles.contactform}`}>
       <div  className={`${styles.contactLeft}`}>
        <div className={`${styles.contactLeftHead}`}>
             <h1 className={`${styles.contactHeading}  `}>
             <StyledText
          primary="#007cf0"
          secondary="#00dfd8"
          className=" font-bold  "
        >
         Contact Us
        </StyledText>
             </h1>
             <h1 className={`pt-3 text-1xl text-white text-left `}>S-13 E.C.E Dept <br /> E.C.E Building B.I.T Sindri</h1>
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
                className={`${styles.link}  flex flex-col`}
                target="_blank"
                rel="noopener noreferrer"
                href={`mailto:ecesociety@bitsindri.ac.in`}
              >
                  <CgMail size={ICON_SIZE} width={ICON_SIZE} className={`${styles.items} hover:scale-110`} />
                  <p className={'text-xl'}>    ecesociety@bitsindri.ac.in</p>
                  </a>
        </div>

        <div className={`${styles.contactLeftSocial}`}>
           <div className={`text-2xl text-left`}>      <StyledText
          primary="#007cf0"
          secondary="#00dfd8"
          className="text-[36px] font-bold mb-4"
        >
          Social Media:
        </StyledText></div>

        <div className={`flex  gap-6 `}>

            <Link href='https://instagram.com/ecesocietybits?igshid=MzRlODBiNWFlZA== ' className={`${styles.link}`}>
            <AiFillInstagram size={ICON_SIZE} width={ICON_SIZE} className={`${styles.items} hover:scale-110`} />
            </Link>

            <Link href='https://www.linkedin.com/company/ece-society-bit-sindri/' className={`${styles.link}`}>
            <BsLinkedin size={ICON_SIZE} width={ICON_SIZE} className={`${styles.items} hover:scale-110`} />
            </Link>

            <Link href='https://github.com/ecesocietybit' className={`${styles.link}`}>
              <FaGithub size={ICON_SIZE} width={ICON_SIZE} className={`${styles.items}  hover:scale-110`} />
              </Link>
              </div>
           
        </div>

        </div>
        <div className={`${styles.contactRight}`}>
        <form className={`${styles.formBody}`} onSubmit={handleSubmit}>
              <div className={`${styles.nameBox}`}>
                <label className={`${styles.labels}`} htmlFor="name">Name</label>
                <input className={`${styles.inputs}`} type="text" id="name" name="name" value={name} placeholder="Enter your name" onChange={(e) => { setname(e.target.value) }} />
              </div>
              <div className={`${styles.details}`}>
                <div className="detail-email flex flex-col">
                  <label className={`${styles.labels}`} htmlFor="email">Email</label>
                  <input className={`${styles.inputs}`} type="email" id="email" name="email" value={email} placeholder="Enter your E-mail" onChange={(e) => { setEmail(e.target.value) }} />
                </div>
                <div className="detail-phone flex flex-col ">
                  <label className={`${styles.labels}`} htmlFor="email">Phone Number</label>
                  <input className={`${styles.inputs}`} type="text" id="phone" name="phone" value={phone} placeholder="Enter your phone number" onChange={(e) => { setPhone(e.target.value) }} />
                </div>
              </div>
              <div className="flex flex-col" >
                <label className={`${styles.labels}`} htmlFor="message">Message</label>
                <textarea className={`${styles.text}`} id="message" name="message" value={comments} placeholder="Write a message here" onChange={(e) => { setcomments(e.target.value) }}></textarea>
              </div>
              <button className={`${styles.PostComments}`} type="submit">Send Mail</button>
            </form>
        </div >
        
       
    </section>
//     <section className={`${styles.contactform}`} id="contact">
//       <div className={`${styles.contactFormWrapper}`}>
//         <div className={`${styles.contactHeader} flex gap-3`}>
//           <div className={`${styles.contactLeft} flex flex-col`}>
//             <div className={`${styles.contactFormTitle} flex flex-col `}>
//               <h1 className={`${styles.formHeading}  text-6xl`}>Contact Us</h1>
//               <h1 className={`pt-3 text-1xl text-white text-left `}>s-13 E.C.E Dept <br /> E.C.E Building B.I.T Sindri</h1>
//             </div>
//             <div className={`${styles.icons} flex  flex-col   w-100% `}>
//               <div className={`${styles.iconsDivide} flex flex-col  `}>
//                 <p className={`text-2xl text-left`}>EMAIL:</p>
//                 <Link href='ecesociety@bitsindri.ac.in' className={`${styles.link}  flex`}>
//                   <CgMail size={ICON_SIZE} width={ICON_SIZE} className={`${styles.items}`} />
//                   <p>ecesociety@bitsindri.ac.in</p>
//                 </Link>
//               </div>

//               <div className={`${styles.iconsDown} flex flex-col gap-2.4`}>
//                 <p className={`text-2xl text-left`}>Social Media:</p>
//                 <Link href='https://instagram.com/ecesocietybits?igshid=MzRlODBiNWFlZA== ' className={`${styles.link}`}>
//                   <AiFillInstagram size={ICON_SIZE} width={ICON_SIZE} className={`${styles.items}`} />
//                 </Link>

//                 {/* <Link href='https://www.instagram.com'  className={ `${style.link}`}>
//    <FaFacebook className={ `${style.items}`}/>
// </Link> */}

//                 <Link href='https://github.com/ecesocietybit' className={`${styles.link}`}>
//                   <FaGithub size={ICON_SIZE} width={ICON_SIZE} className={`${styles.items} `} />
//                 </Link>


//                 <Link href='https://www.linkedin.com/company/ece-society-bit-sindri/' className={`${styles.link}`}>
//                   <BsLinkedin size={ICON_SIZE} width={ICON_SIZE} className={`${styles.items}`} />
//                 </Link>
//               </div>

//             </div>
//           </div>
//           <div className={`${styles.formBox}`}>
            // <form className={`${styles.formBody}`} onSubmit={handleSubmit}>
            //   <div className={`${styles.nameBox}`}>
            //     <label className={`${styles.labels}`} htmlFor="name">Name</label>
            //     <input className={`${styles.inputs}`} type="text" id="name" name="name" value={name} placeholder="Enter your name" onChange={(e) => { setname(e.target.value) }} />
            //   </div>
            //   <div className={`${styles.details}`}>
            //     <div className="detail-email flex flex-col">
            //       <label className={`${styles.labels}`} htmlFor="email">Email</label>
            //       <input className={`${styles.inputs}`} type="email" id="email" name="email" value={email} placeholder="Enter your E-mail" onChange={(e) => { setEmail(e.target.value) }} />
            //     </div>
            //     <div className="detail-phone flex flex-col ">
            //       <label className={`${styles.labels}`} htmlFor="email">Phone Number</label>
            //       <input className={`${styles.inputs}`} type="text" id="phone" name="phone" value={phone} placeholder="Enter your phone number" onChange={(e) => { setPhone(e.target.value) }} />
            //     </div>
            //   </div>
            //   <div className="flex flex-col" >
            //     <label className={`${styles.labels}`} htmlFor="message">Message</label>
            //     <textarea className={`${styles.text}`} id="message" name="message" value={comments} placeholder="Write a message here" onChange={(e) => { setcomments(e.target.value) }}></textarea>
            //   </div>
            //   <button className={`${styles.PostComments}`} type="submit">Post Comments</button>
            // </form>
//           </div>
//         </div>
//       </div>
//     </section>
  );
};

export default Form;
