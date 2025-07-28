
import { Navbar } from "../components/navbar/Navbar";

import ProgramsSection from "../components/home/ProgramsSection";
import ServicesSection from "../components/home/ServicesSection";
import WhyChooseUs from "../components/home/WhyChooseUs";
import TestimonialsSection from "../components/home/TestimonialsSection";
import CallToAction from "../components/home/CallToAction";
import Footer from "../components/footer/Footer";
import HeroSection2 from "../components/home/HeroSection/HeroSection2";

import FadeInOnView from "../components/animation/FadeInOnView";


export default function Home() {
  return (
    <>
      <Navbar />
      <HeroSection2 />
      <ProgramsSection />
      {/* <ServicesSection /> */}
      <WhyChooseUs />
      <TestimonialsSection />
      <CallToAction />
      <Footer />
    </>
  );
}
