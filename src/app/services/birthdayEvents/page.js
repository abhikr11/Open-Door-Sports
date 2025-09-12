// import BirthdayEventsPage from "@/component/birthday-events/page";
import BirthdayHero from "../../../components/birthday-events/BirthdayHero";
import FeaturesSection from "../../../components/birthday-events/FeaturesSection";
import ActivitiesSection from "../../../components/birthday-events/ActivitiesSection";
import TestimonialsSection from "../../../components/birthday-events/TestimonialsSection";
import PricingSection from "../../../components/birthday-events/PricingSection";
import BookingSection from "../../../components/birthday-events/BookingSection";
import CallToAction from "../../../components/home/CallToAction";


export default function BirthdayPage() {
  return (
    <div className="min-h-screen bg-white">
      <BirthdayHero />
      <FeaturesSection />
      <ActivitiesSection />
      {/* <TestimonialsSection /> */}
      {/* <PricingSection /> */}
      {/* <BookingSection /> */}
      <CallToAction/> 
    </div>
  );
}
