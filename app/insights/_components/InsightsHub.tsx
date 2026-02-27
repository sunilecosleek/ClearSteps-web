"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import {
  motion,
  AnimatePresence,
  LayoutGroup,
} from "framer-motion";
import {
  articles,
  ALL_CATEGORIES,
  CATEGORY_COLOR,
  type Article,
  type Category,
} from "@/lib/insights";
import { use3DTilt, useMagneticButton } from "@/lib/hooks";

// ── Colour map ────────────────────────────────────────────────────────────────
const colorClasses: Record<string, { bg: string; text: string; border: string; strip: string }> = {
  amber:  { bg: "bg-amber/10",   text: "text-amber",   border: "border-amber/30",   strip: "bg-amber" },
  teal:   { bg: "bg-teal/10",    text: "text-teal",    border: "border-teal/30",    strip: "bg-teal" },
  sky:    { bg: "bg-sky/10",     text: "text-sky",     border: "border-sky/30",     strip: "bg-sky" },
  coral:  { bg: "bg-coral/10",   text: "text-coral",   border: "border-coral/30",   strip: "bg-coral" },
  green:  { bg: "bg-green/10",   text: "text-green",   border: "border-green/30",   strip: "bg-green" },
  violet: { bg: "bg-primary/10", text: "text-primary", border: "border-primary/30", strip: "bg-primary" },
  rose:   { bg: "bg-rose/10",    text: "text-rose",    border: "border-rose/30",    strip: "bg-rose" },
};

function getColor(category: Category) {
  return colorClasses[CATEGORY_COLOR[category]] ?? colorClasses.violet;
}

// ── Read-time arc ─────────────────────────────────────────────────────────────
function ReadTimeArc({ minutes, className = "" }: { minutes: number; className?: string }) {
  const r = 9;
  const circ = 2 * Math.PI * r;
  const pct = Math.min(minutes / 15, 1);

  return (
    <span className={`inline-flex items-center gap-1.5 text-xs font-medium ${className}`}>
      <svg width="24" height="24" viewBox="0 0 24 24" className="flex-shrink-0">
        <circle cx="12" cy="12" r={r} fill="none" stroke="currentColor" strokeWidth="2.5" className="opacity-15" />
        <motion.circle
          cx="12" cy="12" r={r}
          fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"
          strokeDasharray={circ}
          strokeDashoffset={circ}
          animate={{ strokeDashoffset: circ * (1 - pct) }}
          transition={{ duration: 1.2, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
          transform="rotate(-90 12 12)"
        />
      </svg>
      {minutes}m
    </span>
  );
}

// ── 3D tilt wrapper ───────────────────────────────────────────────────────────
function TiltCard({ children, className }: { children: React.ReactNode; className?: string }) {
  const ref = use3DTilt(5);
  return (
    <div ref={ref} className={className} style={{ willChange: "transform", transformStyle: "preserve-3d" }}>
      {children}
    </div>
  );
}

// ── Magnetic CTA ──────────────────────────────────────────────────────────────
function MagneticBtn({ href, children, className }: { href: string; children: React.ReactNode; className: string }) {
  const { ref, x, y } = useMagneticButton(0.4);
  return (
    <motion.a ref={ref} href={href} style={{ x, y }} whileTap={{ scale: 0.97 }} className={className} data-cursor-hover>
      {children}
    </motion.a>
  );
}

// ── Featured card ─────────────────────────────────────────────────────────────
function FeaturedCard({ article }: { article: Article }) {
  const c = getColor(article.category);

  return (
    <motion.div
      initial={{ opacity: 0, y: 48 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
    >
      <TiltCard>
        <Link
          href={`/insights/${article.slug}`}
          className="group block rounded-3xl border border-ink/10 bg-surface-2 overflow-hidden relative hover:border-ink/20 hover:shadow-[0_20px_60px_rgba(0,0,0,0.1)] transition-all duration-500"
        >
          {/* Animated left accent bar */}
          <motion.div
            className={`absolute left-0 top-0 bottom-0 w-[3px] ${c.strip} origin-top`}
            initial={{ scaleY: 0 }}
            animate={{ scaleY: 1 }}
            transition={{ duration: 1, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
          />

          <div className="p-8 md:p-10 flex flex-col md:flex-row md:items-start gap-8">
            <div className="flex-1">
              <div className="flex flex-wrap items-center gap-3 mb-5">
                <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-[0.72rem] font-semibold border ${c.bg} ${c.text} ${c.border}`}>
                  {article.category}
                </span>
                <span className="text-xs text-ink-3">{article.classTarget}</span>
                <span className="text-xs text-ink-3">·</span>
                <ReadTimeArc minutes={article.readTime} className={c.text} />
              </div>

              <h2 className="font-syne text-2xl md:text-3xl font-extrabold text-ink leading-tight group-hover:text-primary transition-colors duration-300 mb-4">
                {article.title}
              </h2>
              <p className="text-ink-2 leading-relaxed text-[0.95rem] mb-7 max-w-xl">
                {article.description}
              </p>
              <span className={`inline-flex items-center gap-1.5 text-sm font-semibold ${c.text} group-hover:gap-3 transition-all duration-300`}>
                Read article
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </span>
            </div>

            {/* Decorative icon block */}
            <motion.div
              className={`hidden md:flex w-44 h-44 rounded-2xl ${c.bg} border ${c.border} items-center justify-center flex-shrink-0`}
              whileHover={{ rotate: -8, scale: 1.06 }}
              transition={{ type: "spring", stiffness: 260, damping: 18 }}
            >
              <svg
                width="54" height="54" viewBox="0 0 24 24"
                fill="none" stroke="currentColor" strokeWidth="1.2"
                strokeLinecap="round" strokeLinejoin="round"
                className={`${c.text} opacity-75`}
              >
                <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
                <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
              </svg>
            </motion.div>
          </div>
        </Link>
      </TiltCard>
    </motion.div>
  );
}

// ── Article card ──────────────────────────────────────────────────────────────
function ArticleCard({ article, index }: { article: Article; index: number }) {
  const c = getColor(article.category);

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 28, scale: 0.97 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: -16, scale: 0.95 }}
      transition={{ duration: 0.5, delay: index * 0.07, ease: [0.22, 1, 0.36, 1] }}
      className="h-full"
    >
      <TiltCard className="h-full">
        <Link
          href={`/insights/${article.slug}`}
          className="group flex flex-col h-full rounded-2xl border border-ink/10 bg-surface overflow-hidden hover:border-ink/25 hover:shadow-[0_8px_32px_rgba(0,0,0,0.08)] transition-all duration-400"
        >
          {/* Colour strip — full width, dims then brightens on hover */}
          <div className={`h-[3px] w-full ${c.strip} opacity-40 group-hover:opacity-100 transition-opacity duration-400`} />

          <div className="p-6 flex flex-col flex-1">
            <div className="flex items-center justify-between gap-3 mb-4">
              <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-[0.72rem] font-semibold border ${c.bg} ${c.text} ${c.border}`}>
                {article.category}
              </span>
              <ReadTimeArc minutes={article.readTime} className={c.text} />
            </div>

            <h3 className="font-syne text-[1.04rem] font-bold text-ink leading-snug group-hover:text-primary transition-colors duration-300 mb-3 flex-1">
              {article.title}
            </h3>
            <p className="text-ink-3 text-[0.84rem] leading-relaxed line-clamp-2 mb-5">
              {article.description}
            </p>

            <div className="flex items-center justify-between mt-auto pt-4 border-t border-ink/8">
              <span className="text-[0.75rem] text-ink-3">{article.classTarget}</span>
              <span className={`text-xs font-semibold ${c.text} flex items-center gap-1 group-hover:gap-2.5 transition-all duration-300`}>
                Read
                <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </span>
            </div>
          </div>
        </Link>
      </TiltCard>
    </motion.div>
  );
}

// ── Hub page ──────────────────────────────────────────────────────────────────
export default function InsightsHub() {
  const [activeCategory, setActiveCategory] = useState<Category | "All">("All");

  const featured = useMemo(() => articles.find((a) => a.featured) ?? articles[0], []);
  const rest = useMemo(() => articles.filter((a) => a.slug !== featured.slug), [featured]);

  const filtered = useMemo(
    () => activeCategory === "All" ? rest : rest.filter((a) => a.category === activeCategory),
    [activeCategory, rest]
  );

  const showFeatured = activeCategory === "All" || activeCategory === featured.category;

  // Word-by-word headline — "Everything you need to ace CBSE boards"
  const titleWords = ["Everything", "you", "need", "to", "ace", "CBSE", "boards"];

  return (
    <main className="pt-28 pb-24 px-5 md:px-[5%] max-w-6xl mx-auto overflow-x-hidden">

      {/* ── Hero ─────────────────────────────────────────────────────────── */}
      <div className="text-center mb-16 relative">
        {/* Ambient background orbs */}
        <motion.div
          className="absolute -top-24 left-1/4 w-80 h-80 rounded-full bg-primary/5 pointer-events-none blur-3xl -z-10"
          animate={{ y: [0, -24, 0], scale: [1, 1.12, 1] }}
          transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute -top-8 right-1/4 w-56 h-56 rounded-full bg-teal/5 pointer-events-none blur-3xl -z-10"
          animate={{ y: [0, 20, 0], scale: [1, 1.08, 1] }}
          transition={{ duration: 11, repeat: Infinity, ease: "easeInOut", delay: -5 }}
        />

        <motion.span
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55 }}
          className="inline-block text-xs font-bold text-primary uppercase tracking-[0.16em] mb-6 px-3.5 py-1.5 rounded-full bg-primary/8 border border-primary/18"
        >
          CBSE Study Tips
        </motion.span>

        {/* Word-by-word animated headline */}
        <h1 className="font-syne text-4xl md:text-5xl lg:text-[3.4rem] font-extrabold text-ink leading-[1.08] mb-5 perspective-[1000px]">
          {titleWords.map((word, i) => (
            <motion.span
              key={i}
              className="inline-block mr-[0.22em]"
              initial={{ opacity: 0, y: 50, rotateX: -40 }}
              animate={{ opacity: 1, y: 0, rotateX: 0 }}
              transition={{
                duration: 0.72,
                delay: 0.1 + i * 0.09,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              {word === "CBSE" ? (
                <span className="text-primary">{word}</span>
              ) : word === "boards" ? (
                <span className="relative">
                  {word}
                  <motion.span
                    className="absolute -bottom-1 left-0 right-0 h-[3px] bg-teal rounded-full"
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ delay: 0.88, duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
                    style={{ transformOrigin: "left" }}
                  />
                </span>
              ) : word}
            </motion.span>
          ))}
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.82, duration: 0.7 }}
          className="text-ink-2 text-lg max-w-2xl mx-auto leading-relaxed"
        >
          Exam strategies, subject guides, and board exam hacks —
          written specifically for CBSE Class 8–12 students and parents.
        </motion.p>
      </div>

      {/* ── Category filter ──────────────────────────────────────────────── */}
      <LayoutGroup id="filter">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.88, duration: 0.6 }}
          className="flex flex-wrap gap-2 justify-center mb-12"
        >
          {(["All", ...ALL_CATEGORIES] as (Category | "All")[]).map((cat) => {
            const isActive = activeCategory === cat;
            const color = cat !== "All" ? colorClasses[CATEGORY_COLOR[cat as Category]] : null;

            return (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                aria-pressed={isActive}
                className={`relative px-4 py-1.5 rounded-full text-[0.78rem] font-semibold transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/50 ${
                  isActive
                    ? "text-white"
                    : color
                    ? `${color.text} ${color.bg} ${color.border} border hover:opacity-90`
                    : "text-ink-2 bg-surface-2 border border-ink/10 hover:border-ink/25"
                }`}
              >
                {isActive && (
                  <motion.span
                    layoutId="active-pill"
                    className="absolute inset-0 rounded-full bg-ink"
                    transition={{ type: "spring", stiffness: 380, damping: 32 }}
                  />
                )}
                <span className="relative z-10">{cat}</span>
              </button>
            );
          })}
        </motion.div>
      </LayoutGroup>

      {/* ── Featured article ──────────────────────────────────────────────── */}
      <AnimatePresence mode="wait">
        {showFeatured && (
          <motion.section
            key="featured"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="mb-10 overflow-hidden"
          >
            <div className="flex items-center gap-3 mb-5">
              <span className="text-xs font-bold text-ink-3 uppercase tracking-[0.12em]">Featured</span>
              <div className="flex-1 h-px bg-ink/10" />
            </div>
            <FeaturedCard article={featured} />
          </motion.section>
        )}
      </AnimatePresence>

      {/* ── Article grid ──────────────────────────────────────────────────── */}
      <section>
        <div className="flex items-center gap-3 mb-7">
          <span className="text-xs font-bold text-ink-3 uppercase tracking-[0.12em]">
            {activeCategory === "All" ? "All Articles" : activeCategory}
          </span>
          <div className="flex-1 h-px bg-ink/10" />
          <motion.span
            key={filtered.length}
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-xs text-ink-3 tabular-nums"
          >
            {filtered.length} article{filtered.length !== 1 ? "s" : ""}
          </motion.span>
        </div>

        <AnimatePresence mode="popLayout">
          <motion.div layout className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {filtered.map((article, i) => (
              <ArticleCard key={article.slug} article={article} index={i} />
            ))}
          </motion.div>
        </AnimatePresence>

        {filtered.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-20 text-ink-3 text-sm"
          >
            No articles in this category yet — coming soon!
          </motion.div>
        )}
      </section>

      {/* ── CTA strip with rotating gradient border ───────────────────────── */}
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
        className="mt-20 relative"
      >
        {/* Rotating conic gradient ring */}
        <div className="absolute -inset-[2px] rounded-[26px] overflow-hidden -z-10">
          <motion.div
            className="absolute inset-0"
            style={{ background: "conic-gradient(from 0deg, #4E4BE5, #0D9488, #F59E0B, #F97316, #4E4BE5)" }}
            animate={{ rotate: 360 }}
            transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
          />
        </div>

        <div className="relative rounded-3xl bg-ink text-surface p-10 md:p-14 text-center">
          <p className="text-[0.72rem] font-bold uppercase tracking-[0.18em] text-surface/40 mb-3">
            Put the tips into practice
          </p>
          <h2 className="font-syne text-2xl md:text-3xl font-extrabold mb-4">
            Read the strategy. Now write the answer.
          </h2>
          <p className="text-surface/65 max-w-xl mx-auto mb-8 text-[0.95rem] leading-relaxed">
            ClearSteps gives you CBSE mock papers, AI evaluation against the real
            marking scheme, and instant feedback — so every insight here becomes a
            real score improvement.
          </p>
          <MagneticBtn
            href="https://app.clearsteps.co.in"
            className="inline-block px-8 py-4 rounded-full font-syne font-extrabold text-ink bg-surface hover:bg-primary hover:text-white transition-all duration-250"
          >
            Try ClearSteps Free →
          </MagneticBtn>
        </div>
      </motion.section>
    </main>
  );
}
