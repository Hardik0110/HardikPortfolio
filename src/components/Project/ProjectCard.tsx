import React from 'react';
import { cn } from '@/lib/utils';
import { ExternalLink, Github } from 'lucide-react';

interface ProjectCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  className?: string;
  onClick?: () => void;
  longDescription?: string;
  technologies?: string[];
  github?: string;
  live?: string;
  category?: string;
}

const ProjectCard = ({ 
  title, 
  description, 
  icon, 
  className,
  onClick,
  longDescription,
  technologies,
  github,
  live,
  category
}: ProjectCardProps) => {
  return (
    <div 
      className={cn(
        "relative bg-white rounded-xl p-4 shadow-lg border-4 border-simpsons-brown transition-all duration-300 hover:scale-105 cursor-pointer",
        className
      )}
      onClick={onClick}
      role="button"
      tabIndex={0}
    >
      <div className="absolute -top-4 -right-4 text-3xl animate-bounce-subtle">
        {icon}
      </div>
      {category && (
        <div className="absolute -top-2 -left-2 bg-simpsons-yellow text-simpsons-brown text-xs px-2 py-1 rounded-full font-bold">
          {category}
        </div>
      )}
      <h3 className="text-lg font-bold font-comic mb-2">{title}</h3>
      <p className="text-sm text-gray-700">{description}</p>
    </div>
  );
};

export default ProjectCard;