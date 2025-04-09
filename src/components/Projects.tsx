"use client";

import { AnimatedTestimonials } from "./ui/animated-testimonials";
import { motion } from "framer-motion";

const projects = [
  {
    quote: "An AI-powered code optimization tool that enhances code quality and performance",
    name: "AI Code Optimizer",
    designation: "Machine Learning / Software Development",
    src: "src/assets/AI_CODE_OPTIMIZER.png",
  },
  {
    quote: "Automated Performance Results Y Comparator & Output Tracker",
    name: "APRYCOT",
    designation: "Data Analysis / Automation",
    src: "src/assets/APRYCOT.png",
  },
  {
    quote: "Business Rule Express - A rule engine management system",
    name: "BRX",
    designation: "3D Model Website",
    src: "src/assets/BRX.png",
  },
  {
    quote: "Business Rule Express - A rule engine management system",
    name: "DNX",
    designation: "Task Management System",
    src: "src/assets/DNX.png",
  },
];

export default function Projects() {
  return (
    <div className="h-screen w-full relative">
      <div className="absolute inset-0 bg-[#FADC00]">
        <div 
          className="absolute inset-0" 
          style={{
            backgroundImage: `linear-gradient(to right, #00000010 1px, transparent 1px),
                             linear-gradient(to bottom, #00000010 1px, transparent 1px)`,
            backgroundSize: '50px 50px'
          }}
        />
      </div>

      <div className="relative z-10 h-full w-full">
        <div className="container mx-auto px-4 h-full flex flex-col">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl font-bold text-center pt-8 pb-4"
          >
            My Projects
          </motion.h1>

          <div className="flex-1 w-full flex items-center justify-center">
            <AnimatedTestimonials 
              testimonials={projects}
              autoplay={true}
              className="w-full max-w-[90vw] h-[80vh]"
            />
          </div>
        </div>
      </div>
    </div>
  );
}