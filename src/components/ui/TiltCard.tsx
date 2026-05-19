import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useRef, type ReactNode, type MouseEvent } from "react";

interface TiltCardProps {
  children: ReactNode;
  className?: string;
  maxTilt?: number;
  liftPx?: number;
  as?: "div" | "a";
  href?: string;
  target?: string;
  rel?: string;
}

const TiltCard = ({
  children,
  className = "",
  maxTilt = 7,
  liftPx = 6,
  as = "div",
  href,
  target,
  rel,
}: TiltCardProps) => {
  const ref = useRef<HTMLElement | null>(null);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const rotateX = useTransform(y, [-0.5, 0.5], [maxTilt, -maxTilt]);
  const rotateY = useTransform(x, [-0.5, 0.5], [-maxTilt, maxTilt]);
  const lift = useMotionValue(0);

  const springRX = useSpring(rotateX, { stiffness: 220, damping: 22 });
  const springRY = useSpring(rotateY, { stiffness: 220, damping: 22 });
  const springLift = useSpring(lift, { stiffness: 260, damping: 24 });

  const handleMove = (e: MouseEvent<HTMLElement>) => {
    const el = e.currentTarget;
    const rect = el.getBoundingClientRect();
    const nx = (e.clientX - rect.left) / rect.width - 0.5;
    const ny = (e.clientY - rect.top) / rect.height - 0.5;
    x.set(nx);
    y.set(ny);
  };

  const handleEnter = () => {
    lift.set(-liftPx);
  };

  const handleLeave = () => {
    x.set(0);
    y.set(0);
    lift.set(0);
  };

  const Component = as === "a" ? motion.a : motion.div;

  return (
    <Component
      ref={ref as never}
      href={href}
      target={target}
      rel={rel}
      onMouseMove={handleMove}
      onMouseEnter={handleEnter}
      onMouseLeave={handleLeave}
      style={{
        rotateX: springRX,
        rotateY: springRY,
        y: springLift,
        transformStyle: "preserve-3d",
        transformPerspective: 1200,
      }}
      className={className}
    >
      {children}
    </Component>
  );
};

export default TiltCard;
