import Navbar from "./components/Navbar";
import Hero from "./components/sections/Hero";
import LogoSection from "./components/sections/LogoSection";
import ShowcaseSection from "./components/sections/ShowcaseSection";

const App = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <ShowcaseSection />
      <LogoSection/>
    </>
  );
};

export default App;
