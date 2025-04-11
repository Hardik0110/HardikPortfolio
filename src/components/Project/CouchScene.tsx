import React from 'react';
import { Heart } from 'lucide-react';

const CouchScene = () => {
  return (
    <div className="relative h-32 mt-4">
      {/* Couch */}
      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-80 h-16 bg-simpsons-homerPink rounded-t-3xl rounded-b-lg border-2 border-simpsons-brown"></div>
      
      {/* Couch back */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 w-75 h-10 bg-simpsons-homerPink rounded-t-xl border-2 border-simpsons-brown"></div>
      
      {/* Couch cushions */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-1">
        <div className="w-18 h-10 bg-simpsons-homerPink border-b-2 border-simpsons-brown rounded-t-lg"></div>
        <div className="w-18 h-10 bg-simpsons-homerPink border-b-2 border-simpsons-brown rounded-t-lg"></div>
        <div className="w-18 h-10 bg-simpsons-homerPink border-b-2 border-simpsons-brown rounded-t-lg"></div>
      </div>
      
      {/* Character silhouettes */}
      <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 flex justify-center space-x-4">
        <div className="w-12 h-14 bg-black opacity-70 rounded-full"></div>
        <div className="w-12 h-20 bg-black opacity-70 rounded-b-lg" style={{ borderTopLeftRadius: '40%', borderTopRightRadius: '40%' }}></div>
        <div className="w-12 h-16 bg-black opacity-70 rounded-full"></div>
        <div className="w-10 h-12 bg-black opacity-70 rounded-full"></div>
        <div className="w-8 h-10 bg-black opacity-70 rounded-full"></div>
      </div>
      
      {/* Floating hearts */}
      <Heart className="absolute top-0 left-20 w-6 h-6 text-red-500 animate-bounce-subtle" />
      <Heart className="absolute top-4 right-24 w-4 h-4 text-red-500 animate-bounce-subtle" style={{ animationDelay: '0.5s' }} />
      <Heart className="absolute top-8 left-40 w-5 h-5 text-red-500 animate-bounce-subtle" style={{ animationDelay: '1s' }} />
    </div>
  );
};

export default CouchScene;