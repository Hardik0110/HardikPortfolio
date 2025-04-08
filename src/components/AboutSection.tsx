import { motion } from "framer-motion";
import { useEffect, useState } from "react";

// Add Ghost component
const FloatingGhost = ({ svgPath, top, left, delay, scale }: { 
  svgPath: string;
  top: number;
  left: number;
  delay: number;
  scale: number;
}) => {
  return (
    <motion.img
      src={svgPath}
      className="absolute pointer-events-none"
      style={{
        top: `${top}%`,
        left: `${left}%`,
      }}
      initial={{ opacity: 0, scale: 0 }}
      animate={{ 
        opacity: 0.6,
        scale,
        y: [0, 15, 0],
        rotate: [0, 10, -10, 0]
      }}
      transition={{
        delay,
        duration: 2,
        repeat: Infinity,
        repeatType: "reverse",
        ease: "easeInOut"
      }}
    />
  );
};

const AboutSection = () => {
  const [ghosts, setGhosts] = useState<Array<{
    id: number;
    path: string;
    top: number;
    left: number;
    delay: number;
    scale: number;
  }>>([]);

  useEffect(() => {
    // Generate random positions that don't interfere with content
    const ghostPaths = ['/doodleghost.svg', '/ghostbeer.svg', '/scaredghost.svg'];
    const newGhosts = [];
    
    for (let i = 0; i < 6; i++) {
      newGhosts.push({
        id: i,
        path: ghostPaths[i % 3],
        // Position ghosts in a cluster in top left corner
        top: Math.random() * 2-45, // 5-25% from top
        left: Math.random() *  10, // 5-25% from left
        delay: Math.random() * 2,
        scale: 0.08 + Math.random() * 0.08 // Slightly smaller scale: 0.08-0.16
      });
    }
    
    setGhosts(newGhosts);
  }, []);

  return (
    <section className="bg-[#ffffff] min-h-screen bg-primary relative overflow-hidden">
      {/* Ghost Layer */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {ghosts.map((ghost) => (
          <FloatingGhost
            key={ghost.id}
            svgPath={ghost.path}
            top={ghost.top}
            left={ghost.left}
            delay={ghost.delay}
            scale={ghost.scale}
          />
        ))}
      </div>

      {/* Existing content */}
      {/* Grid pattern - same as hero */}
      <div className="absolute inset-0 grid grid-cols-[repeat(20,1fr)] grid-rows-[repeat(20,1fr)] opacity-60">
        {Array.from({ length: 400 }).map((_, i) => (
          <div key={i} className="border-r border-b border-black/20"></div>
        ))}
      </div>
      
      <div className="container mx-auto px-4 pt-32 pb-16 relative z-10">
        {/* EXPERIENCE text diagonally in top right */}
        <motion.div 
          className="absolute top-20 right-8 md:right-20"
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          <h2 className="text-6xl md:text-7xl font-bold text-white bg-[#333] px-4 py-2 border-4 border-white shadow-lg transform -rotate-3">
            EXPERIENCE
          </h2>
        </motion.div>
        
        <div className="flex flex-col md:flex-row items-center justify-between mt-32 gap-8">
          {/* Thought bubble text box */}
          <motion.div 
            className="w-full md:w-1/2 p-8 bg-white border-4 border-black shadow-lg rounded-3xl relative mb-16 md:mb-0"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="absolute top-0 left-0 w-16 h-16 bg-[#ff8a80] rounded-full transform -translate-x-8 -translate-y-8"></div>
            <motion.p
              className="text-2xl font-bold mb-4 justify-center items-center flex underline italic"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              >
                About Me
            </motion.p> 
            <motion.p 
              className="text-lg mb-6"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              My name is Hardik Kubavat, an FRONTEND ENGINEER based in Gujarat, India. I specialize in designing creative and effective web applications 
              that boost the digital presence of my clients.
            </motion.p>
            
            <motion.p 
              className="text-lg mb-6"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
            >
              I personally handle everything - from brand identity design and user experience (UX) to full web development - 
              ensuring you get the design you need, at a price you'll love, and with quality you can trust. 
            </motion.p>

            <motion.p 
              className="text-lg mb-6"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
            >
              And I also have a passion for machine learning and AI, which I incorporate into my projects whenever possible. 
            </motion.p>

            <motion.p 
              className="text-lg mb-6"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
            >
             Currently I am working as a Software Engineer at <a href="https://www.ElixirTechne.com/" className="text-blue-500 underline">Elixir Techne</a>. 
            </motion.p>
          </motion.div>
          
          {/* Image positioned on the right */}
          <motion.div 
            className="w-3/4 md:w-2/5 aspect-square bg-[#ff8a80] border-8 border-white shadow-lg relative rounded-lg overflow-hidden"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.7 }}
          >
            <img src="/hcoldplay.png" alt="Hardik Kubavat" className="w-full h-full object-cover" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;