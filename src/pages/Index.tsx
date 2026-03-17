import { useRef, useState, useCallback, useEffect, ReactNode } from "react";
import { motion, useInView } from "framer-motion";
import Hero from "../components/Hero";
import AboutSection from "../components/AboutSection";
import Projects from "../components/Projects";
import Skills from "../components/Skills";
import { ContactSection } from "@/components/ContactSection";

// ── Section metadata ────────────────────────────────────────────────────
const SECTIONS = [
  { id: "hero",     label: "Home"    },
  { id: "about",    label: "About"   },
  { id: "projects", label: "Work"    },
  { id: "skills",   label: "Skills"  },
  { id: "contact",  label: "Contact" },
] as const;

type SectionId = typeof SECTIONS[number]["id"];

type SectionAnim = {
  initial: object;
  whileInView: object;
  transition: object;
} | null;

// Each section slides in from a different direction for visual variety
const ANIMATIONS: SectionAnim[] = [
  null, // Hero — always first, no entrance needed
  {
    initial:    { opacity: 0, y: 90 },
    whileInView:{ opacity: 1, y: 0  },
    transition: { duration: 0.85, ease: [0.16, 1, 0.3, 1] },
  },
  {
    initial:    { opacity: 0, x: 120 },
    whileInView:{ opacity: 1, x: 0   },
    transition: { duration: 0.85, ease: [0.16, 1, 0.3, 1] },
  },
  {
    initial:    { opacity: 0, scale: 0.86, rotate: -3 },
    whileInView:{ opacity: 1, scale: 1,    rotate: 0  },
    transition: { duration: 0.85, ease: [0.16, 1, 0.3, 1] },
  },
  {
    initial:    { opacity: 0, y: -90 },
    whileInView:{ opacity: 1, y: 0   },
    transition: { duration: 0.85, ease: [0.16, 1, 0.3, 1] },
  },
];

// ── Section wrapper ─────────────────────────────────────────────────────
function Section({
  id,
  index,
  anim,
  onVisible,
  children,
}: {
  id: SectionId;
  index: number;
  anim: SectionAnim;
  onVisible: (i: number) => void;
  children: ReactNode;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { amount: 0.5 });

  useEffect(() => {
    if (isInView) onVisible(index);
  }, [isInView, index, onVisible]);

  const base = "h-screen overflow-hidden flex-shrink-0";

  return (
    <div
      id={id}
      ref={ref}
      className={base}
      style={{ scrollSnapAlign: "start" }}
    >
      {anim ? (
        <motion.div
          className="h-full w-full"
          initial={anim.initial}
          whileInView={anim.whileInView}
          viewport={{ once: false, amount: 0.15 }}
          transition={anim.transition}
        >
          {children}
        </motion.div>
      ) : (
        children
      )}
    </div>
  );
}

// ── Nav dots ────────────────────────────────────────────────────────────
function NavDots({
  active,
  onDotClick,
}: {
  active: number;
  onDotClick: (i: number) => void;
}) {
  return (
    <nav className="fixed right-5 top-1/2 -translate-y-1/2 z-50 hidden md:flex flex-col gap-5">
      {SECTIONS.map((s, i) => (
        <button
          key={s.id}
          onClick={() => onDotClick(i)}
          aria-label={`Go to ${s.label}`}
          className="group flex items-center gap-3 justify-end focus:outline-none"
        >
          <span
            className="text-xs font-bold text-white opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none"
            style={{ textShadow: "0 1px 6px rgba(0,0,0,0.6)" }}
          >
            {s.label}
          </span>
          <motion.div
            className="rounded-full border-2 border-white"
            animate={{
              width:           active === i ? 14 : 10,
              height:          active === i ? 14 : 10,
              backgroundColor: active === i ? "#ffffff" : "transparent",
              boxShadow:       active === i
                ? "0 0 10px 3px rgba(255,255,255,0.45)"
                : "none",
            }}
            transition={{ type: "spring", stiffness: 380, damping: 26 }}
          />
        </button>
      ))}
    </nav>
  );
}

// ── Top progress bar ────────────────────────────────────────────────────
function ProgressBar({ active }: { active: number }) {
  return (
    <div className="fixed top-0 left-0 w-full h-[3px] z-50 bg-black/10 pointer-events-none">
      <motion.div
        className="h-full bg-white/80 origin-left"
        style={{ transformOrigin: "left" }}
        animate={{ scaleX: (active + 1) / SECTIONS.length }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      />
    </div>
  );
}

// ── Bottom-left section counter ─────────────────────────────────────────
function SectionIndicator({ active }: { active: number }) {
  return (
    <div
      className="fixed left-6 bottom-8 z-50 hidden md:flex flex-col items-start gap-0.5 pointer-events-none select-none"
      style={{ textShadow: "1px 1px 8px rgba(0,0,0,0.5)" }}
    >
      <motion.p
        key={`lbl-${active}`}
        className="text-[10px] font-bold tracking-[0.2em] uppercase text-white/60"
        initial={{ opacity: 0, y: 4 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
      >
        {SECTIONS[active].label}
      </motion.p>
      <div className="flex items-baseline gap-1">
        <motion.span
          key={`num-${active}`}
          className="text-3xl font-black text-white"
          initial={{ opacity: 0, y: 6 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.35, delay: 0.05 }}
        >
          {String(active + 1).padStart(2, "0")}
        </motion.span>
        <span className="text-sm font-bold text-white/40">
          /{String(SECTIONS.length).padStart(2, "0")}
        </span>
      </div>
    </div>
  );
}

// ── Index ───────────────────────────────────────────────────────────────
const Index = () => {
  const [active, setActive] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleVisible = useCallback((i: number) => setActive(i), []);

  const scrollToSection = useCallback((i: number) => {
    const el = containerRef.current?.querySelector(`#${SECTIONS[i].id}`);
    el?.scrollIntoView({ behavior: "smooth" });
  }, []);

  const components = [
    <Hero />,
    <AboutSection />,
    <Projects />,
    <Skills />,
    <ContactSection />,
  ];

  return (
    <>
      <ProgressBar active={active} />
      <NavDots active={active} onDotClick={scrollToSection} />
      <SectionIndicator active={active} />

      <div
        ref={containerRef}
        className="scroll-snap-container h-screen overflow-y-scroll overflow-x-hidden"
        style={{
          scrollSnapType: "y mandatory",
        } as React.CSSProperties}
      >
        {components.map((component, i) => (
          <Section
            key={SECTIONS[i].id}
            id={SECTIONS[i].id}
            index={i}
            anim={ANIMATIONS[i]}
            onVisible={handleVisible}
          >
            {component}
          </Section>
        ))}
      </div>
    </>
  );
};

export default Index;
