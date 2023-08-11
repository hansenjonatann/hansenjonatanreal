import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import AboutMe from "../components/Aboutme";
import Portfolio from "../components/Portfolio";
import Footer from "../components/Footer";
import Certificate from "../components/Certificate";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <AboutMe />
      <Portfolio />
      <Certificate />
      <Footer />
    </div>
  );
};

export default Home;
