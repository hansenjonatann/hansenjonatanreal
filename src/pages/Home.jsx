import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "../components/About";
import Portfolio from "../components/Portfolio";
import Skills from "../components/Skills";
import Footer from "../components/Footer";
import Blog from "../components/Blog";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <Portfolio />
      <Skills />
      <Blog />
      <Footer />
    </div>
  );
};

export default Home;
