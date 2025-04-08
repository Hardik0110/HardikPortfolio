
import { useEffect, useState, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Hero from "../components/Hero";
import AboutSection from "../components/AboutSection";

const Index = () => {
  const [scrollY, setScrollY] = useState(0);
  const { scrollYProgress } = useScroll();
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Create more dramatic zoom effect based on scroll position
  const scale = useTransform(scrollYProgress, [0, 0.2], [1, 0.7]);
  const opacity = useTransform(scrollYProgress, [0, 0.3], [1, 0.6]);
  const blur = useTransform(scrollYProgress, [0, 0.3], [0, 4]);
  
  // Handle scroll events
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="relative" ref={containerRef}>
      <div className="min-h-screen flex flex-col overflow-hidden">
        <motion.div 
          style={{ 
            scale,
            opacity,
            filter: blur.get() ? `blur(${blur.get()}px)` : "none",
            transition: "all 0.5s cubic-bezier(0.17, 0.55, 0.55, 1)"
          }}
          className="flex-1"
        >
          <Hero />
        </motion.div>
      </div>
      
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ 
          opacity: scrollY > 100 ? 1 : 0
        }}
        transition={{ duration: 1.2 }}
        className="relative z-10"
      >
        <AboutSection />
      </motion.div>
    </div>
  );
};

export default Index;
