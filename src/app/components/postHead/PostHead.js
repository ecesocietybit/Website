import React from 'react'
import style from './PostHead.module.css'
import TeamCard from '../teamcard/TeamCard'
import { TeamData2k20 } from '@/lib/data/TeamData'
import StyledText from '../text/StyledText'

const PostHead = () => {
  return (
    <div className='w-4/5 mx-auto'>
        <StyledText
          primary="#FF4D4D"
          secondary="#F9CB28"
          className="text-[36px] font-bold flex flex-col items-center mb-4"
        >
          Post Bearers
        </StyledText>
        <div className={`${style.container}`}>
        <div className='flex gap-8 p-8'>
            {TeamData2k20.map((item) => {
                    {item.imgSrc=item.imgSrc.replace('.jpg','.png')}
                    
                    return (
                    <div className='w-full' key={item.name}>
                        <TeamCard
                        name={item.name}
                        pos={item.pos}
                        imgSrc={'/teams/2K20/'+item.imgSrc}
                        lazyImgSrc=   
                         {'/teams/2K20/lazy/'+item.imgSrc}
                        socials={item.socials}
                    />
                    </div>
                    );
                })}
        </div>
    </div>
    </div>
  )
}

export default PostHead
