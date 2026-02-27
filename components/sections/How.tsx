"use client";

import { useRef, useEffect, useState } from "react";
import { motion, useInView, useScroll } from "framer-motion";
import { howSteps } from "@/lib/data";
import { use3DTilt, staggerContainer, fadeUpItem } from "@/lib/hooks";

const dotGradients: Record<number, string> = {
  1: "from-amber to-yellow-600",
  2: "from-teal to-teal/70",
  3: "from-coral to-orange-600",
  4: "from-primary to-primary-dark",
  5: "from-sky to-sky/70",
  6: "from-green to-green/70",
};

const tagColors: Record<string, string> = {
  amber:  "bg-amber/10 text-amber-900",
  teal:   "bg-teal/10 text-teal",
  coral:  "bg-coral/10 text-orange-700",
  violet: "bg-primary/10 text-primary",
  sky:    "bg-sky/10 text-sky-600",
  green:  "bg-green/10 text-green-700",
};

// Ripple ring color per step accent
const dotRingColors: Record<string, string> = {
  amber:  "rgba(245,158,11,0.35)",
  teal:   "rgba(13,148,136,0.35)",
  coral:  "rgba(249,115,22,0.35)",
  violet: "rgba(78,75,229,0.35)",
  sky:    "rgba(56,189,248,0.35)",
  green:  "rgba(34,197,94,0.35)",
};

// ── Count-up hook (for EvalVis score) ─────────────────────────────────────────
function useCountUp(target: number, delayMs: number, active: boolean) {
  const [val, setVal] = useState(0);
  useEffect(() => {
    if (!active) return;
    const t = setTimeout(() => {
      const start = performance.now();
      const duration = 900;
      const tick = (ts: number) => {
        const p = Math.min((ts - start) / duration, 1);
        setVal(Math.round((1 - Math.pow(1 - p, 3)) * target));
        if (p < 1) requestAnimationFrame(tick);
      };
      requestAnimationFrame(tick);
    }, delayMs);
    return () => clearTimeout(t);
  }, [active, target, delayMs]);
  return val;
}

// ── Step 1: Drill / topic selector ───────────────────────────────────────────
function DrillVis({ active }: { active: boolean }) {
  const rows = [
    ["Subject", "Science"],
    ["Chapter", "Life Processes"],
    ["Topic",   "Photosynthesis"],
  ];
  return (
    <div className="flex flex-col gap-2">
      <motion.div
        className="text-[0.7rem] font-bold uppercase tracking-[0.08em] text-ink-3 mb-1"
        initial={{ opacity: 0 }}
        animate={active ? { opacity: 1 } : {}}
        transition={{ duration: 0.3, delay: 0.05 }}
      >
        Select your focus
      </motion.div>

      {rows.map(([label, val], i) => (
        <motion.div
          key={label}
          className="flex items-center gap-2"
          initial={{ opacity: 0, x: -14 }}
          animate={active ? { opacity: 1, x: 0 } : {}}
          transition={{ delay: 0.15 + i * 0.14, duration: 0.42, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="text-[0.7rem] font-bold uppercase tracking-[0.08em] text-ink-3 w-[60px] flex-shrink-0">
            {label}
          </div>
          <div className="flex-1 bg-primary/10 border border-primary/25 rounded-lg px-2.5 py-1.5 font-syne font-bold text-[0.8rem] text-primary flex items-center justify-between">
            {val} <span className="text-ink-3 text-[0.7rem]">▾</span>
          </div>
        </motion.div>
      ))}

      <motion.div
        className="mt-2 bg-ink text-white rounded-lg py-2 px-3 text-center font-syne font-bold text-[0.78rem]"
        initial={{ opacity: 0, y: 10 }}
        animate={active ? { opacity: 1, y: 0 } : {}}
        transition={{ delay: 0.72, duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
      >
        Start Learning →
      </motion.div>
    </div>
  );
}

// ── Step 2: Learn (video + text skeleton) ─────────────────────────────────────
function LearnVis({ active }: { active: boolean }) {
  const bars: [string, string][] = [["h","50%"],["l","95%"],["m","82%"],["s","62%"],["m","80%"]];
  return (
    <div className="grid grid-cols-2 gap-3 min-w-0">
      {/* Video thumbnail */}
      <div>
        <div className="text-[0.68rem] font-bold uppercase tracking-[0.08em] text-ink-3 mb-1.5">Watch</div>
        <motion.div
          className="bg-ink rounded-xl h-[60px] flex items-center justify-center relative overflow-hidden"
          initial={{ opacity: 0, scale: 0.94 }}
          animate={active ? { opacity: 1, scale: 1 } : {}}
          transition={{ delay: 0.1, duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-primary/30 to-teal/20" />
          <motion.div
            className="w-7 h-7 bg-white/15 rounded-full flex items-center justify-center backdrop-blur-sm z-10"
            initial={{ scale: 0.4, opacity: 0 }}
            animate={active ? { scale: 1, opacity: 1 } : {}}
            transition={{ type: "spring", stiffness: 400, damping: 18, delay: 0.4 }}
          >
            <svg width="8" height="10" viewBox="0 0 10 12" fill="white">
              <polygon points="0,0 10,6 0,12" />
            </svg>
          </motion.div>
        </motion.div>
        <div className="text-[0.68rem] text-ink-3 mt-1 text-center">8 min video</div>
      </div>

      {/* Text skeleton */}
      <div>
        <div className="text-[0.68rem] font-bold uppercase tracking-[0.08em] text-ink-3 mb-1.5">Read</div>
        <div className="bg-surface-2 rounded-xl p-2 flex flex-col gap-1.5">
          {bars.map(([t, w], i) => (
            <div key={i} className="h-[5px] rounded-sm bg-ink/8 overflow-hidden">
              <motion.div
                className={`h-full rounded-sm ${t === "h" ? "bg-primary/40" : "bg-ink/20"}`}
                initial={{ width: 0 }}
                animate={active ? { width: w } : {}}
                transition={{ delay: 0.2 + i * 0.1, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// ── Step 3: Quiz ──────────────────────────────────────────────────────────────
function QuizVis({ active }: { active: boolean }) {
  const options = [
    { text: "CO₂ and Water",       correct: true,  wrong: false },
    { text: "Oxygen and Glucose",  correct: false, wrong: false },
    { text: "Sunlight only",       correct: false, wrong: false },
    { text: "Minerals only",       correct: false, wrong: true  },
  ];
  return (
    <div className="flex flex-col gap-2">
      <motion.div
        className="bg-surface-2 rounded-xl p-2.5 text-[0.75rem] font-semibold text-ink leading-[1.4]"
        initial={{ opacity: 0, y: -8 }}
        animate={active ? { opacity: 1, y: 0 } : {}}
        transition={{ delay: 0.1, duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
      >
        What is the raw material for photosynthesis?
      </motion.div>

      <div className="grid grid-cols-2 gap-1.5">
        {options.map((opt, i) => (
          <motion.div
            key={i}
            className={`px-2 py-1.5 rounded-lg text-[0.68rem] font-bold flex items-center gap-1 ${
              opt.correct ? "bg-green/10 text-green-800" :
              opt.wrong   ? "bg-rose/8 text-rose"        :
              "bg-surface-2 text-ink-2"
            }`}
            initial={{ opacity: 0, scale: 0.8, y: 8 }}
            animate={active ? { opacity: 1, scale: 1, y: 0 } : {}}
            transition={{ type: "spring", stiffness: 380, damping: 18, delay: 0.25 + i * 0.1 }}
          >
            {opt.correct && (
              <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="20 6 9 17 4 12" />
              </svg>
            )}
            {opt.wrong && (
              <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            )}
            {opt.text}
          </motion.div>
        ))}
      </div>
    </div>
  );
}

// ── Step 4: Mock paper ────────────────────────────────────────────────────────
function PaperVis({ active }: { active: boolean }) {
  const qs = [
    ["Q1.", "Explain photosynthesis with a labelled diagram.", "5m"],
    ["Q2.", "Role of chlorophyll in photosynthesis?",          "3m"],
    ["Q3.", "Differentiate aerobic and anaerobic respiration.","4m"],
  ];
  return (
    <div className="flex flex-col gap-1.5">
      <motion.div
        className="flex justify-between items-center gap-2 pb-2 border-b border-ink/8 min-w-0"
        initial={{ opacity: 0 }}
        animate={active ? { opacity: 1 } : {}}
        transition={{ delay: 0.1, duration: 0.4 }}
      >
        <div className="font-syne font-extrabold text-[0.8rem] text-ink truncate flex-1">
          Science Mock Paper — Set 1
        </div>
        <div className="text-[0.72rem] font-semibold text-ink-3 flex-shrink-0 whitespace-nowrap">
          80 marks · 3 hrs
        </div>
      </motion.div>

      {qs.map(([num, text, marks], i) => (
        <motion.div
          key={num}
          className="flex gap-2 items-start py-1.5 border-b border-dashed border-ink/8"
          initial={{ opacity: 0, x: -12 }}
          animate={active ? { opacity: 1, x: 0 } : {}}
          transition={{ delay: 0.22 + i * 0.18, duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
        >
          <span className="font-syne font-extrabold text-[0.72rem] text-amber flex-shrink-0">{num}</span>
          <span className="text-[0.72rem] text-ink-2 leading-[1.4] flex-1">{text}</span>
          <span className="text-[0.68rem] font-bold text-ink-3 flex-shrink-0 ml-auto">[{marks}]</span>
        </motion.div>
      ))}
    </div>
  );
}

// ── Step 5: Upload ────────────────────────────────────────────────────────────
function UploadVis({ active }: { active: boolean }) {
  return (
    <div className="flex flex-col gap-2">
      <motion.div
        className="bg-surface-2 border-2 border-dashed border-ink/15 rounded-xl p-5 text-center"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={active ? { opacity: 1, scale: 1 } : {}}
        transition={{ delay: 0.1, duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
      >
        <motion.div
          className="flex justify-center mb-2 text-ink-3"
          animate={active ? { scale: [1, 1.18, 1] } : {}}
          transition={{ delay: 0.45, duration: 0.35, ease: "easeInOut" }}
        >
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
            <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z" />
            <circle cx="12" cy="13" r="4" />
          </svg>
        </motion.div>
        <div className="text-[0.74rem] text-ink-3 font-medium">
          Take a photo of your answer sheet
          <br />
          <strong className="text-amber font-bold">Upload it here</strong>
        </div>
      </motion.div>

      <div className="flex items-center gap-2">
        <motion.div
          className="text-[0.72rem] text-ink-3 font-medium"
          initial={{ opacity: 0 }}
          animate={active ? { opacity: 1 } : {}}
          transition={{ delay: 0.55 }}
        >
          Uploading...
        </motion.div>
        <div className="flex-1 h-[3px] bg-surface-2 rounded-full overflow-hidden">
          <motion.div
            className="h-full bg-gradient-to-r from-primary to-teal rounded-full"
            animate={active ? { width: ["0%", "95%", "30%"] } : { width: "0%" }}
            transition={{ duration: 2, repeat: active ? Infinity : 0, ease: "easeInOut", delay: 0.6 }}
          />
        </div>
      </div>
    </div>
  );
}

// ── Step 6: AI evaluation ─────────────────────────────────────────────────────
function EvalVis({ active }: { active: boolean }) {
  const score = useCountUp(18, 350, active);

  const tags = [
    { label: "Keywords used",   icon: "check", cls: "bg-green/10 text-green-800", delay: 0.85 },
    { label: "Diagram present", icon: "check", cls: "bg-green/10 text-green-800", delay: 0.97 },
    { label: "Label stomata",   icon: "bolt",  cls: "bg-rose/8 text-rose",        delay: 1.09 },
  ];

  return (
    <div className="flex flex-col gap-2">
      <div className="flex items-center justify-between gap-2 min-w-0">
        <div className="min-w-0">
          <motion.div
            className="text-[0.68rem] text-ink-3 font-semibold mb-0.5"
            initial={{ opacity: 0 }}
            animate={active ? { opacity: 1 } : {}}
            transition={{ delay: 0.1 }}
          >
            Q1 — Photosynthesis
          </motion.div>
          <motion.div
            className="font-syne font-extrabold text-[1.4rem] text-ink"
            initial={{ opacity: 0, scale: 0.75 }}
            animate={active ? { opacity: 1, scale: 1 } : {}}
            transition={{ type: "spring", stiffness: 380, damping: 18, delay: 0.22 }}
          >
            {score} / 20
          </motion.div>
        </div>

        <motion.div
          className="bg-gradient-to-br from-teal to-teal/80 text-white px-2.5 py-1 rounded-full text-[0.72rem] font-bold flex-shrink-0 whitespace-nowrap"
          initial={{ opacity: 0, scale: 0.65, x: 12 }}
          animate={active ? { opacity: 1, scale: 1, x: 0 } : {}}
          transition={{ type: "spring", stiffness: 380, damping: 18, delay: 0.5 }}
        >
          Great Answer
        </motion.div>
      </div>

      <motion.div
        className="bg-surface-2 rounded-lg p-2.5 text-[0.74rem] leading-[1.55] text-ink-2"
        initial={{ opacity: 0, y: 8 }}
        animate={active ? { opacity: 1, y: 0 } : {}}
        transition={{ delay: 0.65, duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
      >
        &quot;Missed &apos;light-dependent reaction&apos; (−1) and stomata not labelled (−1). Fix these → 20/20.&quot;
      </motion.div>

      <div className="flex gap-1.5 flex-wrap">
        {tags.map(({ label, icon, cls, delay }) => (
          <motion.span
            key={label}
            className={`px-2 py-0.5 rounded-full text-[0.66rem] font-bold inline-flex items-center gap-1 ${cls}`}
            initial={{ opacity: 0, scale: 0.65, y: 6 }}
            animate={active ? { opacity: 1, scale: 1, y: 0 } : {}}
            transition={{ type: "spring", stiffness: 400, damping: 18, delay }}
          >
            {icon === "check" ? (
              <svg width="9" height="9" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="20 6 9 17 4 12" />
              </svg>
            ) : (
              <svg width="9" height="9" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
              </svg>
            )}
            {label}
          </motion.span>
        ))}
      </div>
    </div>
  );
}

// Vis map — each entry is a render function taking `active` boolean
const visMap: Record<string, (active: boolean) => React.ReactNode> = {
  drill:  (a) => <DrillVis  active={a} />,
  learn:  (a) => <LearnVis  active={a} />,
  quiz:   (a) => <QuizVis   active={a} />,
  paper:  (a) => <PaperVis  active={a} />,
  upload: (a) => <UploadVis active={a} />,
  eval:   (a) => <EvalVis   active={a} />,
};

// ── Step Row ──────────────────────────────────────────────────────────────────
function StepRow({ step }: { step: typeof howSteps[0] }) {
  const visRef     = use3DTilt(6);
  const visWrapRef = useRef<HTMLDivElement>(null);
  const visActive  = useInView(visWrapRef, { once: true, margin: "-40px" });
  const isReverse  = step.reverse;

  const rowVariants = {
    hidden: {},
    show: { transition: { staggerChildren: 0.15 } },
  };

  const txtVariant = {
    hidden: { opacity: 0, x: isReverse ? 32 : -32 },
    show:   { opacity: 1, x: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as [number,number,number,number] } },
  };

  const visVariant = {
    hidden: { opacity: 0, x: isReverse ? -32 : 32, y: 16 },
    show:   { opacity: 1, x: 0, y: 0, transition: { duration: 0.7, delay: 0.15, ease: [0.22, 1, 0.36, 1] as [number,number,number,number] } },
  };

  const dotVariant = {
    hidden: { opacity: 0, scale: 0.6 },
    show:   { opacity: 1, scale: 1, transition: { type: "spring", stiffness: 200, damping: 15, delay: 0.05 } },
  };

  return (
    <motion.div
      variants={rowVariants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-10px" }}
      className={`grid grid-cols-1 lg:grid-cols-[1fr_100px_1fr] gap-6 lg:gap-8 items-center ${
        isReverse
          ? "lg:[&>*:nth-child(1)]:order-3 lg:[&>*:nth-child(2)]:order-2 lg:[&>*:nth-child(3)]:order-1"
          : ""
      }`}
    >
      {/* Text */}
      <motion.div variants={txtVariant} className={isReverse ? "lg:text-right" : ""}>
        <span className={`inline-block text-[0.7rem] font-bold tracking-[0.1em] uppercase px-2.5 py-1 rounded-full mb-2.5 ${tagColors[step.tagColor]}`}>
          {step.tag}
        </span>
        <h3 className="font-syne font-extrabold text-[1.2rem] tracking-[-0.03em] text-ink mb-2.5">
          {step.title}
        </h3>
        <p className="text-[0.92rem] leading-[1.72] text-ink-2">{step.body}</p>
      </motion.div>

      {/* Center dot with ripple ring */}
      <div className="flex justify-center">
        <motion.div variants={dotVariant} className="relative">
          {/* Ripple ring */}
          <motion.div
            className="absolute inset-[-8px] rounded-full pointer-events-none"
            animate={{ scale: [0.85, 1.4], opacity: [0.4, 0] }}
            transition={{ duration: 2.4, repeat: Infinity, ease: "easeOut" }}
            style={{ background: dotRingColors[step.tagColor] }}
          />
          <motion.div
            whileHover={{ scale: 1.15 }}
            transition={{ type: "spring", stiffness: 300, damping: 15 }}
            className={`w-[52px] h-[52px] rounded-full flex items-center justify-center font-syne font-extrabold text-[1.1rem] text-white bg-gradient-to-br ${dotGradients[step.num]} shadow-[0_8px_24px_rgba(0,0,0,0.15)] cursor-none relative z-10`}
            data-cursor-hover
          >
            {step.num}
          </motion.div>
        </motion.div>
      </div>

      {/* Visual card — 3D tilt, inView triggers vis content */}
      <div ref={visWrapRef}>
        <motion.div
          ref={visRef}
          variants={visVariant}
          className="bg-white rounded-[20px] p-5 shadow-[0_16px_48px_rgba(15,15,26,0.1),0_0_0_1px_rgba(15,15,26,0.05)] cursor-none min-w-0 overflow-hidden"
          data-cursor-hover
          style={{ willChange: "transform" }}
        >
          {visMap[step.vis](visActive)}
        </motion.div>
      </div>
    </motion.div>
  );
}

// ── Main export ───────────────────────────────────────────────────────────────
export default function How() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start 0.75", "end 0.25"],
  });

  return (
    <section id="how" ref={sectionRef} className="py-24 md:py-32 bg-surface-2">
      <div className="max-w-[1200px] mx-auto px-5 md:px-[5%]">
        {/* Header */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-60px" }}
          className="text-center mb-20"
        >
          <motion.div
            variants={fadeUpItem}
            className="inline-flex items-center gap-1.5 text-[0.74rem] font-bold tracking-[0.12em] uppercase text-primary mb-4"
          >
            The Clear Steps Method
          </motion.div>
          <motion.h2
            variants={fadeUpItem}
            className="font-syne text-[clamp(2rem,3.5vw,2.8rem)] font-extrabold tracking-[-0.04em] leading-[1.1] text-ink mb-4"
          >
            Six steps from{" "}
            <em className="font-playfair italic not-italic text-amber">curious</em>
            <br />
            to exam-ready
          </motion.h2>
          <motion.p
            variants={fadeUpItem}
            className="text-[1rem] leading-[1.75] text-ink-2 max-w-[560px] mx-auto"
          >
            Every step is designed to take you further than the last — from building genuine knowledge to proving you can use it in the exam.
          </motion.p>
        </motion.div>

        {/* Steps */}
        <div className="relative">
          {/* Timeline — desktop only, fills as you scroll */}
          <div className="absolute left-1/2 top-0 bottom-0 w-px -translate-x-1/2 hidden lg:block pointer-events-none overflow-hidden">
            {/* Track */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-ink/8 to-transparent" />
            {/* Animated fill */}
            <motion.div
              className="absolute top-0 left-0 right-0 h-full bg-gradient-to-b from-amber via-primary to-teal origin-top"
              style={{ scaleY: scrollYProgress }}
            />
          </div>

          <div className="flex flex-col gap-20 lg:gap-24">
            {howSteps.map((step) => (
              <StepRow key={step.num} step={step} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
