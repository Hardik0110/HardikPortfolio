
import { motion } from "framer-motion";

const AboutSection = () => {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <motion.div 
          className="max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Hi there! I'm Hardik.</h2>
          <p className="text-lg mb-6">
            I'm a web designer and developer passionate about creating beautiful, 
            functional websites and applications that provide exceptional user experiences.
          </p>
          <p className="text-lg">
            With expertise in modern frontend technologies and an eye for design, 
            I bring creative concepts to life through clean, efficient code and 
            thoughtful user interfaces.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
