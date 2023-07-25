import Head from "next/head";
import HeroSection from "./components/Hero/Hero";
import Form from "./components/contact/Form";
import PostHead from "./components/postHead/PostHead";
import LandingAbout from "./components/landingabout/LandingAbout";
import Profword from "./components/prof/Profword";

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
    <div className=" min-h-screen flex flex-col gap-12 w-full p-4 bg-[#0D1116] text-white">
      
      <HeroSection />
      <LandingAbout/>
      <Profword />
      <PostHead/>
      <Form />
    </div>
    </>
  )
}
