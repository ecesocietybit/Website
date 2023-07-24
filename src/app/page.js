import Head from "next/head";
import HeroSection from "./components/Hero/Hero";
import Form from "./components/contact/Form";
import PostHead from "./components/postHead/PostHead";
import LandingAbout from "./components/landingabout/LandingAbout";
import Profword from "./components/prof/Profword";
import { ProfData } from "@/lib/data/ProfData";import EventCard from "./components/EventCard/EventCard";

export default function Page() {
  // console.log(ProfData);
  return (
    <>
    <Head>
      <title>ECE Society</title>
    </Head>
    <div className=" min-h-screen w-full p-4 bg-[#0D1116] text-white">
      
      <HeroSection />
      <LandingAbout/>
      <Profword />
      <PostHead/>
      <EventCard/>
      <Form />
    </div>
    </>
  )
}
