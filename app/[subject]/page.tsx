import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Nav from "@/components/sections/Nav";
import Footer from "@/components/sections/Footer";
import {
  subjects,
  getSubjectBySlug,
  type SubjectPage,
} from "@/lib/subjects";
import { getArticleBySlug } from "@/lib/insights";

const BASE_URL = "https://clearsteps.co.in";

// ── Static params ─────────────────────────────────────────────────────────────
export function generateStaticParams() {
  return subjects.map((s) => ({ subject: s.slug }));
}

// ── Per-subject metadata ──────────────────────────────────────────────────────
export async function generateMetadata({
  params,
}: {
  params: { subject: string };
}): Promise<Metadata> {
  const page = getSubjectBySlug(params.subject);
  if (!page) return {};

  return {
    title: `${page.headline} | ClearSteps CBSE`,
    description: page.description,
    keywords: page.keywords,
    alternates: { canonical: `${BASE_URL}/${page.slug}` },
    openGraph: {
      title: `${page.headline} | ClearSteps`,
      description: page.description,
      url: `${BASE_URL}/${page.slug}`,
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: `${page.headline} | ClearSteps`,
      description: page.description,
    },
  };
}

// ── Colour map ────────────────────────────────────────────────────────────────
const colorMap: Record<string, { bg: string; text: string; border: string; badge: string }> = {
  amber: { bg: "bg-amber/10", text: "text-amber", border: "border-amber/25", badge: "bg-amber/15 text-amber" },
  sky:   { bg: "bg-sky/10",   text: "text-sky",   border: "border-sky/25",   badge: "bg-sky/15 text-sky" },
  coral: { bg: "bg-coral/10", text: "text-coral", border: "border-coral/25", badge: "bg-coral/15 text-coral" },
  teal:  { bg: "bg-teal/10",  text: "text-teal",  border: "border-teal/25",  badge: "bg-teal/15 text-teal" },
};

const difficultyColor = {
  Easy:   "bg-green/10 text-green",
  Medium: "bg-amber/10 text-amber",
  Hard:   "bg-coral/10 text-coral",
};

// ── Page ──────────────────────────────────────────────────────────────────────
export default function SubjectPage({ params }: { params: { subject: string } }) {
  const page = getSubjectBySlug(params.subject);
  if (!page) notFound();

  const c = colorMap[page.color] ?? colorMap.amber;
  const relatedArticles = page.relatedArticleSlugs
    .map((slug) => getArticleBySlug(slug))
    .filter(Boolean);

  // JSON-LD: Course + WebPage + BreadcrumbList (2026 schema stack)
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Course",
        name: `CBSE ${page.subject} Preparation – ${page.classLabel}`,
        description: page.description,
        url: `${BASE_URL}/${page.slug}`,
        provider: {
          "@type": "EducationalOrganization",
          name: "ClearSteps",
          url: BASE_URL,
        },
        educationalLevel: page.classLabel,
        about: { "@type": "Thing", name: `CBSE ${page.subject}` },
        teaches: `CBSE ${page.subject} syllabus for ${page.classLabel} — chapter-wise preparation, important topics, and board exam strategy`,
        inLanguage: "en-IN",
        isAccessibleForFree: true,
        hasCourseInstance: {
          "@type": "CourseInstance",
          courseMode: "online",
          instructor: { "@type": "Organization", name: "ClearSteps" },
        },
        aggregateRating: {
          "@type": "AggregateRating",
          ratingValue: "5",
          bestRating: "5",
          ratingCount: "3",
        },
      },
      {
        "@type": "WebPage",
        name: `${page.headline} | ClearSteps`,
        description: page.description,
        url: `${BASE_URL}/${page.slug}`,
        inLanguage: "en-IN",
        speakable: {
          "@type": "SpeakableSpecification",
          cssSelector: ["h1", "h2", "[data-speakable]"],
        },
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: BASE_URL },
          { "@type": "ListItem", position: 2, name: page.headline, item: `${BASE_URL}/${page.slug}` },
        ],
      },
    ],
  };

  const totalChapterMarks = page.chapters.reduce((sum, ch) => sum + ch.marks, 0);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Nav />

      <main className="pt-28 pb-24">

        {/* ── Hero ──────────────────────────────────────────────────────── */}
        <section className="px-5 md:px-[5%] max-w-6xl mx-auto mb-16">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-xs text-ink-3 mb-8">
            <Link href="/" className="hover:text-ink transition-colors">Home</Link>
            <span>/</span>
            <span className="text-ink-2">{page.classLabel} {page.subject}</span>
          </nav>

          <div className="flex flex-col lg:flex-row lg:items-center gap-10">
            <div className="flex-1">
              <span className={`inline-block text-xs font-bold uppercase tracking-[0.15em] px-3 py-1 rounded-full border mb-5 ${c.badge} ${c.border}`}>
                CBSE {page.classLabel} · {page.subject}
              </span>
              <h1
                className="font-syne text-3xl md:text-4xl lg:text-5xl font-extrabold text-ink leading-tight mb-4"
                data-speakable
              >
                {page.headline}
              </h1>
              <p className={`font-semibold text-lg mb-4 ${c.text}`}>
                {page.subheadline}
              </p>
              <p className="text-ink-2 text-[0.97rem] leading-relaxed mb-8 max-w-2xl">
                {page.description}
              </p>
              <a
                href="https://app.clearsteps.co.in"
                className="inline-block px-8 py-4 rounded-full font-syne font-extrabold text-white bg-ink hover:bg-primary hover:-translate-y-0.5 hover:shadow-[0_8px_24px_rgba(78,75,229,0.3)] transition-all text-sm"
              >
                Practice with AI Evaluation →
              </a>
            </div>

            {/* Stats cards */}
            <div className="grid grid-cols-2 gap-3 lg:w-72 flex-shrink-0">
              {[
                { label: "Theory Marks", value: `${page.theoryMarks}` },
                { label: "Practical Marks", value: `${page.practicalMarks}` },
                { label: "Exam Duration", value: page.examDuration },
                { label: "Total Chapters", value: `${page.chapters.length}` },
              ].map((stat) => (
                <div key={stat.label} className={`rounded-2xl p-4 border ${c.bg} ${c.border} text-center`}>
                  <p className={`font-syne text-2xl font-extrabold ${c.text}`}>{stat.value}</p>
                  <p className="text-xs text-ink-3 mt-0.5">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Chapter Breakdown ─────────────────────────────────────────── */}
        <section className="px-5 md:px-[5%] max-w-6xl mx-auto mb-16">
          <div className="flex items-center gap-3 mb-7">
            <h2 className="font-syne text-2xl font-extrabold text-ink" data-speakable>
              Chapter-Wise Marks Breakdown
            </h2>
            <div className="flex-1 h-px bg-ink/10" />
            <span className="text-xs text-ink-3">{totalChapterMarks} theory marks</span>
          </div>

          <div className="rounded-3xl border border-ink/10 overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-ink text-surface">
                    <th className="px-5 py-3.5 text-left font-semibold text-[0.82rem]">Chapter</th>
                    <th className="px-5 py-3.5 text-center font-semibold text-[0.82rem] whitespace-nowrap">Marks</th>
                    <th className="px-5 py-3.5 text-center font-semibold text-[0.82rem]">Difficulty</th>
                    <th className="px-5 py-3.5 text-left font-semibold text-[0.82rem] hidden md:table-cell">Key Topics</th>
                  </tr>
                </thead>
                <tbody>
                  {page.chapters.map((ch, i) => (
                    <tr key={i} className={`border-t border-ink/6 ${i % 2 === 0 ? "bg-surface" : "bg-surface-2"}`}>
                      <td className="px-5 py-3.5">
                        <span className="font-medium text-ink text-[0.88rem]">{ch.name}</span>
                      </td>
                      <td className="px-5 py-3.5 text-center">
                        <span className={`inline-block font-bold text-sm px-2.5 py-0.5 rounded-full ${c.badge}`}>
                          {ch.marks}
                        </span>
                      </td>
                      <td className="px-5 py-3.5 text-center">
                        <span className={`text-xs font-semibold px-2.5 py-0.5 rounded-full ${difficultyColor[ch.difficulty]}`}>
                          {ch.difficulty}
                        </span>
                      </td>
                      <td className="px-5 py-3.5 hidden md:table-cell">
                        <span className="text-ink-3 text-[0.82rem]">
                          {ch.keyTopics.slice(0, 3).join(" · ")}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* ── Important Topics ──────────────────────────────────────────── */}
        <section className="px-5 md:px-[5%] max-w-6xl mx-auto mb-16">
          <h2 className="font-syne text-2xl font-extrabold text-ink mb-7" data-speakable>
            Topics That Appear Every Year
          </h2>
          <div className="grid sm:grid-cols-2 gap-3">
            {page.importantTopics.map((topic, i) => (
              <div key={i} className={`flex items-start gap-3 p-4 rounded-2xl border ${c.bg} ${c.border}`}>
                <span className={`mt-0.5 font-syne font-extrabold text-sm ${c.text} w-5 flex-shrink-0`}>
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="text-ink-2 text-[0.9rem]">{topic}</span>
              </div>
            ))}
          </div>
        </section>

        {/* ── Study Strategy ────────────────────────────────────────────── */}
        <section className="px-5 md:px-[5%] max-w-6xl mx-auto mb-16">
          <h2 className="font-syne text-2xl font-extrabold text-ink mb-7" data-speakable>
            Study Strategy for 90+
          </h2>
          <div className="flex flex-col gap-4">
            {page.studyStrategy.map((step, i) => (
              <div key={i} className="flex gap-5 p-5 rounded-2xl border border-ink/10 bg-surface-2">
                <span className={`font-syne font-extrabold text-2xl ${c.text} flex-shrink-0 w-8`}>
                  {i + 1}
                </span>
                <p className="text-ink-2 text-[0.95rem] leading-relaxed">{step}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ── Related Study Tips ────────────────────────────────────────── */}
        {relatedArticles.length > 0 && (
          <section className="px-5 md:px-[5%] max-w-6xl mx-auto mb-16">
            <div className="flex items-center gap-3 mb-7">
              <h2 className="font-syne text-2xl font-extrabold text-ink">
                Related Study Tips
              </h2>
              <div className="flex-1 h-px bg-ink/10" />
              <Link href="/insights" className="text-xs font-semibold text-primary hover:text-ink transition-colors">
                All Study Tips →
              </Link>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {relatedArticles.map((article) => article && (
                <Link
                  key={article.slug}
                  href={`/insights/${article.slug}`}
                  className="group flex flex-col gap-3 p-5 rounded-2xl border border-ink/10 hover:border-ink/25 hover:shadow-sm transition-all bg-surface"
                >
                  <span className={`text-[0.7rem] font-bold uppercase tracking-wider ${c.text}`}>
                    {article.category}
                  </span>
                  <p className="font-syne font-bold text-[0.88rem] text-ink leading-snug group-hover:text-primary transition-colors flex-1">
                    {article.title}
                  </p>
                  <span className="text-xs text-ink-3">{article.readTime} min read</span>
                </Link>
              ))}
            </div>
          </section>
        )}

        {/* ── CTA ─────────────────────────────────────────────────────────── */}
        <section className="px-5 md:px-[5%] max-w-6xl mx-auto">
          <div className="rounded-3xl bg-ink text-surface p-10 md:p-14 text-center">
            <span className="text-xs font-bold uppercase tracking-[0.15em] text-surface/40 mb-3 block">
              From guide to practice
            </span>
            <h2 className="font-syne text-2xl md:text-3xl font-extrabold mb-4">
              Know what to study. Now practise it.
            </h2>
            <p className="text-surface/70 max-w-xl mx-auto mb-8 text-[0.95rem]">
              ClearSteps gives you CBSE {page.classLabel} {page.subject} mock papers,
              concept videos for every chapter, and AI evaluation against the
              real CBSE marking scheme.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <a
                href="https://app.clearsteps.co.in"
                className="px-8 py-4 rounded-full font-syne font-extrabold text-ink bg-surface hover:bg-primary hover:text-white transition-all"
              >
                Try ClearSteps Free →
              </a>
              <Link
                href="/insights"
                className="px-8 py-4 rounded-full font-syne font-extrabold text-surface border border-surface/25 hover:border-surface/60 transition-all"
              >
                Read More Study Tips
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
