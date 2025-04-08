import { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";
import Hero from "../components/Hero";
import AboutSection from "../components/AboutSection";
import Projects from "../components/Projects";

const Index = () => {
  const [scrollY, setScrollY] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Calculate positions based on scroll
  const aboutPosition = scrollY < 100 
    ? "100vh" 
    : Math.min(100 * window.innerHeight - scrollY, 0);

  const projectPosition = scrollY < window.innerHeight 
    ? "100vw" 
    : Math.min(200 * window.innerHeight - scrollY, 0);

  return (
    <div className="relative" ref={containerRef}>
      {/* Hero section stays fixed in background */}
      <div className="fixed top-0 left-0 w-full h-screen z-0">
        <Hero />
      </div>
      
      {/* Spacer to allow scrolling */}
      <div className="h-[300vh]"></div>
      
      {/* About section slides up with scroll */}
      <motion.div
        className="fixed top-0 left-0 w-full h-screen z-10"
        style={{
          y: aboutPosition,
          transition: "none"
        }}
      >
        <AboutSection />
      </motion.div>

      {/* Projects section slides in from right */}
      <motion.div
        className="fixed top-0 left-0 w-full h-screen z-20"
        style={{
          x: projectPosition,
          transition: "none"
        }}
      >
        <Projects />
      </motion.div>
    </div>
  );
};

export default Index;