import React, { ReactNode } from 'react';
import { TreePine, TreeDeciduous, Sun, Cloud } from 'lucide-react';

interface TVFrameProps {
  children: ReactNode;
}

const TVFrame = ({ children }: TVFrameProps) => {
  return (
    <div className="relative mx-auto my-8 w-full max-w-4xl">
      {/* Grid Background */}
      <div className="absolute inset-0 -z-10 bg-yellow-500 opacity-20" 
           style={{ 
             backgroundImage: 'linear-gradient(#A46422 1px, transparent 1px), linear-gradient(90deg, #A46422 1px, transparent 1px)',
             backgroundSize: '20px 20px'
           }}>
      </div>
      
      {/* TV Body */}
      <div className="bg-gray-800 rounded-t-3xl p-6 pt-8">
        {/* TV Frame */}
        <div className="bg-gray-900 rounded-2xl p-2 border-8 border-gray-700">
          {/* TV Screen */}
          <div className="tv-static relative bg-blue-700 rounded-lg overflow-hidden p-4">
            {/* TV Content */}
            {children}
            
            {/* Nature Scene at Bottom of TV */}
            <div className="absolute bottom-0 left-0 right-0 h-16 overflow-hidden">
              {/* Sky gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-green-700 to-blue-200 opacity-70"></div>
              
              {/* Sun */}
              <div className="absolute top-1 right-10">
                <Sun className="text-yellow-300" size={20} />
              </div>
              
              {/* Clouds */}
              <div className="absolute top-2 left-1/4">
                <Cloud className="text-blue-400 opacity-80" size={18} />
              </div>
              <div className="absolute top-3 right-1/3">
                <Cloud className="text-blue-400 opacity-80" size={14} />
              </div>
              
              {/* Trees */}
              <div className="absolute bottom-0 left-4">
                <TreePine className="text-green-900" size={28} />
              </div>
              <div className="absolute bottom-0 left-14">
                <TreeDeciduous className="text-green-800" size={24} />
              </div>
              <div className="absolute bottom-0 left-24">
                <TreePine className="text-green-900" size={32} />
              </div>
              <div className="absolute bottom-0 right-4">
                <TreePine className="text-green-900" size={26} />
              </div>
              <div className="absolute bottom-0 right-14">
                <TreeDeciduous className="text-green-800" size={30} />
              </div>
              <div className="absolute bottom-0 right-24">
                <TreePine className="text-green-900" size={22} />
              </div>
              <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2">
                <TreePine className="text-green-900" size={24} />
              </div>
              <div className="absolute bottom-0 left-1/3">
                <TreeDeciduous className="text-green-800" size={26} />
              </div>
              <div className="absolute bottom-0 right-1/3">
                <TreePine className="text-green-900" size={28} />
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* TV Base */}
      <div className="bg-gray-800 rounded-b-xl px-8 py-2 flex justify-center">
        <div className="w-20 h-4 bg-gray-700 rounded-lg"></div>
      </div>
      <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-24 h-6 bg-gray-800 rounded-b-lg"></div>
      
      {/* TV Controls */}
      <div className="absolute right-8 top-1/3 flex flex-col gap-2">
        <div className="w-3 h-3 bg-red-700 rounded-full"></div>
        <div className="w-3 h-3 bg-red-700 rounded-full"></div>
        <div className="w-3 h-3 bg-red-700 rounded-full"></div>
      </div>
      
      {/* TV Brand Logo */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 bg-gray-900 text-yellow-400 text-xs font-bold px-2 py-1 rounded">
        SIMPSON TV
      </div>
    </div>
  );
};

export default TVFrame;