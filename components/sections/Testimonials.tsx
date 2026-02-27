"use client";

import { motion } from "framer-motion";
import { testimonials } from "@/lib/data";
import { use3DTilt, staggerContainer, fadeUpItem } from "@/lib/hooks";

const avatarGradients = [
  "from-amber to-yellow-600",
  "from-teal to-teal/70",
  "from-coral to-orange-600",
];

const resultColors = {
  teal: "bg-teal/10 text-teal",
  amber: "bg-amber/15 text-amber",
  coral: "bg-coral/10 text-orange-700",
};

function TestiCard({ t, i }: { t: typeof testimonials[0]; i: number }) {
  const tiltRef = use3DTilt(5);

  return (
    <motion.div
      ref={tiltRef}
      variants={fadeUpItem}
      className={`rounded-3xl p-7 border hover:shadow-[0_24px_56px_rgba(15,15,26,0.1)] transition-shadow cursor-none relative overflow-hidden ${
        t.featured ? "bg-ink border-none" : "bg-white border-ink/7"
      }`}
      data-cursor-hover
      style={{ willChange: "transform" }}
    >
      {/* Decorative corner */}
      <div
        className={`absolute top-0 left-0 w-10 h-10 rounded-br-[40px] ${
          t.featured ? "bg-amber/12" : "bg-amber/8"
        }`}
      />

      <div
        className={`inline-flex items-center gap-1.5 text-[0.72rem] font-bold px-3 py-1 rounded-full mb-4 ${
          t.featured
            ? "bg-amber/15 text-amber"
            : resultColors[t.resultColor as keyof typeof resultColors]
        }`}
      >
        {t.result}
      </div>

      <div className="flex gap-0.5 mb-3.5 text-[0.9rem] text-amber">
        {"★".repeat(t.stars)}
      </div>

      <p
        className={`text-[0.92rem] leading-[1.72] italic mb-6 ${
          t.featured ? "text-white/75" : "text-ink-2"
        }`}
      >
        &quot;{t.quote}&quot;
      </p>

      <div className="flex items-center gap-3">
        <div
          className={`w-[42px] h-[42px] rounded-full flex items-center justify-center font-extrabold text-[0.9rem] text-white flex-shrink-0 bg-gradient-to-br ${avatarGradients[i]}`}
        >
          {t.avatar}
        </div>
        <div>
          <div
            className={`font-syne font-bold text-[0.88rem] ${
              t.featured ? "text-white" : "text-ink"
            }`}
          >
            {t.name}
          </div>
          <div className={`text-[0.75rem] ${t.featured ? "text-white/45" : "text-ink-3"}`}>
            {t.role}
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default function Testimonials() {
  return (
    <section id="testi" className="py-24 md:py-32 bg-surface">
      <div className="max-w-[1200px] mx-auto px-5 md:px-[5%]">
        {/* Header */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-60px" }}
          className="text-center mb-16"
        >
          <motion.div
            variants={fadeUpItem}
            className="inline-flex items-center gap-1.5 text-[0.74rem] font-bold tracking-[0.12em] uppercase text-primary mb-4"
          >
            Real Stories
          </motion.div>
          <motion.h2
            variants={fadeUpItem}
            className="font-syne text-[clamp(2rem,3.5vw,2.8rem)] font-extrabold tracking-[-0.04em] leading-[1.1] text-ink"
          >
            Don&apos;t take our word for it.
            <br />
            <em className="font-playfair italic not-italic text-primary">
              Take theirs.
            </em>
          </motion.h2>
        </motion.div>

        {/* Staggered grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-40px" }}
        >
          {testimonials.map((t, i) => (
            <TestiCard key={t.name} t={t} i={i} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
