import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import {
  articles,
  getArticleBySlug,
  getRelatedArticles,
  CATEGORY_COLOR,
  type Article,
  type Block,
  type Category,
} from "@/lib/insights";

const BASE_URL = "https://clearsteps.co.in";

// ── Static params — pre-render all article pages at build time ───────────────
export function generateStaticParams() {
  return articles.map((a) => ({ slug: a.slug }));
}

// ── Per-article metadata ─────────────────────────────────────────────────────
export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const article = getArticleBySlug(params.slug);
  if (!article) return {};

  return {
    title: article.title,
    description: article.description,
    keywords: article.keywords,
    authors: [{ name: "ClearSteps", url: BASE_URL }],
    alternates: { canonical: `${BASE_URL}/insights/${article.slug}` },
    openGraph: {
      title: article.title,
      description: article.description,
      url: `${BASE_URL}/insights/${article.slug}`,
      type: "article",
      publishedTime: article.publishDate,
      tags: article.keywords,
      siteName: "ClearSteps",
    },
    twitter: {
      card: "summary_large_image",
      title: article.title,
      description: article.description,
    },
  };
}

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
    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-[0.72rem] font-semibold border ${c.bg} ${c.text} ${c.border}`}>
      {category}
    </span>
  );
}

// ── Content block renderer ───────────────────────────────────────────────────
function RenderBlock({ block, idx }: { block: Block; idx: number }) {
  switch (block.t) {
    case "p":
      return (
        <p key={idx} className="text-ink-2 leading-relaxed mb-5 text-[0.97rem]">
          {block.v}
        </p>
      );
    case "h2":
      return (
        <h2
          key={idx}
          className="font-syne font-bold text-[1.35rem] text-ink mt-10 mb-4 leading-snug"
          data-speakable
        >
          {block.v}
        </h2>
      );
    case "h3":
      return (
        <h3 key={idx} className="font-syne font-semibold text-[1.1rem] text-ink mt-7 mb-3">
          {block.v}
        </h3>
      );
    case "ul":
      return (
        <ul key={idx} className="space-y-2 mb-5 pl-1">
          {block.v.map((item, i) => (
            <li key={i} className="flex gap-3 text-ink-2 text-[0.95rem]">
              <span className="mt-[0.35rem] w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
              {item}
            </li>
          ))}
        </ul>
      );
    case "ol":
      return (
        <ol key={idx} className="space-y-2.5 mb-5 pl-1">
          {block.v.map((item, i) => (
            <li key={i} className="flex gap-3 text-ink-2 text-[0.95rem]">
              <span className="font-syne font-bold text-primary text-sm w-5 flex-shrink-0 pt-px">
                {i + 1}.
              </span>
              {item}
            </li>
          ))}
        </ol>
      );
    case "tip":
      return (
        <div key={idx} className="my-6 bg-amber/8 border-l-[3px] border-amber rounded-r-2xl px-5 py-4">
          <p className="text-xs font-bold text-amber uppercase tracking-widest mb-1.5">
            Tip
          </p>
          <p className="text-ink-2 text-[0.9rem] leading-relaxed">{block.v}</p>
        </div>
      );
    case "stat":
      return (
        <div key={idx} className="my-6 rounded-2xl border border-ink/10 bg-surface-2 p-6 text-center">
          <p className="font-syne text-4xl font-extrabold text-primary mb-1">{block.v}</p>
          <p className="text-ink-3 text-sm">{block.label}</p>
        </div>
      );
    case "table":
      return (
        <div key={idx} className="my-6 overflow-x-auto rounded-2xl border border-ink/10">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-ink text-surface">
                {block.headers.map((h, i) => (
                  <th key={i} className="px-4 py-3 text-left font-semibold text-[0.82rem] whitespace-nowrap">
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {block.rows.map((row, i) => (
                <tr key={i} className={i % 2 === 0 ? "bg-surface" : "bg-surface-2"}>
                  {row.map((cell, j) => (
                    <td key={j} className="px-4 py-3 text-ink-2 text-[0.87rem]">
                      {cell}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      );
    default:
      return null;
  }
}

// ── Related article card ──────────────────────────────────────────────────────
function RelatedCard({ article }: { article: Article }) {
  const color = CATEGORY_COLOR[article.category];
  const c = colorClasses[color] ?? colorClasses.violet;
  return (
    <Link
      href={`/insights/${article.slug}`}
      className="group flex flex-col gap-3 p-5 rounded-2xl border border-ink/10 hover:border-ink/25 hover:shadow-sm transition-all"
    >
      <CategoryPill category={article.category} />
      <p className="font-syne font-bold text-[0.97rem] text-ink leading-snug group-hover:text-primary transition-colors">
        {article.title}
      </p>
      <span className={`text-xs font-semibold ${c.text} mt-auto flex items-center gap-1`}>
        {article.readTime} min read →
      </span>
    </Link>
  );
}

// ── Page ──────────────────────────────────────────────────────────────────────
export default function ArticlePage({ params }: { params: { slug: string } }) {
  const article = getArticleBySlug(params.slug);
  if (!article) notFound();

  const related = getRelatedArticles(params.slug, 2);
  const color = CATEGORY_COLOR[article.category];
  const c = colorClasses[color] ?? colorClasses.violet;

  // JSON-LD: BlogPosting + BreadcrumbList + Article schemas (2026 stack)
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BlogPosting",
        "@id": `${BASE_URL}/insights/${article.slug}/#article`,
        headline: article.title,
        description: article.description,
        url: `${BASE_URL}/insights/${article.slug}`,
        datePublished: article.publishDate,
        dateModified: article.publishDate,
        inLanguage: "en-IN",
        keywords: article.keywords.join(", "),
        author: {
          "@type": "Organization",
          name: "ClearSteps",
          url: BASE_URL,
        },
        publisher: {
          "@type": "EducationalOrganization",
          name: "ClearSteps",
          url: BASE_URL,
          logo: { "@type": "ImageObject", url: `${BASE_URL}/logo.png` },
        },
        isPartOf: { "@type": "Blog", name: "CBSE Insights", url: `${BASE_URL}/insights` },
        about: {
          "@type": "Thing",
          name: "CBSE Board Exam Preparation",
        },
        audience: {
          "@type": "EducationalAudience",
          educationalRole: "student",
          audienceType: `CBSE ${article.classTarget} students`,
        },
        // SpeakableSpecification — for AI assistants and voice search
        speakable: {
          "@type": "SpeakableSpecification",
          cssSelector: ["h1", "h2", "[data-speakable]"],
        },
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: BASE_URL },
          { "@type": "ListItem", position: 2, name: "CBSE Insights", item: `${BASE_URL}/insights` },
          { "@type": "ListItem", position: 3, name: article.title, item: `${BASE_URL}/insights/${article.slug}` },
        ],
      },
    ],
  };

  const formattedDate = new Date(article.publishDate).toLocaleDateString("en-IN", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <main className="pt-28 pb-24 px-5 md:px-[5%]">
        <div className="max-w-3xl mx-auto">

          {/* ── Breadcrumb ──────────────────────────────────────────────── */}
          <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs text-ink-3 mb-8">
            <Link href="/" className="hover:text-ink transition-colors">Home</Link>
            <span>/</span>
            <Link href="/insights" className="hover:text-ink transition-colors">CBSE Insights</Link>
            <span>/</span>
            <span className="text-ink-2 font-medium truncate max-w-[200px]">{article.category}</span>
          </nav>

          {/* ── Article header ──────────────────────────────────────────── */}
          <header className="mb-10">
            <div className="flex flex-wrap items-center gap-3 mb-5">
              <CategoryPill category={article.category} />
              <span className={`text-xs font-medium px-2.5 py-0.5 rounded-full ${c.bg} ${c.text} border ${c.border}`}>
                {article.classTarget}
              </span>
            </div>
            <h1
              className="font-syne text-3xl md:text-4xl lg:text-[2.6rem] font-extrabold text-ink leading-tight mb-5"
              data-speakable
            >
              {article.title}
            </h1>
            <p className="text-ink-2 text-lg leading-relaxed mb-6">
              {article.description}
            </p>
            <div className="flex items-center gap-4 text-xs text-ink-3 pb-8 border-b border-ink/10">
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
            </div>
          </header>

          {/* ── Article content ─────────────────────────────────────────── */}
          <article className="prose-none">
            {article.content.map((block, idx) => (
              <RenderBlock key={idx} block={block} idx={idx} />
            ))}
          </article>

          {/* ── CTA ─────────────────────────────────────────────────────── */}
          <div className={`mt-14 rounded-3xl ${c.bg} border ${c.border} p-8 text-center`}>
            <p className="text-xs font-bold uppercase tracking-widest text-ink-3 mb-2">
              Put this into practice
            </p>
            <h3 className="font-syne text-xl font-extrabold text-ink mb-3">
              Try ClearSteps — CBSE Mock Papers with AI Evaluation
            </h3>
            <p className="text-ink-2 text-sm mb-6 max-w-sm mx-auto">
              Write your answers on real paper, upload them, and get AI feedback
              against the official CBSE marking scheme. Free to start.
            </p>
            <a
              href="/"
              className="inline-block px-7 py-3.5 rounded-full font-syne font-extrabold text-white bg-ink hover:bg-primary transition-colors text-sm"
            >
              Start Free →
            </a>
          </div>

          {/* ── Related articles ─────────────────────────────────────────── */}
          {related.length > 0 && (
            <section className="mt-14">
              <div className="flex items-center gap-3 mb-6">
                <span className="text-xs font-bold text-ink-3 uppercase tracking-widest">
                  Related Articles
                </span>
                <div className="flex-1 h-px bg-ink/10" />
              </div>
              <div className="grid sm:grid-cols-2 gap-4">
                {related.map((a) => (
                  <RelatedCard key={a.slug} article={a} />
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
      </main>
    </>
  );
}
