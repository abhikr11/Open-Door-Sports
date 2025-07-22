'use client';


import SportsHero from "../../../components/sportsEvents/SportsHero";
import EventServices from "../../../components/sportsEvents/EventServices";
import EventPreparation from "../../../components/sportsEvents/EventPreparation";
import EventTypes from "../../../components/sportsEvents/EventTypes";
import CallToAction from "../../../components/home/CallToAction";

const Sports = () => {
  return (
    <>
      <SportsHero /> 
      <EventServices />
      <EventPreparation />
      <EventTypes />
      <CallToAction />
    </>
  );
};

export default Sports;



