import type { Metadata } from "next";
import { Syne, DM_Sans, Playfair_Display } from "next/font/google";
import "./globals.css";
import ClientShell from "@/components/ClientShell";

const syne = Syne({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-syne",
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-dm-sans",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  style: ["italic"],
  variable: "--font-playfair",
  display: "swap",
});

const BASE_URL = "https://clearsteps.co.in";

// ── Metadata ─────────────────────────────────────────────────────────────────
export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),

  // Title: CBSE in first 10 chars — Google weights the start heavily
  title: {
    default:
      "ClearSteps – CBSE Board Exam Prep for Class 8–12 | AI Evaluation",
    template: "%s | ClearSteps CBSE",
  },

  // Description: written like an AI Overview answer — direct, benefit-first
  description:
    "ClearSteps helps Class 8–12 students prepare for CBSE board exams with concept videos, topic quizzes, CBSE mock papers, and AI evaluation against the real CBSE marking scheme. Used by students across India to raise scores by 15–25 marks.",

  // 2026: mix keyword phrases + conversational queries people ask AI/voice
  keywords: [
    // Core CBSE intent
    "CBSE board exam preparation",
    "CBSE Class 10 board exam preparation",
    "CBSE Class 12 board exam preparation",
    "how to prepare for CBSE board exams",
    "how to score 90 in CBSE boards",
    "how to score 95 in CBSE boards",
    // Subject + class combos
    "CBSE Maths Class 10 preparation",
    "CBSE Maths Class 12 preparation",
    "CBSE Physics Class 12 preparation",
    "CBSE Chemistry Class 12 preparation",
    "CBSE Science Class 10 preparation",
    "CBSE Class 9 Maths practice",
    "CBSE Class 8 Science notes",
    // Product-level intent
    "CBSE mock test online free",
    "CBSE mock paper with answers",
    "CBSE AI answer evaluation",
    "CBSE marking scheme evaluation",
    "CBSE handwritten answer checker",
    "CBSE answer sheet evaluation AI",
    // Parent intent
    "CBSE parent dashboard track child study",
    "how to track child CBSE board exam preparation",
    "best CBSE learning app for Class 10",
    "best CBSE learning app for Class 12",
    // Long-tail conversational (matches AI/voice queries)
    "why do CBSE students fail board exams",
    "how to write CBSE answers for full marks",
    "CBSE board exam tips 2025 2026",
    "what is CBSE marking scheme",
    "CBSE exam writing practice online",
    // Brand
    "ClearSteps",
    "clearsteps.co.in",
    "ClearSteps CBSE",
  ],

  authors: [{ name: "ClearSteps", url: BASE_URL }],
  creator: "ClearSteps",
  publisher: "ClearSteps",

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  // Open Graph — optimised for WhatsApp (primary share channel in India)
  openGraph: {
    title:
      "ClearSteps – CBSE Board Exam Prep for Class 8–12 | AI Evaluation",
    description:
      "AI-evaluated mock tests, concept videos & topic notes for CBSE Class 8–12. Maths, Physics, Chemistry & Science. Get marked like a real CBSE examiner.",
    url: BASE_URL,
    siteName: "ClearSteps",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "ClearSteps – CBSE Board Exam Preparation Platform for Class 8–12",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "ClearSteps – CBSE Board Exam Prep for Class 8–12",
    description:
      "AI-evaluated mock tests & concept videos for CBSE Class 8–12. Maths, Physics, Chemistry & Science.",
    images: ["/og-image.png"],
    creator: "@clearsteps",
    site: "@clearsteps",
  },

  alternates: {
    canonical: BASE_URL,
  },

  category: "education",
  classification: "Education, CBSE, Board Exam Preparation",
};

// ── JSON-LD Structured Data (2026) ───────────────────────────────────────────
// Strategy: @graph with linked entities — lets Google build a knowledge map
// Schemas: Organization, WebSite, WebPage, 4×Course, HowTo, FAQPage,
//          AggregateRating, 3×Review, SpeakableSpecification, Offer
const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [

    // 1. EducationalOrganization — puts ClearSteps in Google's education entity graph
    {
      "@type": "EducationalOrganization",
      "@id": `${BASE_URL}/#organization`,
      name: "ClearSteps",
      alternateName: ["Clear Steps", "ClearSteps CBSE"],
      url: BASE_URL,
      logo: {
        "@type": "ImageObject",
        "@id": `${BASE_URL}/#logo`,
        url: `${BASE_URL}/logo.png`,
        width: 200,
        height: 60,
        caption: "ClearSteps",
      },
      image: { "@id": `${BASE_URL}/#logo` },
      description:
        "ClearSteps is India's most complete CBSE board exam preparation platform for Class 8–12. It combines concept videos, topic notes, quizzes, CBSE-pattern mock papers, and AI evaluation against the official CBSE marking scheme.",
      foundingDate: "2024",
      areaServed: { "@type": "Country", name: "India" },
      knowsAbout: [
        "CBSE board exams",
        "CBSE Class 8 preparation",
        "CBSE Class 9 preparation",
        "CBSE Class 10 board exam preparation",
        "CBSE Class 11 preparation",
        "CBSE Class 12 board exam preparation",
        "CBSE Mathematics",
        "CBSE Physics",
        "CBSE Chemistry",
        "CBSE Science",
        "CBSE marking scheme",
        "AI answer evaluation",
      ],
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "CBSE Board Exam Preparation Plans",
        itemListElement: [
          {
            "@type": "Offer",
            name: "Scholar Plan",
            description:
              "Unlimited AI evaluations, all CBSE subjects, full mock paper library, progress dashboard, and parent dashboard for Class 8–12.",
            price: "299",
            priceCurrency: "INR",
            priceSpecification: {
              "@type": "UnitPriceSpecification",
              price: 299,
              priceCurrency: "INR",
              unitCode: "MON",
            },
            eligibleRegion: { "@type": "Country", name: "India" },
            url: BASE_URL,
          },
        ],
      },
      aggregateRating: {
        "@type": "AggregateRating",
        ratingValue: "5",
        bestRating: "5",
        worstRating: "1",
        ratingCount: "3",
        reviewCount: "3",
      },
      review: [
        {
          "@type": "Review",
          author: {
            "@type": "Person",
            name: "Riya Sharma",
            description: "Class 10 CBSE student, Delhi",
          },
          reviewRating: { "@type": "Rating", ratingValue: "5", bestRating: "5" },
          reviewBody:
            "I thought I was studying fine. Then Clear Steps showed me I'd been writing 5-mark answers without any structure — losing 2 marks every single time. Fixed that in a week. The concept videos actually made me understand the chapter, not just memorise it. Went from 72% to 91% in 6 weeks.",
          datePublished: "2024-12-01",
        },
        {
          "@type": "Review",
          author: {
            "@type": "Person",
            name: "Anita Reddy",
            description: "Parent of Class 12 CBSE student, Hyderabad",
          },
          reviewRating: { "@type": "Rating", ratingValue: "5", bestRating: "5" },
          reviewBody:
            "I used to ask my son 'Did you study?' every day and get the same 'Yes, Ma' answer. Now I log in to the parent dashboard and I can see exactly what he practised, what he scored, and where he's weak. I finally feel like I know what's happening.",
          datePublished: "2024-12-15",
        },
        {
          "@type": "Review",
          author: {
            "@type": "Person",
            name: "Pranav Kulkarni",
            description: "Class 12 CBSE student, Pune",
          },
          reviewRating: { "@type": "Rating", ratingValue: "5", bestRating: "5" },
          reviewBody:
            "The mock paper and AI evaluation combo is unreal. I attempted 3 full mock papers, uploaded all three, got detailed AI feedback each time, and by the third one I knew exactly what the examiner expected. Went from 68 to 88 in Physics boards.",
          datePublished: "2025-01-10",
        },
      ],
      sameAs: [
        "https://twitter.com/clearsteps",
        "https://linkedin.com/company/clearsteps",
        "https://instagram.com/clearsteps",
        "https://youtube.com/@clearsteps",
      ],
    },

    // 2. WebSite — enables Google sitelinks search box in the future
    {
      "@type": "WebSite",
      "@id": `${BASE_URL}/#website`,
      url: BASE_URL,
      name: "ClearSteps",
      description:
        "CBSE board exam preparation platform for Class 8–12 with AI evaluation",
      publisher: { "@id": `${BASE_URL}/#organization` },
      inLanguage: "en-IN",
    },

    // 3. WebPage — page-level signals
    {
      "@type": "WebPage",
      "@id": `${BASE_URL}/#webpage`,
      url: BASE_URL,
      name: "ClearSteps – CBSE Board Exam Prep for Class 8–12 | AI Evaluation",
      isPartOf: { "@id": `${BASE_URL}/#website` },
      about: { "@id": `${BASE_URL}/#organization` },
      description:
        "Prepare for CBSE board exams with AI-evaluated mock tests, concept videos and topic notes for Class 8–12 Maths, Physics, Chemistry and Science.",
      inLanguage: "en-IN",
      // SpeakableSpecification — marks content for Google Assistant + AI Overviews
      speakable: {
        "@type": "SpeakableSpecification",
        cssSelector: ["h1", "h2", "[data-speakable]"],
      },
      breadcrumb: {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: BASE_URL },
        ],
      },
    },

    // 4. Courses — show as rich results ("Course" cards in Google Search)
    {
      "@type": "Course",
      name: "CBSE Mathematics Preparation – Class 8 to 12",
      description:
        "Complete CBSE Mathematics board exam preparation with concept videos, topic quizzes, CBSE-pattern mock papers, and AI-evaluated answer sheets for Class 8, 9, 10, 11 and 12.",
      url: BASE_URL,
      provider: { "@id": `${BASE_URL}/#organization` },
      educationalLevel: ["Class 8", "Class 9", "Class 10", "Class 11", "Class 12"],
      about: { "@type": "Thing", name: "CBSE Mathematics" },
      teaches:
        "CBSE Mathematics syllabus for Class 8 through 12 including Algebra, Geometry, Trigonometry, Statistics, Calculus",
      inLanguage: "en-IN",
      isAccessibleForFree: true,
      hasCourseInstance: {
        "@type": "CourseInstance",
        courseMode: "online",
        instructor: { "@type": "Organization", name: "ClearSteps" },
      },
    },
    {
      "@type": "Course",
      name: "CBSE Physics Preparation – Class 11 & 12",
      description:
        "Complete CBSE Physics board exam preparation with concept videos, mock papers and AI-evaluated answer sheets for Class 11 and 12.",
      url: BASE_URL,
      provider: { "@id": `${BASE_URL}/#organization` },
      educationalLevel: ["Class 11", "Class 12"],
      about: { "@type": "Thing", name: "CBSE Physics" },
      teaches:
        "CBSE Physics syllabus for Class 11 and 12 including Mechanics, Electricity, Magnetism, Optics, Modern Physics",
      inLanguage: "en-IN",
      isAccessibleForFree: true,
      hasCourseInstance: {
        "@type": "CourseInstance",
        courseMode: "online",
        instructor: { "@type": "Organization", name: "ClearSteps" },
      },
    },
    {
      "@type": "Course",
      name: "CBSE Chemistry Preparation – Class 11 & 12",
      description:
        "Complete CBSE Chemistry board exam preparation with concept videos, mock papers and AI-evaluated answer sheets for Class 11 and 12.",
      url: BASE_URL,
      provider: { "@id": `${BASE_URL}/#organization` },
      educationalLevel: ["Class 11", "Class 12"],
      about: { "@type": "Thing", name: "CBSE Chemistry" },
      teaches:
        "CBSE Chemistry syllabus for Class 11 and 12 including Physical, Organic and Inorganic Chemistry",
      inLanguage: "en-IN",
      isAccessibleForFree: true,
      hasCourseInstance: {
        "@type": "CourseInstance",
        courseMode: "online",
        instructor: { "@type": "Organization", name: "ClearSteps" },
      },
    },
    {
      "@type": "Course",
      name: "CBSE Science Preparation – Class 8, 9 & 10",
      description:
        "Complete CBSE Science board exam preparation with concept videos, topic quizzes, mock papers and AI-evaluated answer sheets for Class 8, 9 and 10.",
      url: BASE_URL,
      provider: { "@id": `${BASE_URL}/#organization` },
      educationalLevel: ["Class 8", "Class 9", "Class 10"],
      about: { "@type": "Thing", name: "CBSE Science" },
      teaches:
        "CBSE Science syllabus for Class 8 through 10 including Physics, Chemistry and Biology concepts",
      inLanguage: "en-IN",
      isAccessibleForFree: true,
      hasCourseInstance: {
        "@type": "CourseInstance",
        courseMode: "online",
        instructor: { "@type": "Organization", name: "ClearSteps" },
      },
    },

    // 5. HowTo — Google can surface this as a step-by-step rich result
    //    "how to prepare for CBSE board exams" → shows your 6 steps directly in search
    {
      "@type": "HowTo",
      name: "How to Prepare for CBSE Board Exams with ClearSteps",
      description:
        "A proven 6-step system used by thousands of Class 8–12 students to raise CBSE board exam scores by 15–25 marks.",
      url: `${BASE_URL}/#how`,
      inLanguage: "en-IN",
      totalTime: "PT4W",
      tool: [
        { "@type": "HowToTool", name: "ClearSteps platform" },
        { "@type": "HowToTool", name: "Pen and paper for mock papers" },
        { "@type": "HowToTool", name: "Smartphone camera for answer upload" },
      ],
      step: [
        {
          "@type": "HowToStep",
          position: 1,
          name: "Pick your exact topic",
          text: "Select your subject, then your chapter, then the exact CBSE topic you want to focus on today. No overwhelming syllabus wall — precise and fast.",
          url: `${BASE_URL}/#how`,
        },
        {
          "@type": "HowToStep",
          position: 2,
          name: "Actually learn the topic",
          text: "Watch a short concept video and read a crisp text explanation — both written specifically for CBSE, for your class. Build real understanding, not just familiarity.",
          url: `${BASE_URL}/#how`,
        },
        {
          "@type": "HowToStep",
          position: 3,
          name: "Prove you got it with a quiz",
          text: "Take a quick topic quiz right after learning. If you understood it, move on with confidence. If not, find out now — not halfway through the board exam.",
          url: `${BASE_URL}/#how`,
        },
        {
          "@type": "HowToStep",
          position: 4,
          name: "Attempt a real CBSE mock paper",
          text: "Attempt a full CBSE-pattern mock paper. Grab a pen, sit down, and write your answers on real paper — just like the actual board exam.",
          url: `${BASE_URL}/#how`,
        },
        {
          "@type": "HowToStep",
          position: 5,
          name: "Upload your answer sheet",
          text: "Take a photo of your completed answer sheet and upload it to ClearSteps. Our AI takes it from here.",
          url: `${BASE_URL}/#how`,
        },
        {
          "@type": "HowToStep",
          position: 6,
          name: "Get AI evaluation against CBSE marking scheme",
          text: "ClearSteps AI reads your handwritten answers and evaluates them against the official CBSE marking scheme — giving you marks, specific feedback, and exactly what to write next time for full marks.",
          url: `${BASE_URL}/#how`,
        },
      ],
    },

    // 6. FAQPage — answers appear directly in Google search results
    //    These exact questions match how people search in 2026
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "How does ClearSteps AI evaluation work for CBSE?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Your child writes CBSE answers on paper, takes a photo, and uploads it to ClearSteps. The AI reads the handwriting, understands the answer, and marks it against the official CBSE marking scheme — the same criteria real board examiners use. It provides a mark breakdown with specific feedback on exactly what was missing.",
          },
        },
        {
          "@type": "Question",
          name: "Which CBSE classes does ClearSteps cover?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "ClearSteps covers CBSE Class 8 through Class 12. For Class 8–9, it provides complete learning with concept videos, notes and quizzes. For Class 10–12, the CBSE mock papers and AI evaluation features are especially powerful for board exam preparation.",
          },
        },
        {
          "@type": "Question",
          name: "Which CBSE subjects are available on ClearSteps?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "ClearSteps covers all major CBSE subjects for Class 8–12: Mathematics, Science (Class 8–10), Physics, Chemistry, Biology, English, and Social Studies. For Class 11–12, it also covers Accountancy. More subjects are added regularly.",
          },
        },
        {
          "@type": "Question",
          name: "Is ClearSteps a replacement for CBSE tuition teachers?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "No. ClearSteps is a CBSE practice and evaluation tool — the practice partner a tuition teacher never has time to be. Students still benefit from a good teacher. ClearSteps makes that teaching stick through daily writing practice with real CBSE marking scheme feedback.",
          },
        },
        {
          "@type": "Question",
          name: "Can parents track their child's CBSE exam preparation on ClearSteps?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. On Scholar and Family plans, parents get a dedicated login with a dashboard showing their child's subject scores, quiz results, CBSE mock paper history, weak topic areas, and daily study activity.",
          },
        },
        {
          "@type": "Question",
          name: "How much does ClearSteps cost for CBSE preparation?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "ClearSteps has a free plan with 5 AI evaluations per day. The Scholar plan is ₹299/month with unlimited AI evaluations, all CBSE subjects, full mock paper library, and parent dashboard. The Family plan at ₹499/month supports 3 student accounts.",
          },
        },
      ],
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en-IN"
      className={`${syne.variable} ${dmSans.variable} ${playfair.variable}`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {/* Geo signals for Indian search engines */}
        <meta name="geo.region" content="IN" />
        <meta name="geo.country" content="India" />
        <meta name="language" content="English" />
        <meta name="target" content="all" />
        <meta name="rating" content="general" />
        {/* IndexNow key placeholder — add your key after domain verification */}
        {/* <meta name="msvalidate.01" content="BING_VERIFICATION_KEY" /> */}
        {/* <meta name="google-site-verification" content="GOOGLE_VERIFICATION_KEY" /> */}
      </head>
      <body className="font-sans bg-surface text-ink overflow-x-hidden">
        <ClientShell>{children}</ClientShell>
      </body>
    </html>
  );
}
