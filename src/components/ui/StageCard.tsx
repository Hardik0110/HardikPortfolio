import { motion } from "framer-motion";
import { useEffect, useState } from "react";

type StageVariant = "tape" | "stamp" | "envelope";

interface StageCardProps {
  label: string;
  variant?: StageVariant;
  hold?: number;
  onComplete?: () => void;
}

const ENTER_MS = 600;
const EXIT_MS = 600;

const StageCard = ({
  label,
  variant = "tape",
  hold = 1200,
  onComplete,
}: StageCardProps) => {
  const [stage, setStage] = useState<"in" | "exit" | "done">("in");

  useEffect(() => {
    if (stage === "in") {
      const t = window.setTimeout(() => setStage("exit"), ENTER_MS + hold);
      return () => window.clearTimeout(t);
    }
    if (stage === "exit") {
      const t = window.setTimeout(() => {
        setStage("done");
        onComplete?.();
      }, EXIT_MS);
      return () => window.clearTimeout(t);
    }
  }, [stage, hold, onComplete]);

  if (stage === "done") return null;

  if (variant === "stamp") return <StampCard label={label} stage={stage} />;
  if (variant === "envelope") return <EnvelopeCard label={label} stage={stage} />;
  return <TapeCard label={label} stage={stage} />;
};

const TapeCard = ({ label, stage }: { label: string; stage: "in" | "exit" }) => (
  <motion.div
    initial={{ x: "-130vw" }}
    animate={{ x: stage === "in" ? "0vw" : "130vw" }}
    transition={{
      duration: 0.55,
      ease: stage === "in" ? [0.16, 1, 0.3, 1] : [0.7, 0, 0.84, 0],
    }}
    className="fixed inset-0 z-[60] pointer-events-none flex items-center justify-center overflow-hidden"
    aria-hidden
  >
    <div
      className="relative w-[220vw] py-[18vh] md:py-[22vh] bg-[#FB3640] shadow-[0_24px_60px_rgba(0,15,8,0.45)] flex items-center justify-center"
      style={{ transform: "rotate(-8deg)" }}
    >
      <div className="absolute inset-y-6 inset-x-0 border-y-[3px] border-[#F4E9D8]/30 pointer-events-none" />
      <span className="font-display text-3xl md:text-5xl xl:text-6xl 2xl:text-7xl font-black text-[#F4E9D8] tracking-[0.04em] whitespace-nowrap drop-shadow-[3px_3px_0_rgba(0,15,8,0.85)]">
        {label}
      </span>
    </div>
  </motion.div>
);

const StampCard = ({ label, stage }: { label: string; stage: "in" | "exit" }) => (
  <motion.div
    className="fixed inset-0 z-[60] pointer-events-none flex items-center justify-center"
    aria-hidden
  >
    <motion.div
      initial={{ scale: 0, rotate: -25, opacity: 0 }}
      animate={
        stage === "in"
          ? { scale: 1, rotate: -8, opacity: 1 }
          : { scale: 0, rotate: 12, opacity: 0 }
      }
      transition={
        stage === "in"
          ? { type: "spring", stiffness: 150, damping: 11, mass: 0.9 }
          : { duration: 0.45, ease: [0.7, 0, 0.84, 0] }
      }
      className="w-[min(58vmin,560px)] h-[min(58vmin,560px)] rounded-full bg-[#F4E9D8] border-[10px] md:border-[14px] border-[#FB3640] shadow-[0_24px_60px_rgba(0,15,8,0.45)] flex items-center justify-center text-center px-12"
    >
      <span className="font-display text-2xl md:text-3xl xl:text-4xl font-black text-[#FB3640] leading-tight tracking-tight">
        {label}
      </span>
    </motion.div>
  </motion.div>
);

const EnvelopeCard = ({ label, stage }: { label: string; stage: "in" | "exit" }) => (
  <motion.div
    initial={{ y: "120vh", rotate: 3 }}
    animate={
      stage === "in"
        ? { y: "0vh", rotate: -2.5 }
        : { y: "-120vh", rotate: -2.5 }
    }
    transition={{
      duration: stage === "in" ? 0.6 : 0.55,
      ease: stage === "in" ? [0.16, 1, 0.3, 1] : [0.7, 0, 0.84, 0],
    }}
    className="fixed inset-0 z-[60] pointer-events-none flex items-center justify-center"
    aria-hidden
  >
    <div className="relative w-[88vw] max-w-[920px] h-[34vh] min-h-[260px] bg-[#F4E9D8] border-[4px] border-[#000F08] shadow-[0_24px_60px_rgba(0,15,8,0.45)] flex flex-col items-center justify-center px-10">
      <div className="absolute top-4 left-4 right-4 h-px bg-[#000F08]/15" />
      <div className="absolute bottom-4 left-4 right-4 h-px bg-[#000F08]/15" />
      <span className="font-mono text-xs md:text-sm uppercase tracking-[0.3em] text-[#FB3640] mb-3">
        To: You · From: Hardik
      </span>
      <span className="font-display text-2xl md:text-4xl xl:text-5xl font-black text-[#000F08] leading-[0.95] tracking-tight text-center">
        {label}
      </span>
    </div>
  </motion.div>
);

export default StageCard;
