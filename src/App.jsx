import Navbar from "./components/Navbar";
import Contact from "./components/sections/Contact";
import ExperienceSection from "./components/sections/ExperienceSection";
import FeatureCards from "./components/sections/FeatureCards";
import Footer from "./components/sections/Footer";
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
      <Contact/>
      <Footer/>
    </>
  );
};

export default App;
