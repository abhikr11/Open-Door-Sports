import HeroSection from "../../components/home/HeroSection/Landing"
import ApplicationForm from "../../components/careers/ApplicationForm"
import IdealCandidates from "../../components/careers/IdealCandidates"
import WhyJoinUs from "../../components/careers/WhyJoinUs"
import { Navbar } from "../../components/navbar/Navbar"
import Footer from "../../components/footer/Footer"

export default function Careers() {
    return (
        <div>
            <Navbar />
            <HeroSection text_1="Join Our fast" text_2="growing Team" />
            <IdealCandidates />
            <WhyJoinUs />
            <ApplicationForm />
            <Footer />
        </div>
    )
}
