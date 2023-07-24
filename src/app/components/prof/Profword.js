import React from 'react'
import style from './Profword.module.css'
import { ProfData } from "@/lib/data/ProfData";
import ProfDetail from '../profdetail/ProfDetail';
import StyledText from '../text/StyledText'
const Profword = () => {
  return (
    <div>
      <StyledText
          primary="#FF4D4D"
          secondary="#F9CB28"
          className="text-[36px] font-bold flex flex-col items-center mb-4"
        >
         Testimonials
        </StyledText>
      {
       ProfData.map((items)=>{
        {console.log(items.imgsrc);}

        return(
            <ProfDetail
            key={items.name}
        imgsrc={items.imgsrc}
        name={items.name}
        pos={items.pos}
        words={items.word}
        college={items.college}
        dept={items.dept}
        socials={items.socials}/>
        
        )
       })
    }
    </div>
  )
}

export default Profword
