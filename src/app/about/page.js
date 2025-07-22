import AboutHero from "../../components/about/AboutHero";
import AboutMission from "../../components/about/AboutMission";
import OurExpertise from "../../components/about/OurExpertise";
import WhySports from "../../components/about/WhySports";
import CallToAction from "../../components/home/CallToAction";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      <AboutHero />
      <AboutMission /> 

      <OurExpertise />
      <WhySports />
      <CallToAction />
    </div>
  );
}