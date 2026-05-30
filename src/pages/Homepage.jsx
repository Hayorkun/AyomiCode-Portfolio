import AboutMe from "../components/Aboutme";
import CTA from "../components/CTA";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Project from "../components/Project";

function HomePage() {
  return (
    <>
      <Hero />
      <AboutMe />
      <Project/>
      <CTA />
      <Footer />
    </>
  );
}

export default HomePage;
