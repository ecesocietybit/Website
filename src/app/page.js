import HeroSection from "./components/Hero/Hero";
import Form from "./components/contact/Form";

export default function Page() {
  return (
    <div className=" min-h-screen w-full p-4 bg-[#0D1116] text-white">
      
      <HeroSection />
      <Form />
    </div>
  )
}
