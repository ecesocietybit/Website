import React from 'react'
import style from './About.module.css'
import Gallery from '../Gallery/Gallery'
import StyledText from '../text/StyledText'
const About = () => {
  return (
    <section className={`p-4 pt-28 md:pt-16 sm:pt-12  min-h-screen w-full bg-[#0D1116] text-white flex flex-col justify-center `}>
      <div className={`${style.about} mx-auto mt-12 mb-6 sm:mt-8 sm:mb-4 w-2/3`}>
        <h1 className={`text-3xl font-semibold text-center`}>About ECE Society</h1>

        <p className='text-lg mt-5 font-normal '>
          The ECE Society is the official society of the Department of Electronics and Communication Engineering, BIT Sindri. This society aims to promote Scientific thinking among the students and provide a holistic environment where they can freely explore the latest cutting-edge technologies in the field of electronics and Software solutions to real-life problems.
          Electronics and communication engineering society organizes numerous activities such as tech talks, innovation and theory (seminars), quizzes, problem-solving, graphic designing, and other technical events to enable participants gain new information and passion for the competitive drive.
          It gives its participants the luxury of portraying themselves as prominent technocrats and corporative individuals. It is accomplished through exposure that comes with innovation and creativity, event management, client interaction, technical skills such as poster creation, model making, graphic design, and working in diverse environments.
          The ECE Society organizes various webinars, seminars, and Alumni Talks where students learn from the experience of our distinguished Alumni working in diverse fields, ranging from Indian Administration to tech giants like amazon, google, and many more.
          </p>
      </div>
      <StyledText
      primary="#007cf0"
      secondary="#00dfd8"
      className="text-[36px] font-bold flex flex-col items-center  mb-4"
     >
   Glimpses
    </StyledText>

      <Gallery/>

      <div className={`${style.about} mx-auto mt-12 mb-6 sm:mt-8 sm:mb-4 w-2/3`}>
        <h1 className={`text-3xl font-semibold text-center`}>Aims and Objectives</h1>

        <p className='text-lg mt-5 font-normal '>
          The ECE Society is the official society of the Department of Electronics and Communication Engineering, BIT Sindri. This society aims to promote Scientific thinking among the students and provide a holistic environment where they can fre
          The ECE Society organizes various webinars, seminars, and Alumni Talks where students learn from the experience of our distinguished Alumni working in diverse fields, ranging from Indian Administration to tech giants like amazon, google, and many more.
          </p>
      </div>
    </section>
    
  )
}

export default About