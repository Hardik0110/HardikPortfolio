import { useRef, useState, useCallback } from "react";
import {
  motion,
  useScroll,
  useSpring,
  useTransform,
  useMotionValueEvent,
} from "framer-motion";
import Hero from "../components/Hero";
import AboutSection from "../components/AboutSection";
import Projects from "../components/Projects";
import Skills from "../components/Skills";
import { ContactSection } from "@/components/ContactSection";

const SECTIONS = [
  { id: "hero",     label: "Home"    },
  { id: "about",    label: "About"   },
  { id: "projects", label: "Work"    },
  { id: "skills",   label: "Skills"  },
  { id: "contact",  label: "Contact" },
] as const;

// ── Navigation dots ─────────────────────────────────────────────────────
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

// ── Section indicator (bottom-left) ────────────────────────────────────
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

// ── Index ────────────────────────────────────────────────────────────────
const Index = () => {
  const [activeSection, setActiveSection] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  // Track scroll progress within the container div (not window)
  const { scrollYProgress } = useScroll({ container: containerRef });

  // Butter-smooth spring — runs entirely inside Framer Motion's pipeline.
  // Zero React re-renders during scroll; DOM updates happen directly.
  const smooth = useSpring(scrollYProgress, {
    stiffness: 80,
    damping: 25,
    restDelta: 0.0005,
  });

  // Update React state only when the active section changes (max 4 times
  // per full scroll session — negligible re-render cost)
  useMotionValueEvent(smooth, "change", (v) => {
    const next = Math.min(SECTIONS.length - 1, Math.floor(v * SECTIONS.length));
    setActiveSection((prev) => (prev !== next ? next : prev));
  });

  // ── Scroll-driven entrances ─────────────────────────────────────────
  // All these are MotionValues → no re-renders, GPU-composited transforms only.

  // About: rises from below (0.18 → 0.28 of total scroll)
  const aboutY       = useTransform(smooth, [0.18, 0.28], ["100vh", "0vh"]);
  const aboutOpacity = useTransform(smooth, [0.18, 0.26], [0, 1]);

  // Projects: slides in from right (0.38 → 0.48)
  const projectsX       = useTransform(smooth, [0.38, 0.48], ["100vw", "0vw"]);
  const projectsOpacity = useTransform(smooth, [0.38, 0.46], [0, 1]);

  // Skills: scales up + unrotates (0.58 → 0.68)
  const skillsScale   = useTransform(smooth, [0.58, 0.68], [0.85, 1]);
  const skillsRotate  = useTransform(smooth, [0.58, 0.68], [-3, 0]);
  const skillsOpacity = useTransform(smooth, [0.58, 0.66], [0, 1]);

  // Contact: drops from top (0.78 → 0.88)
  const contactY       = useTransform(smooth, [0.78, 0.88], ["-100vh", "0vh"]);
  const contactOpacity = useTransform(smooth, [0.78, 0.86], [0, 1]);

  // Scroll the container to the n-th section (each section = 200vh slot)
  const scrollToSection = useCallback((i: number) => {
    const el = containerRef.current;
    if (!el) return;
    el.scrollTo({ top: i * 2 * window.innerHeight, behavior: "smooth" });
  }, []);

  return (
    <>
      {/* Top progress bar — driven by MotionValue, zero re-renders */}
      <div className="fixed top-0 left-0 w-full h-[3px] z-50 bg-black/10 pointer-events-none">
        <motion.div
          className="h-full bg-white/80"
          style={{ scaleX: smooth, transformOrigin: "left" }}
        />
      </div>

      <NavDots active={activeSection} onDotClick={scrollToSection} />
      <SectionIndicator active={activeSection} />

      {/* Scrollable container — owns all scrolling; body stays still */}
      <div
        ref={containerRef}
        className="scroll-snap-container h-screen overflow-y-scroll overflow-x-hidden"
      >
        {/* Tall inner div — sticky panels attach here */}
        <div style={{ height: `${SECTIONS.length * 200}vh`, position: "relative" }}>

          {/* ── Hero ── (no entrance; always the first thing seen) */}
          <div style={{ height: "200vh" }}>
            <div style={{ position: "sticky", top: 0, height: "100vh", overflow: "hidden" }}>
              <Hero />
            </div>
          </div>

          {/* ── About ── rises from below */}
          <div style={{ height: "200vh" }}>
            <div style={{ position: "sticky", top: 0, height: "100vh", overflow: "hidden" }}>
              <motion.div
                className="section-panel h-full w-full"
                style={{ y: aboutY, opacity: aboutOpacity }}
              >
                <AboutSection />
              </motion.div>
            </div>
          </div>

          {/* ── Projects ── slides in from right */}
          <div style={{ height: "200vh" }}>
            <div style={{ position: "sticky", top: 0, height: "100vh", overflow: "hidden" }}>
              <motion.div
                className="section-panel h-full w-full"
                style={{ x: projectsX, opacity: projectsOpacity }}
              >
                <Projects />
              </motion.div>
            </div>
          </div>

          {/* ── Skills ── scales up + unrotates */}
          <div style={{ height: "200vh" }}>
            <div style={{ position: "sticky", top: 0, height: "100vh", overflow: "hidden" }}>
              <motion.div
                className="section-panel h-full w-full"
                style={{
                  scale: skillsScale,
                  rotate: skillsRotate,
                  opacity: skillsOpacity,
                }}
              >
                <Skills />
              </motion.div>
            </div>
          </div>

          {/* ── Contact ── drops from top */}
          <div style={{ height: "200vh" }}>
            <div style={{ position: "sticky", top: 0, height: "100vh", overflow: "hidden" }}>
              <motion.div
                className="section-panel h-full w-full"
                style={{ y: contactY, opacity: contactOpacity }}
              >
                <ContactSection />
              </motion.div>
            </div>
          </div>

        </div>
      </div>
    </>
  );
};

export default Index;
