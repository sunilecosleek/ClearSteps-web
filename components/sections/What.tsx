"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { staggerContainer, fadeUpItem, slideLeftItem, slideRightItem } from "@/lib/hooks";
import { Icon, IconName } from "@/lib/icons";

const TABS = ["subjects", "learn", "quiz", "eval"] as const;
type Tab = typeof TABS[number];

// ── Tab panels ─────────────────────────────────────────────────────────────────
function SubjectsPanel() {
  const [sel, setSel] = useState("Science");
  const subjects: { icon: IconName; name: string }[] = [
    { icon: "flask", name: "Science" },
    { icon: "calculator", name: "Maths" },
    { icon: "book-open", name: "English" },
    { icon: "bolt", name: "Physics" },
    { icon: "beaker", name: "Chemistry" },
    { icon: "leaf", name: "Biology" },
  ];
  return (
    <motion.div
      key="subjects"
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -8 }}
      transition={{ duration: 0.3 }}
    >
      <div className="text-[0.72rem] font-semibold text-ink-3 mb-2.5">
        Choose a subject to start
      </div>
      <div className="grid grid-cols-3 gap-2 mb-3">
        {subjects.map((s) => (
          <motion.button
            key={s.name}
            onClick={() => setSel(s.name)}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className={`rounded-xl p-2.5 text-center cursor-none border-[1.5px] transition-all ${
              sel === s.name
                ? "bg-white border-primary/30 shadow-sm"
                : "bg-surface border-transparent hover:bg-white hover:border-primary/15"
            }`}
            data-cursor-hover
          >
            <div className="flex items-center justify-center mb-1 text-ink-2">
              <Icon name={s.icon} size={22} />
            </div>
            <div className="font-syne font-bold text-[0.72rem] text-ink">{s.name}</div>
          </motion.button>
        ))}
      </div>
      <div className="text-[0.72rem] text-ink-3">
        Then pick Chapter → Topic → Start learning
      </div>
    </motion.div>
  );
}

function LearnPanel() {
  return (
    <motion.div
      key="learn"
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -8 }}
      transition={{ duration: 0.3 }}
      className="grid grid-cols-2 gap-3"
    >
      <div>
        <div className="text-[0.7rem] font-bold uppercase tracking-[0.08em] text-ink-3 mb-2">
          Concept Video
        </div>
        <div className="bg-surface rounded-xl overflow-hidden">
          <div className="h-20 bg-gradient-to-br from-ink to-primary/80 flex items-center justify-center relative">
            <motion.div
              className="w-9 h-9 bg-white/15 rounded-full flex items-center justify-center backdrop-blur-md"
              whileHover={{ scale: 1.15, backgroundColor: "rgba(255,255,255,0.25)" }}
            >
              <svg width="10" height="12" viewBox="0 0 10 12" fill="white">
                <polygon points="0,0 10,6 0,12" />
              </svg>
            </motion.div>
          </div>
          <div className="p-2.5">
            <div className="font-syne font-bold text-[0.8rem] text-ink">
              Photosynthesis
            </div>
            <div className="text-[0.7rem] text-ink-3 mt-0.5">
              8 min · Class 10 Science
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="text-[0.7rem] font-bold uppercase tracking-[0.08em] text-ink-3 mb-2">
          Topic Notes
        </div>
        <div className="bg-surface-2 rounded-xl p-2.5 flex flex-col gap-1.5">
          {[["50%", "primary"], ["95%", ""], ["82%", ""], ["62%", ""], ["90%", ""], ["74%", ""], ["56%", ""]].map(([w, c], i) => (
            <div
              key={i}
              className={`h-[5px] rounded-sm ${c ? "bg-primary/35" : "bg-ink/10"}`}
              style={{ width: w }}
            />
          ))}
        </div>
      </div>
    </motion.div>
  );
}

function QuizPanel() {
  return (
    <motion.div
      key="quiz"
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -8 }}
      transition={{ duration: 0.3 }}
    >
      <div className="bg-surface rounded-xl p-2.5 text-[0.78rem] font-semibold text-ink mb-2.5 leading-[1.5]">
        Which organelle is known as the &quot;powerhouse of the cell&quot;?
      </div>
      <div className="grid grid-cols-2 gap-1.5 mb-2.5">
        {[
          { label: "Nucleus", icon: null as IconName | null, state: "" },
          { label: "Mitochondria", icon: "check" as IconName, state: "correct" },
          { label: "Ribosome", icon: "x-mark" as IconName, state: "wrong" },
          { label: "Golgi body", icon: null as IconName | null, state: "" },
        ].map((opt) => (
          <div
            key={opt.label}
            className={`px-2.5 py-2 rounded-lg text-[0.72rem] font-medium flex items-center gap-1.5 ${
              opt.state === "correct"
                ? "bg-green/10 text-green-800 font-bold"
                : opt.state === "wrong"
                ? "bg-rose/8 text-rose"
                : "bg-surface border border-ink/8 text-ink-2"
            }`}
          >
            {opt.icon && <Icon name={opt.icon} size={11} className="flex-shrink-0" />}
            {opt.label}
          </div>
        ))}
      </div>
      <div className="bg-green/8 rounded-xl p-2.5 text-[0.72rem] text-green-800 font-medium leading-[1.5] flex items-start gap-1.5">
        <Icon name="check" size={12} className="flex-shrink-0 mt-0.5" />
        <span>Correct! Mitochondria produces ATP through cellular respiration.</span>
      </div>
    </motion.div>
  );
}

function EvalPanel() {
  return (
    <motion.div
      key="eval"
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -8 }}
      transition={{ duration: 0.3 }}
    >
      <div className="bg-surface rounded-xl p-3">
        <div className="flex items-center justify-between mb-3">
          <div>
            <div className="text-[0.7rem] font-semibold text-ink-3 mb-0.5">
              Q3 — Explain Osmosis
            </div>
            <div className="font-syne font-extrabold text-[1.4rem] text-ink">16 / 20</div>
          </div>
          <div className="bg-gradient-to-br from-teal to-teal/70 text-white px-2.5 py-1 rounded-full text-[0.75rem] font-bold">
            Good Work
          </div>
        </div>
        {[
          { label: "Content", val: "9/10", pct: "90%", color: "from-teal to-teal-2", tc: "text-teal" },
          { label: "Accuracy", val: "7/10", pct: "70%", color: "from-amber to-amber-2", tc: "text-amber" },
        ].map((b) => (
          <div key={b.label} className="mb-2">
            <div className="flex justify-between mb-1">
              <span className="text-[0.7rem] font-semibold text-ink-2">{b.label}</span>
              <span className={`text-[0.7rem] font-bold ${b.tc}`}>{b.val}</span>
            </div>
            <div className="h-[6px] bg-surface-2 rounded-full overflow-hidden">
              <motion.div
                className={`h-full bg-gradient-to-r ${b.color} rounded-full`}
                initial={{ width: 0 }}
                animate={{ width: b.pct }}
                transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
              />
            </div>
          </div>
        ))}
        <div className="bg-surface-2 rounded-lg p-2 text-[0.72rem] text-ink-2 leading-[1.5] mt-2 flex items-start gap-1.5">
          <Icon name="bolt" size={12} className="flex-shrink-0 mt-0.5 text-primary" />
          <span>Missed: &quot;semi-permeable membrane&quot; keyword (−2). Add this term to score full marks.</span>
        </div>
      </div>
    </motion.div>
  );
}

const panelMap: Record<Tab, React.ReactNode> = {
  subjects: <SubjectsPanel />,
  learn: <LearnPanel />,
  quiz: <QuizPanel />,
  eval: <EvalPanel />,
};

const tabLabels: Record<Tab, string> = {
  subjects: "Subjects",
  learn: "Learn",
  quiz: "Quiz",
  eval: "AI Eval",
};

export default function What() {
  const [activeTab, setActiveTab] = useState<Tab>("subjects");

  // Auto rotate tabs
  useEffect(() => {
    const ids = TABS;
    let i = 0;
    const interval = setInterval(() => {
      i = (i + 1) % ids.length;
      setActiveTab(ids[i]);
    }, 2800);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="what" className="py-24 md:py-32 bg-surface">
      <div className="max-w-[1200px] mx-auto px-5 md:px-[5%]">
        <motion.div
          className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-center"
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-60px" }}
        >
          {/* Left */}
          <motion.div variants={slideLeftItem}>
            <div className="inline-flex items-center gap-1.5 text-[0.74rem] font-bold tracking-[0.12em] uppercase text-teal mb-5">
              <span className="w-4 h-0.5 bg-teal rounded" />
              What is Clear Steps
            </div>
            <h2 className="font-syne text-[clamp(2rem,3.5vw,2.8rem)] font-extrabold tracking-[-0.04em] leading-[1.1] text-ink mb-5">
              Not just another study app.
              <br />A complete{" "}
              <em className="font-playfair italic not-italic text-teal">
                learning system.
              </em>
            </h2>
            <p className="text-[1rem] leading-[1.78] text-ink-2 mb-8">
              Most learning platforms give you videos and call it a day. Clear
              Steps takes you the full distance — from{" "}
              <strong className="text-ink font-semibold">
                understanding a concept
              </strong>{" "}
              for the very first time, all the way to{" "}
              <strong className="text-ink font-semibold">
                knowing how you&apos;d actually score
              </strong>{" "}
              in the real CBSE board exam.
              <br />
              <br />
              Think of it as your subject teacher, practice partner, and CBSE
              examiner — all rolled into one platform.
            </p>

            {/* Animated pill badges */}
            <motion.div
              className="flex flex-wrap gap-2"
              variants={staggerContainer}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
            >
              {(
                [
                  { icon: "book-open" as IconName, label: "Learn", cls: "bg-amber/8 border-amber/25 text-amber-900" },
                  { icon: "check-circle" as IconName, label: "Test", cls: "bg-teal/7 border-teal/22 text-teal" },
                  { icon: "document" as IconName, label: "Practice", cls: "bg-coral/7 border-coral/22 text-orange-700" },
                  { icon: "cpu-chip" as IconName, label: "AI Evaluate", cls: "bg-primary/7 border-primary/22 text-primary" },
                ]
              ).map((p) => (
                <motion.span
                  key={p.label}
                  variants={fadeUpItem}
                  whileHover={{ scale: 1.05, y: -2 }}
                  className={`inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-[0.82rem] font-semibold border ${p.cls} cursor-none`}
                  data-cursor-hover
                >
                  <Icon name={p.icon} size={14} />
                  {p.label}
                </motion.span>
              ))}
            </motion.div>
          </motion.div>

          {/* Right — Platform Card */}
          <motion.div variants={slideRightItem}>
            <div className="bg-white rounded-3xl p-6 shadow-[0_20px_60px_rgba(15,15,26,0.1),0_0_0_1px_rgba(15,15,26,0.06)]">
              {/* Tab bar */}
              <div className="flex gap-1 bg-surface-2 rounded-xl p-1 mb-5">
                {TABS.map((tab) => (
                  <motion.button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={`flex-1 px-2 py-3 sm:py-2 rounded-[9px] font-syne font-bold text-[0.78rem] text-center transition-colors cursor-none ${
                      activeTab === tab
                        ? "bg-white text-ink shadow-sm"
                        : "text-ink-3 hover:text-ink"
                    }`}
                    data-cursor-hover
                    whileTap={{ scale: 0.97 }}
                  >
                    {tabLabels[tab]}
                  </motion.button>
                ))}
              </div>

              {/* Panel — animated swap */}
              <div className="min-h-[196px]">
                <AnimatePresence mode="wait">
                  {panelMap[activeTab]}
                </AnimatePresence>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
