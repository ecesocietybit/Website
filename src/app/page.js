import Head from "next/head";
import HeroSection from "./components/Hero/Hero";
import Form from "./components/contact/Form";
import PostHead from "./components/postHead/PostHead";
import LandingAbout from "./components/landingabout/LandingAbout";
import Profword from "./components/prof/Profword";
import Contact from "./components/contact/Contact";

export const metadata = {
  title: "ECE Society",
  description: "",
};

export default function Page() {
  return (
    <>
    <Head>
      <title>ECE Society</title>
    </Head>
    <div className=" min-h-screen w-full flex flex-col gap-12 p-4 ">
      
      <HeroSection />
      <LandingAbout/>
      <Profword />
      <PostHead/>
      <Contact/>
    </div>
    </>
  )
}
