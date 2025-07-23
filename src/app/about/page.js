import AboutHero from "../../components/about/AboutHero";
import AboutMission from "../../components/about/AboutMission";
import OurExpertise from "../../components/about/OurExpertise";
import WhySports from "../../components/about/WhySports";
import CallToAction from "../../components/home/CallToAction";
import {Navbar} from '../../components/navbar/Navbar'
import Footer from "../../components/footer/Footer";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar/>
      <AboutHero />
      <AboutMission /> 
      <OurExpertise />
      <WhySports />
      <CallToAction />
      <Footer/>
    </div>
  );
}