
import { motion } from "framer-motion";

const AboutSection = () => {
  return (
    <section className="min-h-screen bg-[#FEF7CD] relative overflow-hidden">
      {/* Grid pattern */}
      <div className="absolute inset-0 grid grid-cols-[repeat(20,1fr)] grid-rows-[repeat(20,1fr)] opacity-60">
        {Array.from({ length: 400 }).map((_, i) => (
          <div key={i} className="border-r border-b border-black/10"></div>
        ))}
      </div>
      
      {/* Diagonal line */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
        <div className="absolute top-0 left-0 w-[150%] h-32 bg-[#333] transform -rotate-6 -translate-y-10"></div>
      </div>
      
      <div className="container mx-auto px-4 pt-32 pb-16 relative z-10 flex flex-col md:flex-row items-start justify-between gap-12">
        {/* EXPERIENCE text */}
        <motion.h2
          className="absolute top-20 right-10 text-6xl md:text-7xl font-bold text-white bg-[#333] px-4 py-2 border-4 border-white shadow-lg transform -rotate-3"
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          EXPERIENCE
        </motion.h2>
        
        {/* Left side - text */}
        <motion.div 
          className="w-full md:w-1/2 p-8 bg-white border-4 border-black shadow-lg"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <motion.p 
            className="text-lg mb-6"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            My name is Hardik Kubavat, an award-winning web creator based in Gujarat, India. I specialize in designing creative and effective web solutions that boost the digital footprint of my clients.
          </motion.p>
          
          <motion.p 
            className="text-lg"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
          >
            I personally handle everything - from brand identity design and user experience (UX) to full web development - ensuring you get the design you need, at a price you'll love, and with quality you can trust.
          </motion.p>
        </motion.div>
        
        {/* Right side - image placeholder */}
        <motion.div 
          className="w-full md:w-2/5 aspect-square bg-[#ff8a80] border-8 border-white shadow-lg relative rounded-lg overflow-hidden"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.7 }}
        >
          {/* This is an empty placeholder for your image */}
          <div className="absolute inset-0 flex items-center justify-center text-center p-4 text-white">
            <p className="text-xl font-medium">Your Image Here</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
