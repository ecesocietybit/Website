import TeamCard from "../components/teamcard/TeamCard";
import StyledText from "../components/text/StyledText";
import style from "../components/teamcard/TeamCard.module.css";
import { TeamData2k19 } from "@/lib/data/AlumniData";

export default function Page() {
  return (
    <>
    <Head>
      <title>Our Alumni</title>
    </Head>
    <div className="min-h-screen w-full p-4 bg-[#0D1116] flex flex-col gap-28">
        
      <div>
        <StyledText
          primary="#FF4D4D"
          secondary="#F9CB28"
          className="text-[36px] font-bold flex flex-col items-center mb-4"
        >
          Batch 2K19
        </StyledText>
        <div className={style.cardContainer}>
          {TeamData2k19.map((item) => {
            return (
              <TeamCard
                name={item.name}
                pos={item.company}
                imgSrc={'/teams/2K19/'+item.imgSrc}
                lazyImgSrc={item.lazyImgSrc}
                socials={item.socials}
                key={item.name}
              />
            );
          })}
        </div>
      </div>
    </div>
    </>
  );
}
