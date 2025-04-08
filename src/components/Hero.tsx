
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen w-full bg-primary relative overflow-hidden">
      {/* Grid pattern */}
      <div className="absolute inset-0 grid grid-cols-[repeat(20,1fr)] grid-rows-[repeat(20,1fr)] opacity-60">
        {Array.from({ length: 400 }).map((_, i) => (
          <div key={i} className="border-r border-b border-black/20"></div>
        ))}
      </div>
      
      <div className="relative z-10 text-center px-4 transform rotate-[-5deg]">
        <motion.h1 
          className="text-6xl md:text-8xl font-bold text-white drop-shadow-[4px_4px_0px_rgba(0,0,0,0.7)] mb-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0, rotateZ: [0, -2, 2, 0] }}
          transition={{ 
            opacity: { duration: 0.6 },
            y: { duration: 0.6 },
            rotateZ: { duration: 1.5, repeat: Infinity, repeatType: "reverse", repeatDelay: 5 }
          }}
        >
          HARDIK KUBAVAT
        </motion.h1>
        
        <motion.div 
          className="bg-secondary inline-block px-6 py-2 transform rotate-[-2deg] mb-4"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-5xl font-bold text-black drop-shadow-[2px_2px_0px_rgba(0,0,0,0.2)]">
            SOFTWARE DEVELOPER
          </h2>
        </motion.div>
        
        <motion.div 
          className="bg-accent inline-block px-6 py-2 transform rotate-[1deg]"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4, duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-5xl font-bold text-white drop-shadow-[2px_2px_0px_rgba(0,0,0,0.2)]">
            MACHINE LEARNING GEEK
          </h2>
        </motion.div>
      </div>
      
      {/* Scroll indicator */}
      <motion.div 
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: [0.4, 1, 0.4] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="flex flex-col items-center">
          <p className="text-white mb-2">Scroll Down</p>
          <motion.div 
            className="w-6 h-10 border-2 border-white rounded-full flex items-start justify-center p-1"
            initial={{ y: 0 }}
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            <div className="w-1.5 h-3 bg-white rounded-full" />
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default Hero;
