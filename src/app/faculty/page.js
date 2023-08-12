import React from 'react'
import Card from '../components/facultyCard/Card'
import Head from 'next/head'
import { FacultyData } from '@/lib/data/FacultyData';

export const metadata = {
    title: "Our Faulty",
    description: "",
  };

const page = () => {
  return (
    <>
    <Head>
      <title>Our Faculty</title>
    </Head>
    <div className='min-h-screen flex flex-col'>
      <div className='flex flex-col'>
      {
        FacultyData.map((items)=>{
          return(
            <Card
            name={items.name}
            desg={items.desg}
            imgSrc={"/prof/"+items.imgSrc}
            key={items.name}
            />
          )
        })
      }
      </div>
    </div>
    </>
  )
}

export default page
