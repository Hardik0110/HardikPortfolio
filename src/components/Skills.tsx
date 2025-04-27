import { motion, useAnimation } from "framer-motion";
import { useEffect, useRef } from "react";

const imageSources = [
  "/image.svg",
  "/image1.svg",
  "/image2.svg",
  "/image3.svg",
  "/image4.svg",
  "/image5.svg",
];

const MovingImage = ({ src }) => {
  const controls = useAnimation();
  const isMounted = useRef(true);

  const getRandomPosition = () => ({
    top: `${Math.random() * 100}%`,
    left: `${Math.random() * 100}%`,
    rotate: `${Math.floor(Math.random() * 240) - 180}deg`,
    scale: Math.random() * 0.5 + 0.7,
    opacity: 1,
  });

  useEffect(() => {
    isMounted.current = true;

    const animateToNewPosition = async () => {
      if (!isMounted.current) return;
      const newPosition = getRandomPosition();
      const duration = Math.random() * 2 + 4;
      await controls.start({
        ...newPosition,
        opacity: 1,
        transition: { duration, ease: "linear" },
      });
      if (isMounted.current) {
        animateToNewPosition();
      }
    };

    animateToNewPosition();

    return () => {
      isMounted.current = false;
    };
  }, [controls]);

  const initialPosition = getRandomPosition();
  initialPosition.opacity = 0.2;
  initialPosition.scale = 0.8;

  return (
    <motion.img
      src={src}
      alt="Decorative shape"
      className="absolute w-24 md:w-32"
      style={{ zIndex: 1 }}
      initial={initialPosition}
      animate={controls}
      whileHover={{ scale: 1.2, transition: { duration: 0.2 } }}
    />
  );
};

const Skills = () => {
  const skills = [
    { name: "TypeScript", color: "bg-blue-500" },
    { name: "JavaScript", color: "bg-yellow-500" },
    { name: "React", color: "bg-cyan-500" },
    { name: "HTML", color: "bg-orange-600" },
    { name: "CSS", color: "bg-blue-600" },
    { name: "Tailwind CSS", color: "bg-teal-500" },
    { name: "Machine Learning", color: "bg-pink-500" },
    { name: "Framer Motion", color: "bg-indigo-400" },
    { name: "Three.js", color: "bg-green-500" },
    { name: "Node.js", color: "bg-green-600" },
    { name: "Express", color: "bg-gray-500" },
    { name: "NodeJS", color: "bg-blue-800" },
    { name: "AI", color: "bg-orange-400" },
    { name: "Listening Music", color: "bg-purple-500" },
  ];

  return (
    <section className="bg-[#F75A5A] min-h-screen relative overflow-hidden">
      {imageSources.map((src, index) => (
        <MovingImage key={index} src={src} />
      ))}

      <div className="absolute inset-0 grid grid-cols-[repeat(20,1fr)] grid-rows-[repeat(20,1fr)] opacity-60">
        {Array.from({ length: 400 }).map((_, i) => (
          <div key={i} className="border-r border-b border-black/20"></div>
        ))}
      </div>

      <div className="container mx-auto px-4 pt-16 pb-16 relative z-10">
        <motion.h2
          className="text-6xl md:text-7xl font-bold text-center mb-12 text-yellow-300"
          style={{ textShadow: '3px 3px 6px rgba(0,0,0,0.5)' }}
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="italic">MySkillHub™</span> <span className="text-gray-700">(Definitely Legit)</span>
        </motion.h2>

        <div className="flex flex-col md:flex-row gap-8 mt-12">
          <motion.div
            className="md:w-1/2"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="aspect-square rounded-2xl overflow-hidden">
              <img
                src="/YOsimspon.PNG"
                alt="Skills illustration"
                className="w-full h-full object-center"
              />
            </div>
          </motion.div>

          

          <div className="md:w-1/2">
            <motion.p
              className="text-xl mb-8 text-gray-800 leading-relaxed"
              style={{ textShadow: '1px 1px 2px rgba(0,0,0,0.3)' }}
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              These are my skills — crafted with caffeine, memes, and a little help from Large Language Models (because why struggle alone?).
              I don’t just code... I vibe with the code.
              Sometimes the code vibes back. Enter at your own risk — you might learn something... or get confused. Either way, it's a win.
            </motion.p>

            <div className="grid grid-cols-2 gap-4">
              {skills.map((skill, index) => (
                <motion.div
                  key={index}
                  className={`flex items-center justify-center h-12 ${skill.color} rounded-xl shadow-xl text-lg font-semibold text-white`}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                >
                  {skill.name}
                </motion.div>
              ))}
            </div>
          </div>
          {/* Scroll indicator */}
          {['left-50'].map((position) => (
        <motion.div
          key={position}
          className={`absolute bottom-20 ${position} -translate-x-1/2 z-20`}
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
        </div>
      </div>
    </section>
  );
};

export default Skills;