
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
      <FadeInOnView delay={0.01}><HeroSection2 /></FadeInOnView>
      <FadeInOnView delay={0.02}><ProgramsSection /></FadeInOnView>
      <FadeInOnView delay={0.03}><ServicesSection /></FadeInOnView>
      <FadeInOnView delay={0.04}><WhyChooseUs /></FadeInOnView>
      <FadeInOnView delay={0.05}><TestimonialsSection /></FadeInOnView>
      <FadeInOnView delay={0.06}><CallToAction /></FadeInOnView>   
      <Footer />
    </>
  );
}
