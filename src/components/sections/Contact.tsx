import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { ArrowUpRight, Mail, Phone, Calendar, Linkedin } from "lucide-react";
import StageCard from "../ui/StageCard";

const channels = [
  {
    label: "Email",
    handle: "hardikkubavat0110@gmail.com",
    href: "mailto:hardikkubavat0110@gmail.com?subject=Project%20Inquiry",
    Icon: Mail,
  },
  {
    label: "Phone",
    handle: "+91 8140 900 320",
    href: "tel:+918140900320",
    Icon: Phone,
  },
  {
    label: "Book a call",
    handle: "30-min discovery",
    href: "#",
    Icon: Calendar,
  },
  {
    label: "LinkedIn",
    handle: "/in/hardik0110",
    href: "https://www.linkedin.com/in/hardik0110/",
    Icon: Linkedin,
  },
];

const reveal = (ready: boolean, delay: number) => ({
  initial: { opacity: 0, y: 40 },
  animate: ready ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 },
  transition: { duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] },
});

const Contact = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const inView = useInView(sectionRef, { once: true, amount: 0.05 });
  const [contactReady, setContactReady] = useState(false);

  return (
    <section
      ref={sectionRef}
      className="relative w-full bg-[#FB3640] pt-16 md:pt-24 pb-10 md:pb-14"
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
          fill="#000F08"
        />
      </svg>

      {inView && (
        <StageCard
          variant="envelope"
          label="04 — HERE IS HOW TO REACH ME"
          hold={800}
          onComplete={() => setContactReady(true)}
        />
      )}

      <div className="container mx-auto px-6 md:px-12">
        <div className="mb-6 md:mb-8 flex items-baseline justify-between">
          <span className="font-mono text-[11px] uppercase tracking-[0.22em] text-[#F4E9D8]/85">
            004 / Get in touch
          </span>
          <span className="font-mono text-[11px] uppercase tracking-[0.22em] text-[#F4E9D8]/85">
            <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-[#F4E9D8] mr-2 align-middle" />
            Available · Gujarat IN
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-3 md:gap-4 auto-rows-[140px] md:auto-rows-[170px]">
          <motion.div
            {...reveal(contactReady, 0)}
            className="md:col-span-2 md:row-span-2 bg-[#000F08] rounded-3xl p-7 md:p-9 flex flex-col justify-between shadow-[6px_6px_0_rgba(0,15,8,0.85)]"
          >
            <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-[#FB3640]">
              Let's build
            </span>
            <div>
              <h2 className="font-display text-4xl md:text-5xl font-black leading-[0.95] text-[#F4E9D8]">
                Got a project<br />in mind?
              </h2>
              <p className="mt-5 font-sans text-sm md:text-base text-[#F4E9D8]/80 max-w-md">
                Drop a line or book a 30-min call. I usually reply within a day.
              </p>
              <a
                href="mailto:hardikkubavat0110@gmail.com?subject=Project%20Inquiry"
                className="mt-6 inline-flex items-center gap-2 bg-[#F4E9D8] text-[#000F08] font-mono text-xs uppercase tracking-[0.22em] px-4 py-2.5 rounded-full shadow-[3px_3px_0_rgba(0,15,8,0.85)] hover:shadow-[5px_5px_0_rgba(0,15,8,0.85)] hover:-translate-x-0.5 hover:-translate-y-0.5 transition-all"
              >
                Start a conversation
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </motion.div>

          <motion.div
            {...reveal(contactReady, 0.1)}
            className="md:col-span-2 md:row-span-2 bg-[#000F08] rounded-3xl overflow-hidden flex items-center justify-center shadow-[6px_6px_0_rgba(0,15,8,0.85)]"
          >
            <img
              src="/illustrations/F1-contact-hero_001.jpg"
              alt=""
              aria-hidden
              className="w-full h-full object-cover"
            />
          </motion.div>

          {channels.map((c, i) => {
            const isExternal = c.href.startsWith("http");
            return (
              <motion.a
                key={c.label}
                {...reveal(contactReady, 0.22 + i * 0.08)}
                href={c.href}
                target={isExternal ? "_blank" : undefined}
                rel={isExternal ? "noopener noreferrer" : undefined}
                className="group bg-[#F4E9D8] border-[3px] border-[#000F08] rounded-3xl p-5 md:p-6 flex flex-col justify-between shadow-[6px_6px_0_rgba(0,15,8,0.85)] hover:bg-[#000F08] hover:border-[#F4E9D8] transition-colors"
              >
                <div className="flex items-center justify-between text-[#000F08] group-hover:text-[#F4E9D8] transition-colors">
                  <c.Icon className="w-5 h-5" />
                  <ArrowUpRight className="w-5 h-5 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </div>
                <div>
                  <div className="font-mono text-[10px] uppercase tracking-[0.22em] text-[#000F08]/55 group-hover:text-[#F4E9D8]/80 transition-colors">
                    {c.label}
                  </div>
                  <div className="mt-1 font-display text-base md:text-lg font-black text-[#000F08] group-hover:text-[#F4E9D8] transition-colors leading-tight break-all">
                    {c.handle}
                  </div>
                </div>
              </motion.a>
            );
          })}
        </div>

        <motion.footer
          {...reveal(contactReady, 0.6)}
          className="mt-10 md:mt-14 pt-8 border-t border-[#F4E9D8]/25 flex flex-col md:flex-row items-start md:items-center justify-between gap-4"
        >
          <div>
            <div className="font-display text-2xl md:text-3xl font-black text-[#F4E9D8] leading-none">
              HARDIK KUBAVAT
            </div>
            <div className="mt-1.5 font-mono text-[11px] uppercase tracking-[0.22em] text-[#F4E9D8]/75">
              Frontend × AI · Available for freelance
            </div>
          </div>

          <div className="flex flex-col md:items-end gap-1">
            <span className="font-mono text-[11px] uppercase tracking-[0.22em] text-[#F4E9D8]/75">
              © 2026 · Crafted in Gujarat
            </span>
            <button
              type="button"
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="font-mono text-[11px] uppercase tracking-[0.22em] text-[#F4E9D8] hover:text-[#000F08] transition-colors"
            >
              ↑ Back to top
            </button>
          </div>
        </motion.footer>
      </div>
    </section>
  );
};

export default Contact;
