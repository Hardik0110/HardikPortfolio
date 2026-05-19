import { motion, useScroll, useTransform, useInView } from "framer-motion";
import { Fragment, useRef, useState } from "react";
import StageCard from "../ui/StageCard";

const stack = [
  { label: "React" },
  { label: "TypeScript" },
  { label: "Vite" },
  { label: "Tailwind" },
  { label: "Framer Motion" },
  { label: "shadcn/ui" },
  { label: "Radix UI" },
  { label: "Lucide" },
  { label: "TanStack Query" },
  { label: "React Hook Form" },
  { label: "Zod" },
  { label: "EmailJS" },
];

const alsoFluent = [
  "Next.js",
  "Node",
  "Python",
  "PyTorch",
  "OpenAI API",
  "Three.js",
  "GSAP",
  "Figma",
];

const processSteps = [
  {
    label: "Ideate",
    icon: "/illustrations/D1-process-ideate_001.jpg",
    caption: "Clarity first. Sketches before pixels.",
  },
  {
    label: "Design",
    icon: "/illustrations/D2-process-design_001.jpg",
    caption: "System + storyboards. Pixel-perfect.",
  },
  {
    label: "Build",
    icon: "/illustrations/D3-process-develop_001.jpg",
    caption: "Type-safe code. Performance-aware.",
  },
  {
    label: "Ship",
    icon: "/illustrations/D4-process-ship_001.jpg",
    caption: "Polish, QA, launch.",
  },
];

const Skills = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const inView = useInView(sectionRef, { once: true, amount: 0.05 });
  const [skillsReady, setSkillsReady] = useState(false);

  const processRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: processRef,
    offset: ["start 0.85", "center 0.55"],
  });
  const pathLength = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <section
      ref={sectionRef}
      className="relative w-full bg-[#000F08] pt-16 md:pt-24 pb-10 md:pb-14"
    >
      <svg
        className="absolute inset-x-0 top-0 w-full pointer-events-none block"
        style={{ height: "7vh" }}
        viewBox="0 0 1200 80"
        preserveAspectRatio="none"
        aria-hidden
      >
        <path
          d="M0,0 L1200,0 L1200,40 Q1050,78 900,40 T600,40 T300,40 T0,40 Z"
          fill="#F4E9D8"
        />
      </svg>

      {inView && (
        <StageCard
          variant="stamp"
          label="03 — HERE IS HOW I DO IT"
          hold={800}
          onComplete={() => setSkillsReady(true)}
        />
      )}

      <div className="container mx-auto px-6 md:px-12">
        <div className="mb-6 md:mb-8 flex items-baseline justify-between">
          <span className="font-mono text-[11px] uppercase tracking-[0.22em] text-[#F4E9D8]/55">
            003 / Skills & Process
          </span>
          <span className="font-mono text-[11px] uppercase tracking-[0.22em] text-[#F4E9D8]/55">
            Crafted with intent
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-3 md:gap-4" style={{ perspective: 1200 }}>
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={skillsReady ? { opacity: 1, y: 0 } : { opacity: 0, y: 28 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="md:col-span-2 md:row-span-2 bg-[#FB3640] rounded-3xl p-7 md:p-9 flex flex-col justify-between shadow-[6px_6px_0_rgba(0,15,8,0.85)] min-h-[260px]"
          >
            <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-[#F4E9D8]/80">
              The Toolbox
            </span>
            <div>
              <h2 className="font-display text-4xl md:text-5xl font-black leading-[0.95] text-[#F4E9D8]">
                The tools<br />I reach for<br />every day.
              </h2>
              <p className="mt-5 font-sans text-sm md:text-base text-[#F4E9D8]/85 max-w-md">
                A focused stack for shipping real products: type-safe, accessible, animated, and built for scale.
              </p>
            </div>
          </motion.div>

          <div className="md:col-span-2 grid grid-cols-2 gap-3 md:gap-4">
            {stack.slice(0, 4).map((s, i) => (
              <SkillChip key={s.label} label={s.label} index={i + 1} ready={skillsReady} flipDelay={i * 0.06} />
            ))}
          </div>

          <div className="md:col-span-2 grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
            {stack.slice(4).map((s, i) => (
              <SkillChip key={s.label} label={s.label} index={i + 5} ready={skillsReady} flipDelay={(i + 4) * 0.06} />
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={skillsReady ? { opacity: 1, y: 0 } : { opacity: 0, y: 28 }}
          transition={{ duration: 0.6, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="mt-5 md:mt-6 bg-[#FB3640] rounded-3xl p-6 md:p-7 shadow-[6px_6px_0_rgba(0,15,8,0.85)]"
        >
          <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
            <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-[#F4E9D8]/80">
              Also fluent in
            </span>
            <p className="font-sans text-sm md:text-base text-[#F4E9D8]">
              {alsoFluent.map((t, i) => (
                <Fragment key={t}>
                  <span>{t}</span>
                  {i < alsoFluent.length - 1 && (
                    <span className="mx-2 text-[#000F08]">·</span>
                  )}
                </Fragment>
              ))}
            </p>
          </div>
        </motion.div>

        <div ref={processRef} className="relative mt-12 md:mt-16">
          <div className="mb-6 md:mb-8 flex items-baseline justify-between">
            <span className="font-mono text-[11px] uppercase tracking-[0.22em] text-[#F4E9D8]/55">
              The Process · 4 steps
            </span>
            <span className="hidden md:inline font-mono text-[11px] uppercase tracking-[0.22em] text-[#F4E9D8]/55">
              From idea to ship
            </span>
          </div>

          <div className="relative">
            <svg
              className="hidden md:block absolute inset-x-0 top-1/2 -translate-y-[calc(50%+1.5rem)] w-full h-20 pointer-events-none"
              viewBox="0 0 400 80"
              preserveAspectRatio="none"
              aria-hidden
            >
              <motion.path
                d="M 50 40 Q 100 -10 150 40 T 250 40 T 350 40"
                stroke="#FB3640"
                strokeWidth="2"
                fill="none"
                strokeLinecap="round"
                style={{ pathLength }}
              />
            </svg>

            <div className="relative grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
              {processSteps.map((step, i) => (
                <motion.div
                  key={step.label}
                  initial={{ opacity: 0, scale: 0.6, rotate: -8 }}
                  whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                  viewport={{ once: true, amount: 0.4 }}
                  transition={{
                    duration: 0.6,
                    delay: 0.15 * i,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="flex flex-col items-center text-center"
                >
                  <div className="w-24 h-24 md:w-28 md:h-28 rounded-3xl overflow-hidden border-[3px] border-[#F4E9D8] shadow-[4px_4px_0_rgba(0,15,8,0.85)] bg-[#F4E9D8] relative z-10">
                    <img
                      src={step.icon}
                      alt=""
                      aria-hidden
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="mt-4">
                    <div className="font-mono text-[10px] uppercase tracking-[0.22em] text-[#FB3640]">
                      {String(i + 1).padStart(2, "0")} · {step.label}
                    </div>
                    <p className="mt-1.5 font-sans text-xs md:text-sm text-[#F4E9D8]/65 max-w-[18ch] mx-auto leading-snug">
                      {step.caption}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const SkillChip = ({
  label,
  index,
  ready,
  flipDelay,
}: {
  label: string;
  index: number;
  ready: boolean;
  flipDelay: number;
}) => (
  <motion.div
    initial={{ rotateY: -90, opacity: 0 }}
    animate={ready ? { rotateY: 0, opacity: 1 } : { rotateY: -90, opacity: 0 }}
    transition={{
      duration: 0.55,
      delay: flipDelay,
      ease: [0.22, 1, 0.36, 1],
    }}
    style={{ transformStyle: "preserve-3d", backfaceVisibility: "hidden" }}
    className="group relative bg-[#F4E9D8] border-[3px] border-[#F4E9D8] rounded-2xl px-4 md:px-5 py-5 md:py-6 shadow-[4px_4px_0_rgba(0,15,8,0.85)] flex flex-col justify-between min-h-[110px] transition-colors hover:bg-[#FB3640] hover:border-[#FB3640]"
  >
    <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-[#000F08]/50 group-hover:text-[#F4E9D8]/80 transition-colors">
      {String(index).padStart(2, "0")}
    </span>
    <span className="font-display text-lg md:text-xl font-black text-[#000F08] group-hover:text-[#F4E9D8] transition-colors leading-tight">
      {label}
    </span>
  </motion.div>
);

export default Skills;
