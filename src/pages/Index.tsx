import { useEffect, useState, useRef, lazy, Suspense } from "react";
import { motion } from "framer-motion";

// Lazy load components
const Hero = lazy(() => import("../components/Hero"));
const AboutSection = lazy(() => import("../components/AboutSection"));
const Projects = lazy(() => import("../components/Projects"));
const Skills = lazy(() => import("../components/Skills"));

// Loading fallback
const LoadingFallback = () => <div className="w-full h-screen bg-background flex items-center justify-center">Loading...</div>;

const Index = () => {
  const [scrollY, setScrollY] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    // Debounced scroll handler for performance
    let ticking = false;
    
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setScrollY(window.scrollY);
          ticking = false;
        });
        ticking = true;
      }
    };
    
    // Smooth scroll with CSS
    document.documentElement.style.scrollBehavior = "smooth";
    
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
      document.documentElement.style.scrollBehavior = "";
    };
  }, []);

  // Memoize screen height to avoid recalculating
  const screenHeight = typeof window !== 'undefined' ? window.innerHeight : 0;
  const screenWidth = typeof window !== 'undefined' ? window.innerWidth : 0;

  // Define transition points with slower animations
  const aboutStartPoint = 0;
  const aboutEndPoint = screenHeight * 1.5; // Extended for slower animation
  const projectStartPoint = screenHeight * 1.8;
  const projectEndPoint = screenHeight * 3.3;
  const skillsStartPoint = screenHeight * 3.5;
  const skillsEndPoint = screenHeight * 5.0;

  // Calculate positions based on scroll with easing
  const easeOutCubic = (t: number) => 1 - Math.pow(1 - t, 3);
  
  // About section animation with easing
  const rawAboutProgress = Math.min(Math.max((scrollY - aboutStartPoint) / (aboutEndPoint - aboutStartPoint), 0), 1);
  const aboutProgress = easeOutCubic(rawAboutProgress);
  const aboutPosition = (1 - aboutProgress) * screenHeight;

  // Projects section animation with easing
  const rawProjectProgress = Math.min(Math.max((scrollY - projectStartPoint) / (projectEndPoint - projectStartPoint), 0), 1);
  const projectProgress = easeOutCubic(rawProjectProgress);
  const projectPosition = scrollY < projectStartPoint ? 
    screenWidth : 
    (1 - projectProgress) * screenWidth;
    
  // Skills section animation with improved easing and positioning
  const rawSkillsProgress = Math.min(Math.max((scrollY - skillsStartPoint) / (skillsEndPoint - skillsStartPoint), 0), 1);
  const skillsProgress = easeOutCubic(rawSkillsProgress);
  
  // This ensures the skills section stays fully off-screen until it's time to animate
  // and then moves in a controlled manner to the center without overshooting
  let skillsPosition;
  
  if (scrollY < skillsStartPoint) {
    // Before animation starts - keep off-screen to the left
    skillsPosition = -screenWidth;
  } else if (skillsProgress >= 1) {
    // When fully visible - keep at position 0 (center of screen)
    skillsPosition = 0;
  } else {
    // During animation - move from left to center slowly
    skillsPosition = -screenWidth * (1 - skillsProgress);
  }

  return (
    <div className="relative" ref={containerRef}>
      {/* Hero section stays fixed in background */}
      <div className="fixed top-0 left-0 w-full h-screen z-0">
        <Suspense fallback={<LoadingFallback />}>
          <Hero />
        </Suspense>
      </div>
      
      {/* Spacer to allow scrolling - add extra height for slower animations */}
      <div className="h-[600vh]"></div>
      
      {/* About section slides up with scroll */}
      <motion.div
        className="fixed top-0 left-0 w-full h-screen z-10"
        style={{
          y: aboutPosition,
          transition: "transform 0.8s cubic-bezier(0.23, 1, 0.32, 1)"
        }}
      >
        <Suspense fallback={<LoadingFallback />}>
          <AboutSection />
        </Suspense>
      </motion.div>

      {/* Projects section slides in from right */}
      <motion.div
        className="fixed top-0 left-0 w-full h-screen z-20"
        style={{
          x: projectPosition,
          transition: "transform 0.8s cubic-bezier(0.23, 1, 0.32, 1)"
        }}
      >
        <Suspense fallback={<LoadingFallback />}>
          <Projects />
        </Suspense>
      </motion.div>
      
      {/* Skills section slides in from left with improved animation */}
      <motion.div
        className="fixed top-0 left-0 w-full h-screen z-30"
        style={{
          x: skillsPosition,
          transition: "transform 1.2s cubic-bezier(0.16, 1, 0.3, 1)" // Slower, more controlled animation
        }}
      >
        <Suspense fallback={<LoadingFallback />}>
          <Skills />
        </Suspense>
      </motion.div>
    </div>
  );
};

export default Index;