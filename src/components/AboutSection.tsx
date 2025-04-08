import { motion } from "framer-motion";

const AboutSection = () => {
  return (
    <section className="bg-[#ffffff] min-h-screen bg-primary relative overflow-hidden">
      
      {/* Existing content */}
      <div className="absolute inset-0 grid grid-cols-[repeat(20,1fr)] grid-rows-[repeat(20,1fr)] opacity-60">
        {Array.from({ length: 400 }).map((_, i) => (
          <div key={i} className="border-r border-b border-black/20"></div>
        ))}
      </div>
      

      <div className="container mx-auto px-4 pt-32 pb-16 relative z-10">
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
              My name is Hardik Kubavat, a FRONTEND ENGINEER based in Gujarat, India. I specialize in designing creative and effective web applications
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
              Currently I am working as a Software Engineer at{" "}
              <a href="https://www.ElixirTechne.com/" className="text-blue-500 underline">
                Elixir Techne
              </a>.
            </motion.p>
          </motion.div>

          <motion.div
            className="w-3/4 md:w-2/5 aspect-square bg-[#ff8a80] border-8 border-white shadow-lg relative rounded-lg overflow-hidden"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.7 }}
          >
            <img src="./src/assets/hcoldplay.png" alt="Hardik Kubavat" className="w-full h-full object-cover" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;