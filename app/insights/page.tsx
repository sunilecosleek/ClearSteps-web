import type { Metadata } from "next";
import Link from "next/link";
import {
  articles,
  ALL_CATEGORIES,
  CATEGORY_COLOR,
  type Article,
  type Category,
} from "@/lib/insights";

const BASE_URL = "https://clearsteps.co.in";

export const metadata: Metadata = {
  title: "CBSE Insights – Study Tips, Exam Strategies & Board Exam Guides",
  description:
    "Free CBSE study tips, board exam strategies, subject guides and exam hacks for Class 8–12 students and parents. Updated regularly with practical, actionable content.",
  keywords: [
    "CBSE study tips",
    "CBSE board exam tips",
    "CBSE exam strategies",
    "CBSE study guide Class 10",
    "CBSE study guide Class 12",
    "CBSE Maths tips",
    "CBSE Physics tips",
    "board exam preparation tips India",
    "CBSE insights blog",
    "ClearSteps CBSE blog",
  ],
  alternates: { canonical: `${BASE_URL}/insights` },
  openGraph: {
    title: "CBSE Insights – Study Tips & Board Exam Guides | ClearSteps",
    description:
      "Free CBSE study tips, board exam strategies and subject guides for Class 8–12.",
    url: `${BASE_URL}/insights`,
    type: "website",
  },
};

// ── Colour helper ─────────────────────────────────────────────────────────────
const colorClasses: Record<string, { bg: string; text: string; border: string }> = {
  amber:  { bg: "bg-amber/10",   text: "text-amber",   border: "border-amber/30" },
  teal:   { bg: "bg-teal/10",    text: "text-teal",    border: "border-teal/30" },
  sky:    { bg: "bg-sky/10",     text: "text-sky",     border: "border-sky/30" },
  coral:  { bg: "bg-coral/10",   text: "text-coral",   border: "border-coral/30" },
  green:  { bg: "bg-green/10",   text: "text-green",   border: "border-green/30" },
  violet: { bg: "bg-primary/10", text: "text-primary", border: "border-primary/30" },
  rose:   { bg: "bg-rose/10",    text: "text-rose",    border: "border-rose/30" },
};

function CategoryPill({ category }: { category: Category }) {
  const color = CATEGORY_COLOR[category];
  const c = colorClasses[color] ?? colorClasses.violet;
  return (
    <span
      className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-[0.72rem] font-semibold border ${c.bg} ${c.text} ${c.border}`}
    >
      {category}
    </span>
  );
}

function FeaturedCard({ article }: { article: Article }) {
  const color = CATEGORY_COLOR[article.category];
  const c = colorClasses[color] ?? colorClasses.violet;
  return (
    <Link
      href={`/insights/${article.slug}`}
      className="group block rounded-3xl border border-ink/10 bg-surface-2 p-8 md:p-10 hover:border-ink/25 hover:shadow-[0_8px_40px_rgba(0,0,0,0.08)] transition-all duration-300"
    >
      <div className="flex flex-col md:flex-row md:items-start gap-8">
        <div className="flex-1">
          <div className="flex items-center gap-3 mb-5">
            <CategoryPill category={article.category} />
            <span className="text-xs text-ink-3 font-medium">{article.classTarget}</span>
            <span className="text-xs text-ink-3">·</span>
            <span className="text-xs text-ink-3">{article.readTime} min read</span>
          </div>
          <h2 className="font-syne text-2xl md:text-3xl font-extrabold text-ink leading-tight group-hover:text-primary transition-colors mb-4">
            {article.title}
          </h2>
          <p className="text-ink-2 leading-relaxed text-[0.95rem] mb-6">
            {article.description}
          </p>
          <span className={`inline-flex items-center gap-1.5 text-sm font-semibold ${c.text} group-hover:gap-2.5 transition-all`}>
            Read article
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </span>
        </div>
        {/* Decorative accent block */}
        <div className={`hidden md:flex w-48 h-48 rounded-2xl ${c.bg} items-center justify-center flex-shrink-0`}>
          <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" className={c.text}>
            <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
            <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
          </svg>
        </div>
      </div>
    </Link>
  );
}

function ArticleCard({ article }: { article: Article }) {
  const color = CATEGORY_COLOR[article.category];
  const c = colorClasses[color] ?? colorClasses.violet;
  return (
    <Link
      href={`/insights/${article.slug}`}
      className="group flex flex-col rounded-2xl border border-ink/10 bg-surface hover:border-ink/25 hover:shadow-[0_4px_24px_rgba(0,0,0,0.07)] transition-all duration-300 overflow-hidden"
    >
      {/* Top accent strip */}
      <div className={`h-1 w-full ${c.bg} group-hover:opacity-100 opacity-60 transition-opacity`} />
      <div className="p-6 flex flex-col flex-1">
        <div className="flex items-center gap-2 mb-4">
          <CategoryPill category={article.category} />
          <span className="text-xs text-ink-3 ml-auto">{article.readTime} min read</span>
        </div>
        <h3 className="font-syne text-[1.05rem] font-bold text-ink leading-snug group-hover:text-primary transition-colors mb-3 flex-1">
          {article.title}
        </h3>
        <p className="text-ink-3 text-[0.85rem] leading-relaxed line-clamp-2 mb-5">
          {article.description}
        </p>
        <div className="flex items-center justify-between mt-auto pt-4 border-t border-ink/8">
          <span className="text-xs text-ink-3">{article.classTarget}</span>
          <span className={`text-xs font-semibold ${c.text} flex items-center gap-1 group-hover:gap-1.5 transition-all`}>
            Read
            <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </span>
        </div>
      </div>
    </Link>
  );
}

// ── Page ──────────────────────────────────────────────────────────────────────
export default function InsightsPage() {
  const featured = articles.find((a) => a.featured) ?? articles[0];
  const rest = articles.filter((a) => a.slug !== featured.slug);

  // JSON-LD for CollectionPage — helps Google understand this is a content hub
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "CBSE Insights – Study Tips & Board Exam Guides",
    description:
      "Free CBSE study tips, exam strategies, subject guides and board exam hacks for Class 8–12 students and parents.",
    url: `${BASE_URL}/insights`,
    publisher: {
      "@type": "EducationalOrganization",
      name: "ClearSteps",
      url: BASE_URL,
    },
    hasPart: articles.map((a) => ({
      "@type": "Article",
      name: a.title,
      description: a.description,
      url: `${BASE_URL}/insights/${a.slug}`,
      datePublished: a.publishDate,
      keywords: a.keywords.join(", "),
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <main className="pt-28 pb-24 px-5 md:px-[5%] max-w-6xl mx-auto">

        {/* ── Hero ──────────────────────────────────────────────────────── */}
        <div className="text-center mb-16">
          <span className="inline-block text-xs font-bold text-primary uppercase tracking-[0.15em] mb-4 px-3 py-1 rounded-full bg-primary/8 border border-primary/15">
            CBSE Insights
          </span>
          <h1 className="font-syne text-4xl md:text-5xl lg:text-6xl font-extrabold text-ink leading-tight mb-5">
            Everything you need to know<br className="hidden md:block" />
            to ace CBSE boards
          </h1>
          <p className="text-ink-2 text-lg max-w-2xl mx-auto leading-relaxed">
            Study tips, exam strategies, subject guides, and board exam hacks —
            written specifically for CBSE Class 8–12 students and parents.
          </p>
        </div>

        {/* ── Category pills ────────────────────────────────────────────── */}
        <div className="flex flex-wrap gap-2 justify-center mb-12">
          {ALL_CATEGORIES.map((cat) => {
            const color = CATEGORY_COLOR[cat];
            const c = colorClasses[color] ?? colorClasses.violet;
            return (
              <span
                key={cat}
                className={`px-3.5 py-1.5 rounded-full text-xs font-semibold border cursor-default ${c.bg} ${c.text} ${c.border}`}
              >
                {cat}
              </span>
            );
          })}
        </div>

        {/* ── Featured article ──────────────────────────────────────────── */}
        <section className="mb-10">
          <div className="flex items-center gap-3 mb-5">
            <span className="text-xs font-bold text-ink-3 uppercase tracking-widest">Featured</span>
            <div className="flex-1 h-px bg-ink/10" />
          </div>
          <FeaturedCard article={featured} />
        </section>

        {/* ── Article grid ──────────────────────────────────────────────── */}
        <section>
          <div className="flex items-center gap-3 mb-7">
            <span className="text-xs font-bold text-ink-3 uppercase tracking-widest">All Articles</span>
            <div className="flex-1 h-px bg-ink/10" />
            <span className="text-xs text-ink-3">{rest.length} articles</span>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {rest.map((article) => (
              <ArticleCard key={article.slug} article={article} />
            ))}
          </div>
        </section>

        {/* ── CTA strip ─────────────────────────────────────────────────── */}
        <section className="mt-20 rounded-3xl bg-ink text-surface p-10 md:p-14 text-center">
          <p className="text-xs font-bold uppercase tracking-[0.15em] text-surface/50 mb-3">
            Put the tips into practice
          </p>
          <h2 className="font-syne text-2xl md:text-3xl font-extrabold mb-4">
            Read the strategy. Now write the answer.
          </h2>
          <p className="text-surface/70 max-w-xl mx-auto mb-8 text-[0.95rem]">
            ClearSteps gives you CBSE mock papers, AI evaluation against the real
            marking scheme, and instant feedback — so every insight here becomes a
            real score improvement.
          </p>
          <a
            href="/"
            className="inline-block px-8 py-4 rounded-full font-syne font-extrabold text-ink bg-surface hover:bg-primary hover:text-white transition-all duration-200"
          >
            Try ClearSteps Free →
          </a>
        </section>
      </main>
    </>
  );
}
