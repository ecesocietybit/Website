import React from 'react'
import Card from '../components/facultyCard/Card'
import Head from 'next/head'

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
      <Card/>
    </div>
    </>
  )
}

export default page
