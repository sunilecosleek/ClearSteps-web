"use client";

import { motion } from "framer-motion";
import { problemCards } from "@/lib/data";
import { use3DTilt, staggerContainer, fadeUpItem } from "@/lib/hooks";

const accentTop: Record<string, string> = {
  amber: "from-amber to-amber-2",
  teal: "from-teal to-teal-2",
  coral: "from-coral to-orange-200",
};

const accentIconBg: Record<string, string> = {
  amber: "bg-amber/12",
  teal: "bg-teal/12",
  coral: "bg-coral/12",
};

const accentStroke: Record<string, string> = {
  amber: "#F59E0B",
  teal: "#14B8A6",
  coral: "#F97316",
};

const accentGlowFrames: Record<string, string[]> = {
  amber: [
    "0 0 0px 0px rgba(245,158,11,0)",
    "0 0 22px 7px rgba(245,158,11,0.22)",
    "0 0 0px 0px rgba(245,158,11,0)",
  ],
  teal: [
    "0 0 0px 0px rgba(20,184,166,0)",
    "0 0 22px 7px rgba(20,184,166,0.22)",
    "0 0 0px 0px rgba(20,184,166,0)",
  ],
  coral: [
    "0 0 0px 0px rgba(249,115,22,0)",
    "0 0 22px 7px rgba(249,115,22,0.22)",
    "0 0 0px 0px rgba(249,115,22,0)",
  ],
};

// Animated SVG icons — each path draws itself in on entry
function AnimatedProblemIcon({
  name,
  accent,
  entryDelay,
}: {
  name: string;
  accent: string;
  entryDelay: number;
}) {
  const stroke = accentStroke[accent];

  // Returns animation props for each sub-path, staggered by `d` seconds
  const p = (d: number, dur = 0.65) => ({
    stroke,
    initial: { pathLength: 0, opacity: 0 },
    whileInView: { pathLength: 1, opacity: 1 },
    viewport: { once: true },
    transition: {
      pathLength: { duration: dur, delay: entryDelay + d, ease: [0.22, 1, 0.36, 1] as [number,number,number,number] },
      opacity:   { duration: 0.01, delay: entryDelay + d },
    },
  });

  if (name === "book-open") {
    return (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
        {/* Left page */}
        <motion.path {...p(0)}    d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
        {/* Right page */}
        <motion.path {...p(0.08)} d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
        {/* Left text lines — simulate content */}
        <motion.line {...p(0.38, 0.32)} x1="5" y1="9"  x2="9"  y2="9"  strokeOpacity="0.55" />
        <motion.line {...p(0.44, 0.32)} x1="5" y1="12" x2="9"  y2="12" strokeOpacity="0.55" />
        <motion.line {...p(0.50, 0.28)} x1="5" y1="15" x2="7.5" y2="15" strokeOpacity="0.35" />
        {/* Right text lines */}
        <motion.line {...p(0.38, 0.32)} x1="15" y1="9"  x2="19" y2="9"  strokeOpacity="0.55" />
        <motion.line {...p(0.44, 0.32)} x1="15" y1="12" x2="19" y2="12" strokeOpacity="0.55" />
        <motion.line {...p(0.50, 0.28)} x1="15" y1="15" x2="17.5" y2="15" strokeOpacity="0.35" />
      </svg>
    );
  }

  if (name === "pencil") {
    return (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
        {/* Pen nib / diagonal slash — draws first, most impactful */}
        <motion.path {...p(0)}    d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z" />
        {/* Document border */}
        <motion.path {...p(0.3)}  d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" />
        {/* Written lines inside doc — appear last, suggest active writing */}
        <motion.line {...p(0.58, 0.38)} x1="5" y1="15" x2="10" y2="15" strokeOpacity="0.45" />
        <motion.line {...p(0.65, 0.38)} x1="5" y1="18" x2="9"  y2="18" strokeOpacity="0.3" />
      </svg>
    );
  }

  if (name === "target") {
    return (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
        {/* Outer ring */}
        <motion.circle {...p(0)}    cx="12" cy="12" r="10" />
        {/* Middle ring */}
        <motion.circle {...p(0.22)} cx="12" cy="12" r="6" />
        {/* Bullseye */}
        <motion.circle {...p(0.42)} cx="12" cy="12" r="2" />
        {/* Crosshair ticks — subtle, appear after rings */}
        <motion.line {...p(0.58, 0.22)} x1="12" y1="2"  x2="12" y2="5.5"  strokeOpacity="0.4" strokeWidth="1.3" />
        <motion.line {...p(0.58, 0.22)} x1="12" y1="18.5" x2="12" y2="22" strokeOpacity="0.4" strokeWidth="1.3" />
        <motion.line {...p(0.63, 0.22)} x1="2"  y1="12" x2="5.5" y2="12"  strokeOpacity="0.4" strokeWidth="1.3" />
        <motion.line {...p(0.63, 0.22)} x1="18.5" y1="12" x2="22" y2="12" strokeOpacity="0.4" strokeWidth="1.3" />
      </svg>
    );
  }

  return null;
}

// Each card floats at a different speed + phase so they never move in sync
const floatConfig = [
  { y: [0, -8, 0],  duration: 4.0, delay: 0.0 },
  { y: [0, -11, 0], duration: 4.9, delay: 0.6 },
  { y: [0, -7, 0],  duration: 5.4, delay: 1.3 },
];

// Icon pulse: scale + soft glow, each card on its own rhythm
const iconPulse = [
  { duration: 3.6, delay: 0.4 },
  { duration: 4.3, delay: 1.6 },
  { duration: 3.1, delay: 0.9 },
];

function ProblemCard({
  card,
  index,
}: {
  card: typeof problemCards[0];
  index: number;
}) {
  const tiltRef = use3DTilt(6);
  const float = floatConfig[index % floatConfig.length];
  const pulse = iconPulse[index % iconPulse.length];

  return (
    // 1. Outer: carries stagger fadeUpItem for scroll entry
    <motion.div variants={fadeUpItem}>
      {/* 2. Float wrapper: continuous vertical oscillation */}
      <motion.div
        animate={{ y: float.y }}
        transition={{
          duration: float.duration,
          delay: float.delay,
          repeat: Infinity,
          repeatType: "mirror",
          ease: "easeInOut",
        }}
      >
        {/* 3. Tilt target: 3D tilt on hover */}
        <motion.div
          ref={tiltRef}
          className="bg-white/5 border border-white/8 rounded-[20px] p-7 cursor-none relative overflow-hidden group"
          data-cursor-hover
          style={{ willChange: "transform" }}
        >
          {/* Accent top bar — animates in on entry, stays visible */}
          <motion.div
            className={`absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r ${accentTop[card.accent]} rounded-t-[20px] origin-left`}
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.9,
              delay: 0.35 + index * 0.15,
              ease: [0.22, 1, 0.36, 1],
            }}
          />

          {/* Icon — spring scale-in on entry + repeating accent glow pulse */}
          <motion.div
            className={`w-12 h-12 rounded-[13px] ${accentIconBg[card.accent]} flex items-center justify-center mb-4 relative`}
            initial={{ scale: 0.75, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{
              type: "spring",
              stiffness: 380,
              damping: 18,
              delay: 0.2 + index * 0.12,
            }}
          >
            {/* Accent-colored pulse ring */}
            <motion.div
              className="absolute inset-0 rounded-[13px]"
              animate={{ boxShadow: accentGlowFrames[card.accent] }}
              transition={{
                duration: pulse.duration,
                delay: pulse.delay,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
            <AnimatedProblemIcon
              name={card.icon}
              accent={card.accent}
              entryDelay={0.32 + index * 0.12}
            />
          </motion.div>

          <div className="font-syne font-bold text-[1rem] text-white mb-2 tracking-[-0.02em]">
            {card.title}
          </div>
          <div className="text-[0.88rem] leading-[1.65] text-white/60">
            {card.body}
          </div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}

export default function Problem() {
  return (
    <section
      id="problem"
      className="py-24 md:py-28 bg-ink relative overflow-hidden"
    >
      {/* BG radial glows */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_60%_at_20%_50%,rgba(78,75,229,0.1)_0%,transparent_60%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_50%_50%_at_80%_50%,rgba(13,148,136,0.08)_0%,transparent_60%)]" />
      </div>

      <div className="relative z-10 max-w-[1200px] mx-auto px-5 md:px-[5%]">
        {/* Header */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-60px" }}
          className="mb-14"
        >
          <motion.div
            variants={fadeUpItem}
            className="inline-flex items-center gap-1.5 text-[0.74rem] font-bold tracking-[0.12em] uppercase text-white/50 mb-5"
          >
            <span className="w-4 h-0.5 bg-white/30 rounded" />
            The Gap Nobody Talks About
          </motion.div>

          <motion.h2
            variants={fadeUpItem}
            className="font-syne text-[clamp(2rem,4vw,3.2rem)] font-extrabold tracking-[-0.04em] leading-[1.1] text-white mb-6 max-w-[760px]"
          >
            Most students study hard.
            <br />
            But never practise{" "}
            <em className="font-playfair italic not-italic text-amber">
              performing.
            </em>
          </motion.h2>

          <motion.p
            variants={fadeUpItem}
            className="text-[1rem] leading-[1.78] text-white/65 max-w-[680px]"
          >
            There&apos;s a difference between knowing your subject and being
            able to show that in a CBSE exam. Knowing the content is step one.
            Writing it the way the examiner expects — with the right keywords,
            format, diagrams — is what actually gets the marks. Clear Steps is
            built to bridge exactly that gap.
          </motion.p>
        </motion.div>

        {/* Cards */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-5"
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-40px" }}
        >
          {problemCards.map((card, i) => (
            <ProblemCard key={card.title} card={card} index={i} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
