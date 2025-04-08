import { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";
import Hero from "../components/Hero";
import AboutSection from "../components/AboutSection";

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

  return (
    <div className="relative" ref={containerRef}>
      {/* Hero section stays fixed in background */}
      <div className="fixed top-0 left-0 w-full h-screen z-0">
        <Hero />
      </div>
      
      {/* Spacer to allow scrolling */}
      <div className="h-screen"></div>
      
      {/* About section slides up with scroll */}
      <motion.div
        className="relative z-10"
        style={{
          y: scrollY < 100 ? "100vh" : Math.min(100 * window.innerHeight - scrollY, 0),
          transition: "none"
        }}
      >
        <AboutSection />
      </motion.div>
    </div>
  );
};

export default Index;