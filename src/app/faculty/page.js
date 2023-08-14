import React from 'react'
import Card from '../components/facultyCard/Card'
import Head from 'next/head'
import { FacultyData } from '@/lib/data/FacultyData';
import style from '../components/facultyCard/Card.module.css'

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
    <div className='min-h-screen flex flex-col'>
      <div className={style.page}>
      {
        FacultyData.map((items)=>{
          return(
              <div className={style.card}>
              <Card
              name={items.name}
              desg={items.desg}
               imgSrc={"/prof/"+items.imgSrc}
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
