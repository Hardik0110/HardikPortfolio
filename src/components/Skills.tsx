
"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Book } from "lucide-react";

interface Technology {
  name: string;
  image: string;
  description: string;
}

const technologies: Technology[] = [
  {
    name: "TypeScript",
    image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=600&h=800",
    description: "TypeScript is a strongly typed programming language that builds on JavaScript, giving you better tooling at any scale."
  },
  {
    name: "JavaScript",
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=600&h=800",
    description: "JavaScript is a lightweight, interpreted programming language with first-class functions and is best known as the scripting language for Web pages."
  },
  {
    name: "React",
    image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&w=600&h=800",
    description: "React is a JavaScript library for building user interfaces. It is maintained by Facebook and a community of individual developers and companies."
  },
  {
    name: "HTML & CSS",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=600&h=800",
    description: "HTML (HyperText Markup Language) and CSS (Cascading Style Sheets) are the core technologies for building Web pages."
  },
  {
    name: "Framer Motion",
    image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?auto=format&fit=crop&w=600&h=800",
    description: "Framer Motion is a production-ready motion library for React. It's simple yet powerful, allowing you to express complex animations with simple declarative syntax."
  },
  {
    name: "Three.js",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=600&h=800",
    description: "Three.js is a cross-browser JavaScript library and API used to create and display animated 3D computer graphics in a web browser using WebGL."
  }
];

export default function Skills() {
  const [selectedBook, setSelectedBook] = useState<Technology | null>(null);

  const handleBookClick = (tech: Technology) => {
    if (selectedBook?.name === tech.name) {
      setSelectedBook(null);
    } else {
      setSelectedBook(tech);
    }
  };

  return (
    <div className="h-screen w-full relative">
      <div className="absolute inset-0 bg-white">
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
            className="text-5xl font-bold text-center pt-8 pb-4 text-black"
          >
            Skills & Technologies
          </motion.h1>

          <div className="flex-1 w-full flex items-center justify-center">
            <div className="w-full max-w-5xl">
              <div className="bookshelf p-8 bg-[#f3f3f3] rounded-lg shadow-lg border-2 border-black mb-8">
                <Carousel
                  opts={{
                    align: "start",
                    loop: true,
                  }}
                  className="w-full"
                >
                  <CarouselContent className="py-4">
                    {technologies.map((tech, index) => (
                      <CarouselItem key={index} className="basis-1/2 sm:basis-1/3 md:basis-1/4 lg:basis-1/5">
                        <motion.div 
                          className="flex flex-col items-center cursor-pointer"
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          onClick={() => handleBookClick(tech)}
                        >
                          <div className="book-cover h-80 w-56 relative overflow-hidden rounded-sm shadow-xl border-2 border-gray-800">
                            <img 
                              src={tech.image} 
                              alt={tech.name} 
                              className="w-full h-full object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/50 flex items-end p-4">
                              <div className="flex items-center justify-center w-full">
                                <Book className="w-6 h-6 text-white mr-2" />
                                <h3 className="text-white font-bold text-lg">{tech.name}</h3>
                              </div>
                            </div>
                          </div>
                        </motion.div>
                      </CarouselItem>
                    ))}
                  </CarouselContent>
                  <div className="flex justify-center mt-4">
                    <CarouselPrevious className="static mr-2 hover:bg-gray-200 transition-colors" />
                    <CarouselNext className="static ml-2 hover:bg-gray-200 transition-colors" />
                  </div>
                </Carousel>
              </div>

              {selectedBook && (
                <motion.div 
                  className="p-6 bg-white rounded-lg shadow-lg border-2 border-black"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 20 }}
                >
                  <div className="flex flex-col md:flex-row gap-6">
                    <div className="md:w-1/3">
                      <div className="book-cover h-60 w-40 mx-auto relative overflow-hidden rounded-sm shadow-xl border-2 border-gray-800">
                        <img 
                          src={selectedBook.image} 
                          alt={selectedBook.name} 
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </div>
                    <div className="md:w-2/3">
                      <h2 className="text-2xl font-bold mb-4">{selectedBook.name}</h2>
                      <p className="text-lg">{selectedBook.description}</p>
                    </div>
                  </div>
                  <button 
                    onClick={() => setSelectedBook(null)}
                    className="mt-4 px-4 py-2 bg-black text-white rounded-md hover:bg-gray-800 transition-colors"
                  >
                    Close
                  </button>
                </motion.div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
