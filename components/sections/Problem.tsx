"use client";

import { motion } from "framer-motion";
import { problemCards } from "@/lib/data";
import { use3DTilt, staggerContainer, fadeUpItem } from "@/lib/hooks";
import { Icon, IconName } from "@/lib/icons";

const accentTop: Record<string, string> = {
  amber: "from-amber to-amber-2",
  teal: "from-teal to-teal-2",
  coral: "from-coral to-orange-200",
};

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

          {/* Icon — spring scale-in on entry + repeating glow pulse */}
          <motion.div
            className="w-12 h-12 rounded-[13px] bg-white/8 flex items-center justify-center mb-4 text-white/70"
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
            {/* Inner pulse ring */}
            <motion.div
              className="absolute inset-0 rounded-[13px]"
              animate={{
                boxShadow: [
                  "0 0 0px 0px rgba(255,255,255,0)",
                  "0 0 16px 5px rgba(255,255,255,0.07)",
                  "0 0 0px 0px rgba(255,255,255,0)",
                ],
              }}
              transition={{
                duration: pulse.duration,
                delay: pulse.delay,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
            <Icon name={card.icon as IconName} size={22} />
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
