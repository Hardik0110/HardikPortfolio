import { useEffect, useState, useRef, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Hero from "../components/Hero";
import AboutSection from "../components/AboutSection";
import Projects from "../components/Projects";
import Skills from "../components/Skills";
import { ContactSection } from "@/components/ContactSection";

const Index = () => {
  const [scrollY, setScrollY] = useState(0);
  const [isInitialized, setIsInitialized] = useState(false);
  const [dimensions, setDimensions] = useState({
    height: typeof window !== 'undefined' ? window.innerHeight : 0,
    width: typeof window !== 'undefined' ? window.innerWidth : 0
  });
  const containerRef = useRef<HTMLDivElement>(null);
  const requestRef = useRef<number>();
  
  // Improve smoothness with enhanced damping factor
  const animateScroll = useCallback(() => {
    const currentScroll = window.scrollY;
    // Increased damping factor for smoother scrolling (0.1 -> 0.08)
    setScrollY(prev => prev + (currentScroll - prev) * 0.08);
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
    
    // Initialize dimensions correctly for SSR
    if (typeof window !== 'undefined') {
      handleResize();
    }
    
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

  // Smoother transitions with adjusted section heights
  const sectionHeight = screenHeight * 2;
  
  // Define transition points with better spacing for smoother transitions
  const aboutStartPoint = 0;
  const aboutEndPoint = sectionHeight;
  const projectStartPoint = sectionHeight * 1.2;
  const projectEndPoint = projectStartPoint + sectionHeight;
  const skillsStartPoint = projectEndPoint + sectionHeight * 0.5;
  const skillsEndPoint = skillsStartPoint + sectionHeight;
  
  // Ensure contact section comes after skills section
  const contactStartPoint = skillsEndPoint;
  const contactEndPoint = contactStartPoint + sectionHeight;

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

  // Contact section animation - coming from the bottom
  const contactProgress = Math.max(0, Math.min(1, (scrollY - contactStartPoint) / (contactEndPoint - contactStartPoint)));
  const contactPosition = scrollY < contactStartPoint ?
    screenHeight : // Keep off-screen until reach start point
    (1 - contactProgress) * screenHeight; // Smooth transition from bottom

  // Add global style to hide scrollbar
  useEffect(() => {
    if (typeof document !== 'undefined') {
      const style = document.createElement('style');
      style.textContent = `
        body {
          -ms-overflow-style: none;
          scrollbar-width: none;
          overflow-x: hidden;
        }
        body::-webkit-scrollbar {
          display: none;
        }
        html {
          scroll-behavior: smooth;
        }
      `;
      document.head.appendChild(style);
      
      return () => {
        document.head.removeChild(style);
      };
    }
  }, []);

  // Calculate total height for smooth scrolling
  const totalHeight = contactEndPoint + screenHeight;

  return (
    <div className="relative" ref={containerRef}>
      {/* Hero section stays fixed in background */}
      <div className="fixed top-0 left-0 w-full h-screen z-0">
        <Hero />
      </div>
      
      {/* Spacer for scrolling - adjusted for total height */}
      <div style={{ height: `${totalHeight}px` }}></div>
      
      {/* Use AnimatePresence to properly handle animation mounting */}
      <AnimatePresence>
        {isInitialized && (
          <>
            {/* About section */}
            <motion.div
              className="fixed top-0 left-0 w-full h-screen z-10"
              initial={{ y: screenHeight }}
              style={{ y: aboutPosition }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            >
              <AboutSection />
            </motion.div>

            {/* Projects section */}
            <motion.div
              className="fixed top-0 left-0 w-full h-screen z-20"
              initial={{ x: screenWidth }}
              style={{ x: projectPosition }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            >
              <Projects />
            </motion.div>
            
            {/* Skills section coming from left side */}
            <motion.div
              className="fixed top-0 left-0 w-full h-screen z-30"
              initial={{ x: -screenWidth }}
              style={{ x: skillsPosition }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            >
              <Skills />
            </motion.div>
              
            {/* Contact section coming from bottom */}
            <motion.div
              className="fixed top-0 left-0 w-full h-screen z-40"
              initial={{ y: screenHeight }}
              style={{ y: contactPosition }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            >
              <ContactSection />
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Index;