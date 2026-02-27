"use client";
import { Icon } from "@/lib/icons";

import { useRef, useEffect, useState } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useMotionValue,
  useSpring,
  AnimatePresence,
} from "framer-motion";
import { journeySteps } from "@/lib/data";
import { useMagneticButton } from "@/lib/hooks";

// Colour map for journey step numbers
const numColorMap: Record<string, string> = {
  amber: "bg-amber/15 text-amber-700",
  teal: "bg-teal/10 text-teal",
  coral: "bg-orange-100 text-orange-700",
  violet: "bg-primary/10 text-primary",
  sky: "bg-sky-100 text-sky-600",
  green: "bg-green-100 text-green-700",
};

function MagneticBtn({
  href,
  children,
  className,
  onClick,
}: {
  href: string;
  children: React.ReactNode;
  className: string;
  onClick?: () => void;
}) {
  const { ref, x, y } = useMagneticButton(0.4);
  return (
    <motion.a
      ref={ref}
      href={href}
      style={{ x, y }}
      className={className}
      onClick={onClick}
      whileTap={{ scale: 0.97 }}
      data-cursor-hover
    >
      {children}
    </motion.a>
  );
}

// Floating stat card
function FloatCard({
  icon,
  label,
  value,
  className,
  delay = 0,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
  className: string;
  delay?: number;
}) {
  return (
    <motion.div
      className={`absolute bg-white rounded-2xl px-3.5 py-2.5 shadow-[0_16px_40px_rgba(15,15,26,0.14),0_0_0_1px_rgba(15,15,26,0.06)] z-10 whitespace-nowrap hidden sm:block ${className}`}
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: [0, -8, 0] }}
      transition={{
        opacity: { delay: 1.4, duration: 0.5 },
        y: { delay, duration: 4, repeat: Infinity, ease: "easeInOut" },
      }}
    >
      <div className="flex items-center gap-2">
        <span className="flex items-center justify-center text-ink-2">{icon}</span>
        <div>
          <div className="text-[0.7rem] text-ink-3 font-medium">{label}</div>
          <div className="font-syne font-extrabold text-[0.95rem] text-ink">{value}</div>
        </div>
      </div>
    </motion.div>
  );
}

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const [activeStep, setActiveStep] = useState(0);

  // ── Scroll-linked parallax ───────────────────────────────────────────────
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  // Each shape moves at a DIFFERENT rate — true multi-layer parallax
  const shape1Y = useTransform(scrollYProgress, [0, 1], ["0%", "-30%"]);
  const shape1Scale = useTransform(scrollYProgress, [0, 1], [1, 1.15]);
  const shape2Y = useTransform(scrollYProgress, [0, 1], ["0%", "-18%"]);
  const shape3Y = useTransform(scrollYProgress, [0, 1], ["0%", "-45%"]);
  const fw1Y = useTransform(scrollYProgress, [0, 1], ["0%", "-25%"]);
  const fw2Y = useTransform(scrollYProgress, [0, 1], ["0%", "-15%"]);
  const heroContentY = useTransform(scrollYProgress, [0, 1], ["0%", "8%"]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);

  // ── Mouse-follow glow ────────────────────────────────────────────────────
  const rawMouseX = useMotionValue(0.5);
  const rawMouseY = useMotionValue(0.5);
  const glowX = useSpring(rawMouseX, { stiffness: 50, damping: 20 });
  const glowY = useSpring(rawMouseY, { stiffness: 50, damping: 20 });

  useEffect(() => {
    if (typeof window === "undefined" || window.innerWidth <= 1024) return;
    const section = sectionRef.current;
    if (!section) return;

    const onMove = (e: MouseEvent) => {
      const r = section.getBoundingClientRect();
      rawMouseX.set((e.clientX - r.left) / r.width);
      rawMouseY.set((e.clientY - r.top) / r.height);
    };
    section.addEventListener("mousemove", onMove);
    return () => section.removeEventListener("mousemove", onMove);
  }, [rawMouseX, rawMouseY]);

  // ── Journey step auto-cycle ──────────────────────────────────────────────
  useEffect(() => {
    const id = setInterval(
      () => setActiveStep((s) => (s + 1) % journeySteps.length),
      1800
    );
    return () => clearInterval(id);
  }, []);

  // ── Headline stagger variants ────────────────────────────────────────────
  const container = {
    hidden: {},
    show: { transition: { staggerChildren: 0.15, delayChildren: 0.3 } },
  };
  const lineReveal = {
    hidden: { y: "110%", opacity: 0 },
    show: {
      y: "0%",
      opacity: 1,
      transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
    },
  };

  return (
    <section
      ref={sectionRef}
      id="hero"
      className="min-h-screen bg-surface relative overflow-hidden flex items-center pt-[90px] sm:pt-[110px] pb-20"
    >
      {/* Grain */}
      <div className="grain" />

      {/* ── Mouse-follow radial glow ── */}
      <motion.div
        className="absolute inset-0 pointer-events-none hidden lg:block"
        style={{
          background: "radial-gradient(600px circle, rgba(78,75,229,0.07) 0%, transparent 60%)",
          left: useTransform(glowX, (v) => `${v * 100 - 30}%`),
          top: useTransform(glowY, (v) => `${v * 100 - 30}%`),
          width: "60%",
          height: "60%",
        }}
      />

      {/* ── Parallax shape 1 — large primary blob, top right, fastest ── */}
      <motion.div
        className="absolute pointer-events-none rounded-full"
        style={{
          y: shape1Y,
          scale: shape1Scale,
          width: "clamp(400px, 60vw, 700px)",
          height: "clamp(400px, 60vw, 700px)",
          top: "-200px",
          right: "-100px",
          background:
            "radial-gradient(circle, rgba(78,75,229,0.13) 0%, transparent 70%)",
          willChange: "transform",
        }}
        animate={{ rotate: [0, 360] }}
        transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
      />

      {/* ── Parallax shape 2 — teal blob, bottom left, medium ── */}
      <motion.div
        className="absolute pointer-events-none rounded-full"
        style={{
          y: shape2Y,
          width: "clamp(300px, 45vw, 520px)",
          height: "clamp(300px, 45vw, 520px)",
          bottom: "-100px",
          left: "-150px",
          background:
            "radial-gradient(circle, rgba(13,148,136,0.10) 0%, transparent 70%)",
          willChange: "transform",
        }}
        animate={{ rotate: [0, -360] }}
        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
      />

      {/* ── Parallax shape 3 — coral, center, slowest ── */}
      <motion.div
        className="absolute pointer-events-none rounded-full"
        style={{
          y: shape3Y,
          width: "clamp(200px, 25vw, 320px)",
          height: "clamp(200px, 25vw, 320px)",
          top: "38%",
          left: "38%",
          background:
            "radial-gradient(circle, rgba(249,115,22,0.09) 0%, transparent 70%)",
          willChange: "transform",
        }}
        animate={{ rotate: [0, 360] }}
        transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
      />

      {/* ── Floating background words at DIFFERENT parallax rates ── */}
      <motion.div
        style={{ y: fw1Y }}
        className="absolute top-[15%] left-[-2%] pointer-events-none font-syne font-extrabold text-ink/[0.04] text-[clamp(3rem,8vw,7rem)] whitespace-nowrap select-none"
        animate={{ y: [0, -20, 0] }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
      >
        LEARN
      </motion.div>
      <motion.div
        style={{ y: fw2Y }}
        className="absolute bottom-[12%] right-[-2%] pointer-events-none font-syne font-extrabold text-ink/[0.04] text-[clamp(3rem,8vw,7rem)] whitespace-nowrap select-none"
        animate={{ y: [0, -20, 0] }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut",
          delay: -9,
        }}
      >
        PROVE
      </motion.div>

      {/* ── Main content (subtle upward drift on scroll) ── */}
      <motion.div
        style={{ y: heroContentY, opacity: heroOpacity }}
        className="relative z-10 max-w-[1200px] mx-auto w-full px-5 md:px-[5%] grid grid-cols-1 lg:grid-cols-[1.1fr_1fr] gap-12 lg:gap-16 items-center"
      >
        {/* LEFT */}
        <div>
          {/* Eyebrow */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="inline-flex items-center gap-2 bg-primary/10 border border-primary/25 px-3.5 py-1.5 rounded-full text-[0.78rem] font-semibold text-primary mb-7"
          >
            <span className="w-1.5 h-1.5 bg-primary rounded-full animate-[pulseDot_1.5s_ease-in-out_infinite]" />
            Only for CBSE · Class 5 to 12
          </motion.div>

          {/* Headline — per-line stagger reveal */}
          <motion.h1
            className="font-syne text-[clamp(2.8rem,5.5vw,4.8rem)] font-extrabold leading-[1.04] tracking-[-0.04em] text-ink mb-4"
            variants={container}
            initial="hidden"
            animate="show"
          >
            {["Learn it.", "Understand it.", null].map((line, i) => (
              <span key={i} className="overflow-hidden block">
                <motion.span className="block" variants={lineReveal}>
                  {line ?? (
                    <span className="relative inline-block">
                      Prove{" "}
                      <span className="font-playfair italic text-primary">it.</span>
                      <motion.span
                        className="absolute -bottom-1 left-0 right-0 h-[3px] bg-teal rounded"
                        initial={{ scaleX: 0 }}
                        animate={{ scaleX: 1 }}
                        transition={{
                          delay: 1.3,
                          duration: 0.7,
                          ease: [0.22, 1, 0.36, 1],
                        }}
                        style={{ transformOrigin: "left" }}
                      />
                    </span>
                  )}
                </motion.span>
              </span>
            ))}
          </motion.h1>

          {/* Sub */}
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.7 }}
            className="text-[1.05rem] leading-[1.75] text-ink-2 max-w-[520px] mb-9"
          >
            Clear Steps is India&apos;s most complete CBSE learning platform.{" "}
            <strong className="text-ink font-semibold">
              Concept videos, topic notes, quizzes, mock papers
            </strong>{" "}
            — and the one thing no one else has:{" "}
            <strong className="text-ink font-semibold">
              AI that evaluates your actual written answers
            </strong>{" "}
            like a real CBSE examiner.
          </motion.p>

          {/* CTAs — MAGNETIC */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.1, duration: 0.7 }}
            className="flex flex-wrap items-center gap-3.5 mb-8"
          >
            <MagneticBtn
              href="#"
              className="inline-flex items-center gap-2.5 bg-ink text-white px-7 py-3.5 rounded-full font-bold text-[0.95rem] shadow-[0_8px_30px_rgba(15,15,26,0.25)] hover:bg-primary hover:shadow-[0_12px_40px_rgba(78,75,229,0.4)] transition-colors"
            >
              Start Learning Free
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </MagneticBtn>

            <MagneticBtn
              href="#how"
              className="inline-flex items-center gap-2 bg-transparent text-ink px-6 py-3.5 rounded-full font-semibold text-[0.95rem] border-[1.5px] border-ink/18 hover:bg-ink hover:text-white hover:border-ink transition-all"
              onClick={() => document.querySelector("#how")?.scrollIntoView({ behavior: "smooth" })}
            >
              See How It Works ↓
            </MagneticBtn>
          </motion.div>

          {/* Trust */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.3, duration: 0.7 }}
            className="flex flex-wrap items-center gap-3.5"
          >
            <div className="flex">
              {[
                { l: "R", g: "linear-gradient(135deg,#F59E0B,#D97706)" },
                { l: "P", g: "linear-gradient(135deg,#0D9488,#0F766E)" },
                { l: "A", g: "linear-gradient(135deg,#F97316,#EA580C)" },
                { l: "S", g: "linear-gradient(135deg,#4E4BE5,#3735B8)" },
              ].map((a, i) => (
                <div
                  key={a.l}
                  className="w-[30px] h-[30px] rounded-full border-2 border-surface flex items-center justify-center font-extrabold text-[0.75rem] text-white"
                  style={{
                    background: a.g,
                    marginLeft: i === 0 ? 0 : "-7px",
                  }}
                >
                  {a.l}
                </div>
              ))}
            </div>
            <p className="text-[0.83rem] text-ink-2">
              <strong className="text-ink font-semibold">10,000+</strong> students enrolled
            </p>
            <div className="w-px h-[18px] bg-ink/15" />
            <p className="text-[0.83rem] text-ink-2">Class 5–12 · CBSE · 🇮🇳</p>
          </motion.div>
        </div>

        {/* RIGHT — Journey Card */}
        <motion.div
          initial={{ opacity: 0, x: 30, y: 20 }}
          animate={{ opacity: 1, x: 0, y: 0 }}
          transition={{ delay: 0.5, duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="relative max-w-[480px] lg:max-w-none mx-auto lg:mx-0"
        >
          <FloatCard
            icon={<Icon name="target" size={18} />}
            label="AI Accuracy"
            value="98.4%"
            className="-top-5 -right-6"
            delay={0}
          />
          <FloatCard
            icon={<Icon name="trending-up" size={18} />}
            label="Avg Improvement"
            value="+24%"
            className="-bottom-4 -left-8"
            delay={2.2}
          />

          <div className="bg-white rounded-[28px] p-7 shadow-[0_24px_64px_rgba(15,15,26,0.12),0_0_0_1px_rgba(15,15,26,0.06)]">
            <div className="text-[0.72rem] font-bold tracking-[0.1em] uppercase text-ink-3 mb-4">
              Your learning journey
            </div>
            <div className="flex flex-col gap-2.5">
              {journeySteps.map((step, i) => (
                <motion.div
                  key={step.num}
                  animate={{
                    backgroundColor:
                      activeStep === i
                        ? "rgba(78,75,229,0.08)"
                        : "transparent",
                    borderColor:
                      activeStep === i
                        ? "rgba(78,75,229,0.2)"
                        : "transparent",
                  }}
                  transition={{ duration: 0.3 }}
                  className="flex items-center gap-3 px-3 py-2.5 rounded-xl border"
                >
                  <div
                    className={`w-7 h-7 rounded-lg flex items-center justify-center font-syne font-extrabold text-[0.8rem] flex-shrink-0 ${numColorMap[step.color]}`}
                  >
                    {step.num}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="font-syne font-bold text-[0.88rem] text-ink tracking-tight">
                      {step.title}
                    </div>
                    <div className="text-[0.75rem] text-ink-3 mt-0.5 truncate">
                      {step.sub}
                    </div>
                  </div>
                  <AnimatePresence>
                    {step.badge && (
                      <motion.span
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="text-[0.68rem] font-bold px-2 py-0.5 rounded-full bg-teal/10 text-teal whitespace-nowrap"
                      >
                        {step.badge}
                      </motion.span>
                    )}
                  </AnimatePresence>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
