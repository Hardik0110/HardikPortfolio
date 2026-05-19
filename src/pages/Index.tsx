import { useRef } from "react";
import { useScroll, useTransform, useSpring } from "framer-motion";
import Hero from "../components/Hero";
import Projects from "../components/sections/Projects";
import Skills from "../components/sections/Skills";
import Contact from "../components/sections/Contact";

const Index = () => {
  const spacerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: spacerRef,
    offset: ["start start", "end start"],
  });

  const smooth = useSpring(scrollYProgress, {
    stiffness: 80,
    damping: 25,
    restDelta: 0.001,
  });

  const redY = useTransform(smooth, [0, 1], ["0%", "-105%"]);
  const blackY = useTransform(smooth, [0, 1], ["0%", "105%"]);
  const gridOpacity = useTransform(smooth, [0, 0.4], [1, 0]);

  return (
    <>
      <div className="fixed inset-0 z-10 pointer-events-none">
        <Hero redY={redY} blackY={blackY} gridOpacity={gridOpacity} />
      </div>

      <div ref={spacerRef} className="h-screen w-full bg-[#F4E9D8]" />

      <Projects />
      <Skills />
      <Contact />
    </>
  );
};

export default Index;
