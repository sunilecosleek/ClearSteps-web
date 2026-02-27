"use client";

import { useState, useEffect, useMemo, useCallback } from "react";
import Link from "next/link";
import {
  motion,
  useScroll,
  useSpring,
  AnimatePresence,
} from "framer-motion";
import {
  CATEGORY_COLOR,
  type Article,
  type Block,
  type Category,
} from "@/lib/insights";

// ── Colour map ────────────────────────────────────────────────────────────────
const colorClasses: Record<string, { bg: string; text: string; border: string }> = {
  amber:  { bg: "bg-amber/10",   text: "text-amber",   border: "border-amber/30" },
  teal:   { bg: "bg-teal/10",    text: "text-teal",    border: "border-teal/30" },
  sky:    { bg: "bg-sky/10",     text: "text-sky",     border: "border-sky/30" },
  coral:  { bg: "bg-coral/10",   text: "text-coral",   border: "border-coral/30" },
  green:  { bg: "bg-green/10",   text: "text-green",   border: "border-green/30" },
  violet: { bg: "bg-primary/10", text: "text-primary", border: "border-primary/30" },
  rose:   { bg: "bg-rose/10",    text: "text-rose",    border: "border-rose/30" },
};

function getColor(category: Category) {
  return colorClasses[CATEGORY_COLOR[category]] ?? colorClasses.violet;
}

// ── Reading progress bar ──────────────────────────────────────────────────────
function ReadingProgress({ color }: { color: string }) {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 200, damping: 30, restDelta: 0.001 });

  return (
    <motion.div
      className={`fixed top-0 left-0 right-0 h-[3px] ${color} z-[100] origin-left`}
      style={{ scaleX }}
      aria-hidden
    />
  );
}

// ── Count-up hook ─────────────────────────────────────────────────────────────
function useCountUp(target: number, duration = 1.4) {
  const [count, setCount] = useState(0);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    if (!started || target === 0) return;
    let raf: number;
    const startTime = performance.now();

    const tick = (now: number) => {
      const t = Math.min((now - startTime) / (duration * 1000), 1);
      const eased = 1 - Math.pow(1 - t, 3); // ease-out cubic
      setCount(Math.round(eased * target));
      if (t < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [started, target, duration]);

  return { count, trigger: useCallback(() => setStarted(true), []) };
}

// ── Stat block with count-up ──────────────────────────────────────────────────
function StatBlock({ value, label }: { value: string; label: string }) {
  // Parse leading number, keep suffix (e.g. "94%" → num=94, suffix="%")
  const match = value.match(/^([\d.]+)/);
  const num = match ? parseFloat(match[1]) : null;
  const suffix = match ? value.slice(match[0].length) : value;

  const { count, trigger } = useCountUp(num ?? 0, 1.3);

  return (
    <motion.div
      className="my-6 rounded-2xl border border-ink/10 bg-surface-2 p-6 text-center"
      initial={{ opacity: 0, scale: 0.88, y: 20 }}
      whileInView={{ opacity: 1, scale: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      onViewportEnter={trigger}
      transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
    >
      <p className="font-syne text-4xl font-extrabold text-primary mb-1">
        {num !== null ? `${count}${suffix}` : value}
      </p>
      <p className="text-ink-3 text-sm">{label}</p>
    </motion.div>
  );
}

// ── Animated content block renderer ──────────────────────────────────────────
function AnimatedBlock({ block, idx }: { block: Block; idx: number }) {
  const viewportOpts = { once: true, margin: "-40px" } as const;
  const fadeUp = {
    initial: { opacity: 0, y: 18 },
    whileInView: { opacity: 1, y: 0 },
    viewport: viewportOpts,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  };

  switch (block.t) {
    case "p":
      return (
        <motion.p {...fadeUp} className="text-ink-2 leading-relaxed mb-5 text-[0.97rem]">
          {block.v}
        </motion.p>
      );

    case "h2":
      return (
        <motion.h2
          id={`h2-${idx}`}
          initial={{ opacity: 0, x: -18 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={viewportOpts}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="font-syne font-bold text-[1.35rem] text-ink mt-10 mb-4 leading-snug scroll-mt-28"
          data-speakable
        >
          {block.v}
        </motion.h2>
      );

    case "h3":
      return (
        <motion.h3 {...fadeUp} className="font-syne font-semibold text-[1.1rem] text-ink mt-7 mb-3">
          {block.v}
        </motion.h3>
      );

    case "ul":
      return (
        <motion.ul
          initial="hidden"
          whileInView="show"
          viewport={viewportOpts}
          variants={{ hidden: {}, show: { transition: { staggerChildren: 0.07 } } }}
          className="space-y-2 mb-5 pl-1"
        >
          {block.v.map((item, i) => (
            <motion.li
              key={i}
              variants={{
                hidden: { opacity: 0, x: -14 },
                show: { opacity: 1, x: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } },
              }}
              className="flex gap-3 text-ink-2 text-[0.95rem]"
            >
              <span className="mt-[0.38rem] w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
              {item}
            </motion.li>
          ))}
        </motion.ul>
      );

    case "ol":
      return (
        <motion.ol
          initial="hidden"
          whileInView="show"
          viewport={viewportOpts}
          variants={{ hidden: {}, show: { transition: { staggerChildren: 0.07 } } }}
          className="space-y-2.5 mb-5 pl-1"
        >
          {block.v.map((item, i) => (
            <motion.li
              key={i}
              variants={{
                hidden: { opacity: 0, x: -14 },
                show: { opacity: 1, x: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } },
              }}
              className="flex gap-3 text-ink-2 text-[0.95rem]"
            >
              <span className="font-syne font-bold text-primary text-sm w-5 flex-shrink-0 pt-px">
                {i + 1}.
              </span>
              {item}
            </motion.li>
          ))}
        </motion.ol>
      );

    case "tip":
      return (
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={viewportOpts}
          transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
          className="my-6 relative overflow-hidden bg-amber/8 border-l-[3px] border-amber rounded-r-2xl px-5 py-4"
        >
          {/* Breathing pulse on the left accent */}
          <motion.span
            className="absolute left-0 top-0 bottom-0 w-[3px] bg-amber"
            animate={{ opacity: [0.6, 1, 0.6] }}
            transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
          />
          <p className="text-[0.7rem] font-bold text-amber uppercase tracking-[0.14em] mb-1.5">Tip</p>
          <p className="text-ink-2 text-[0.9rem] leading-relaxed">{block.v}</p>
        </motion.div>
      );

    case "stat":
      return <StatBlock key={idx} value={block.v} label={block.label} />;

    case "table":
      return (
        <motion.div
          {...fadeUp}
          className="my-6 overflow-x-auto rounded-2xl border border-ink/10"
        >
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-ink text-surface">
                {block.headers.map((h, i) => (
                  <th key={i} className="px-4 py-3 text-left font-semibold text-[0.82rem] whitespace-nowrap">{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {block.rows.map((row, i) => (
                <tr key={i} className={i % 2 === 0 ? "bg-surface" : "bg-surface-2"}>
                  {row.map((cell, j) => (
                    <td key={j} className="px-4 py-3 text-ink-2 text-[0.87rem]">{cell}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </motion.div>
      );

    default:
      return null;
  }
}

// ── Table of contents ─────────────────────────────────────────────────────────
function TableOfContents({
  headings,
  activeIdx,
}: {
  headings: { blockIdx: number; text: string }[];
  activeIdx: number | null;
}) {
  if (headings.length === 0) return null;

  return (
    <motion.nav
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 0.7, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="space-y-0.5"
      aria-label="Table of contents"
    >
      <p className="text-[0.68rem] font-bold uppercase tracking-[0.14em] text-ink-3 mb-3 pb-2 border-b border-ink/10">
        In this article
      </p>
      {headings.map((h) => {
        const isActive = activeIdx === h.blockIdx;
        return (
          <button
            key={h.blockIdx}
            onClick={() => {
              document.getElementById(`h2-${h.blockIdx}`)?.scrollIntoView({
                behavior: "smooth",
                block: "start",
              });
            }}
            className={`relative w-full text-left pl-4 py-1.5 text-[0.78rem] leading-snug rounded-r transition-colors duration-200 ${
              isActive ? "text-primary font-semibold" : "text-ink-3 hover:text-ink-2"
            }`}
          >
            <AnimatePresence>
              {isActive && (
                <motion.span
                  layoutId="toc-dot"
                  className="absolute left-0 top-1/2 -translate-y-1/2 w-[2.5px] h-4 bg-primary rounded-full"
                  transition={{ type: "spring", stiffness: 420, damping: 36 }}
                />
              )}
            </AnimatePresence>
            <motion.span
              animate={{ x: isActive ? 2 : 0 }}
              transition={{ duration: 0.2 }}
              className="block"
            >
              {h.text}
            </motion.span>
          </button>
        );
      })}
    </motion.nav>
  );
}

// ── Related article card ──────────────────────────────────────────────────────
function RelatedCard({ article, delay = 0 }: { article: Article; delay?: number }) {
  const c = getColor(article.category);
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ y: -5, boxShadow: "0 14px 36px rgba(0,0,0,0.1)" }}
      transition={{ duration: 0.55, delay, ease: [0.22, 1, 0.36, 1] }}
      className="rounded-2xl"
    >
      <Link
        href={`/insights/${article.slug}`}
        className="group flex flex-col gap-3 p-5 rounded-2xl border border-ink/10 hover:border-ink/25 transition-colors h-full block"
      >
        <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-[0.72rem] font-semibold border ${c.bg} ${c.text} ${c.border} w-fit`}>
          {article.category}
        </span>
        <p className="font-syne font-bold text-[0.97rem] text-ink leading-snug group-hover:text-primary transition-colors flex-1">
          {article.title}
        </p>
        <span className={`text-xs font-semibold ${c.text} flex items-center gap-1 group-hover:gap-2 transition-all`}>
          {article.readTime} min read →
        </span>
      </Link>
    </motion.div>
  );
}

// ── Article view ──────────────────────────────────────────────────────────────
export default function ArticleView({
  article,
  related,
}: {
  article: Article;
  related: Article[];
}) {
  const c = getColor(article.category);

  // Extract h2 headings for TOC
  const headings = useMemo(
    () =>
      article.content.reduce<{ blockIdx: number; text: string }[]>((acc, block, idx) => {
        if (block.t === "h2") acc.push({ blockIdx: idx, text: block.v as string });
        return acc;
      }, []),
    [article.content]
  );

  const [activeIdx, setActiveIdx] = useState<number | null>(
    headings.length > 0 ? headings[0].blockIdx : null
  );

  // Track active h2 with IntersectionObserver
  useEffect(() => {
    if (headings.length === 0) return;
    const observers: IntersectionObserver[] = [];

    headings.forEach(({ blockIdx }) => {
      const el = document.getElementById(`h2-${blockIdx}`);
      if (!el) return;
      const obs = new IntersectionObserver(
        ([entry]) => { if (entry.isIntersecting) setActiveIdx(blockIdx); },
        { rootMargin: "-15% 0px -72% 0px" }
      );
      obs.observe(el);
      observers.push(obs);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, [headings]);

  const formattedDate = new Date(article.publishDate).toLocaleDateString("en-IN", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  const titleWords = article.title.split(" ");
  const hasH2 = headings.length > 0;

  // Determine the strip CSS class to use for reading progress
  const progressClass = (() => {
    const col = CATEGORY_COLOR[article.category];
    const map: Record<string, string> = {
      amber: "bg-amber", teal: "bg-teal", sky: "bg-sky",
      coral: "bg-coral", green: "bg-green", violet: "bg-primary", rose: "bg-rose",
    };
    return map[col] ?? "bg-primary";
  })();

  return (
    <>
      <ReadingProgress color={progressClass} />

      <main className="pt-28 pb-24 px-5 md:px-[5%]">
        <div className="max-w-[1080px] mx-auto">
          <div className={hasH2 ? "lg:grid lg:grid-cols-[1fr_210px] lg:gap-14 items-start" : ""}>

            {/* ── Main content column ──────────────────────────────── */}
            <div className="min-w-0">

              {/* Breadcrumb */}
              <motion.nav
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                aria-label="Breadcrumb"
                className="flex items-center gap-2 text-xs text-ink-3 mb-8"
              >
                <Link href="/" className="hover:text-ink transition-colors">Home</Link>
                <span>/</span>
                <Link href="/insights" className="hover:text-ink transition-colors">CBSE Insights</Link>
                <span>/</span>
                <span className="text-ink-2 font-medium truncate max-w-[200px]">{article.category}</span>
              </motion.nav>

              {/* Article header */}
              <header className="mb-10">
                <motion.div
                  initial={{ opacity: 0, y: 14 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.08 }}
                  className="flex flex-wrap items-center gap-3 mb-5"
                >
                  <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-[0.72rem] font-semibold border ${c.bg} ${c.text} ${c.border}`}>
                    {article.category}
                  </span>
                  <span className={`text-xs font-medium px-2.5 py-0.5 rounded-full ${c.bg} ${c.text} border ${c.border}`}>
                    {article.classTarget}
                  </span>
                </motion.div>

                {/* Word-by-word title reveal */}
                <h1 className="font-syne text-3xl md:text-4xl lg:text-[2.55rem] font-extrabold text-ink leading-tight mb-5">
                  {titleWords.map((word, i) => (
                    <motion.span
                      key={i}
                      className="inline-block mr-[0.2em]"
                      initial={{ opacity: 0, y: 32, filter: "blur(4px)" }}
                      animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                      transition={{
                        duration: 0.65,
                        delay: 0.12 + i * 0.04,
                        ease: [0.22, 1, 0.36, 1],
                      }}
                      data-speakable={i === 0 ? true : undefined}
                    >
                      {word}
                    </motion.span>
                  ))}
                </h1>

                <motion.p
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.52, duration: 0.6 }}
                  className="text-ink-2 text-lg leading-relaxed mb-6"
                >
                  {article.description}
                </motion.p>

                {/* Meta row */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.68, duration: 0.6 }}
                  className="flex flex-wrap items-center gap-4 text-xs text-ink-3 pb-8 border-b border-ink/10"
                >
                  <span className="flex items-center gap-1.5">
                    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" />
                    </svg>
                    {article.readTime} min read
                  </span>
                  <span>·</span>
                  <span>{formattedDate}</span>
                  <span>·</span>
                  <span className="flex items-center gap-1.5">
                    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" /><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
                    </svg>
                    ClearSteps
                  </span>
                </motion.div>
              </header>

              {/* Article body */}
              <article className="prose-none">
                {article.content.map((block, idx) => (
                  <AnimatedBlock key={idx} block={block} idx={idx} />
                ))}
              </article>

              {/* In-article CTA */}
              <motion.div
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                className={`mt-14 rounded-3xl ${c.bg} border ${c.border} p-8 text-center relative overflow-hidden`}
              >
                {/* Subtle animated glow behind */}
                <motion.div
                  className={`absolute inset-0 ${c.bg} opacity-60 pointer-events-none`}
                  animate={{ scale: [1, 1.04, 1] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                />
                <div className="relative">
                  <p className="text-xs font-bold uppercase tracking-[0.14em] text-ink-3 mb-2">
                    Put this into practice
                  </p>
                  <h3 className="font-syne text-xl font-extrabold text-ink mb-3">
                    Try ClearSteps — CBSE Mock Papers with AI Evaluation
                  </h3>
                  <p className="text-ink-2 text-sm mb-6 max-w-sm mx-auto leading-relaxed">
                    Write your answers on real paper, upload them, and get AI feedback
                    against the official CBSE marking scheme. Free to start.
                  </p>
                  <motion.a
                    href="https://app.clearsteps.co.in"
                    whileHover={{ scale: 1.04, y: -2 }}
                    whileTap={{ scale: 0.97 }}
                    className="inline-block px-7 py-3.5 rounded-full font-syne font-extrabold text-white bg-ink hover:bg-primary transition-colors text-sm"
                  >
                    Start Free →
                  </motion.a>
                </div>
              </motion.div>

              {/* Related articles */}
              {related.length > 0 && (
                <section className="mt-14">
                  <div className="flex items-center gap-3 mb-6">
                    <span className="text-xs font-bold text-ink-3 uppercase tracking-[0.12em]">
                      Related Articles
                    </span>
                    <div className="flex-1 h-px bg-ink/10" />
                  </div>
                  <div className="grid sm:grid-cols-2 gap-4">
                    {related.map((a, i) => (
                      <RelatedCard key={a.slug} article={a} delay={i * 0.08} />
                    ))}
                  </div>
                  <div className="text-center mt-8">
                    <Link
                      href="/insights"
                      className="text-sm font-semibold text-primary hover:text-ink transition-colors"
                    >
                      ← All CBSE Insights
                    </Link>
                  </div>
                </section>
              )}
            </div>

            {/* ── TOC sidebar ──────────────────────────────────────── */}
            {hasH2 && (
              <aside className="hidden lg:block">
                <div className="sticky top-28 pt-1">
                  <TableOfContents headings={headings} activeIdx={activeIdx} />

                  {/* Mini CTA in sidebar */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1, duration: 0.6 }}
                    className="mt-8 pt-6 border-t border-ink/10"
                  >
                    <p className="text-[0.75rem] text-ink-3 leading-relaxed mb-3">
                      Practice what you read with AI-evaluated mock papers.
                    </p>
                    <a
                      href="https://app.clearsteps.co.in"
                      className={`block w-full text-center text-[0.78rem] font-bold py-2.5 rounded-full border ${c.border} ${c.text} ${c.bg} hover:bg-ink hover:text-white hover:border-ink transition-all duration-200`}
                    >
                      Try Free →
                    </a>
                  </motion.div>
                </div>
              </aside>
            )}
          </div>
        </div>
      </main>
    </>
  );
}
