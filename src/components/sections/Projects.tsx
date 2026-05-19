import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { ArrowUpRight, Mail } from "lucide-react";
import aiCode from "../../assets/AI_CODE_OPTIMIZER.png";
import aprycot from "../../assets/APRYCOT.png";
import brx from "../../assets/BRX.png";
import dnx from "../../assets/DNX.png";
import TiltCard from "../ui/TiltCard";
import StageCard from "../ui/StageCard";

type Tile = {
  image: string;
  title: string;
  category: string;
  tech: string;
  href?: string;
};

const tiles: Tile[] = [
  {
    image: aiCode,
    title: "AI Code Optimizer",
    category: "AI · Tooling",
    tech: "React · OpenAI · Node",
    href: "#",
  },
  {
    image: aprycot,
    title: "APRYCOT",
    category: "UI Kit",
    tech: "Next.js · Tailwind · Storybook",
    href: "#",
  },
  {
    image: brx,
    title: "BharatRobotix",
    category: "Landing · 3D",
    tech: "Three.js · Framer Motion · GSAP",
    href: "#",
  },
  {
    image: dnx,
    title: "DNX Dashboard",
    category: "Dashboard · Product",
    tech: "React · Tailwind · TypeScript",
    href: "#",
  },
];

const dropSpring = { type: "spring" as const, stiffness: 120, damping: 13 };

const dropIn = (ready: boolean, delay: number, restRotate: number) => ({
  initial: { y: -240, rotate: restRotate * 4, opacity: 0 },
  animate: ready
    ? { y: 0, rotate: restRotate, opacity: 1 }
    : { y: -240, rotate: restRotate * 4, opacity: 0 },
  transition: { ...dropSpring, delay },
});

const Projects = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const inView = useInView(sectionRef, { once: true, amount: 0.05 });
  const [bentoReady, setBentoReady] = useState(false);

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen w-full bg-[#F4E9D8] py-6 md:py-8"
    >
      {inView && (
        <StageCard
          label="02 — HERE ARE SOME OF MY WORK"
          hold={800}
          onComplete={() => setBentoReady(true)}
        />
      )}

      <div className="container mx-auto px-6 md:px-12">
        <div className="mb-4 md:mb-5 flex items-baseline justify-between">
          <span className="font-mono text-[11px] uppercase tracking-[0.22em] text-[#000F08]/55">
            002 / Selected Work
          </span>
          <span className="font-mono text-[11px] uppercase tracking-[0.22em] text-[#000F08]/55">
            2024 — 2026
          </span>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 auto-rows-[140px] md:auto-rows-[170px] 2xl:auto-rows-[210px] 3xl:auto-rows-[260px]">
          <motion.div
            {...dropIn(bentoReady, 0, -1.5)}
            className="col-span-2 row-span-2 bg-[#FB3640] rounded-3xl p-7 md:p-9 flex flex-col justify-between shadow-[6px_6px_0_rgba(0,15,8,0.85)]"
          >
            <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-[#F4E9D8]/80">
              The Work
            </span>
            <div>
              <h2 className="font-display text-4xl md:text-5xl font-black leading-[0.95] text-[#F4E9D8]">
                Projects, products,<br />and the occasional<br />weird experiment.
              </h2>
              <p className="mt-5 font-sans text-sm md:text-base text-[#F4E9D8]/85 max-w-md">
                A selection of work across product UI, motion, design systems, and AI tooling.
              </p>
            </div>
          </motion.div>

          <ProjectTile tile={tiles[0]} bentoReady={bentoReady} dropDelay={0.08} restRotate={2} className="col-span-2 row-span-2" />
          <ProjectTile tile={tiles[1]} bentoReady={bentoReady} dropDelay={0.18} restRotate={-2.5} className="col-span-1 row-span-1" />
          <ProjectTile tile={tiles[2]} bentoReady={bentoReady} dropDelay={0.26} restRotate={1.2} className="col-span-1 row-span-1" />
          <ProjectTile tile={tiles[3]} bentoReady={bentoReady} dropDelay={0.34} restRotate={-1} className="col-span-2 row-span-1" />

          <motion.div
            {...dropIn(bentoReady, 0.42, 2)}
            className="col-span-2 row-span-1 bg-[#000F08] rounded-3xl p-6 md:p-7 flex flex-col justify-between shadow-[6px_6px_0_rgba(0,15,8,0.85)]"
          >
            <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-[#FB3640]">
              Stack
            </span>
            <p className="font-display text-xl md:text-2xl font-black leading-tight text-[#F4E9D8]">
              React <span className="text-[#FB3640]">·</span> Next <span className="text-[#FB3640]">·</span> Tailwind <span className="text-[#FB3640]">·</span> Three.js <span className="text-[#FB3640]">·</span> Python <span className="text-[#FB3640]">·</span> OpenAI
            </p>
          </motion.div>

          <motion.a
            {...dropIn(bentoReady, 0.5, -1.8)}
            href="mailto:hardikkubavat0110@gmail.com"
            className="col-span-2 row-span-1 bg-[#F4E9D8] border-[3px] border-[#FB3640] rounded-3xl p-6 md:p-7 flex flex-col justify-between group shadow-[6px_6px_0_rgba(0,15,8,0.85)] hover:bg-[#FB3640] hover:border-[#000F08] hover:text-[#F4E9D8] transition-colors"
          >
            <div className="flex items-center justify-between text-[#000F08] group-hover:text-[#F4E9D8]">
              <Mail className="w-5 h-5" />
              <ArrowUpRight className="w-5 h-5 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </div>
            <p className="font-display text-xl md:text-2xl font-black leading-tight text-[#000F08] group-hover:text-[#F4E9D8]">
              Got an idea?<br />Let's build it.
            </p>
          </motion.a>
        </div>
      </div>
    </section>
  );
};

const ProjectTile = ({
  tile,
  bentoReady,
  dropDelay,
  restRotate,
  className,
}: {
  tile: Tile;
  bentoReady: boolean;
  dropDelay: number;
  restRotate: number;
  className: string;
}) => (
  <motion.div
    {...dropIn(bentoReady, dropDelay, restRotate)}
    className={className}
  >
    <TiltCard
      as="a"
      href={tile.href}
      className="relative rounded-3xl shadow-[6px_6px_0_rgba(0,15,8,0.85)] group cursor-pointer block w-full h-full"
    >
      <div className="relative w-full h-full overflow-hidden rounded-3xl">
        <img
          src={tile.image}
          alt={tile.title}
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#000F08]/95 via-[#000F08]/35 to-transparent" />
        <div className="relative h-full flex flex-col justify-between p-5 md:p-6 text-[#F4E9D8]">
          <div className="flex items-start justify-between">
            <span className="font-mono text-[10px] uppercase tracking-[0.18em] bg-[#000F08]/40 backdrop-blur-sm px-2 py-1 rounded-full">
              {tile.category}
            </span>
            <ArrowUpRight className="w-5 h-5 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </div>
          <div>
            <h3 className="font-display text-2xl md:text-3xl font-black leading-tight">
              {tile.title}
            </h3>
            <p className="mt-1 font-mono text-[10px] md:text-xs uppercase tracking-[0.16em] opacity-80">
              {tile.tech}
            </p>
          </div>
        </div>
      </div>
    </TiltCard>
  </motion.div>
);

export default Projects;
