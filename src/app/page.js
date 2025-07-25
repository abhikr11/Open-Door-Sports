
import { Navbar } from "../components/navbar/Navbar";
import HeroSection from "../components/home/HeroSection/HeroSection";
import AboutUs from "../components/home/aboutUs/AboutUs";

import ProgramsSection from "../components/home/ProgramsSection";
import ServicesSection from "../components/home/ServicesSection";
import WhyChooseUs from "../components/home/WhyChooseUs";
import TestimonialsSection from "../components/home/TestimonialsSection";
import CallToAction from "../components/home/CallToAction";
import Footer from "../components/footer/Footer";

import HeroSection1 from "../components/home/HeroSection/HeroSection1";
import HeroSection2 from "../components/home/HeroSection/HeroSection2";

export default function Home() {
  return (
    <>
      <Navbar/>
      <HeroSection2/>
      <ProgramsSection/>
      <ServicesSection/>
      <WhyChooseUs/>
      <TestimonialsSection/>
      <CallToAction/>
      <Footer/>
    </>
  );
}
