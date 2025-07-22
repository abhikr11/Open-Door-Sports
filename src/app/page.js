
import { Navbar } from "../components/navbar/Navbar";
import HeroSection from "../components/home/HeroSection/Landing";
import AboutUs from "../components/home/aboutUs/AboutUs";
import ProgramsSection from "../components/home/ProgramsSection";
import ServicesSection from "../components/home/ServicesSection";
import WhyChooseUs from "../components/home/WhyChooseUs";
import TestimonialsSection from "../components/home/TestimonialsSection";
import CallToAction from "../components/home/CallToAction";

export default function Home() {
  return (
    <>
      <Navbar/>
      <HeroSection/>
      <AboutUs/>
      <ProgramsSection/>
      <ServicesSection/>
      <WhyChooseUs/>
      <TestimonialsSection/>
      <CallToAction/>

    </>
  );
}
