"use client"
import React, { useState } from "react";
import styles from "./Form.module.css";
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
    <section className={`${styles.contactform}`}>
      <div className={`${styles.contactFormWrapper}`}>
        <div className={`${styles.contactFormTitle}`}>
          <h1 className={`${styles.formHeading}`}>Contact Us</h1>
        </div>
        <div className={`${styles.formBox}`}>
          <form className={`${styles.formBody}`} onSubmit={handleSubmit}>
            <div className={`${styles.nameBox}`}>
              <label className={`${styles.labels}`}htmlFor="name">Name</label>
              <input className={`${styles.inputs}`} type="text" id="name" name="name" value={name} placeholder="Enter your name" onChange={(e)=>{setname(e.target.value)}}/>
            </div>
            <div className={`${styles.details}`}>
              <div className="detail-email flex flex-col">
                <label className={`${styles.labels}`} htmlFor="email">Email</label>
                <input className={`${styles.inputs}`} type="email" id="email" name="email" value={email} placeholder="Enter your E-mail" onChange={(e)=>{setEmail(e.target.value)}} />
              </div>
              <div className="detail-phone flex flex-col ">
                <label className={`${styles.labels}`} htmlFor="email">Phone Number</label>
                <input  className={`${styles.inputs}`} type="text" id="phone" name="phone" value={phone} placeholder="Enter your phone number" onChange={(e)=>{setPhone(e.target.value)}}/>
              </div>
            </div>
            <div className="flex flex-col" >
              <label className={`${styles.labels}`} htmlFor="message">Message</label>
              <textarea  className={`${styles.text}`} id="message" name="message" value={comments} placeholder="Write a message here" onChange={(e)=>{setcomments(e.target.value)}}></textarea>
            </div>
            <button className={`${styles.PostComments}`} type="submit">Post Comments</button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Form;
