import { useEffect, useRef } from "react";

const COLS = 20;
const ROWS = 20;
const RADIUS = 200;

interface Props {
  className?: string;
}

const MagneticGrid = ({ className = "" }: Props) => {
  const svgRef = useRef<SVGSVGElement>(null);
  const hLineRefs = useRef<SVGPolylineElement[]>([]);
  const vLineRefs = useRef<SVGPolylineElement[]>([]);
  const sizeRef = useRef({ cw: 0, ch: 0 });
  const pointerRef = useRef({ x: 0, y: 0, active: false });
  const smoothRef = useRef({ x: 0, y: 0, factor: 0 });
  const rafRef = useRef<number>();

  useEffect(() => {
    const svg = svgRef.current;
    if (!svg) return;

    const measure = () => {
      const r = svg.getBoundingClientRect();
      sizeRef.current.cw = r.width / COLS;
      sizeRef.current.ch = r.height / ROWS;
    };
    measure();

    const tick = () => {
      const { cw, ch } = sizeRef.current;
      const ptr = pointerRef.current;
      const sm = smoothRef.current;

      sm.x += (ptr.x - sm.x) * 0.18;
      sm.y += (ptr.y - sm.y) * 0.18;
      const target = ptr.active ? 1 : 0;
      sm.factor += (target - sm.factor) * 0.12;

      const x = sm.x;
      const y = sm.y;
      const factor = sm.factor;
      const r = RADIUS;
      const r2 = r * r;

      const verts: { x: number; y: number }[][] = [];
      for (let row = 0; row <= ROWS; row++) {
        const rowArr: { x: number; y: number }[] = [];
        for (let col = 0; col <= COLS; col++) {
          const bx = col * cw;
          const by = row * ch;
          let dx = bx;
          let dy = by;
          if (factor > 0.001) {
            const ox = x - bx;
            const oy = y - by;
            const d2 = ox * ox + oy * oy;
            if (d2 < r2) {
              const d = Math.sqrt(d2);
              const force = (1 - d / r) * 0.5 * factor;
              dx = bx + ox * force;
              dy = by + oy * force;
            }
          }
          rowArr.push({ x: dx, y: dy });
        }
        verts.push(rowArr);
      }

      for (let row = 0; row <= ROWS; row++) {
        const pts = verts[row]
          .map((p) => `${p.x.toFixed(1)},${p.y.toFixed(1)}`)
          .join(" ");
        hLineRefs.current[row]?.setAttribute("points", pts);
      }
      for (let col = 0; col <= COLS; col++) {
        const arr: string[] = [];
        for (let row = 0; row <= ROWS; row++) {
          arr.push(`${verts[row][col].x.toFixed(1)},${verts[row][col].y.toFixed(1)}`);
        }
        vLineRefs.current[col]?.setAttribute("points", arr.join(" "));
      }

      rafRef.current = requestAnimationFrame(tick);
    };
    rafRef.current = requestAnimationFrame(tick);

    const onMove = (e: PointerEvent) => {
      const r = svg.getBoundingClientRect();
      pointerRef.current.x = e.clientX - r.left;
      pointerRef.current.y = e.clientY - r.top;
      pointerRef.current.active = true;
    };
    const onLeave = () => {
      pointerRef.current.active = false;
    };

    window.addEventListener("pointermove", onMove);
    document.addEventListener("pointerleave", onLeave);
    window.addEventListener("resize", measure);

    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      window.removeEventListener("pointermove", onMove);
      document.removeEventListener("pointerleave", onLeave);
      window.removeEventListener("resize", measure);
    };
  }, []);

  return (
    <svg
      ref={svgRef}
      className={`pointer-events-none absolute inset-0 h-full w-full opacity-60 ${className}`}
      preserveAspectRatio="none"
    >
      {Array.from({ length: ROWS + 1 }).map((_, row) => (
        <polyline
          key={`h-${row}`}
          ref={(el) => {
            if (el) hLineRefs.current[row] = el;
          }}
          fill="none"
          stroke="rgba(255,255,255,0.18)"
          strokeWidth="1"
        />
      ))}
      {Array.from({ length: COLS + 1 }).map((_, col) => (
        <polyline
          key={`v-${col}`}
          ref={(el) => {
            if (el) vLineRefs.current[col] = el;
          }}
          fill="none"
          stroke="rgba(255,255,255,0.18)"
          strokeWidth="1"
        />
      ))}
    </svg>
  );
};

export default MagneticGrid;
