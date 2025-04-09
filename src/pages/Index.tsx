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

  // Define transition points
  const aboutStartPoint = 0;
  const aboutEndPoint = screenHeight;
  const projectStartPoint = screenHeight * 1.2; // Add a 20% buffer after about section is fully visible
  const projectEndPoint = screenHeight * 2.2; // End the project animation after another screen height
  const skillsStartPoint = screenHeight * 2.4; // Start skills animation after projects
  const skillsEndPoint = screenHeight * 3.4; // End the skills animation after another screen height

  // Calculate positions based on scroll
  // About section animation
  const aboutProgress = (scrollY - aboutStartPoint) / (aboutEndPoint - aboutStartPoint);
  const aboutPosition = Math.min(
    Math.max((1 - aboutProgress) * screenHeight, 0),
    screenHeight
  );

  // Projects section animation with buffer
  const projectProgress = (scrollY - projectStartPoint) / (projectEndPoint - projectStartPoint);
  // Keep projects off-screen until we reach the project start point
  const projectPosition = scrollY < projectStartPoint ? 
    window.innerWidth : // Keep it fully off-screen until buffer point is reached
    Math.min(
      Math.max((1 - projectProgress) * window.innerWidth, 0),
      window.innerWidth
    );
    
  // Skills section animation - coming from left side
  const skillsProgress = (scrollY - skillsStartPoint) / (skillsEndPoint - skillsStartPoint);
  // Keep skills off-screen until we reach the skills start point
  const skillsPosition = scrollY < skillsStartPoint ? 
    -window.innerWidth : // Keep it fully off-screen until buffer point is reached
    Math.min(
      Math.max((skillsProgress - 1) * -window.innerWidth, -window.innerWidth),
      0
    );

  // Add global style to hide scrollbar
  useEffect(() => {
    // Create style element
    const style = document.createElement('style');
    style.textContent = `
      body {
        -ms-overflow-style: none;  /* IE and Edge */
        scrollbar-width: none;     /* Firefox */
      }
      body::-webkit-scrollbar {
        display: none;             /* Chrome, Safari and Opera */
      }
    `;
    // Append to document head
    document.head.appendChild(style);
    
    // Clean up
    return () => {
      document.head.removeChild(style);
    };
  }, []);

  return (
    <div className="relative" ref={containerRef}>
      {/* Hero section stays fixed in background */}
      <div className="fixed top-0 left-0 w-full h-screen z-0">
        <Hero />
      </div>
      
      {/* Spacer to allow scrolling - add extra height for buffer zones */}
      <div className="h-[450vh]"></div> {/* Increased to accommodate all sections */}
      
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

      {/* Projects section slides in from right, with buffer delay */}
      <motion.div
        className="fixed top-0 left-0 w-full h-screen z-20"
        style={{
          x: projectPosition,
          transition: "none"
        }}
      >
        <Projects />
      </motion.div>
      
      {/* Skills section slides in from left and overlaps projects */}
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
