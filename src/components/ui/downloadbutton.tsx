import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { Download } from 'lucide-react';

const useResponsiveSize = () => {
  const [size, setSize] = useState({ collapsed: 64, expanded: 220, icon: 26 });

  useEffect(() => {
    const compute = () => {
      const w = window.innerWidth;
      if (w >= 1920) setSize({ collapsed: 64, expanded: 220, icon: 24 });
      else if (w >= 1536) setSize({ collapsed: 56, expanded: 200, icon: 22 });
      else setSize({ collapsed: 48, expanded: 180, icon: 20 });
    };
    compute();
    window.addEventListener('resize', compute);
    return () => window.removeEventListener('resize', compute);
  }, []);

  return size;
};

export default function AnimatedDownloadButton() {
  const [isHovered, setIsHovered] = useState(false);
  const size = useResponsiveSize();

  return (
    <a
      href="https://drive.google.com/file/d/11eZ--GdKn6PfNppK-XWvEMTZT8P5AqoL/view?usp=sharing"
      download
      className="relative inline-block z-20 pointer-events-auto"
    >
      <motion.div
        initial={{ width: size.collapsed, height: size.collapsed }}
        animate={{ width: size.collapsed, height: size.collapsed }}
        whileHover={{ width: size.expanded }}
        onHoverStart={() => setIsHovered(true)}
        onHoverEnd={() => setIsHovered(false)}
        transition={{ duration: 0.3 }}
        className="bg-[#FB3640] flex items-center justify-center overflow-hidden relative shadow-[6px_6px_0_rgba(0,15,8,0.85)]"
        style={{ borderRadius: size.collapsed / 2 }}
      >
        <motion.div
          className="absolute"
          animate={{
            opacity: isHovered ? 0 : 1,
            scale: isHovered ? 0.8 : 1,
          }}
          transition={{ duration: 0.2 }}
        >
          <Download size={size.icon} strokeWidth={2.5} className="text-white" />
        </motion.div>

        <motion.div
          className="w-full flex justify-center items-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: isHovered ? 1 : 0 }}
          transition={{
            duration: 0.2,
            delay: isHovered ? 0.1 : 0,
          }}
        >
          <span className="text-white text-lg 2xl:text-xl 3xl:text-2xl font-bold whitespace-nowrap">Download Resume</span>
        </motion.div>
      </motion.div>
    </a>
  );
}
