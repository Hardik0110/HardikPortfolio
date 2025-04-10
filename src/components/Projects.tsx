"use client";

import { motion } from "framer-motion";
import LayeredBookshelf from "./LayeredBookshelf";
import projectData from "../lib/projectdata.json";

export default function Projects() {
  return (
    <div className="min-h-screen w-full relative">
      {/* Background */}
      <div className="absolute inset-0 bg-[#FADC00]">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `linear-gradient(to right, #00000010 1px, transparent 1px),
                             linear-gradient(to bottom, #00000010 1px, transparent 1px)`,
            backgroundSize: "50px 50px",
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 min-h-full w-full">
        <div className="container mx-auto px-4 py-12 flex flex-col ">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl font-bold text-center pt-8 pb-4"
          >
            My Projects
          </motion.h1>

          <div className="w-full">
            <LayeredBookshelf
              projects={projectData}  // Pass full project data directly
              className="w-full max-w-[90vw]"
            />
          </div>
        </div>
      </div>
    </div>
  );
}