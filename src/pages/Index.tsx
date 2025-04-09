import { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";
import Hero from "../components/Hero";
import AboutSection from "../components/AboutSection";
import Projects from "../components/Projects";
import Skills from "../components/Skills";

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

  // Screen height for easier calculations
  const screenHeight = window.innerHeight;

  // Define transition points with buffers
  const aboutStartPoint = 0;
  const aboutEndPoint = screenHeight;
  const projectStartPoint = screenHeight * 1.2;
  const projectEndPoint = screenHeight * 2.2;
  const skillsStartPoint = screenHeight * 2.4;
  const skillsEndPoint = screenHeight * 3.4; // Increased end point for skills

  // Calculate positions based on scroll
  const aboutProgress = (scrollY - aboutStartPoint) / (aboutEndPoint - aboutStartPoint);
  const aboutPosition = Math.min(
    Math.max((1 - aboutProgress) * screenHeight, 0),
    screenHeight
  );

  const projectProgress = (scrollY - projectStartPoint) / (projectEndPoint - projectStartPoint);
  const projectPosition = scrollY < projectStartPoint ? 
    window.innerWidth : 
    Math.min(
      Math.max((1 - projectProgress) * window.innerWidth, 0),
      window.innerWidth
    );

  // Modified skills animation calculation
  const skillsProgress = Math.min(
    Math.max((scrollY - skillsStartPoint) / (skillsEndPoint - skillsStartPoint), 0),
    1
  );
  const skillsPosition = -window.innerWidth + (skillsProgress * window.innerWidth);

  return (
    <div className="relative" ref={containerRef}>
      <div className="fixed top-0 left-0 w-full h-screen z-0">
        <Hero />
      </div>
      
      {/* Increased height to accommodate full skills section */}
      <div className="h-[450vh]"></div>
      
      <motion.div
        className="fixed top-0 left-0 w-full h-screen z-10"
        style={{
          y: aboutPosition,
          transition: "none"
        }}
      >
        <AboutSection />
      </motion.div>

      <motion.div
        className="fixed top-0 left-0 w-full h-screen z-20"
        style={{
          x: projectPosition,
          transition: "none"
        }}
      >
        <Projects />
      </motion.div>

      <motion.div
        className="fixed top-0 left-0 w-full h-screen z-30"
        style={{
          x: skillsPosition,
          transition: "none"
        }}
      >
        <Skills />
      </motion.div>
    </div>
  );
};

export default Index;