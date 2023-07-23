import React from 'react'
import style from './Profword.module.css'
import { ProfData } from "@/lib/data/ProfData";
import ProfDetail from '../profdetail/ProfDetail';
const Profword = () => {
    // console.log(ProfData);
  return (
    <div>
       Few Inspiring Words
      {
       ProfData.map((items)=>{
        {console.log(items.imgsrc);}

        return(
            <ProfDetail
        imgsrc={items.imgsrc}
        name={items.name}
        pos={items.pos}
        words={items.word}/>
        )
       })
    }
    </div>
  )
}

export default Profword
