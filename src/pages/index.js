import React from "react";
import CirriculumDetailsSection from "../molecules/CirriculumDetailsSection/CirriculumDetailsSection";
import HeroSection from "../molecules/HeroSection/HeroSection";
import IntroductionSection from "../molecules/IntroductionSection/IntroductionSection";
import NavSection from "../molecules/NavSection/NavSection";
import ScheduleSection from "../molecules/ScheduleSection/ScheduleSection";

export const Home = () => {
  return (
    <>
      <HeroSection />
      <NavSection />
      <IntroductionSection />
      <CirriculumDetailsSection />
      <ScheduleSection />
    </>
  );
};

export default Home;
