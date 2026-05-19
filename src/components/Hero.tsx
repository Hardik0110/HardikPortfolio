import { motion, type MotionValue } from "framer-motion";
import { FaLinkedin, FaInstagram, FaGithub, FaTwitter } from "react-icons/fa";
import { SiLeetcode, SiUpwork, SiFiverr } from "react-icons/si";
import { IoMail, IoCall } from "react-icons/io5";
import MagneticGrid from "./ui/MagneticGrid";
import AnimatedDownloadButton from "./ui/downloadbutton";

const socialIcons = [
  { Icon: FaInstagram, href: "https://www.instagram.com/hardikk0110", top: "12%", left: "18%" },
  { Icon: FaGithub, href: "https://github.com/Hardik0110", top: "55%", left: "8%" },
  { Icon: FaLinkedin, href: "https://www.linkedin.com/in/hardik0110/", top: "28%", left: "62%" },
  { Icon: SiLeetcode, href: "https://leetcode.com/u/hardik0110/", top: "72%", left: "38%" },
  { Icon: IoMail, href: "mailto:hardikkubavat0110@gmail.com", top: "18%", left: "85%" },
  { Icon: FaTwitter, href: "#", top: "62%", left: "78%" },
  { Icon: IoCall, href: "tel:+918140900320", top: "42%", left: "32%" },
  { Icon: SiUpwork, href: "#", top: "8%", left: "48%" },
  { Icon: SiFiverr, href: "#", top: "55%", left: "58%", bigger: true },
];

interface HeroProps {
  redY?: MotionValue<string>;
  blackY?: MotionValue<string>;
  gridOpacity?: MotionValue<number>;
}

const Hero = ({ redY, blackY, gridOpacity }: HeroProps) => {
  return (
    <div className="relative h-screen w-full overflow-hidden">
      <motion.div
        className="absolute inset-0 z-10 pointer-events-none"
        style={{ opacity: gridOpacity }}
      >
        <MagneticGrid />
      </motion.div>

      <motion.div
        className="absolute inset-x-0 top-0 z-20"
        style={{ y: redY, height: "calc(35vh + 7vh)" }}
      >
        <div
          className="absolute inset-x-0 top-0 bg-[#FB3640]"
          style={{ height: "calc(35vh + 3px)" }}
        />

        <svg
          className="absolute inset-x-0 w-full pointer-events-none block"
          style={{ top: "35vh", height: "calc(7vh + 2px)" }}
          viewBox="0 0 1200 80"
          preserveAspectRatio="none"
          aria-hidden
        >
          <path
            d="M0,0 L1200,0 L1200,40 Q1050,78 900,40 T600,40 T300,40 T0,40 Z"
            fill="#FB3640"
          />
        </svg>

        <div className="absolute inset-x-0 top-0 h-[35vh] z-30 px-6 md:px-12">
          <div className="absolute top-0 right-0 w-[40vw] h-full pointer-events-none">
            {socialIcons.map((s, i) => (
              <motion.a
                key={i}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, scale: 0.4 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.08 * i + 0.4, duration: 0.5, type: "spring", stiffness: 220 }}
                whileHover={{ scale: 1.25, rotate: -8 }}
                className={`absolute pointer-events-auto text-black/80 hover:text-black transition-colors ${
                  s.bigger
                    ? "text-3xl md:text-4xl 2xl:text-5xl 3xl:text-6xl"
                    : "text-2xl md:text-3xl 2xl:text-4xl 3xl:text-5xl"
                }`}
                style={{ top: s.top, left: s.left }}
              >
                <s.Icon />
              </motion.a>
            ))}
          </div>

          <div className="relative z-10 h-full flex items-center pr-[42vw]">
            <motion.h1
              className="font-display font-black tracking-[0.04em] whitespace-nowrap drop-shadow-[3px_3px_0_rgba(0,15,8,0.85)]"
              style={{ fontSize: "clamp(3.75rem, 9vw, 14rem)" }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="block leading-none text-[#F4E9D8]">HARDIK</span>
              <span className="block leading-none text-[#000F08] -mt-[0.18em]">KUBAVAT</span>
            </motion.h1>
          </div>
        </div>
      </motion.div>

      <motion.div
        className="absolute inset-x-0 z-20"
        style={{ y: blackY, top: "35vh", bottom: 0 }}
      >
        <svg
          className="absolute inset-x-0 w-full pointer-events-none block"
          style={{ top: "-2px", height: "calc(7vh + 2px)" }}
          viewBox="0 0 1200 80"
          preserveAspectRatio="none"
          aria-hidden
        >
          <path
            d="M0,40 Q150,2 300,40 T600,40 T900,40 T1200,40 L1200,80 L0,80 Z"
            fill="#000F08"
          />
        </svg>
        <div
          className="absolute inset-x-0 bottom-0 bg-[#000F08]"
          style={{ top: "calc(7vh - 1vh)" }}
        />

        <div
          className="hidden md:block absolute z-30 pointer-events-none"
          style={{ left: "3rem", top: "8vh", maxWidth: "40vw" }}
        >
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.5 }}
            className="flex items-center gap-4 mb-7 pointer-events-auto"
          >
            <span className="inline-flex items-center gap-2 rounded-full border border-[#F4E9D8]/20 bg-[#F4E9D8]/[0.06] backdrop-blur-sm px-3 py-1.5">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#FB3640] opacity-70" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-[#FB3640]" />
              </span>
              <span className="font-mono text-[11px] uppercase tracking-[0.22em] text-[#F4E9D8]/85">
                Open for work · 2026
              </span>
            </span>
            <AnimatedDownloadButton />
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.6 }}
            className="font-display font-black tracking-tight text-[#F4E9D8] leading-[0.95]"
            style={{ fontSize: "clamp(2rem, 4.4vw, 4.5rem)" }}
          >
            Designing software<br />that <em className="not-italic text-[#FB3640]">thinks.</em>
          </motion.p>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.95, duration: 0.6 }}
            className="mt-6 font-sans text-sm md:text-base text-[#F4E9D8]/65 max-w-md leading-relaxed"
          >
            Software developer & AI developer.
            I build interfaces people feel and systems that listen.
          </motion.p>

          <motion.ul
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.1, duration: 0.6 }}
            className="mt-8 space-y-2 font-mono text-[11px] uppercase tracking-[0.18em] text-[#F4E9D8]/50 max-w-md"
          >
            <li className="flex items-start gap-3">
              <span className="text-[#FB3640]">—</span>
              <span>Selective freelance · 2026</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-[#FB3640]">—</span>
              <span>Production React, AI integrations, design systems</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-[#FB3640]">—</span>
              <span>Quick reply · usually within a day</span>
            </li>
          </motion.ul>
        </div>

        <div
          className="hidden lg:flex flex-col items-start gap-7 absolute z-20"
          style={{ left: "44vw", top: "28vh", width: "16vw", maxWidth: "260px" }}
        >
          <motion.div
            initial={{ opacity: 0, y: 24, rotate: -2 }}
            animate={{ opacity: 1, y: 0, rotate: -2 }}
            transition={{ delay: 1.2, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="bg-[#FB3640] border-[3px] border-[#000F08] rounded-2xl p-4 w-full shadow-[6px_6px_0_rgba(0,15,8,0.85)]"
          >
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-1.5">
                <span className="relative flex h-1.5 w-1.5">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#F4E9D8] opacity-70" />
                  <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-[#F4E9D8]" />
                </span>
                <span className="font-mono text-[9px] uppercase tracking-[0.22em] text-[#F4E9D8]">
                  Now playing
                </span>
              </div>
              <div className="flex gap-0.5 items-end h-3">
                <motion.span
                  className="w-[3px] bg-[#F4E9D8] rounded-sm"
                  animate={{ height: ["30%", "100%", "60%", "40%", "30%"] }}
                  transition={{ duration: 0.9, repeat: Infinity, ease: "easeInOut" }}
                />
                <motion.span
                  className="w-[3px] bg-[#F4E9D8] rounded-sm"
                  animate={{ height: ["60%", "30%", "100%", "70%", "60%"] }}
                  transition={{ duration: 1.0, repeat: Infinity, ease: "easeInOut", delay: 0.15 }}
                />
                <motion.span
                  className="w-[3px] bg-[#F4E9D8] rounded-sm"
                  animate={{ height: ["100%", "60%", "30%", "80%", "100%"] }}
                  transition={{ duration: 0.8, repeat: Infinity, ease: "easeInOut", delay: 0.3 }}
                />
                <motion.span
                  className="w-[3px] bg-[#F4E9D8] rounded-sm"
                  animate={{ height: ["40%", "90%", "50%", "30%", "40%"] }}
                  transition={{ duration: 1.1, repeat: Infinity, ease: "easeInOut", delay: 0.05 }}
                />
              </div>
            </div>

            <div className="flex items-center gap-3 mb-3">
              <motion.div
                className="relative w-12 h-12 flex-shrink-0 rounded-full overflow-hidden border-2 border-[#000F08]"
                animate={{ rotate: 360 }}
                transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
              >
                <img
                  src="/illustrations/eye-of-the-tiger.jpg"
                  alt="Eye of the Tiger album cover"
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-1.5 h-1.5 rounded-full bg-[#FB3640] border border-[#000F08]" />
              </motion.div>
              <div className="flex-1 min-w-0">
                <p className="font-display text-[15px] font-black leading-tight text-[#F4E9D8] truncate">
                  Eye of the Tiger
                </p>
                <p className="mt-0.5 font-mono text-[9px] uppercase tracking-[0.18em] text-[#F4E9D8]/75 truncate">
                  Survivor · 1982
                </p>
              </div>
            </div>

            <div className="flex items-center gap-2 font-mono text-[8px] tabular-nums text-[#F4E9D8]/70">
              <span>1:23</span>
              <div className="flex-1 h-1 bg-[#F4E9D8]/20 rounded-full overflow-hidden">
                <motion.div
                  className="h-full bg-[#F4E9D8]"
                  initial={{ width: "0%" }}
                  animate={{ width: "100%" }}
                  transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                />
              </div>
              <span>3:48</span>
            </div>
          </motion.div>
        </div>

        <motion.img
          src="/AboutSectionPhoto.png"
          alt="Hardik Kubavat"
          className="hidden md:block absolute bottom-0 right-[3vw] h-auto w-auto max-h-[82vh] max-w-[60vw] object-contain object-bottom drop-shadow-[8px_8px_0_rgba(0,15,8,0.85)]"
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.5, duration: 0.7 }}
        />
      </motion.div>
    </div>
  );
};

export default Hero;
