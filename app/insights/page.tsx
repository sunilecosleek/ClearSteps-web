import type { Metadata } from "next";
import { articles } from "@/lib/insights";
import InsightsHub from "./_components/InsightsHub";

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

// JSON-LD — CollectionPage schema
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

export default function InsightsPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <InsightsHub />
    </>
  );
}
