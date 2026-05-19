import { useEffect, useRef, useState } from "react";

const CustomCursor = () => {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const target = useRef({ x: 0, y: 0 });
  const ringPos = useRef({ x: 0, y: 0 });
  const visibleRef = useRef(false);
  const hoveringRef = useRef(false);
  const [visible, setVisible] = useState(false);
  const [hovering, setHovering] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (window.matchMedia("(pointer: coarse)").matches) return;

    document.documentElement.classList.add("hk-cursor-none");

    const onMove = (e: PointerEvent) => {
      target.current.x = e.clientX;
      target.current.y = e.clientY;
      if (!visibleRef.current) {
        visibleRef.current = true;
        setVisible(true);
      }
      const t = e.target as HTMLElement | null;
      const interactive = !!t?.closest(
        'a, button, [role="button"], input, textarea, select'
      );
      if (interactive !== hoveringRef.current) {
        hoveringRef.current = interactive;
        setHovering(interactive);
      }
    };
    const onLeave = () => {
      visibleRef.current = false;
      setVisible(false);
    };
    const onEnter = () => {
      visibleRef.current = true;
      setVisible(true);
    };

    let raf = 0;
    const tick = () => {
      ringPos.current.x += (target.current.x - ringPos.current.x) * 0.22;
      ringPos.current.y += (target.current.y - ringPos.current.y) * 0.22;

      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${target.current.x}px, ${target.current.y}px, 0) translate(-50%, -50%)`;
      }
      if (ringRef.current) {
        ringRef.current.style.transform = `translate3d(${ringPos.current.x}px, ${ringPos.current.y}px, 0) translate(-50%, -50%)`;
      }
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);

    window.addEventListener("pointermove", onMove);
    document.addEventListener("pointerleave", onLeave);
    document.addEventListener("pointerenter", onEnter);

    return () => {
      document.documentElement.classList.remove("hk-cursor-none");
      cancelAnimationFrame(raf);
      window.removeEventListener("pointermove", onMove);
      document.removeEventListener("pointerleave", onLeave);
      document.removeEventListener("pointerenter", onEnter);
    };
  }, []);

  return (
    <>
      <style>{`.hk-cursor-none, .hk-cursor-none * { cursor: none !important; }`}</style>

      <div
        ref={ringRef}
        aria-hidden
        className={`pointer-events-none fixed left-0 top-0 z-[100] rounded-full bg-white transition-[width,height] duration-200 ease-out ${
          hovering ? "h-12 w-12" : "h-8 w-8"
        } ${visible ? "opacity-100" : "opacity-0"}`}
        style={{ mixBlendMode: "difference" }}
      />

      <div
        ref={dotRef}
        aria-hidden
        className={`pointer-events-none fixed left-0 top-0 z-[101] h-1.5 w-1.5 rounded-full bg-white ${
          visible ? "opacity-100" : "opacity-0"
        }`}
        style={{ mixBlendMode: "difference" }}
      />
    </>
  );
};

export default CustomCursor;
