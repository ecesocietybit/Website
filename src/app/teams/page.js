import TeamCard from '../components/teamcard/TeamCard'
import StyledText from '../components/text/StyledText'
import style from '../components/teamcard/TeamCard.module.css'
import { TeamData2k21 } from '@/lib/data/TeamData'

export default function Page() {
  return (
    <div className="min-h-screen w-full p-4 bg-[#0D1116]">
      
      <StyledText 
        primary="#FF4D4D" 
        secondary="#F9CB28" 
        className="text-[36px] font-bold flex flex-col items-center mb-4"
      >
        Final Year
      </StyledText>
      <div className={style.cardContainer}>
        {
          TeamData2k21.map((item)=>{
            return (

            <TeamCard 
              name={item.name} 
              pos={item.pos} 
              imgSrc={item.imgSrc} 
              lazyImgSrc={item.lazyImgSrc} 
              socials={item.socials}
              key={item.name}
            />
            )
          })
        }

      </div>
    </div>
  )
}
