import Hero from "./components/Hero/Hero";
import TechnologyFlow from "./components/TechnologyFlow/TechnologyFlow";
import Capabilities from "./components/Capabilities/Capabilities";
import Websites from "./components/Websites/Websites";
import Skills from "./components/Skills/Skills";
import ExperiencePreview from "./components/ExperiencePreview/ExperiencePreview";
import ResumePreview from "./components/ResumePreview/ResumePreview";
import EducationPreview from "./components/EducationPreview/EducationPreview";
import BuildProcess from "./components/BuildProcess/BuildProcess";
import ContactCTA from "./components/ContactCTA/ContactCTA";


import "./home.css";
import AboutMe from "./components/about/AboutMe";

function Home() {
  return (
    <>
      <Hero />
      <TechnologyFlow />
      <Capabilities />
      <Websites />
      <Skills />
      <ExperiencePreview />
      <ResumePreview />
      <EducationPreview />
      <BuildProcess />
      <AboutMe />
      <ContactCTA />
    </>
  );
}

export default Home;
