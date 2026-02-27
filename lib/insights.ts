// ── Types ────────────────────────────────────────────────────────────────────

export type Category =
  | "Maths Tips"
  | "Science Tricks"
  | "Physics Tips"
  | "Chemistry Tips"
  | "Revision Strategies"
  | "Board Exam Hacks"
  | "Parent Guide";

export const CATEGORY_COLOR: Record<Category, string> = {
  "Maths Tips": "amber",
  "Science Tricks": "teal",
  "Physics Tips": "sky",
  "Chemistry Tips": "coral",
  "Revision Strategies": "green",
  "Board Exam Hacks": "violet",
  "Parent Guide": "rose",
};

// Content block types — each maps to a distinct render component
export type Block =
  | { t: "p"; v: string }
  | { t: "h2"; v: string }
  | { t: "h3"; v: string }
  | { t: "ul"; v: string[] }
  | { t: "ol"; v: string[] }
  | { t: "tip"; v: string }
  | { t: "stat"; label: string; v: string }
  | { t: "table"; headers: string[]; rows: string[][] };

export interface Article {
  slug: string;
  title: string;
  description: string;
  category: Category;
  classTarget: string; // "Class 8–10" | "Class 11–12" | "All Classes"
  readTime: number;    // minutes
  publishDate: string; // ISO date
  featured: boolean;
  keywords: string[];
  content: Block[];
}

// ── Articles ─────────────────────────────────────────────────────────────────

export const articles: Article[] = [
  // ── 1 ──────────────────────────────────────────────────────────────────────
  {
    slug: "how-cbse-marking-scheme-works",
    title: "How the CBSE Marking Scheme Works (And Why Most Students Don't Know)",
    description:
      "The CBSE marking scheme defines exactly how every mark is awarded. Most students never read it. Understanding it is the single fastest way to improve your board exam score.",
    category: "Board Exam Hacks",
    classTarget: "All Classes",
    readTime: 5,
    publishDate: "2025-01-15",
    featured: true,
    keywords: [
      "what is CBSE marking scheme",
      "how CBSE papers are evaluated",
      "CBSE answer key format",
      "CBSE examiner keywords",
      "CBSE marks allocation",
      "how to score full marks CBSE",
    ],
    content: [
      {
        t: "p",
        v: "Most CBSE students spend months studying the textbook. Very few study how their paper will actually be marked. That gap — between what you know and how examiners evaluate it — is where most board exam marks are lost.",
      },
      {
        t: "h2",
        v: "What Is the CBSE Marking Scheme?",
      },
      {
        t: "p",
        v: "The CBSE marking scheme is the official document that every board examiner uses. It lists exactly which keywords, points, and sub-parts must be present in a student's answer for marks to be awarded. It is published on the official CBSE website after every board exam — but most students never read it.",
      },
      {
        t: "h2",
        v: "How Marks Are Allocated by Question Type",
      },
      {
        t: "table",
        headers: ["Question Type", "Marks", "What examiners look for"],
        rows: [
          ["Very Short Answer", "1 mark", "One specific keyword or fact — nothing more"],
          ["Short Answer I", "2 marks", "Two distinct points, or one point with brief explanation"],
          ["Short Answer II", "3 marks", "Three numbered points, or diagram + two points"],
          ["Long Answer", "5 marks", "Intro + 3–4 key points + diagram + conclusion"],
        ],
      },
      {
        t: "h2",
        v: "The Keyword Rule That Most Students Miss",
      },
      {
        t: "p",
        v: "CBSE examiners are trained to look for specific keywords. Writing the correct concept in your own words often does not earn full marks. If the marking scheme requires 'resistance remains constant at constant temperature' and you write 'resistance does not change when the wire is not heated', you may lose the mark — even though the meaning is identical.",
      },
      {
        t: "tip",
        v: "After finishing each chapter, find CBSE's previous year solutions and model answers. Highlight the specific keywords used in each answer. Use those exact keywords when you practice writing.",
      },
      {
        t: "h2",
        v: "How a 5-Mark Answer Is Actually Graded",
      },
      {
        t: "ol",
        v: [
          "Examiner spends 2–3 minutes per long answer",
          "They scan for numbered or bulleted points first",
          "They check for the mandatory diagram (if applicable to the topic)",
          "They look for specific keywords in each point",
          "They award marks per point — even if the final answer has errors",
        ],
      },
      {
        t: "h2",
        v: "Why Step Marks Are Critical in Maths and Physics",
      },
      {
        t: "p",
        v: "In Maths and Physics, marks are awarded for each step in a derivation or calculation — even if the final answer is wrong. A student who writes three correct steps and makes one arithmetic error at the end typically scores 3 out of 5. This is why showing every step of your working is non-negotiable.",
      },
      {
        t: "stat",
        label: "Average time per answer sheet review",
        v: "90 seconds",
      },
      {
        t: "h2",
        v: "How to Practice Using This Knowledge",
      },
      {
        t: "ul",
        v: [
          "After every mock paper, compare your answers to the CBSE marking scheme format for that subject",
          "Build a keywords list per chapter — the specific terms CBSE uses in model answers",
          "Practice writing in numbered points, never prose paragraphs for answers above 1 mark",
          "Use ClearSteps AI evaluation to check if your answers hit the marking scheme criteria before exam day",
        ],
      },
    ],
  },

  // ── 2 ──────────────────────────────────────────────────────────────────────
  {
    slug: "score-90-cbse-class-10-maths",
    title: "How to Score 90+ in CBSE Class 10 Maths: A Complete Board Exam Guide",
    description:
      "Class 10 Maths is the only CBSE subject where 100/100 is genuinely achievable. Here is the chapter-wise strategy, common mistakes to avoid, and the mock paper routine that works.",
    category: "Maths Tips",
    classTarget: "Class 8–10",
    readTime: 6,
    publishDate: "2025-01-22",
    featured: false,
    keywords: [
      "how to score 90 in CBSE Class 10 Maths",
      "CBSE Class 10 Maths board exam preparation",
      "CBSE Class 10 Maths important chapters",
      "CBSE Maths tips Class 10",
      "how to get full marks in CBSE Maths",
      "CBSE Class 10 Maths chapter wise marks",
    ],
    content: [
      {
        t: "p",
        v: "Class 10 Maths is unique among board exam subjects: it is the only one where 100/100 is genuinely achievable for most students. There is no subjectivity — every mark has a defined answer. Students who score 90+ are not necessarily smarter. They simply understand what loses marks and how to avoid it.",
      },
      {
        t: "h2",
        v: "Why Class 10 Maths Students Lose Marks",
      },
      {
        t: "ul",
        v: [
          "Skipping steps in calculations — step marks are awarded even when the final answer is wrong",
          "Missing units — writing '25' when the answer should be '25 cm²' costs the mark",
          "Unlabelled diagrams in geometry questions",
          "Not writing the formula before substituting values",
          "Spending too long on difficult questions and leaving easy 1-mark questions incomplete",
        ],
      },
      {
        t: "h2",
        v: "Chapter-Wise Scoring Priority",
      },
      {
        t: "table",
        headers: ["Chapter", "Marks", "Difficulty to master"],
        rows: [
          ["Real Numbers", "6", "Easy"],
          ["Polynomials", "6", "Easy"],
          ["Quadratic Equations", "8", "Medium"],
          ["Arithmetic Progressions", "5", "Medium"],
          ["Triangles", "6", "Medium"],
          ["Coordinate Geometry", "6", "Easy"],
          ["Trigonometry (+ Applications)", "12", "Medium"],
          ["Circles", "5", "Easy"],
          ["Surface Area and Volume", "10", "Medium"],
          ["Statistics and Probability", "11", "Easy"],
        ],
      },
      {
        t: "tip",
        v: "Statistics, Probability, Real Numbers, and Circles are the easiest marks in the paper. Together they carry 28+ marks with relatively low preparation effort. Master these chapters first.",
      },
      {
        t: "h2",
        v: "The Three Types of Marks in CBSE Maths",
      },
      {
        t: "ol",
        v: [
          "Formula marks — awarded just for writing the correct formula, even before solving",
          "Step marks — awarded for each correct step even if the final answer is wrong",
          "Construction marks — awarded for accurate, correctly labelled geometric diagrams",
        ],
      },
      {
        t: "h2",
        v: "The Mock Paper Strategy That Works",
      },
      {
        t: "p",
        v: "The single most effective strategy for scoring 90+ in Class 10 Maths is timed mock papers followed by detailed review. Not untimed practice. Not reading solutions. A full mock paper timed to 3 hours, followed by careful checking of every wrong answer against the step-by-step solution.",
      },
      {
        t: "ol",
        v: [
          "Attempt one full mock paper every week from 8 weeks before the exam",
          "After each mock, write down every type of error — missed step, wrong unit, skipped formula",
          "Do not re-attempt the same question — understand the error type and move on",
          "In the final 2 weeks, only attempt mock papers — no new topic studying",
        ],
      },
      {
        t: "h2",
        v: "The Day Before the Exam",
      },
      {
        t: "p",
        v: "Do not study new topics the day before. Instead: revise your formula list, re-check diagrams, and sleep 8 hours. Your brain consolidates learning during sleep. A well-rested brain in the exam is worth more than two extra hours of studying the night before.",
      },
    ],
  },

  // ── 3 ──────────────────────────────────────────────────────────────────────
  {
    slug: "why-cbse-students-lose-marks",
    title: "Why CBSE Students Lose Marks Even When They Know the Answer",
    description:
      "Thousands of CBSE students score 15–20 marks below their potential every year — not because of lack of knowledge, but because of how they write. Here are the 5 real reasons.",
    category: "Board Exam Hacks",
    classTarget: "All Classes",
    readTime: 4,
    publishDate: "2025-02-01",
    featured: false,
    keywords: [
      "why CBSE students lose marks",
      "CBSE board exam marks loss",
      "CBSE answer writing mistakes",
      "how to avoid losing marks CBSE",
      "CBSE exam common mistakes",
      "CBSE board exam writing tips",
    ],
    content: [
      {
        t: "p",
        v: "A pattern plays out in thousands of CBSE board papers every year: a student knows the topic, understands the concept, and has studied for weeks — and still loses 15–20 marks. Not because of lack of knowledge. Because of how they write.",
      },
      {
        t: "h2",
        v: "Reason 1: Writing in Your Own Words Instead of CBSE Keywords",
      },
      {
        t: "p",
        v: "CBSE examiners are given a marking scheme with specific keywords and phrases. They are trained to award marks when these keywords are present. When a student explains Newton's Second Law as 'force is how fast something speeds up times how heavy it is', they may understand the concept — but the examiner cannot award marks if the expected keywords are absent.",
      },
      {
        t: "tip",
        v: "Build a keyword bank for each chapter. Every time you encounter a definition or explanation in the textbook, highlight the key scientific terms. These exact words unlock marks.",
      },
      {
        t: "h2",
        v: "Reason 2: No Structure in Long Answers",
      },
      {
        t: "p",
        v: "A CBSE examiner reviews 30–40 papers per day. An answer written as a dense paragraph of 8 lines gets scanned in 15 seconds. An answer written as 4 clearly numbered points with a diagram gets reviewed properly. Structure does not just look better — it earns more marks because each point can be identified and ticked off.",
      },
      {
        t: "h2",
        v: "Reason 3: Skipping Diagrams",
      },
      {
        t: "p",
        v: "In Science subjects, diagrams are not decorative — they carry marks. A question asking you to describe how a reflex arc works typically allocates 1–2 marks specifically for a labelled diagram. Students who write a perfect answer in words but skip the diagram lose those marks unconditionally.",
      },
      {
        t: "ul",
        v: [
          "Physics: Circuit diagrams, ray diagrams, force diagrams",
          "Chemistry: Electrolysis apparatus, test tube setups, reaction flow diagrams",
          "Biology: Organ diagrams, cell diagrams, process flow diagrams",
          "Maths: Geometry constructions, coordinate system graphs",
        ],
      },
      {
        t: "h2",
        v: "Reason 4: Passive Studying Instead of Active Writing Practice",
      },
      {
        t: "p",
        v: "Reading notes feels like studying. Highlighting a textbook feels productive. But board exams test writing under pressure — not passive recognition. The gap between knowing an answer and writing it correctly in 4 minutes under exam conditions is significant. The only way to close it is by practising writing, not reading.",
      },
      {
        t: "stat",
        label: "Score improvement with regular written mock practice",
        v: "15–25 marks",
      },
      {
        t: "h2",
        v: "Reason 5: Time Mismanagement in the Exam",
      },
      {
        t: "p",
        v: "Many students spend 40 minutes on a 5-mark question they are unsure about, then leave 1-mark questions incomplete at the end. The right strategy: attempt all questions you know first, mark difficult ones, then return. One completed 1-mark question is worth more than extra time on a 5-mark question where you were already going to get partial credit.",
      },
    ],
  },

  // ── 4 ──────────────────────────────────────────────────────────────────────
  {
    slug: "cbse-class-12-physics-important-topics",
    title: "CBSE Class 12 Physics: Topics That Appear Every Year in Board Exams",
    description:
      "Based on analysis of 10 years of CBSE Class 12 Physics papers, these are the topics and derivations that appear every single year — and how to master them.",
    category: "Physics Tips",
    classTarget: "Class 11–12",
    readTime: 5,
    publishDate: "2025-02-10",
    featured: false,
    keywords: [
      "CBSE Class 12 Physics important topics",
      "CBSE Class 12 Physics board exam preparation",
      "CBSE Physics important derivations Class 12",
      "CBSE Class 12 Physics chapter wise marks",
      "how to score 90 in CBSE Physics",
      "CBSE Physics board exam tips",
    ],
    content: [
      {
        t: "p",
        v: "Class 12 Physics is the most feared CBSE board subject. The syllabus is large, derivations are long, and the marking is unforgiving. But if you study strategically, a majority of the marks come from a handful of topics that appear in some form every single year.",
      },
      {
        t: "h2",
        v: "Unit-Wise Marks Breakdown",
      },
      {
        t: "table",
        headers: ["Unit", "Topics Covered", "Marks"],
        rows: [
          ["Unit I", "Electric Charges & Fields, Electrostatic Potential", "8"],
          ["Unit II", "Current Electricity", "7"],
          ["Unit III", "Magnetic Effects of Current & Magnetism", "8"],
          ["Unit IV", "Electromagnetic Induction & AC", "8"],
          ["Unit V", "Electromagnetic Waves", "3"],
          ["Unit VI", "Optics", "14"],
          ["Unit VII", "Dual Nature of Radiation", "4"],
          ["Unit VIII", "Atoms & Nuclei", "6"],
          ["Unit IX", "Electronic Devices (Semiconductors)", "7"],
        ],
      },
      {
        t: "tip",
        v: "Optics alone carries 14 marks — more than any other unit. Master all ray diagram types (concave/convex mirrors and lenses) and the key derivations here. Every hour spent on Optics has the highest marks-per-hour return in the entire syllabus.",
      },
      {
        t: "h2",
        v: "Topics That Have Appeared Every Year (2015–2024 Analysis)",
      },
      {
        t: "ol",
        v: [
          "Derivation of electric field using Gauss's Law — Electric Charges chapter",
          "Ohm's Law, resistivity, and drift velocity — Current Electricity",
          "Biot-Savart Law and its application to a circular loop — Magnetism",
          "Faraday's Laws of Electromagnetic Induction — EMI chapter",
          "Mirror formula and lens formula with ray diagram and numerical — Optics",
          "Photoelectric effect — Einstein's equation and graph interpretation",
          "Truth tables for AND, OR, NOT, NAND, NOR logic gates — Semiconductors",
        ],
      },
      {
        t: "h2",
        v: "High-Value Derivations to Master First",
      },
      {
        t: "p",
        v: "CBSE regularly asks 5-mark derivation questions. These are fully predictable — the same derivations appear year after year. Mastering the following will guarantee 15–20 derivation marks in the exam:",
      },
      {
        t: "ul",
        v: [
          "Electric potential energy of a system of charges",
          "Expression for torque on a current-carrying loop in a magnetic field",
          "Derivation of mirror formula",
          "Derivation of lens maker's equation",
          "Einstein's photoelectric equation",
          "Expression for de Broglie wavelength",
        ],
      },
      {
        t: "h2",
        v: "How to Approach Physics Numericals",
      },
      {
        t: "p",
        v: "Physics numericals follow a strict format that CBSE examiners expect. Always: (1) list the given values, (2) write the formula, (3) substitute and solve step by step, (4) write the final answer with correct units. Examiners award step marks — a wrong final answer with correct steps and formula still earns 3 out of 5.",
      },
      {
        t: "h2",
        v: "The 6-Week CBSE Physics Preparation Plan",
      },
      {
        t: "ol",
        v: [
          "Week 1–2: Complete Optics and Electricity with all key derivations",
          "Week 3: Complete Magnetism, EMI, and Modern Physics",
          "Week 4: First full mock paper — review every wrong answer thoroughly",
          "Week 5: Second mock paper — focus revision on weak chapters only",
          "Week 6: Revise all derivations and diagrams from memory. No new topics.",
        ],
      },
    ],
  },

  // ── 5 ──────────────────────────────────────────────────────────────────────
  {
    slug: "30-day-cbse-board-exam-plan",
    title: "The 30-Day CBSE Board Exam Preparation Plan That Actually Works",
    description:
      "A week-by-week CBSE board exam preparation plan designed around mock papers and feedback — not passive reading. For Class 10 and Class 12 students.",
    category: "Revision Strategies",
    classTarget: "All Classes",
    readTime: 6,
    publishDate: "2025-02-18",
    featured: false,
    keywords: [
      "CBSE board exam 30 day preparation plan",
      "how to prepare for CBSE boards in 1 month",
      "CBSE board exam last minute preparation",
      "CBSE revision plan Class 10",
      "CBSE revision plan Class 12",
      "30 days CBSE board exam study plan",
    ],
    content: [
      {
        t: "p",
        v: "Thirty days before the board exam, the most important thing is not studying more — it is studying the right way. The students who make the biggest score improvements in the final month are not the ones who study the most hours. They are the ones who practise writing answers and get feedback on what to fix.",
      },
      {
        t: "h2",
        v: "The Core Principle: Practice Beats Passive Study",
      },
      {
        t: "p",
        v: "After a certain point — for most students, 4–6 weeks before the exam — additional reading brings diminishing returns. The knowledge is in your head. What is missing is the skill of transferring that knowledge onto paper, in the right format, within the time limit. That skill is only built by mock papers — not by reading.",
      },
      {
        t: "h2",
        v: "Week 1: Foundation Review (Days 1–7)",
      },
      {
        t: "ul",
        v: [
          "Revise all chapters once — focus on key concepts, definitions, and formulas",
          "Create a keyword sheet per subject with terms and definitions in CBSE language",
          "Identify your 3 weakest chapters per subject",
          "Take one topic quiz per chapter to confirm understanding",
          "Do not attempt full mock papers yet — complete the foundation pass first",
        ],
      },
      {
        t: "h2",
        v: "Week 2: Active Writing Practice (Days 8–14)",
      },
      {
        t: "ul",
        v: [
          "Start writing answers from memory — not copying from textbook",
          "Focus on your 3 weak chapters per subject first",
          "Attempt one half-paper (Section B and C) per subject",
          "Compare your written answers to the CBSE marking scheme format",
          "Build a mistakes list — write down every type of error you make",
        ],
      },
      {
        t: "tip",
        v: "Week 2 is where the real improvement happens. Most students only start writing practice in Week 4 — too late to change habits. Starting in Week 2 gives you two extra weeks to correct what you are doing wrong.",
      },
      {
        t: "h2",
        v: "Week 3: Full Mock Papers (Days 15–21)",
      },
      {
        t: "ol",
        v: [
          "Attempt one full, timed mock paper every two days",
          "Sit at a desk, use the same pen you will use in the exam, time yourself strictly",
          "Get AI evaluation on your answers — review the feedback the same day",
          "Fix the top 3 issues from each mock before attempting the next one",
          "Never attempt a new mock without fully reviewing the previous one",
        ],
      },
      {
        t: "h2",
        v: "Week 4: Consolidation (Days 22–30)",
      },
      {
        t: "ul",
        v: [
          "Revise your keyword sheet every morning — takes 15 minutes",
          "Revise all key diagrams and derivations from memory — write them out",
          "Attempt one final mock paper on Day 25",
          "Days 26–28: No new topics. Revision of weak areas only.",
          "Day before exam: Review keywords, check diagrams, sleep 8 hours",
        ],
      },
      {
        t: "h2",
        v: "What Not to Do in the Last 30 Days",
      },
      {
        t: "ul",
        v: [
          "Do not start a chapter you have never studied before",
          "Do not try to memorise every page — study selectively by chapter weight",
          "Do not skip mock papers because they feel difficult — that difficulty is the point",
          "Do not pull all-nighters — sleep deprivation reduces recall significantly",
          "Do not compare your preparation to classmates — compare only to your previous mock scores",
        ],
      },
    ],
  },

  // ── 6 ──────────────────────────────────────────────────────────────────────
  {
    slug: "cbse-answer-writing-format",
    title: "The Exact Answer Format CBSE Examiners Want for Every Mark Value",
    description:
      "CBSE board examiners make rapid decisions based on answer format. This is the exact structure — for 1-mark, 2-mark, 3-mark, and 5-mark answers — that consistently earns full marks.",
    category: "Board Exam Hacks",
    classTarget: "All Classes",
    readTime: 5,
    publishDate: "2025-02-25",
    featured: false,
    keywords: [
      "CBSE answer writing format",
      "CBSE answer writing tips for full marks",
      "how to write CBSE answers",
      "CBSE 5 mark answer format",
      "CBSE board exam answer structure",
      "how to write answers in CBSE board exam",
    ],
    content: [
      {
        t: "p",
        v: "The CBSE board exam is not just a test of knowledge — it is a test of communication. An examiner reviewing 40 papers a day makes rapid decisions based on answer structure. Students who write in the format examiners expect consistently score higher than students who write the same content in the wrong format.",
      },
      {
        t: "h2",
        v: "Format for 1-Mark Answers",
      },
      {
        t: "p",
        v: "One sentence. One keyword. Nothing more. If the question is 'What is the SI unit of resistance?', write: 'The SI unit of resistance is Ohm (Ω).' Anything beyond this wastes your time and adds nothing to your mark.",
      },
      {
        t: "h2",
        v: "Format for 2-Mark Answers",
      },
      {
        t: "ol",
        v: [
          "Write exactly two clearly distinct points — numbered",
          "Each point should be one sentence",
          "Do not write prose — numbered points only",
          "If the topic involves a formula, include it as one of the two points",
        ],
      },
      {
        t: "h2",
        v: "Format for 3-Mark Answers",
      },
      {
        t: "ol",
        v: [
          "Write three numbered points",
          "If a diagram is associated with the topic, draw and label it — this often earns 1 of the 3 marks",
          "Include the relevant formula or definition in point 1",
          "Keep each point to 1–2 sentences maximum",
        ],
      },
      {
        t: "tip",
        v: "For 3-mark Science answers, a labelled diagram is almost always worth 1 mark. Students who skip it are giving away a free mark every single time.",
      },
      {
        t: "h2",
        v: "Format for 5-Mark Answers",
      },
      {
        t: "p",
        v: "The examiner spends 3–4 minutes on a 5-mark answer. The format that consistently earns full marks:",
      },
      {
        t: "ol",
        v: [
          "Opening line: one sentence that directly answers the core question",
          "Points 1–3: three distinct, numbered explanatory points",
          "Diagram: labelled diagram wherever the topic is visual (Physics, Chemistry, Biology)",
          "Closing line: brief conclusion or statement of result",
        ],
      },
      {
        t: "h2",
        v: "What to Never Write",
      },
      {
        t: "ul",
        v: [
          "Dense prose paragraphs for any answer above 1 mark",
          "Filler phrases like 'As we know...' or 'The answer to this question is...'",
          "A repetition of the question before answering",
          "Diagrams without labels — an unlabelled diagram earns 0 marks for the diagram component",
          "Answers much longer than the marks justify — a 2-mark answer taking 15 lines wastes time",
        ],
      },
      {
        t: "h2",
        v: "Time Allocation for a 3-Hour Paper",
      },
      {
        t: "table",
        headers: ["Section", "Questions", "Time to allocate"],
        rows: [
          ["1-mark questions (MCQ/VSA)", "20 questions", "20 minutes"],
          ["2-mark short answers", "5 questions", "15 minutes"],
          ["3-mark short answers", "7 questions", "35 minutes"],
          ["5-mark long answers", "3 questions", "30 minutes"],
          ["Buffer and revision", "—", "20 minutes"],
        ],
      },
    ],
  },
];

// ── Helper functions ──────────────────────────────────────────────────────────

export function getArticleBySlug(slug: string): Article | undefined {
  return articles.find((a) => a.slug === slug);
}

export function getRelatedArticles(slug: string, count = 2): Article[] {
  const article = getArticleBySlug(slug);
  if (!article) return articles.slice(0, count);
  return articles
    .filter((a) => a.slug !== slug)
    .sort((a, b) => {
      const aScore =
        (a.category === article.category ? 2 : 0) +
        (a.classTarget === article.classTarget ? 1 : 0);
      const bScore =
        (b.category === article.category ? 2 : 0) +
        (b.classTarget === article.classTarget ? 1 : 0);
      return bScore - aScore;
    })
    .slice(0, count);
}

export const ALL_CATEGORIES = Array.from(
  new Set(articles.map((a) => a.category))
) as Category[];
