import { motion } from "framer-motion";
import { Globe } from "./ui/globe";
import AnimatedDownloadButton from "./ui/downloadbutton";

const Hero = () => {
  return (
    <div className="bg-[#FADC00] flex flex-col items-center justify-center min-h-screen w-full bg-primary relative overflow-hidden">
      {/* Grid pattern */}
      <div className="absolute inset-0 grid grid-cols-[repeat(20,1fr)] grid-rows-[repeat(20,1fr)] opacity-60">
        {Array.from({ length: 400 }).map((_, i) => (
          <div key={i} className="border-r border-b border-black/20"></div>
        ))}
      </div>

      <div className="relative z-10 text-center px-4 transform rotate-[-5deg] mb-64 md:mb-64 mb-32">
        <motion.h1
          className="text-6xl md:text-8xl font-bold text-white drop-shadow-[4px_4px_0px_rgba(0,0,0,0.7)] mb-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0, rotateZ: [0, -2, 2, 0] }}
          transition={{
            opacity: { duration: 0.6 },
            y: { duration: 0.6 },
            rotateZ: { duration: 1.5, repeat: Infinity, repeatType: "reverse", repeatDelay: 5 },
          }}
        >
          HARDIK KUBAVAT
        </motion.h1>

        <motion.div
          className="bg-[#C4F0E9] inline-block px-6 py-2 transform rotate-[-2deg] mb-4 rounded-full"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-5xl font-bold text-black drop-shadow-[2px_2px_0px_rgba(0,0,0,0.2)]">
            SOFTWARE DEVELOPER &
          </h2>
        </motion.div>

        <motion.div
          className="bg-[#FF9B9B] inline-block px-6 py-2 transform rotate-[1deg] rounded-full ml-2"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4, duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-5xl font-bold text-white drop-shadow-[2px_2px_0px_rgba(0,0,0,0.2)]">
            MACHINE LEARNING GEEK
          </h2>
        </motion.div>
      </div>

      {/* Globe component: half visible at the bottom */}
      <div className="absolute bottom-0 w-full h-[300px] md:h-[300px] h-[200px] overflow-hidden z-10">
        <Globe className="relative -top-[50px] md:-top-[50px] -top-[25px] opacity-80" />
      </div>

      {/* Scroll indicator */}
      {['left-20'].map((position) => (
        <motion.div
          key={position}
          className={`absolute bottom-8 ${position} -translate-x-1/2 z-20`}
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
      ))}

      {/* Full circular download button at right bottom */}
      <div className="hidden md:block">
        <AnimatedDownloadButton />
      </div>
    </div>
  );
};

export default Hero;