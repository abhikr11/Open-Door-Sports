
// import BirthdayEventsPage from "@/component/birthday-events/page";
import AfterSchoolHero from "../../../components/afterSchool/AfterSchoolHero";
import AfterFeaturesSection from "../../../components/afterSchool/AfterFeaturesSection";
import AfterTestimonialsSection from "../../../components/afterSchool/AfterTestimonialsSection";
import AfterBenefit from "../../../components/afterSchool/AfterBenefit";

export default function AfterSchool() {
  return (
    <div className="min-h-screen bg-white">
      <AfterSchoolHero/>
      <AfterFeaturesSection />
      <AfterBenefit/>
      {/* <AfterTestimonialsSection /> */}
    </div>
  );
}
