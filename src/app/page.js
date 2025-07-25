
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

import FadeInOnView from "../components/animation/FadeInOnView";


export default function Home() {
  return (
    <>
      <FadeInOnView delay={0.01} direction="top"><Navbar /></FadeInOnView>
      <FadeInOnView delay={0.4} direction="bottom"><HeroSection2 /></FadeInOnView>
      <FadeInOnView delay={0.6} direction="right"><ProgramsSection /></FadeInOnView>
      <FadeInOnView delay={0.8} direction="left"><ServicesSection /></FadeInOnView>
      <FadeInOnView delay={1.0} direction="bottom"><WhyChooseUs /></FadeInOnView>
      <FadeInOnView delay={1.2} direction="top"><TestimonialsSection /></FadeInOnView>
      <FadeInOnView delay={1.4} direction="right"><CallToAction /></FadeInOnView>
      <FadeInOnView delay={0.2} direction="bottom"><Footer /></FadeInOnView>
    </>
  );
}
