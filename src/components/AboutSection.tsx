import { motion } from "framer-motion";
import { FaLinkedin, FaInstagram, FaGithub, FaTwitter } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import { IoMail, IoCall } from "react-icons/io5";
import { PhoneCall } from "lucide-react";

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

  const socialIcons = [
    { Icon: FaLinkedin, href: "https://www.linkedin.com/in/hardik0110/" },
    { Icon: FaInstagram, href: "https://www.instagram.com/hardikk0110" },
    { Icon: SiLeetcode, href: "https://leetcode.com/u/hardik0110/" },
    { Icon: FaGithub, href: "https://github.com/Hardik0110" },
    { Icon: FaTwitter, href: "#" },
    { Icon: IoMail, href: "hardikkubavat0110@gmail.com" },
    { Icon: IoCall, href: "+918140900320" },
  ];

  return (
    <section className="bg-[#ffffff] min-h-screen bg-primary relative overflow-hidden">
      <div className="absolute inset-0 grid grid-cols-[repeat(20,1fr)] grid-rows-[repeat(20,1fr)] opacity-60">
        {Array.from({ length: 400 }).map((_, i) => (
          <div key={i} className="border-r border-b border-black/20"></div>
        ))}
      </div>

      <div className="container mx-auto px-4 pt-32 pb-16 relative z-10">
        {/* Scattered Social Icons */}
        <div className="absolute top-0 left-0 w-72 h-48">
          {socialIcons.map((social, index) => (
            <motion.div
              key={index}
              className="absolute"
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{
                opacity: 1,
                scale: 1,
                x: iconPositions[index].x,
                y: iconPositions[index].y,
              }}
              viewport={{ once: true }}
              transition={{
                delay: iconPositions[index].delay,
                duration: 0.6,
                type: "spring",
                stiffness: 100,
              }}
            >
              <a
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-4xl text-[#333] hover:text-[#ff8a80] transition-colors duration:300"
              >
                <social.Icon />
              </a>
            </motion.div>
          ))}
        </div>

        {/* EXPERIENCE heading in top right */}
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

        {/* About Me Text Section */}
        <div className="flex flex-col md:flex-row items-center justify-between mt-48 gap-8  transform rotate-3">
          <motion.div
            className="w-full md:w-1/2 p-8 bg-white border-4 border-black shadow-xl rounded-3xl relative mb-16 md:mb-0"
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
              My name is Hardik Kubavat, a FRONTEND ENGINEER based in Gujarat, India. I specialize in designing creative and effective web applications that boost the digital presence of my clients.
            </motion.p>
            <motion.p
              className="text-lg mb-6"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
            >
              I personally handle everything - from brand identity design and user experience (UX) to full web development - ensuring you get the design you need, at a price you'll love, and with quality you can trust.
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
        </div>

       
      </div>
      <motion.div
          className="absolute bottom-0 right-0 w-3/4   md:w-2/5"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.7 }}
        >
          <img
            src="./src/assets/AboutSectionPhoto.png"
            alt="Hardik Kubavat"
            className="w-full object-contain"
          />
        </motion.div>
    </section>
  );
};

export default AboutSection;
