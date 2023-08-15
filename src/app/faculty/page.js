import React from 'react'
import Card from '../components/facultyCard/Card'
import Head from 'next/head'
import { FacultyData } from '@/lib/data/FacultyData';
import style from '../components/facultyCard/Card.module.css'
import StyledText from '../components/text/StyledText';

export const metadata = {
    title: "Our Faculty",
    description: "",
  };

const page = () => {
  return (
    <>
    <Head>
      <title>Our Faculty</title>
    </Head>
    <div className='min-h-screen w-4/5 flex flex-col mx-auto mb-4'>
    <StyledText
      primary="#FF4D4D"
      secondary="#F9CB28"
      className="text-[36px] font-bold flex flex-col items-center mb-4"
      >
        Our Faculty
      </StyledText>
      <div className={style.page}>
      {
        FacultyData.map((items)=>{
          return(
              <div className={style.card} key={items.imgSrc}>
              <Card
              name={items.name}
              desg={items.desg}
               imgSrc={"/prof/"+items.imgSrc}
               pdfSrc={"/prof/biodata/"+items.imgSrc.replace('.png','.pdf')}
               key={items.name}
               email={items.email}
               mobile={items.mobile}
            />
              </div>
          )
        })
      }
      </div>
    </div>
    </>
  )
}

export default page
