import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "../components/About";
import Portfolio from "../components/Portfolio";
import Skills from "../components/Skills";
import Footer from "../components/Footer";
import Blog from "../components/Blog";
import Certificate from "../components/Certificate";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <Portfolio />
      <Skills />
      <Certificate />
      <Blog />
      <Footer />
    </div>
  );
};

export default Home;
