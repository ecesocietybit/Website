import HeroSection from "./components/Hero/Hero";
import Form from "./components/contact/Form";
import LandingAbout from "./components/landingabout/LandingAbout";
import Profword from "./components/prof/Profword";
import { ProfData } from "@/lib/data/ProfData";
export default function Page() {
  // console.log(ProfData);
  return (
    <div className=" min-h-screen w-full p-4 bg-[#0D1116] text-white">
      
      <HeroSection />
      <LandingAbout/>
      <Profword />
      <Form />
    </div>
  )
}
