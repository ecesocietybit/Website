import React from 'react'
import style from './LandingAbout.module.css'
const LandingAbout = () => {
  return (
    <div>
        <section className={`p-4 pt-28 md:pt-16 sm:pt-12  min-h-screen w-full bg-[#0D1116] text-white flex flex-col justify-center `}>
      <div className={`${style.about} mx-auto mt-12 mb-6 sm:mt-8 sm:mb-4 w-2/3`}>
        <h1 className={`text-5xl font-semibold text-center`}>About ECE Society</h1>

        <p className='text-lg mt-5 font-normal pt-2 '>
        The ECE Society is the official society of the Department of Electronics and Communication Engineering, BIT Sindri. This society aims to promote Scientific thinking among the students and provide a holistic environment for students where they can freely explore the latest cutting-edge technologies in the field of electronics and Software solutions to real-life problems
          </p>
      </div>
      </section>
    </div>
  )
}

export default LandingAbout
