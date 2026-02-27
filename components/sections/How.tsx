"use client";

import { motion } from "framer-motion";
import { howSteps } from "@/lib/data";
import { use3DTilt, staggerContainer, fadeUpItem } from "@/lib/hooks";
import { Icon } from "@/lib/icons";

const dotGradients: Record<number, string> = {
  1: "from-amber to-yellow-600",
  2: "from-teal to-teal/70",
  3: "from-coral to-orange-600",
  4: "from-primary to-primary-dark",
  5: "from-sky to-sky/70",
  6: "from-green to-green/70",
};

const tagColors: Record<string, string> = {
  amber: "bg-amber/10 text-amber-900",
  teal: "bg-teal/10 text-teal",
  coral: "bg-coral/10 text-orange-700",
  violet: "bg-primary/10 text-primary",
  sky: "bg-sky/10 text-sky-600",
  green: "bg-green/10 text-green-700",
};

// ── Step Visual Components ────────────────────────────────────────────────────
function DrillVis() {
  return (
    <div className="flex flex-col gap-2">
      <div className="text-[0.7rem] font-bold uppercase tracking-[0.08em] text-ink-3 mb-1">Select your focus</div>
      {[["Subject", "Science"], ["Chapter", "Life Processes"], ["Topic", "Photosynthesis"]].map(([label, val]) => (
        <div key={label} className="flex items-center gap-2">
          <div className="text-[0.7rem] font-bold uppercase tracking-[0.08em] text-ink-3 w-[60px] flex-shrink-0">{label}</div>
          <div className="flex-1 bg-primary/10 border border-primary/25 rounded-lg px-2.5 py-1.5 font-syne font-bold text-[0.8rem] text-primary flex items-center justify-between">
            {val} <span className="text-ink-3 text-[0.7rem]">▾</span>
          </div>
        </div>
      ))}
      <div className="mt-2 bg-ink text-white rounded-lg py-2 px-3 text-center font-syne font-bold text-[0.78rem]">Start Learning →</div>
    </div>
  );
}

function LearnVis() {
  return (
    <div className="grid grid-cols-2 gap-3 min-w-0">
      <div>
        <div className="text-[0.68rem] font-bold uppercase tracking-[0.08em] text-ink-3 mb-1.5">Watch</div>
        <div className="bg-ink rounded-xl h-[60px] flex items-center justify-center relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/30 to-teal/20" />
          <div className="w-7 h-7 bg-white/15 rounded-full flex items-center justify-center backdrop-blur-sm z-10">
            <svg width="8" height="10" viewBox="0 0 10 12" fill="white"><polygon points="0,0 10,6 0,12" /></svg>
          </div>
        </div>
        <div className="text-[0.68rem] text-ink-3 mt-1 text-center">8 min video</div>
      </div>
      <div>
        <div className="text-[0.68rem] font-bold uppercase tracking-[0.08em] text-ink-3 mb-1.5">Read</div>
        <div className="bg-surface-2 rounded-xl p-2 flex flex-col gap-1.5">
          {[["h", "50%"], ["l", "95%"], ["m", "82%"], ["s", "62%"], ["m", "80%"]].map(([t, w], i) => (
            <div key={i} className={`h-[5px] rounded-sm ${t === "h" ? "bg-primary/40" : "bg-ink/10"}`} style={{ width: w }} />
          ))}
        </div>
      </div>
    </div>
  );
}

function QuizVis() {
  return (
    <div className="flex flex-col gap-2">
      <div className="bg-surface-2 rounded-xl p-2.5 text-[0.75rem] font-semibold text-ink leading-[1.4]">
        What is the raw material for photosynthesis?
      </div>
      <div className="grid grid-cols-2 gap-1.5">
        <div className="px-2 py-1.5 rounded-lg text-[0.68rem] font-bold bg-green/10 text-green-800 flex items-center gap-1"><svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg> CO₂ and Water</div>
        <div className="px-2 py-1.5 rounded-lg text-[0.68rem] bg-surface-2 text-ink-2">Oxygen and Glucose</div>
        <div className="px-2 py-1.5 rounded-lg text-[0.68rem] bg-surface-2 text-ink-2">Sunlight only</div>
        <div className="px-2 py-1.5 rounded-lg text-[0.68rem] bg-rose/8 text-rose flex items-center gap-1"><svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg> Minerals only</div>
      </div>
    </div>
  );
}

function PaperVis() {
  return (
    <div className="flex flex-col gap-1.5">
      <div className="flex justify-between items-center gap-2 pb-2 border-b border-ink/8 min-w-0">
        <div className="font-syne font-extrabold text-[0.8rem] text-ink truncate flex-1">Science Mock Paper — Set 1</div>
        <div className="text-[0.72rem] font-semibold text-ink-3 flex-shrink-0 whitespace-nowrap">80 marks · 3 hrs</div>
      </div>
      {[["Q1.", "Explain photosynthesis with a labelled diagram.", "5m"],
        ["Q2.", "Role of chlorophyll in photosynthesis?", "3m"],
        ["Q3.", "Differentiate aerobic and anaerobic respiration.", "4m"]].map(([num, text, marks]) => (
        <div key={num} className="flex gap-2 items-start py-1.5 border-b border-dashed border-ink/8">
          <span className="font-syne font-extrabold text-[0.72rem] text-amber flex-shrink-0">{num}</span>
          <span className="text-[0.72rem] text-ink-2 leading-[1.4] flex-1">{text}</span>
          <span className="text-[0.68rem] font-bold text-ink-3 flex-shrink-0 ml-auto">[{marks}]</span>
        </div>
      ))}
    </div>
  );
}

function UploadVis() {
  return (
    <div className="flex flex-col gap-2">
      <div className="bg-surface-2 border-2 border-dashed border-ink/15 rounded-xl p-5 text-center">
        <div className="flex justify-center mb-2 text-ink-3">
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"><path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"/><circle cx="12" cy="13" r="4"/></svg>
        </div>
        <div className="text-[0.74rem] text-ink-3 font-medium">Take a photo of your answer sheet<br /><strong className="text-amber font-bold">Upload it here</strong></div>
      </div>
      <div className="flex items-center gap-2">
        <div className="text-[0.72rem] text-ink-3 font-medium">Uploading...</div>
        <div className="flex-1 h-[3px] bg-surface-2 rounded-full overflow-hidden">
          <motion.div
            className="h-full bg-gradient-to-r from-primary to-teal rounded-full"
            animate={{ width: ["30%", "95%", "30%"] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          />
        </div>
      </div>
    </div>
  );
}

function EvalVis() {
  return (
    <div className="flex flex-col gap-2">
      <div className="flex items-center justify-between gap-2 min-w-0">
        <div className="min-w-0">
          <div className="text-[0.68rem] text-ink-3 font-semibold mb-0.5">Q1 — Photosynthesis</div>
          <div className="font-syne font-extrabold text-[1.4rem] text-ink">18 / 20</div>
        </div>
        <div className="bg-gradient-to-br from-teal to-teal/80 text-white px-2.5 py-1 rounded-full text-[0.72rem] font-bold flex-shrink-0 whitespace-nowrap">Great Answer</div>
      </div>
      <div className="bg-surface-2 rounded-lg p-2.5 text-[0.74rem] leading-[1.55] text-ink-2">
        &quot;Missed the term &apos;light-dependent reaction&apos; (−1) and stomata not labelled (−1). Add these and you&apos;d score 20/20.&quot;
      </div>
      <div className="flex gap-1.5 flex-wrap">
        <span className="px-2 py-0.5 rounded-full text-[0.66rem] font-bold bg-green/10 text-green-800 inline-flex items-center gap-1"><svg width="9" height="9" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg> Keywords used</span>
        <span className="px-2 py-0.5 rounded-full text-[0.66rem] font-bold bg-green/10 text-green-800 inline-flex items-center gap-1"><svg width="9" height="9" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg> Diagram present</span>
        <span className="px-2 py-0.5 rounded-full text-[0.66rem] font-bold bg-rose/8 text-rose inline-flex items-center gap-1"><svg width="9" height="9" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg> Label stomata</span>
      </div>
    </div>
  );
}

const visMap: Record<string, React.ReactNode> = {
  drill: <DrillVis />,
  learn: <LearnVis />,
  quiz: <QuizVis />,
  paper: <PaperVis />,
  upload: <UploadVis />,
  eval: <EvalVis />,
};

// ── Step Row (uses 3D tilt on the vis card) ────────────────────────────────────
function StepRow({ step }: { step: typeof howSteps[0] }) {
  const visRef = use3DTilt(6);
  const isReverse = step.reverse;

  const rowVariants = {
    hidden: {},
    show: { transition: { staggerChildren: 0.15 } },
  };

  const txtVariant = {
    hidden: { opacity: 0, x: isReverse ? 32 : -32 },
    show: { opacity: 1, x: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
  };

  const visVariant = {
    hidden: { opacity: 0, x: isReverse ? -32 : 32, y: 16 },
    show: { opacity: 1, x: 0, y: 0, transition: { duration: 0.7, delay: 0.15, ease: [0.22, 1, 0.36, 1] } },
  };

  const dotVariant = {
    hidden: { opacity: 0, scale: 0.6 },
    show: { opacity: 1, scale: 1, transition: { type: "spring", stiffness: 200, damping: 15, delay: 0.05 } },
  };

  return (
    <motion.div
      variants={rowVariants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-10px" }}
      className={`grid grid-cols-1 lg:grid-cols-[1fr_100px_1fr] gap-6 lg:gap-8 items-center ${
        isReverse ? "lg:[&>*:nth-child(1)]:order-3 lg:[&>*:nth-child(2)]:order-2 lg:[&>*:nth-child(3)]:order-1" : ""
      }`}
    >
      {/* Text */}
      <motion.div
        variants={txtVariant}
        className={isReverse ? "lg:text-right" : ""}
      >
        <span className={`inline-block text-[0.7rem] font-bold tracking-[0.1em] uppercase px-2.5 py-1 rounded-full mb-2.5 ${tagColors[step.tagColor]}`}>
          {step.tag}
        </span>
        <h3 className="font-syne font-extrabold text-[1.2rem] tracking-[-0.03em] text-ink mb-2.5">{step.title}</h3>
        <p className="text-[0.92rem] leading-[1.72] text-ink-2">{step.body}</p>
      </motion.div>

      {/* Center dot */}
      <div className="flex justify-center">
        <motion.div
          variants={dotVariant}
          whileHover={{ scale: 1.15 }}
          className={`w-[52px] h-[52px] rounded-full flex items-center justify-center font-syne font-extrabold text-[1.1rem] text-white bg-gradient-to-br ${dotGradients[step.num]} shadow-[0_8px_24px_rgba(0,0,0,0.15)] cursor-none`}
          data-cursor-hover
        >
          {step.num}
        </motion.div>
      </div>

      {/* Visual card — 3D tilt */}
      <motion.div
        ref={visRef}
        variants={visVariant}
        className="bg-white rounded-[20px] p-5 shadow-[0_16px_48px_rgba(15,15,26,0.1),0_0_0_1px_rgba(15,15,26,0.05)] cursor-none min-w-0 overflow-hidden"
        data-cursor-hover
        style={{ willChange: "transform" }}
      >
        {visMap[step.vis]}
      </motion.div>
    </motion.div>
  );
}

export default function How() {
  return (
    <section id="how" className="py-24 md:py-32 bg-surface-2">
      <div className="max-w-[1200px] mx-auto px-5 md:px-[5%]">
        {/* Header */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-60px" }}
          className="text-center mb-20"
        >
          <motion.div variants={fadeUpItem} className="inline-flex items-center gap-1.5 text-[0.74rem] font-bold tracking-[0.12em] uppercase text-primary mb-4">
            The Clear Steps Method
          </motion.div>
          <motion.h2 variants={fadeUpItem} className="font-syne text-[clamp(2rem,3.5vw,2.8rem)] font-extrabold tracking-[-0.04em] leading-[1.1] text-ink mb-4">
            Six steps from{" "}
            <em className="font-playfair italic not-italic text-amber">curious</em>
            <br />
            to exam-ready
          </motion.h2>
          <motion.p variants={fadeUpItem} className="text-[1rem] leading-[1.75] text-ink-2 max-w-[560px] mx-auto">
            Every step is designed to take you further than the last — from building genuine knowledge to proving you can use it in the exam.
          </motion.p>
        </motion.div>

        {/* Steps */}
        <div className="relative">
          {/* Timeline — desktop only */}
          <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-primary/25 to-transparent -translate-x-1/2 hidden lg:block pointer-events-none" />
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
