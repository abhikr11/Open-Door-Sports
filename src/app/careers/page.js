import CareersHero from "../../components/careers/CareersHero"
import ApplicationForm from "../../components/careers/ApplicationForm"
import IdealCandidates from "../../components/careers/IdealCandidates"
import WhyJoinUs from "../../components/careers/WhyJoinUs"
import { Navbar } from "../../components/navbar/Navbar"
import CallToAction from "../../components/home/CallToAction";
import Footer from "../../components/footer/Footer"


export default function Careers() {
    return (
        <div>
            <Navbar />
            <CareersHero/>
            <IdealCandidates />
            <WhyJoinUs />
            <ApplicationForm />
            <CallToAction />
            <Footer />
        </div>
    )
}
