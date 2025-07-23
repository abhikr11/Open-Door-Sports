'use client';


import SportsHero from "../../../components/sportsEvents/SportsHero";
import EventServices from "../../../components/sportsEvents/EventServices";
import EventPreparation from "../../../components/sportsEvents/EventPreparation";
import EventTypes from "../../../components/sportsEvents/EventTypes";
import EventContact from "../../../components/sportsEvents/EventContact";

const Sports = () => {
  return (
    <>
      <SportsHero/> 
      <EventServices />
      <EventPreparation />
      <EventTypes />
      <EventContact/>
    </>
  );
};

export default Sports;



