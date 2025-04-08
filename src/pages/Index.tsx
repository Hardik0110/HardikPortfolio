
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import AboutSection from "../components/AboutSection";
import Footer from "../components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <Hero />
      <AboutSection />
      <Footer />
    </div>
  );
};

export default Index;
