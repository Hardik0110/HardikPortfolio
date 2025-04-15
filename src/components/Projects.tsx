import React, { useState } from 'react';
import { motion } from "framer-motion";
import { 
  FileCode, Palette, Tv, Lightbulb, CheckSquare, 
  Coins, Brain, User, Search, FileText, Github, ExternalLink 
} from 'lucide-react';
import projectData from '../lib/projectdata.json';
import ProjectCard from '@/components/Project/ProjectCard';
import CloudBackground from '@/components/Project/CloudBackground';
import DonutIcon from '@/components/Project/DonutIcon';
import TVFrame from '@/components/Project/TVFrame';
import CouchScene from '@/components/Project/CouchScene';
import { 
  Dialog, 
  DialogContent, 
  DialogHeader, 
  DialogTitle,
  DialogDescription,
  DialogFooter
} from '@/components/ui/dialog';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Button } from "@/components/ui/button";

// Define a project type for better type safety
interface Project {
  id?: number;
  title: string;
  description: string;
  category: string;
  technologies: string[];
  github: string;
  live: string;
  icon?: React.ReactNode;
  className?: string;
}

const Projects = () => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  // Map icons to categories for dynamic icon rendering
  const iconMap = {
    "Dashboard": <CheckSquare className="text-blue-300" />,
    "UI Kit": <Palette className="text-purple-500" />,
    "Resume": <FileText className="text-green-500" />,
    "Form Builder": <FileCode className="text-yellow-500" />,
    "Crypto": <Coins className="text-amber-500" />,
    "AI": <Brain className="text-red-500" />,
    "Portfolio": <User className="text-black" />,
    "Search": <Search className="text-cyan-500" />,
    "Form": <FileText className="text-teal-500" />
  };

  // Map background colors to categories
  const bgColorMap = {
    "Dashboard": "bg-blue-100",
    "UI Kit": "bg-purple-100",
    "Resume": "bg-green-100",
    "Form Builder": "bg-yellow-100",
    "Crypto": "bg-amber-100",
    "AI": "bg-red-100",
    "Portfolio": "bg-indigo-100",
    "Search": "bg-cyan-100",
    "Form": "bg-teal-100"
  };

  // Enhance project data with icons and background colors
  const projects = projectData.map(project => ({
    ...project,
    icon: iconMap[project.category],
    className: bgColorMap[project.category]
  }));

  // Handle opening the dialog with project details
  const handleProjectClick = (project: Project) => {
    setSelectedProject(project);
    setIsDialogOpen(true);
  };

  // Handle opening a link in a new tab
  const handleLinkClick = (url: string, e: React.MouseEvent) => {
    e.stopPropagation();
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="min-h-screen h-screen flex flex-col relative overflow-hidden bg-[#6DE1D2]">
      {/* Grid pattern background */}
      <div className="absolute inset-0 grid grid-cols-[repeat(20,1fr)] grid-rows-[repeat(20,1fr)] opacity-60">
        {Array.from({ length: 400 }).map((_, i) => (
          <div key={i} className="border-r border-b border-black/20"></div>
        ))}
      </div>

      {/* Background clouds with adjusted z-index */}
      <div className="relative z-10">
        <CloudBackground />
      </div>
      
      {/* Main content with adjusted z-index */}
      <div className="container mx-auto px-4 flex-1 flex flex-col justify-center items-center relative z-20">
        <motion.h1 
          className="text-4xl md:text-5xl font-bold text-white drop-shadow-[4px_4px_0px_rgba(0,0,0,0.7)] text-center mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
         Hardik's <span className="text-[#FF9B9B]">Code</span> Flex
        </motion.h1>
        
        {/* TVFrame container must be relative */}
        <div className="w-[95vw] max-w-[1200px] relative">
          <TVFrame>
            <div className="relative">
              <Carousel className="w-full relative">
                <CarouselContent>
                  {projects.map((project, index) => (
                    <CarouselItem key={index} className="basis-1/3 p-4 mb-12">
                      <ProjectCard 
                        title={project.title}
                        description={project.description}
                        category={project.category}
                        icon={project.icon}
                        className={project.className}
                        onClick={() => handleProjectClick(project)}
                      />
                    </CarouselItem>
                  ))}
                </CarouselContent>
                {/* Adjusted carousel buttons */}
                <CarouselPrevious className="absolute left-4  bottom-4 z-50 bg-red-700 hover:bg-gray-600 text-white border-none" />
                <CarouselNext className="absolute right-4  bottom-4 z-50 bg-red-700 hover:bg-gray-600 text-white border-none" />
              </Carousel>
            </div>
            <CouchScene />
          </TVFrame>
        </div>
        
        {/* Donuts with adjusted z-index */}
        <div className="absolute top-1/2 left-0 transform -translate-y-1/2 z-40">
        <img 
          src="/kickbuttowski.png" 
          alt="Kickbuttowski" 
          className="w-40 h-100" 
        />
      </div>
        <div className="absolute top-4 left-4 z-30">
          <DonutIcon />
        </div>
        <div className="absolute top-4 right-4 z-30">
          <DonutIcon />
        </div>
        <div className="absolute bottom-4 left-4 z-30">
          <DonutIcon />
        </div>
        <div className="absolute bottom-4 right-4 z-30">
          <DonutIcon />
        </div>
        <div className="absolute top-1/2 right-0 transform -translate-y-1/2 z-40">
        <img 
          src="/jerry.png" 
          alt="Jerry" 
          className="w-40 h-100" 
        />
      </div>
      </div>

   

      {/* Project details dialog with higher z-index */}
      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent className="bg-white border-4 border-[#8B6F47] max-w-md z-50">
          {selectedProject && (
            <>
              <DialogHeader>
                <div className="flex items-center">
                  <div className="mr-2 text-2xl">{selectedProject.icon}</div>
                  <DialogTitle className="text-xl font-comic">{selectedProject.title}</DialogTitle>
                </div>
                <DialogDescription>{selectedProject.description}</DialogDescription>
              </DialogHeader>
              <div className="mt-4">
                <div className="mb-4 flex flex-col gap-3">
                  <div className="bg-yellow-100 p-3 rounded-md">
                    <h4 className="font-bold mb-2 text-simpsons-brown">Category:</h4>
                    <span className="inline-block bg-simpsons-yellow px-3 py-1 rounded-full text-sm font-medium text-simpsons-brown">
                      {selectedProject.category}
                    </span>
                  </div>
                  <div className="bg-yellow-100 p-3 rounded-md">
                    <h4 className="font-bold mb-2 text-simpsons-brown">Technologies:</h4>
                    <div className="flex flex-wrap gap-2">
                      {selectedProject.technologies.map((tech, index) => (
                        <span 
                          key={index} 
                          className="bg-blue-100 px-2 py-1 rounded-full text-xs font-medium text-blue-800"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
                <DialogFooter>
                  <div className="flex justify-center gap-4 w-full">
                    <Button 
                      variant="outline" 
                      className="flex items-center gap-2 border-2 border-simpsons-brown"
                      onClick={(e) => handleLinkClick(selectedProject.github, e)}
                    >
                      <Github size={16} />
                      GitHub
                    </Button>
                    <Button 
                      className="flex items-center gap-2 bg-simpsons-margeBlue hover:bg-blue-700"
                      onClick={(e) => handleLinkClick(selectedProject.live, e)}
                    >
                      <ExternalLink size={16} />
                      Live Demo
                    </Button>
                  </div>
                </DialogFooter>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Projects;
