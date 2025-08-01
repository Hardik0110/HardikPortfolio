import { motion } from "framer-motion";
import { FaLinkedin, FaInstagram, FaGithub, FaTwitter } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import { IoMail, IoCall } from "react-icons/io5";

const AboutSection = () => {
  const iconPositions = [
    { x: 380, y: 50, delay: 0.2 },
    { x: 210, y: 20, delay: 0.3 },
    { x: 120, y: 120, delay: 0.4 },
    { x: 300, y: 150, delay: 0.5 },
    { x: 450, y: 220, delay: 0.6 },
    { x: 200, y: 250, delay: 0.7 },
    { x: 550, y: 120, delay: 0.8 },
  ];

  const mobileIconPositions = [
    { x: 20, y: 10, delay: 0.2 },
    { x: 80, y: 5, delay: 0.3 },
    { x: 140, y: 15, delay: 0.4 },
    { x: 200, y: 8, delay: 0.5 },
    { x: 50, y: 40, delay: 0.6 },
    { x: 110, y: 45, delay: 0.7 },
    { x: 170, y: 50, delay: 0.8 },
  ];

  const socialIcons = [
    { Icon: FaLinkedin, href: "https://www.linkedin.com/in/hardik0110/" },
    { Icon: FaInstagram, href: "https://www.instagram.com/hardikk0110" },
    { Icon: SiLeetcode, href: "https://leetcode.com/u/hardik0110/" },
    { Icon: FaGithub, href: "https://github.com/Hardik0110" },
    { Icon: FaTwitter, href: "#" },
    { Icon: IoMail, href: "hardikkubavat0110@gmail.com" },
    { Icon: IoCall, href: "+918140900320" },
  ];

  const bounceAnimation = {
    initial: { y: 0 },
    animate: {
      y: [10, -10, 10],
      transition: {
        duration: 0.5,
        repeat: Infinity,
        repeatDelay: 1
      }
    }
  };

  return (
    <section className="bg-[#ffffff] min-h-screen bg-primary relative overflow-hidden">
      <div className="absolute inset-0 grid grid-cols-[repeat(20,1fr)] grid-rows-[repeat(20,1fr)] opacity-60">
        {Array.from({ length: 400 }).map((_, i) => (
          <div key={i} className="border-r border-b border-black/20"></div>
        ))}
      </div>

      <div className="container mx-auto px-4 pt-32 pb-16 relative z-10">
        {/* Scattered Social Icons */}
        <div className="absolute top-0 left-0 w-72 md:w-72 w-full h-48 md:h-48 h-20 z-20">
          {socialIcons.map((social, index) => (
            <motion.div
              key={index}
              className="absolute"
              initial={{ opacity: 0, scale: 0 }}
              variants={bounceAnimation}
              whileInView={{
                opacity: 1,
                scale: 1,
                x: window.innerWidth < 768 ? mobileIconPositions[index].x : iconPositions[index].x,
                y: window.innerWidth < 768 ? mobileIconPositions[index].y : iconPositions[index].y,
              }}
              viewport={{ once: true }}
              transition={{
                delay: window.innerWidth < 768 ? mobileIconPositions[index].delay : iconPositions[index].delay,
                duration: 0.6,
                type: "spring",
                stiffness: 100,
              }}
            >
              <a
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-3xl md:text-3xl text-2xl text-[#333] hover:text-[#ff8a80] transition-colors duration:300"
              >
                <social.Icon />
              </a>
            </motion.div>
          ))}
        </div>

        {/* EXPERIENCE heading in top right */}
        <motion.div
          className="absolute top-20 md:top-20 top-16 right-8 md:right-20 z-10"
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          <h2 className="text-6xl md:text-7xl text-4xl font-bold text-white bg-[#333] px-4 py-2 border-4 border-white shadow-lg transform -rotate-3">
            EXPERIENCE
          </h2>
        </motion.div>

        {/* About Me Text Section */}
        <div className="flex flex-col md:flex-row items-center justify-between mt-44 md:mt-44 mt-20 transform rotate-3">
          <motion.div
            className="w-full md:w-1/2 p-8 bg-white border-4 border-black shadow-xl rounded-3xl relative mb-16 md:mb-0"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="absolute top-0 left-0 w-12 h-12 bg-[#ff8a80] rounded-full transform -translate-x-8 -translate-y-8"></div>
            <motion.p
              className="text-xl font-bold mb-4 justify-center items-center flex underline italic"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              About Me
            </motion.p>
            <motion.p
              className="text-md mb-6"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              My name is Hardik Kubavat, a FRONTEND ENGINEER based in Gujarat, India. I specialize in designing creative and effective web applications that boost the digital presence of my clients.
            </motion.p>
            <motion.p
              className="text-md mb-6"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
            >
              I personally handle everything - from brand identity design and user experience (UX) to full web development - ensuring you get the design you need, at a price you'll love, and with quality you can trust.
            </motion.p>
            <motion.p
              className="text-md mb-6"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
            >
              And I also have a passion for machine learning and AI, which I incorporate into my projects whenever possible.
            </motion.p>
            <motion.p
              className="text-md mb-6"
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
        </div>
      </div>
      <motion.div
          className="absolute bottom-0 right-0 w-3/4 md:w-2/5 hidden md:block"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.7 }}
        >
          <img
            src="./AboutSectionPhoto.png"
            alt="Hardik Kubavat"
            className="w-full object-contain"
          />
        </motion.div>
        {/* Scroll indicator */}
              {['left-20'].map((position) => (
                <motion.div
                  key={position}
                  className={`absolute bottom-5 ${position} -translate-x-1/2 z-20`}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: [0.4, 1, 0.4] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <div className="flex flex-col items-center">
                    <p className="text-black mb-2">Scroll Down</p>
                    <motion.div
                      className="w-6 h-10 border-2 border-black rounded-full flex items-start justify-center p-1"
                      initial={{ y: 0 }}
                      animate={{ y: [0, 10, 0] }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                    >
                      <div className="w-1.5 h-3 bg-black rounded-full" />
                    </motion.div>
                  </div>
                </motion.div>
              ))}
    </section>
  );
};

export default AboutSection;