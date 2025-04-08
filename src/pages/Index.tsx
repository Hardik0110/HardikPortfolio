
import { useEffect, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Hero from "../components/Hero";
import AboutSection from "../components/AboutSection";

const Index = () => {
  const [scrollY, setScrollY] = useState(0);
  const { scrollYProgress } = useScroll();
  
  // Create zoom effect based on scroll position
  const scale = useTransform(scrollYProgress, [0, 0.2], [1, 0.9]);
  const opacity = useTransform(scrollYProgress, [0, 0.3], [1, 0.9]);
  
  // Handle scroll events
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen flex flex-col overflow-hidden">
      <motion.div 
        style={{ 
          scale, 
          opacity,
          transition: "all 0.5s cubic-bezier(0.17, 0.55, 0.55, 1)"
        }}
        className="flex-1"
      >
        <Hero />
      </motion.div>
      
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        animate={{ 
          opacity: scrollY > 100 ? 1 : 0,
          y: scrollY > 100 ? 0 : 100 
        }}
        transition={{ duration: 0.8 }}
      >
        <AboutSection />
      </motion.div>
    </div>
  );
};

export default Index;
