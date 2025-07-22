import HeroSection from "../../components/home/HeroSection/Landing"
import ApplicationForm from "../../components/careers/ApplicationForm"
import IdealCandidates from "../../components/careers/IdealCandidates"
import WhyJoinUs from "../../components/careers/WhyJoinUs"
import WorkWithUs from "../../components/careers/WorkWithUs"


export default function Careers() {
    return (
        <div 
            className="lg:px-15">
            <HeroSection text_1="Join Our fast" text_2 = "growing Team"/>
            <WorkWithUs />
            <IdealCandidates/>
            <WhyJoinUs/>
            <ApplicationForm/>
        </div>

    )
}
