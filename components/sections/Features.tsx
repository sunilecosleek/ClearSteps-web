"use client";

import { motion } from "framer-motion";
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

// Individual tiltable feature card
function FeatureCard({ f, i }: { f: typeof features[0]; i: number }) {
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
      {/* Bottom accent bar */}
      <div
        className={`absolute bottom-0 left-0 right-0 h-[3px] bg-gradient-to-r ${accentBottom[f.accent]} rounded-b-[22px] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left`}
      />
    </motion.div>
  );
}

// Wide AI eval card with 3D tilt
function WideCard() {
  const tiltRef = use3DTilt(4);

  return (
    <motion.div
      ref={tiltRef}
      variants={fadeUpItem}
      className="sm:col-span-2 bg-ink rounded-[22px] p-7 shadow-[0_24px_48px_rgba(15,15,26,0.2)] cursor-none relative overflow-hidden group"
      data-cursor-hover
      style={{ willChange: "transform" }}
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-center">
        <div>
          <div className="w-12 h-12 rounded-[13px] bg-white/10 flex items-center justify-center mb-4 text-white/80">
            <Icon name="cpu-chip" size={22} />
          </div>
          <div className="font-syne font-extrabold text-[1.15rem] text-white/90 mb-2 tracking-[-0.02em]">
            AI Answer Evaluation — The Thing Nobody Else Does
          </div>
          <div className="text-[0.9rem] leading-[1.65] text-white/60 mb-4">
            Upload a photo of your handwritten answer. Our AI reads it and marks
            it against the official CBSE marking scheme — checking keywords,
            format, diagrams, and completeness. Instant. Accurate. Specific.
          </div>
          <div className="flex flex-wrap gap-2">
            {[
              ["CBSE Marking Scheme", "bg-amber/15 text-amber"],
              ["Handwriting Recognition", "bg-teal/15 text-teal-2"],
              ["Instant Feedback", "bg-green/15 text-green-2"],
            ].map(([label, cls]) => (
              <span
                key={label}
                className={`text-[0.72rem] font-bold px-3 py-1 rounded-full ${cls}`}
              >
                {label}
              </span>
            ))}
          </div>
        </div>

        {/* Visual breakdown */}
        <div className="bg-white/6 rounded-2xl p-4">
          <div className="flex items-center gap-2 mb-3">
            <div className="w-1.5 h-1.5 rounded-full bg-teal" />
            <div className="font-semibold text-white/90 text-[0.74rem]">
              Marking breakdown
            </div>
          </div>
          {[
            { label: "Keywords", val: "9/10", pct: "90%", color: "from-teal to-teal-2", textColor: "text-teal-2" },
            { label: "Format", val: "7/10", pct: "70%", color: "from-amber to-amber-2", textColor: "text-amber" },
          ].map((b) => (
            <div key={b.label} className="mb-3">
              <div className="flex justify-between mb-1">
                <span className="text-[0.7rem] text-white/50">{b.label}</span>
                <span className={`text-[0.7rem] font-bold ${b.textColor}`}>{b.val}</span>
              </div>
              <div className="h-1.5 bg-white/10 rounded-full overflow-hidden">
                <motion.div
                  className={`h-full bg-gradient-to-r ${b.color} rounded-full`}
                  initial={{ width: 0 }}
                  whileInView={{ width: b.pct }}
                  transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
                  viewport={{ once: true }}
                />
              </div>
            </div>
          ))}
          <div className="bg-amber/12 rounded-xl p-2.5 text-[0.7rem] text-white/70 leading-[1.5] flex items-start gap-1.5">
            <Icon name="light-bulb" size={13} className="flex-shrink-0 mt-0.5 text-amber" />
            <span>Add &quot;semi-permeable membrane&quot; to score full marks on Q3</span>
          </div>
        </div>
      </div>

      {/* Bottom accent bar */}
      <div className="absolute bottom-0 left-0 right-0 h-[3px] bg-gradient-to-r from-primary to-teal scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left rounded-b-[22px]" />
    </motion.div>
  );
}

export default function Features() {
  return (
    <section id="features" className="py-24 md:py-32 bg-surface">
      <div className="max-w-[1200px] mx-auto px-5 md:px-[5%]">
        {/* Header stagger */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-60px" }}
          className="mb-16 md:mb-20"
        >
          <motion.div variants={fadeUpItem} className="inline-flex items-center gap-1.5 text-[0.74rem] font-bold tracking-[0.12em] uppercase text-primary mb-4">
            <span className="w-4 h-0.5 bg-primary rounded" />
            Everything Inside
          </motion.div>
          <motion.h2 variants={fadeUpItem} className="font-syne text-[clamp(2rem,3.5vw,2.8rem)] font-extrabold tracking-[-0.04em] leading-[1.1] text-ink">
            One platform.
            <br />
            <em className="font-playfair italic not-italic text-primary">
              Every tool
            </em>{" "}
            you need.
          </motion.h2>
        </motion.div>

        {/* Cards grid — staggered */}
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
