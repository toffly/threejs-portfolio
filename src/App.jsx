import Navbar from "./components/Navbar";
import ExperienceSection from "./components/sections/ExperienceSection";
import FeatureCards from "./components/sections/FeatureCards";
import Hero from "./components/sections/Hero";
import LogoSection from "./components/sections/LogoSection";
import ShowcaseSection from "./components/sections/ShowcaseSection";
import TechStack from "./components/sections/TechStack";

const App = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <ShowcaseSection />
      <LogoSection/>
      <FeatureCards/>
      <ExperienceSection/>
      <TechStack/>
    </>
  );
};

export default App;
