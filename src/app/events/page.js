import React from 'react'
import EventCard from '../components/EventCard/EventCard'
import { EventData } from '@/lib/data/EventData'
const page = () => {
  return (
    <div className='min-h-screen w-full p-4 bg-[#0D1116] flex flex-col gap-28'>
    {
      EventData.map((item)=>{
        const currentDate = new Date().getTime();
      const past = currentDate < new Date(item.date).getTime() ? false : true;
      const isUpcoming=past?false:true;
        return(
          <EventCard
          title={item.title}
          content={item.content}
             isUpcoming={isUpcoming}
          />

        )
      })
    }
    </div>
  )
}

export default page
