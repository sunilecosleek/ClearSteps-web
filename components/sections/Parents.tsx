"use client";

import { motion } from "framer-motion";
import {
  use3DTilt,
  useMagneticButton,
  staggerContainer,
  fadeUpItem,
  slideLeftItem,
  slideRightItem,
} from "@/lib/hooks";
import { Icon, IconName } from "@/lib/icons";

const subjects = [
  { name: "Science", pct: "88%", color: "from-teal to-teal-2", textColor: "text-teal", score: "88%" },
  { name: "Maths",   pct: "72%", color: "from-amber to-amber-2", textColor: "text-amber",  score: "72%" },
  { name: "English", pct: "91%", color: "from-green to-green-2", textColor: "text-green-600", score: "91%" },
  { name: "SST",     pct: "64%", color: "from-coral to-orange-200", textColor: "text-coral", score: "64%" },
];

const recent = [
  { icon: "document" as IconName, bg: "bg-teal/10",   name: "Science Mock Paper — Set 3", time: "Today, 4:30 PM",  score: "76/80", scoreColor: "text-teal" },
  { icon: "check-circle" as IconName, bg: "bg-amber/10",  name: "Quiz — Photosynthesis",       time: "Today, 2:15 PM",  score: "8/10",  scoreColor: "text-amber-600" },
  { icon: "exclamation-triangle" as IconName, bg: "bg-coral/10",  name: "Weak area: SST Chapter 3",    time: "Needs attention", score: "48%",   scoreColor: "text-coral" },
];

const points = [
  { icon: "chart-bar" as IconName, bg: "bg-amber/10", title: "See scores by subject and chapter",  body: "Know exactly which subjects are strong and which chapters keep going wrong." },
  { icon: "trending-up" as IconName, bg: "bg-teal/10",  title: "Track improvement over time",        body: "Watch mock paper scores trend upward — or catch a decline before it becomes a problem." },
  { icon: "exclamation-triangle" as IconName, bg: "bg-coral/10", title: "Get alerted on weak areas",          body: "When your child struggles on a topic, you'll know — while there's still time to fix it." },
];

function DashboardCard() {
  const tiltRef = use3DTilt(5);

  return (
    <motion.div
      ref={tiltRef}
      variants={slideRightItem}
      className="bg-white rounded-3xl p-6 shadow-[0_20px_60px_rgba(15,15,26,0.1),0_0_0_1px_rgba(15,15,26,0.06)] cursor-none"
      data-cursor-hover
      style={{ willChange: "transform" }}
    >
      {/* Header */}
      <div className="flex items-center justify-between mb-5">
        <div>
          <div className="font-syne font-extrabold text-[0.9rem] text-ink">
            Arjun&apos;s Dashboard
          </div>
          <div className="text-[0.75rem] text-ink-3 mt-0.5">
            Class 10 · CBSE · Last active 2 hrs ago
          </div>
        </div>
        <div className="w-[38px] h-[38px] rounded-full bg-gradient-to-br from-amber to-coral flex items-center justify-center font-syne font-extrabold text-[0.9rem] text-white flex-shrink-0">
          A
        </div>
      </div>

      {/* Subject bars */}
      <div className="text-[0.72rem] font-bold uppercase tracking-[0.08em] text-ink-3 mb-2.5">
        Subject Performance
      </div>
      <div className="flex flex-col gap-2.5 mb-5">
        {subjects.map((s, i) => (
          <div key={s.name} className="flex items-center gap-2.5">
            <div className="text-[0.8rem] font-semibold text-ink w-20 flex-shrink-0">{s.name}</div>
            <div className="flex-1 h-2 bg-surface rounded-full overflow-hidden">
              <motion.div
                className={`h-full bg-gradient-to-r ${s.color} rounded-full`}
                initial={{ width: 0 }}
                whileInView={{ width: s.pct }}
                transition={{ duration: 1.3, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
                viewport={{ once: true }}
              />
            </div>
            <div className={`font-syne font-extrabold text-[0.78rem] w-9 text-right flex-shrink-0 ${s.textColor}`}>
              {s.score}
            </div>
          </div>
        ))}
      </div>

      {/* Recent activity */}
      <div className="bg-surface rounded-2xl p-3.5">
        <div className="text-[0.72rem] font-bold uppercase tracking-[0.08em] text-ink-3 mb-2.5">
          Recent Activity
        </div>
        <div className="flex flex-col gap-2">
          {recent.map((r, i) => (
            <motion.div
              key={r.name}
              initial={{ opacity: 0, x: 12 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 + i * 0.1, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              viewport={{ once: true }}
              className="flex items-center gap-2.5"
            >
              <div className={`w-[30px] h-[30px] rounded-xl flex items-center justify-center flex-shrink-0 ${r.bg}`}>
                <Icon name={r.icon} size={15} />
              </div>
              <div className="flex-1 min-w-0">
                <div className="text-[0.78rem] font-semibold text-ink truncate">{r.name}</div>
                <div className="text-[0.7rem] text-ink-3">{r.time}</div>
              </div>
              <div className={`font-syne font-extrabold text-[0.82rem] flex-shrink-0 ${r.scoreColor}`}>
                {r.score}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

function MagneticCTA() {
  const { ref, x, y } = useMagneticButton(0.35);
  return (
    <motion.a
      ref={ref}
      href="#pricing"
      style={{ x, y }}
      whileTap={{ scale: 0.97 }}
      className="inline-flex items-center gap-2.5 bg-ink text-white px-7 py-3.5 rounded-full font-bold text-[0.95rem] shadow-[0_8px_30px_rgba(15,15,26,0.25)] hover:bg-primary hover:shadow-[0_12px_40px_rgba(78,75,229,0.35)] hover:-translate-y-0.5 transition-colors"
      data-cursor-hover
      onClick={(e) => {
        e.preventDefault();
        document.querySelector("#pricing")?.scrollIntoView({ behavior: "smooth" });
      }}
    >
      Buy for My Child
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
        <path d="M5 12h14M12 5l7 7-7 7" />
      </svg>
    </motion.a>
  );
}

export default function Parents() {
  return (
    <section id="parents" className="py-24 md:py-32 bg-surface-2">
      <div className="max-w-[1200px] mx-auto px-5 md:px-[5%]">
        <motion.div
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center"
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-60px" }}
        >
          {/* Left */}
          <motion.div variants={slideLeftItem}>
            <div className="inline-flex items-center gap-1.5 text-[0.74rem] font-bold tracking-[0.12em] uppercase text-coral mb-5">
              <span className="w-4 h-0.5 bg-coral rounded" />
              For Parents
            </div>
            <h2 className="font-syne text-[clamp(1.8rem,3.2vw,2.6rem)] font-extrabold tracking-[-0.04em] leading-[1.1] text-ink mb-5">
              You&apos;re paying for their future.{" "}
              <em className="font-playfair italic not-italic text-coral">
                Now you&apos;ll know
              </em>{" "}
              if it&apos;s working.
            </h2>
            <p className="text-[0.98rem] leading-[1.78] text-ink-2 mb-8">
              Most parents have no visibility into how their child is preparing
              for board exams — until results come out.{" "}
              <strong className="text-ink font-semibold">
                That changes with Clear Steps.
              </strong>
              <br />
              <br />
              You get your own login. Your own dashboard. Real-time visibility
              into your child&apos;s study activity, subject-wise performance,
              mock paper scores, and where they need the most support.
            </p>

            {/* Points — staggered */}
            <motion.div
              className="flex flex-col gap-4 mb-8"
              variants={staggerContainer}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
            >
              {points.map((p) => (
                <motion.div
                  key={p.title}
                  variants={fadeUpItem}
                  className="flex gap-3.5 items-start"
                >
                  <div
                    className={`w-10 h-10 rounded-[11px] flex items-center justify-center flex-shrink-0 ${p.bg}`}
                  >
                    <Icon name={p.icon} size={18} />
                  </div>
                  <div>
                    <h4 className="font-syne font-bold text-[0.9rem] text-ink mb-0.5">
                      {p.title}
                    </h4>
                    <p className="text-[0.85rem] text-ink-2 leading-[1.6]">
                      {p.body}
                    </p>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            <MagneticCTA />
          </motion.div>

          {/* Right — Dashboard Card with 3D Tilt */}
          <DashboardCard />
        </motion.div>
      </div>
    </section>
  );
}
