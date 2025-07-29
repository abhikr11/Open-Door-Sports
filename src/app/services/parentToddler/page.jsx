
'use client';


import HeroSection from '../../../components/parentToddler/HeroSection';
import ProgramOverview from '../../../components/parentToddler/ProgramOverview';
import BenefitsSection from '../../../components/parentToddler/BenefitsSection';
import ProgramDetailsSection from '../../../components/parentToddler/ProgramDetailsSection';
import TestimonialsSection from '../../../components/parentToddler/TestimonialsSection';
import CallToAction from '../../../components/home/CallToAction'

export default function Home() {
  return (
    <div className="min-h-screen">
        <HeroSection />
        <ProgramOverview />
        <BenefitsSection />
        <ProgramDetailsSection />
        <TestimonialsSection />
        <CallToAction/>
    </div>
  );
}
