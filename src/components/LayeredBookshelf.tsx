"use client";

import { motion } from "framer-motion";
import { useState } from "react";

const LayeredBookshelf = ({ projects, className }) => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [selectedColor, setSelectedColor] = useState(null);
  const shelves = 2;
  const booksPerShelf = Math.ceil(projects.length / shelves);
  const spineColors = [
    'linear-gradient(135deg, #FFFACD, #FFD700)', // Lemon Chiffon to Gold
    'linear-gradient(135deg, #E6E6FA, #B0C4DE)', // Lavender to Light Steel Blue
    'linear-gradient(135deg, #F0E68C, #D2B48C)', // Khaki to Sandy Brown
    'linear-gradient(135deg, #FFB6C1, #FF69B4)', // Light Pink to Hot Pink
    'linear-gradient(135deg, #ADD8E6, #87CEEB)', // Light Blue to Sky Blue
  ];

  return (
    <div className={`w-full flex flex-col gap-24 ${className}`}>
      {/* Generate exactly 2 shelves */}
      {[...Array(shelves)].map((_, shelfIndex) => (
        <div key={shelfIndex} className="relative flex items-center">
          {/* Left vertical shelf support with bottom shadow */}
          <div
            className="w-8 h-72 bg-[#654321] z-0 flex items-start absolute left-0 border-b-4 border-t-4 rounded-t-lg rounded-b-lg"
            style={{ boxShadow: '0 8px 6px -6px rgba(0, 0, 0, 0.3)' }}
          />

          {/* Books on the shelf */}
          <div className="flex justify-center items-center w-full px-2 mb-2 relative z-10" style={{ gap: `${Math.random() * 4 + 2}px` }}>
            {projects
              .slice(shelfIndex * booksPerShelf, (shelfIndex + 1) * booksPerShelf)
              .map((project, index) => {
                const isDiagonal = Math.random() > 0.5;
                const randomColor = spineColors[Math.floor(Math.random() * spineColors.length)];

                return (
                  <motion.div
                    key={index}
                    className="relative w-20 h-64 shadow-lg cursor-pointer"
                    style={{
                      transform: isDiagonal
                        ? `rotate(${Math.random() * 4 - 2}deg)`
                        : 'rotate(0deg)',
                      background: randomColor, // Apply gradient here
                    }}
                    whileHover={{
                      scale: 1.05,
                      rotate: 0,
                      boxShadow: "0 10px 20px rgba(0,0,0,0.2)",
                      zIndex: 20, // Ensure books are above shelf supports on hover
                      transition: { duration: 0.2 }
                    }}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                    onClick={() => {
                      setSelectedProject(project);
                      setSelectedColor(randomColor);
                    }}
                  >
                    <div className="w-full h-full flex items-center justify-center rounded-lg">
                      <h3 className="text-lg font-bold text-gray-800 whitespace-nowrap book-text">
                        {project.title}
                      </h3>
                    </div>
                  </motion.div>
                );
              })}
          </div>

          {/* Right vertical shelf support with bottom shadow */}
          <div
            className="w-8 h-72 bg-[#654321] z-0 items-end absolute right-0 border-b-4 border-t-4 rounded-t-lg rounded-b-lg"
            style={{ boxShadow: '0 8px 6px -6px rgba(0, 0, 0, 0.3)' }}
          />

          {/* Horizontal shelf base */}
          <div className="absolute bottom-0 w-full h-8 bg-[#654321] rounded-b-lg z-0 shadow-xl" />
        </div>
      ))}

      {/* Project Details Modal */}
      {selectedProject && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedProject(null)}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            className="relative bg-white max-w-2xl w-full p-8 rounded-lg shadow-2xl"
            style={{
              border: '2px solid #8B6F47',
              fontFamily: "'Crimson Pro', serif",
              background: selectedColor, // Apply gradient here
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedProject(null)}
              className="absolute top-4 right-4 text-2xl text-[#5C4033] hover:text-[#8B6F47]"
            >
              ×
            </button>

            <div className="space-y-6 text-[#5C4033]">
              <h2 className="text-4xl font-bold mb-4 border-b-2 border-[#8B6F47] pb-2">
                {selectedProject.title}
                <span className="block text-xl font-normal mt-1">
                  {selectedProject.category}
                </span>
              </h2>

              <p className="text-xl leading-relaxed">
                {selectedProject.description}
              </p>

              <div className="flex flex-wrap gap-2">
                {selectedProject.technologies.map((tech, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-[#8B6F47] bg-opacity-20 rounded-full text-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex gap-4 mt-8">
                <a
                  href={selectedProject.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-2 bg-[#8B6F47] text-white rounded-lg hover:bg-[#6B705C] transition-colors"
                >
                  View Code
                </a>
                <a
                  href={selectedProject.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-2 border-2 border-[#8B6F47] text-[#5C4033] rounded-lg hover:bg-[#8B6F47] hover:text-white transition-colors"
                >
                  Live Demo
                </a>
              </div>
            </div>

            {/* Decorative paper texture elements */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden rounded-lg">
              <div className="absolute top-0 left-0 w-full h-4 bg-gradient-to-b from-[#ffffff40] to-transparent" />
              <div className="absolute bottom-0 left-0 w-full h-4 bg-gradient-to-t from-[#ffffff40] to-transparent" />
              <div className="absolute left-0 top-0 h-full w-4 bg-gradient-to-r from-[#ffffff40] to-transparent" />
              <div className="absolute right-0 top-0 h-full w-4 bg-gradient-to-l from-[#ffffff40] to-transparent" />
            </div>
          </motion.div>
        </div>
      )}
    </div>
  );
};

export default LayeredBookshelf;
