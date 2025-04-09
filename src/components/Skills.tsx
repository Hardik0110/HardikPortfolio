import { motion } from "framer-motion";

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
    <section className="bg-white min-h-screen relative overflow-hidden">
      <div className="absolute inset-0 grid grid-cols-[repeat(20,1fr)] grid-rows-[repeat(20,1fr)] opacity-60">
        {Array.from({ length: 400 }).map((_, i) => (
          <div key={i} className="border-r border-b border-black/20"></div>
        ))}
      </div>

      <div className="container mx-auto px-4 pt-16 pb-16 relative z-10">
        <motion.h2
          className="text-6xl md:text-7xl font-bold text-center mb-12 italic underline"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          My Skills
        </motion.h2>

        <div className="flex flex-col md:flex-row gap-8 mt-12">
          {/* Left side - Image */}
          <motion.div 
            className="md:w-1/2"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="aspect-square rounded-2xl overflow-hidden ">
              <img
                src="src\assets\YOsimspon.PNG"
                alt="Skills illustration"
                className="w-full h-full  object-center "
              />
            </div>
          </motion.div>

          {/* Right side - Skills */}
          <div className="md:w-1/2">
            <motion.p
              className="text-lg mb-8"
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              The technologies I work with can vary from client to projects, but I primarily focus on having fun while coding. I have experience with a variety of technologies, including:
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
                >
                  {skill.name}
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;