'use client';

import Hero from "../../../components/intergratedProgram/Hero";
import ProgramOverview from "../../../components/intergratedProgram/ProgramOverview";
import KeyElements from "../../../components/intergratedProgram/KeyElements";
import InclusiveApproach from "../../../components/intergratedProgram/InclusiveApproach";
import ProgramStats from "../../../components/intergratedProgram/ProgramStats";
import CallToAction from '../../../components/home/CallToAction';


export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50">
      <Hero />
      <ProgramOverview />
      <KeyElements />
      <InclusiveApproach />
      <ProgramStats />
      <CallToAction />

    </div>
  );
}
