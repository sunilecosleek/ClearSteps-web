"use client";

import { useRef, useEffect, useState } from "react";
import { motion, useInView } from "framer-motion";
import { features } from "@/lib/data";
import { use3DTilt, staggerContainer, fadeUpItem } from "@/lib/hooks";
import { Icon, IconName } from "@/lib/icons";

const accentBottom: Record<string, string> = {
  amber: "from-amber to-amber-2",
  teal: "from-teal to-teal-2",
  coral: "from-coral to-orange-200",
  violet: "from-primary to-primary-light",
  sky: "from-sky to-sky/50",
  green: "from-green to-green-2",
};

const iconBg: Record<string, string> = {
  amber: "bg-amber/10",
  teal: "bg-teal/10",
  coral: "bg-coral/10",
  violet: "bg-primary/10",
  sky: "bg-sky/10",
  green: "bg-green/10",
};

// ── Count-up hook ─────────────────────────────────────────────────────────────
function useCountUp(target: number, delay: number, active: boolean) {
  const [val, setVal] = useState(0);
  useEffect(() => {
    if (!active) return;
    const t = setTimeout(() => {
      const start = performance.now();
      const duration = 1000;
      const tick = (ts: number) => {
        const p = Math.min((ts - start) / duration, 1);
        setVal(Math.round((1 - Math.pow(1 - p, 3)) * target));
        if (p < 1) requestAnimationFrame(tick);
      };
      requestAnimationFrame(tick);
    }, delay);
    return () => clearTimeout(t);
  }, [active, target, delay]);
  return val;
}

// ── Typewriter hook ───────────────────────────────────────────────────────────
function useTypewriter(text: string, delay: number, active: boolean) {
  const [displayed, setDisplayed] = useState("");
  useEffect(() => {
    if (!active) return;
    setDisplayed("");
    let timer: ReturnType<typeof setTimeout>;
    let iv: ReturnType<typeof setInterval>;
    timer = setTimeout(() => {
      let i = 0;
      iv = setInterval(() => {
        setDisplayed(text.slice(0, ++i));
        if (i >= text.length) clearInterval(iv);
      }, 22);
    }, delay);
    return () => {
      clearTimeout(timer);
      clearInterval(iv);
    };
  }, [active, text, delay]);
  return displayed;
}

// ── FeatureCard ───────────────────────────────────────────────────────────────
function FeatureCard({ f }: { f: typeof features[0]; i?: number }) {
  const tiltRef = use3DTilt(6);

  return (
    <motion.div
      ref={tiltRef}
      variants={fadeUpItem}
      className="bg-white rounded-[22px] p-[26px] border border-ink/7 hover:shadow-[0_24px_48px_rgba(15,15,26,0.1)] hover:border-transparent transition-shadow cursor-none relative overflow-hidden group"
      data-cursor-hover
      style={{ willChange: "transform" }}
    >
      <div
        className={`w-12 h-12 rounded-[13px] flex items-center justify-center mb-[18px] transition-transform duration-300 group-hover:scale-110 group-hover:rotate-[-5deg] ${iconBg[f.accent]}`}
      >
        <Icon name={f.icon as IconName} size={22} />
      </div>
      <div className="font-syne font-extrabold text-[1rem] text-ink tracking-[-0.02em] mb-2">
        {f.title}
      </div>
      <div className="text-[0.85rem] leading-[1.65] text-ink-2">{f.body}</div>
      <div
        className={`absolute bottom-0 left-0 right-0 h-[3px] bg-gradient-to-r ${accentBottom[f.accent]} rounded-b-[22px] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left`}
      />
    </motion.div>
  );
}

// ── WideCard — Option A: Live AI Scanning ────────────────────────────────────
const tipText = `Add "semi-permeable membrane" to score full marks on Q3`;

function WideCard() {
  const tiltRef = use3DTilt(4);
  const inViewRef = useRef<HTMLDivElement>(null);
  const inView = useInView(inViewRef, { once: true, margin: "-60px" });

  const keywords = useCountUp(9, 720, inView);
  const format = useCountUp(7, 930, inView);
  const displayedTip = useTypewriter(tipText, 1120, inView);

  return (
    // Outer: handles stagger fadeUpItem from parent + inView detection
    <motion.div ref={inViewRef} variants={fadeUpItem} className="sm:col-span-2">
      {/* Inner: handles 3D tilt */}
      <motion.div
        ref={tiltRef}
        className="bg-ink rounded-[22px] p-7 shadow-[0_24px_48px_rgba(15,15,26,0.2)] cursor-none relative overflow-hidden group"
        data-cursor-hover
        style={{ willChange: "transform" }}
      >
        {/* ── Scan line ─────────────────────────────────────────────────────── */}
        <motion.div
          className="absolute left-0 right-0 h-[3px] pointer-events-none z-20"
          style={{
            background:
              "linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.12) 20%, rgba(255,255,255,0.92) 50%, rgba(255,255,255,0.12) 80%, transparent 100%)",
            boxShadow:
              "0 0 18px 8px rgba(255,255,255,0.14), 0 0 44px 20px rgba(78,75,229,0.22)",
          }}
          initial={{ top: "0%", opacity: 0 }}
          animate={
            inView
              ? { top: ["0%", "110%"], opacity: [0, 1, 1, 0] }
              : { top: "0%", opacity: 0 }
          }
          transition={{ duration: 1.15, ease: "linear", delay: 0.15 }}
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-center">
          {/* ── Left: text content ──────────────────────────────────────────── */}
          <div>
            {/* Icon */}
            <motion.div
              className="w-12 h-12 rounded-[13px] bg-white/10 flex items-center justify-center mb-4 text-white/80"
              initial={{ opacity: 0, scale: 0.7 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.4, delay: 0.28, ease: [0.22, 1, 0.36, 1] }}
            >
              <Icon name="cpu-chip" size={22} />
            </motion.div>

            {/* Title */}
            <motion.div
              className="font-syne font-extrabold text-[1.15rem] text-white/90 mb-2 tracking-[-0.02em]"
              initial={{ opacity: 0, y: 14 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.42, ease: [0.22, 1, 0.36, 1] }}
            >
              AI Answer Evaluation — The Thing Nobody Else Does
            </motion.div>

            {/* Description */}
            <motion.div
              className="text-[0.9rem] leading-[1.65] text-white/60 mb-4"
              initial={{ opacity: 0, y: 10 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.56, ease: [0.22, 1, 0.36, 1] }}
            >
              Upload a photo of your handwritten answer. Our AI reads it and marks
              it against the official CBSE marking scheme — checking keywords,
              format, diagrams, and completeness. Instant. Accurate. Specific.
            </motion.div>

            {/* Tags — spring pop-in one by one */}
            <div className="flex flex-wrap gap-2">
              {(
                [
                  ["CBSE Marking Scheme", "bg-amber/15 text-amber", 0.76],
                  ["Handwriting Recognition", "bg-teal/15 text-teal-2", 0.84],
                  ["Instant Feedback", "bg-green/15 text-green-2", 0.92],
                ] as [string, string, number][]
              ).map(([label, cls, d]) => (
                <motion.span
                  key={label}
                  className={`text-[0.72rem] font-bold px-3 py-1 rounded-full ${cls}`}
                  initial={{ opacity: 0, scale: 0.65, y: 8 }}
                  animate={inView ? { opacity: 1, scale: 1, y: 0 } : {}}
                  transition={{
                    type: "spring",
                    stiffness: 440,
                    damping: 18,
                    delay: d,
                  }}
                >
                  {label}
                </motion.span>
              ))}
            </div>
          </div>

          {/* ── Right: visual breakdown ──────────────────────────────────────── */}
          <motion.div
            className="bg-white/6 rounded-2xl p-4"
            initial={{ opacity: 0, x: 20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
          >
            {/* Header dot — pulses like "processing" */}
            <div className="flex items-center gap-2 mb-3">
              <motion.div
                className="w-1.5 h-1.5 rounded-full bg-teal"
                animate={inView ? { scale: [1, 1.9, 1, 1.9, 1] } : {}}
                transition={{ duration: 1.0, delay: 0.65 }}
              />
              <div className="font-semibold text-white/90 text-[0.74rem]">
                Marking breakdown
              </div>
            </div>

            {/* Keywords bar + counter */}
            <div className="mb-3">
              <div className="flex justify-between mb-1">
                <span className="text-[0.7rem] text-white/50">Keywords</span>
                <span className="text-[0.7rem] font-bold text-teal-2">
                  {keywords}/10
                </span>
              </div>
              <div className="h-1.5 bg-white/10 rounded-full overflow-hidden">
                <motion.div
                  className="h-full bg-gradient-to-r from-teal to-teal-2 rounded-full"
                  initial={{ width: 0 }}
                  animate={inView ? { width: "90%" } : {}}
                  transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1], delay: 0.72 }}
                />
              </div>
            </div>

            {/* Format bar + counter */}
            <div className="mb-3">
              <div className="flex justify-between mb-1">
                <span className="text-[0.7rem] text-white/50">Format</span>
                <span className="text-[0.7rem] font-bold text-amber">
                  {format}/10
                </span>
              </div>
              <div className="h-1.5 bg-white/10 rounded-full overflow-hidden">
                <motion.div
                  className="h-full bg-gradient-to-r from-amber to-amber-2 rounded-full"
                  initial={{ width: 0 }}
                  animate={inView ? { width: "70%" } : {}}
                  transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1], delay: 0.93 }}
                />
              </div>
            </div>

            {/* Tip with typewriter effect + blinking cursor */}
            <motion.div
              className="bg-amber/12 rounded-xl p-2.5 text-[0.7rem] text-white/70 leading-[1.5] flex items-start gap-1.5 min-h-[52px]"
              initial={{ opacity: 0, y: 8 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.3, delay: 1.12 }}
            >
              <Icon
                name="light-bulb"
                size={13}
                className="flex-shrink-0 mt-0.5 text-amber"
              />
              <span>
                {displayedTip}
                {inView && displayedTip.length < tipText.length && (
                  <motion.span
                    className="inline-block w-[1.5px] h-[10px] bg-amber/80 ml-[1px] align-middle"
                    animate={{ opacity: [1, 0] }}
                    transition={{ duration: 0.45, repeat: Infinity }}
                  />
                )}
              </span>
            </motion.div>
          </motion.div>
        </div>

        {/* Bottom accent bar */}
        <div className="absolute bottom-0 left-0 right-0 h-[3px] bg-gradient-to-r from-primary to-teal scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left rounded-b-[22px]" />
      </motion.div>
    </motion.div>
  );
}

// ── Main export ───────────────────────────────────────────────────────────────
export default function Features() {
  return (
    <section id="features" className="py-24 md:py-32 bg-surface">
      <div className="max-w-[1200px] mx-auto px-5 md:px-[5%]">
        {/* Header */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-60px" }}
          className="mb-16 md:mb-20"
        >
          <motion.div
            variants={fadeUpItem}
            className="inline-flex items-center gap-1.5 text-[0.74rem] font-bold tracking-[0.12em] uppercase text-primary mb-4"
          >
            <span className="w-4 h-0.5 bg-primary rounded" />
            Everything Inside
          </motion.div>
          <motion.h2
            variants={fadeUpItem}
            className="font-syne text-[clamp(2rem,3.5vw,2.8rem)] font-extrabold tracking-[-0.04em] leading-[1.1] text-ink"
          >
            One platform.
            <br />
            <em className="font-playfair italic not-italic text-primary">
              Every tool
            </em>{" "}
            you need.
          </motion.h2>
        </motion.div>

        {/* Cards grid */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-5"
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-40px" }}
        >
          <WideCard />
          {features.map((f, i) => (
            <FeatureCard key={f.title} f={f} i={i} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
