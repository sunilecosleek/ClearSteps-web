import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { articles, getArticleBySlug, getRelatedArticles } from "@/lib/insights";
import ArticleView from "../_components/ArticleView";

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

// ── Page ──────────────────────────────────────────────────────────────────────
export default function ArticlePage({ params }: { params: { slug: string } }) {
  const article = getArticleBySlug(params.slug);
  if (!article) notFound();

  const related = getRelatedArticles(params.slug, 2);

  // JSON-LD: BlogPosting + BreadcrumbList
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
        author: { "@type": "Organization", name: "ClearSteps", url: BASE_URL },
        publisher: {
          "@type": "EducationalOrganization",
          name: "ClearSteps",
          url: BASE_URL,
          logo: { "@type": "ImageObject", url: `${BASE_URL}/logo.png` },
        },
        isPartOf: { "@type": "Blog", name: "CBSE Insights", url: `${BASE_URL}/insights` },
        about: { "@type": "Thing", name: "CBSE Board Exam Preparation" },
        audience: {
          "@type": "EducationalAudience",
          educationalRole: "student",
          audienceType: `CBSE ${article.classTarget} students`,
        },
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

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <ArticleView article={article} related={related} />
    </>
  );
}
