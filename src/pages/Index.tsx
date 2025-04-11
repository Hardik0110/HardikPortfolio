import { useEffect, useState, useRef, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Hero from "../components/Hero";
import AboutSection from "../components/AboutSection";
import Projects from "../components/Projects";
import Skills from "../components/Skills";

const Index = () => {
  const [scrollY, setScrollY] = useState(0);
  const [isInitialized, setIsInitialized] = useState(false);
  const [dimensions, setDimensions] = useState({
    height: window.innerHeight,
    width: window.innerWidth
  });
  const containerRef = useRef<HTMLDivElement>(null);
  const requestRef = useRef<number>();
  
  // Use requestAnimationFrame for smoother scrolling with moderate damping
  const animateScroll = useCallback(() => {
    const currentScroll = window.scrollY;
    // Medium damping for balanced scroll sensitivity
    setScrollY(prev => prev + (currentScroll - prev) * 0.1);
    requestRef.current = requestAnimationFrame(animateScroll);
  }, []);
  
  useEffect(() => {
    const initTimer = setTimeout(() => {
      setIsInitialized(true);
      requestRef.current = requestAnimationFrame(animateScroll);
    }, 100);
    
    const handleResize = () => {
      setDimensions({
        height: window.innerHeight,
        width: window.innerWidth
      });
    };
    
    window.addEventListener("resize", handleResize);
    
    return () => {
      if (requestRef.current) {
        cancelAnimationFrame(requestRef.current);
      }
      clearTimeout(initTimer);
      window.removeEventListener("resize", handleResize);
    };
  }, [animateScroll]);

  // Screen dimensions for calculations
  const { height: screenHeight, width: screenWidth } = dimensions;

  // Moderate scroll distances for balanced transitions
  const sectionHeight = screenHeight * 2; 
  
  // Define transition points
  const aboutStartPoint = 0;
  const aboutEndPoint = sectionHeight;
  const projectStartPoint = sectionHeight * 1.2;
  const projectEndPoint = projectStartPoint + sectionHeight;
  const skillsStartPoint = projectEndPoint + sectionHeight * 0.5;
  const skillsEndPoint = skillsStartPoint + sectionHeight;

  // Calculate positions based on scroll
  // About section animation
  const aboutProgress = Math.max(0, Math.min(1, (scrollY - aboutStartPoint) / (aboutEndPoint - aboutStartPoint)));
  const aboutPosition = (1 - aboutProgress) * screenHeight;

  // Projects section animation
  const projectProgress = Math.max(0, Math.min(1, (scrollY - projectStartPoint) / (projectEndPoint - projectStartPoint)));
  const projectPosition = scrollY < projectStartPoint ? 
    screenWidth : 
    (1 - projectProgress) * screenWidth;
    
  // Skills section animation - coming from left side
  const skillsProgress = Math.max(0, Math.min(1, (scrollY - skillsStartPoint) / (skillsEndPoint - skillsStartPoint)));
  const skillsPosition = scrollY < skillsStartPoint ? 
    -screenWidth : // Keep off-screen until reach start point
    skillsProgress * screenWidth - screenWidth; // From left side

  // Add global style to hide scrollbar
  useEffect(() => {
    const style = document.createElement('style');
    style.textContent = `
      body {
        -ms-overflow-style: none;
        scrollbar-width: none;
      }
      body::-webkit-scrollbar {
        display: none;
      }
    `;
    document.head.appendChild(style);
    
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
      
      {/* Spacer for scrolling */}
      <div style={{ height: `${skillsEndPoint + screenHeight}px` }}></div>
      
      {/* Use AnimatePresence to properly handle animation mounting */}
      <AnimatePresence>
        {isInitialized && (
          <>
            {/* About section */}
            <motion.div
              className="fixed top-0 left-0 w-full h-screen z-10"
              initial={{ y: screenHeight }}
              style={{ y: aboutPosition }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            >
              <AboutSection />
            </motion.div>

            {/* Projects section */}
            <motion.div
              className="fixed top-0 left-0 w-full h-screen z-20"
              initial={{ x: screenWidth }}
              style={{ x: projectPosition }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            >
              <Projects />
            </motion.div>
            
            {/* Skills section coming from left side */}
            <motion.div
              className="fixed top-0 left-0 w-full h-screen z-30"
              initial={{ x: -screenWidth }}
              style={{ x: skillsPosition }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            >
              <Skills />
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Index;