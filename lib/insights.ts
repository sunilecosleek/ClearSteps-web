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

  // ── 7 ──────────────────────────────────────────────────────────────────────
  {
    slug: "cbse-class-12-maths-board-exam-strategy",
    title: "CBSE Class 12 Maths: Chapter-Wise Strategy to Score 95+",
    description:
      "Most Class 12 Maths toppers follow the same chapter-wise strategy. Here's exactly how to allocate time, which chapters to prioritise, and how to guarantee full marks on the sections that matter most.",
    category: "Maths Tips",
    classTarget: "Class 11–12",
    readTime: 7,
    publishDate: "2025-02-10",
    featured: false,
    keywords: [
      "CBSE Class 12 Maths board exam strategy",
      "how to score 95 in Class 12 Maths CBSE",
      "Class 12 Maths important chapters CBSE",
      "CBSE Class 12 Maths chapter wise marks",
      "Class 12 board exam Maths tips",
      "CBSE 12 Maths calculus strategy",
    ],
    content: [
      {
        t: "p",
        v: "Class 12 Maths is the subject that separates 85% students from 95%+ students. The gap is rarely about intelligence — it's almost always about which chapters you practice most and how you structure your exam attempt.",
      },
      {
        t: "h2",
        v: "Chapter-Wise Marks Distribution You Must Know",
      },
      {
        t: "table",
        headers: ["Unit", "Chapters", "Marks"],
        rows: [
          ["Calculus", "Continuity, Differentiability, Applications, Integrals, Differential Equations", "44"],
          ["Algebra", "Matrices, Determinants, Relations & Functions", "13"],
          ["Vectors & 3D", "Vectors, Three Dimensional Geometry", "17"],
          ["Linear Programming", "Linear Programming", "5"],
          ["Probability", "Probability", "8"],
        ],
      },
      {
        t: "p",
        v: "Calculus alone is worth 44 out of 80 marks. This is the most important insight in Class 12 Maths preparation. If you master Calculus — especially Integrals and Applications of Derivatives — you've secured more than half the paper.",
      },
      {
        t: "h2",
        v: "The Chapter Priority Order for Maximum Marks",
      },
      {
        t: "ol",
        v: [
          "Integrals (definite + indefinite) — highest marks, most predictable questions. Practice 5 standard integral types daily.",
          "Applications of Derivatives — maxima/minima and rate of change appear every year. Learn the 4-step method.",
          "Matrices and Determinants — formulaic, high scoring. One week of focused practice is enough.",
          "Probability — bayes theorem and conditional probability are repeated yearly. Solve all NCERT examples.",
          "Vectors and 3D Geometry — learn the formulas, do not skip. 17 marks for relatively straightforward work.",
          "Differential Equations — variable separable and linear type appear most. Master these two.",
        ],
      },
      {
        t: "h2",
        v: "How to Attempt the Class 12 Maths Paper",
      },
      {
        t: "ul",
        v: [
          "Start with Section D (5-mark questions) you are most confident about — secure those marks first.",
          "Never spend more than 10 minutes on any single 5-mark question. Move on, come back later.",
          "Show all working steps clearly. In calculus, partial credit is given even if the final answer is wrong.",
          "Write answers neatly with proper headings — examiners reward structured responses.",
          "Keep 15 minutes at the end for checking sign errors in integrals and determinants.",
        ],
      },
      {
        t: "tip",
        v: "Solve the last 5 years' CBSE Class 12 Maths papers under timed conditions. You'll notice the same question types appearing every single year — CBSE is highly predictable if you study past patterns.",
      },
      {
        t: "stat",
        v: "44",
        label: "marks from Calculus alone — master this unit first",
      },
      {
        t: "h2",
        v: "The One Mistake That Costs Students 10+ Marks",
      },
      {
        t: "p",
        v: "Most students skip steps in integration and differentiation to save time. CBSE examiners mark each step independently. Writing only the final answer — even if correct — often earns zero if intermediate steps are missing. Always write: given, formula, substitution, simplification, final answer. Five steps, every time.",
      },
    ],
  },

  // ── 8 ──────────────────────────────────────────────────────────────────────
  {
    slug: "cbse-maths-common-mistakes",
    title: "10 Common Maths Mistakes CBSE Students Make in Board Exams (And How to Fix Them)",
    description:
      "These 10 mistakes silently cost CBSE students 10 to 20 marks every year. Identify which ones you make and fix them before the board exam.",
    category: "Maths Tips",
    classTarget: "All Classes",
    readTime: 6,
    publishDate: "2025-02-20",
    featured: false,
    keywords: [
      "common mistakes in CBSE Maths board exam",
      "why students lose marks in CBSE Maths",
      "CBSE Maths exam mistakes to avoid",
      "how to avoid silly mistakes in board exam",
      "CBSE Maths answer writing mistakes",
    ],
    content: [
      {
        t: "p",
        v: "Analysing CBSE board exam papers reveals that most students don't lose marks because they don't know the subject. They lose marks because of patterns — the same avoidable mistakes, repeated across thousands of answer sheets every year.",
      },
      {
        t: "h2",
        v: "The 10 Mistakes That Cost You Marks",
      },
      {
        t: "ol",
        v: [
          "Skipping steps in derivations — CBSE awards marks per step. No step shown = no marks, even with the right answer.",
          "Not writing units — '9.8' gets no marks. '9.8 m/s²' gets full marks. Units are compulsory.",
          "Using wrong formula in the first line — examiners stop giving credit from the point of error.",
          "Not drawing diagrams when asked — a labelled diagram alone can be worth 1 mark.",
          "Spending too long on hard questions — leaving 5-mark questions blank because of one difficult problem is the costliest mistake.",
          "Not reading the question properly — Class 12 students regularly integrate when the question asks to differentiate.",
          "Messy handwriting and crossed-out work — examiners mark what they see. Unclear work = lower marks.",
          "Leaving blanks instead of attempting — a partially correct attempt always scores more than a blank.",
          "Not simplifying the final answer — '√48' must be simplified to '4√3'. Unsimplified answers lose marks.",
          "Not checking if the question is from NCERT — 70% of CBSE Maths questions are directly from NCERT exercises. If you know NCERT completely, you start with a guaranteed 55–60 marks.",
        ],
      },
      {
        t: "h2",
        v: "How to Fix These Mistakes Before Exam Day",
      },
      {
        t: "ul",
        v: [
          "Practice writing every step — even for 1-mark questions. Build the habit now.",
          "Create a personal 'mistake list' — every time you lose a mark in practice, write down why.",
          "Timed practice is essential — mistakes multiply under time pressure. Train under exam conditions.",
          "Read each question twice before writing — underline what is being asked.",
        ],
      },
      {
        t: "tip",
        v: "After every practice paper, spend 10 minutes only on mistakes — not on reviewing correct answers. Your mistakes are your fastest path to more marks.",
      },
      {
        t: "h2",
        v: "The Pattern Behind NCERT and Board Questions",
      },
      {
        t: "p",
        v: "CBSE designs board papers directly from NCERT textbooks and exemplar problems. Students who have solved all NCERT exercises — every single one, including examples — consistently outperform those who jump to guide books. Guides are supplements, not substitutes. Complete NCERT first, always.",
      },
    ],
  },

  // ── 9 ──────────────────────────────────────────────────────────────────────
  {
    slug: "cbse-class-10-science-chapter-strategy",
    title: "CBSE Class 10 Science: Chapter-Wise Marks, Important Topics, and Board Exam Strategy",
    description:
      "Not all Class 10 Science chapters carry equal weight. Here's the exact chapter-wise marks breakdown, which topics appear every year, and how to score 90+ in CBSE Class 10 Science.",
    category: "Science Tricks",
    classTarget: "Class 8–10",
    readTime: 6,
    publishDate: "2025-03-05",
    featured: false,
    keywords: [
      "CBSE Class 10 Science chapter wise marks",
      "how to score 90 in Class 10 Science CBSE",
      "CBSE Class 10 Science important topics",
      "Class 10 Science board exam preparation",
      "CBSE Science 2026 important chapters",
      "Class 10 Science marks distribution",
    ],
    content: [
      {
        t: "p",
        v: "Class 10 Science is one of the most scoring subjects in the CBSE board — if you know where the marks actually come from. Many students revise every chapter equally and waste time. Toppers concentrate on high-weight chapters and score 90+ consistently.",
      },
      {
        t: "h2",
        v: "Chapter-Wise Marks Distribution",
      },
      {
        t: "table",
        headers: ["Unit", "Topics", "Marks"],
        rows: [
          ["Chemical Substances", "Chemical Reactions, Acids/Bases/Salts, Metals & Non-Metals, Carbon Compounds", "25"],
          ["World of Living", "Life Processes, Control & Coordination, Reproduction, Heredity & Evolution", "25"],
          ["Natural Phenomena", "Light, Human Eye", "12"],
          ["Effects of Current", "Electricity, Magnetic Effects", "13"],
          ["Natural Resources", "Management of Natural Resources", "5"],
        ],
      },
      {
        t: "h2",
        v: "Highest Priority Topics (Appear Every Year)",
      },
      {
        t: "ul",
        v: [
          "Chemical Reactions & Equations — balancing equations, types of reactions, and activity series appear every year without exception.",
          "Electricity — Ohm's law numerical, series/parallel circuits, and power calculations are consistently worth 7–8 marks.",
          "Life Processes — diagrams of the human digestive system, heart, and nephron carry guaranteed diagram marks.",
          "Heredity — Mendel's laws, dominant/recessive traits, and monohybrid cross diagrams appear every year.",
          "Light — mirror and lens formula numericals, and the human eye diagram with defects, appear without fail.",
          "Carbon Compounds — IUPAC naming, functional groups, and homologous series are high-frequency 3-mark questions.",
        ],
      },
      {
        t: "h2",
        v: "How to Prepare Science Diagrams (5 Marks Every Year)",
      },
      {
        t: "p",
        v: "CBSE allocates specific marks for diagrams. A diagram question without a diagram scores zero. A correct diagram with wrong labels scores partial marks. A correct diagram with correct labels scores full marks. Practice these five diagrams until you can draw them in under 90 seconds: human heart, nephron, refraction through a lens, the human eye, and a simple circuit with voltmeter and ammeter.",
      },
      {
        t: "tip",
        v: "Diagrams are the easiest guaranteed marks in Class 10 Science. 30 minutes of diagram practice every day for 3 weeks will secure you 5–8 marks you currently lose without realising.",
      },
      {
        t: "h2",
        v: "The 5-Day Pre-Exam Science Strategy",
      },
      {
        t: "ol",
        v: [
          "Day 1: Revise all chemical equations and reactions — write each one twice from memory.",
          "Day 2: Solve 10 Electricity and Light numericals — mark the formula before solving.",
          "Day 3: Draw all 5 key diagrams 3 times each — check against NCERT originals.",
          "Day 4: Read all bold terms and definitions in Biology chapters — examiners expect NCERT language.",
          "Day 5: Solve one full previous year paper under timed conditions.",
        ],
      },
    ],
  },

  // ── 10 ─────────────────────────────────────────────────────────────────────
  {
    slug: "cbse-science-answer-writing",
    title: "How to Write Perfect CBSE Science Answers: Format, Keywords, and Full Marks",
    description:
      "The way you write a Science answer matters as much as what you write. This guide covers the exact format, keywords, and structure CBSE examiners expect for 1, 2, 3 and 5 mark questions.",
    category: "Science Tricks",
    classTarget: "Class 8–10",
    readTime: 5,
    publishDate: "2025-03-18",
    featured: false,
    keywords: [
      "how to write CBSE Science answers",
      "CBSE Science answer format board exam",
      "Class 10 Science answer writing tips",
      "CBSE answer writing keywords Science",
      "how to get full marks in CBSE Science",
    ],
    content: [
      {
        t: "p",
        v: "Two students who know the same concept can score very different marks depending on how they write their answers. CBSE Science examiners are trained to check for specific structures, keywords, and diagrams. Writing well is a skill — and it can be learned.",
      },
      {
        t: "h2",
        v: "The Format for Each Question Type",
      },
      {
        t: "table",
        headers: ["Marks", "Format", "Example"],
        rows: [
          ["1 mark", "One sentence with the key term", "'Photosynthesis is the process by which plants prepare food using sunlight.'"],
          ["2 marks", "Definition + one example OR two distinct points", "Define osmosis + give one real-life example"],
          ["3 marks", "Three numbered points OR diagram + two points", "Diagram of nephron + two functions of kidney"],
          ["5 marks", "Introduction + 3–4 points + labelled diagram + conclusion", "Full explanation of refraction with ray diagram"],
        ],
      },
      {
        t: "h2",
        v: "Keywords That Examiners Look For",
      },
      {
        t: "p",
        v: "CBSE Science marking schemes are built around specific NCERT keywords. If you use these keywords, you get the marks. If you paraphrase — even correctly — you may not. The safest approach: read NCERT definitions until you can write them from memory, word for word.",
      },
      {
        t: "ul",
        v: [
          "Use NCERT's exact definition language — 'Respiration is the process of breakdown of food in the cell with the release of energy' is what earns the mark.",
          "For process questions, use sequence words: 'First...', 'Then...', 'Finally...' — this shows logical flow.",
          "For comparison questions, use a table format — examiners reward clear, structured comparisons.",
          "For numerical answers, always: write the formula → substitute values with units → solve → write the answer with units.",
        ],
      },
      {
        t: "tip",
        v: "Buy a CBSE Science sample paper booklet and read the model answers — not to memorise, but to understand the level of detail expected. Most students write too little for 3-mark and 5-mark questions.",
      },
      {
        t: "h2",
        v: "The Diagram Rule",
      },
      {
        t: "p",
        v: "A question that says 'with the help of a diagram' or 'draw a labelled diagram' awards 1 separate mark for the diagram itself. Never skip a diagram even if you're unsure about labels — an unlabelled but accurate diagram still gets partial credit. An absent diagram gets zero for that component.",
      },
      {
        t: "h2",
        v: "Common Answer-Writing Mistakes to Stop Now",
      },
      {
        t: "ul",
        v: [
          "Writing paragraphs for 3-mark questions — use numbered points, not prose.",
          "Not underlining or highlighting key terms in your answer — it helps the examiner spot keywords fast.",
          "Leaving diagram unlabelled — labels are often worth half the diagram marks.",
          "Writing the answer in pencil — always write in blue or black ink; pencil is only for diagrams.",
        ],
      },
    ],
  },

  // ── 11 ─────────────────────────────────────────────────────────────────────
  {
    slug: "cbse-class-12-physics-derivations-numericals",
    title: "CBSE Class 12 Physics: How to Master Derivations and Numericals for Board Exam",
    description:
      "Derivations and numericals together make up over 60% of CBSE Class 12 Physics marks. Here's a proven method to tackle both confidently — even if you currently struggle with them.",
    category: "Physics Tips",
    classTarget: "Class 11–12",
    readTime: 7,
    publishDate: "2025-04-02",
    featured: false,
    keywords: [
      "CBSE Class 12 Physics derivations board exam",
      "how to learn Physics derivations CBSE",
      "Class 12 Physics numericals strategy",
      "CBSE Physics important derivations 2026",
      "how to solve Physics numericals CBSE board",
      "Class 12 Physics board exam tips",
    ],
    content: [
      {
        t: "p",
        v: "Physics is the one subject where students either score very high or very low in Class 12 boards. The difference is almost always derivations and numericals. Students who have a clear method for both consistently score 60+ out of 70.",
      },
      {
        t: "h2",
        v: "Why Derivations Are Actually Easy Marks",
      },
      {
        t: "p",
        v: "CBSE Physics derivations are fully predictable. The same 15–20 derivations have appeared in board papers for over a decade. They do not change. This means every mark in a derivation is available before the exam — you just have to practice writing each one until it's automatic.",
      },
      {
        t: "h2",
        v: "The 12 Most Important Derivations (Learn These First)",
      },
      {
        t: "ul",
        v: [
          "Derivation of mirror formula and lens maker's equation",
          "Electric field due to an infinite plane sheet of charge (Gauss's Law application)",
          "Expression for capacitance of a parallel plate capacitor",
          "Derivation of drift velocity and relation with current",
          "Biot-Savart Law and magnetic field due to a straight wire",
          "Force between two parallel current-carrying conductors",
          "EMF induced by a rotating coil in a magnetic field",
          "Expression for energy stored in an inductor",
          "Relation between refractive index and critical angle (total internal reflection)",
          "De Broglie wavelength and its derivation",
          "Expression for radius of nth Bohr orbit",
          "Binding energy per nucleon and mass defect",
        ],
      },
      {
        t: "tip",
        v: "Write each derivation three times — once with the book open, once with only the starting formula as a hint, once completely from memory. Only the third repetition actually sticks for the exam.",
      },
      {
        t: "h2",
        v: "The 4-Step Method for Every Numerical",
      },
      {
        t: "ol",
        v: [
          "Write 'Given' — list every quantity from the question with symbols and units.",
          "Write 'To find' — clearly state what is being asked.",
          "Write 'Formula' — the exact formula you will use. CBSE awards marks for writing the correct formula even if the calculation is wrong.",
          "Substitute, calculate, and write the final answer with units and direction (if vector).",
        ],
      },
      {
        t: "p",
        v: "Following this method consistently means you earn partial credit even on numericals you cannot fully solve. A student who writes the correct formula and substitutes correctly — but makes an arithmetic error — typically earns 2 out of 3 marks. A student who leaves the question blank earns zero.",
      },
      {
        t: "h2",
        v: "High-Frequency Numerical Topics",
      },
      {
        t: "table",
        headers: ["Chapter", "Numerical Type", "Marks"],
        rows: [
          ["Electrostatics", "Electric field, potential, capacitance calculations", "5–8"],
          ["Current Electricity", "Kirchhoff's laws, Wheatstone bridge", "3–5"],
          ["Magnetism", "Force on charge/wire, cyclotron frequency", "3"],
          ["Optics", "Lens/mirror formula, magnification, power of lens", "5–8"],
          ["Modern Physics", "Photoelectric effect, de Broglie wavelength, nuclear binding energy", "5"],
        ],
      },
      {
        t: "stat",
        v: "60",
        label: "percent of Physics marks come from derivations and numericals — master these two categories",
      },
    ],
  },

  // ── 12 ─────────────────────────────────────────────────────────────────────
  {
    slug: "cbse-class-12-chemistry-organic-strategy",
    title: "CBSE Class 12 Chemistry: How to Score 70/70 — Organic Chemistry Strategy",
    description:
      "Organic Chemistry is worth 28 marks in CBSE Class 12 Chemistry. Most students find it hard because they try to memorise reactions randomly. Here's a systematic strategy that makes it manageable and scoring.",
    category: "Chemistry Tips",
    classTarget: "Class 11–12",
    readTime: 7,
    publishDate: "2025-04-20",
    featured: false,
    keywords: [
      "CBSE Class 12 Organic Chemistry strategy",
      "how to score 70 in Class 12 Chemistry CBSE",
      "CBSE Class 12 Chemistry Organic tips",
      "Class 12 Chemistry board exam preparation",
      "CBSE Organic Chemistry important reactions 2026",
      "how to learn organic reactions CBSE",
    ],
    content: [
      {
        t: "p",
        v: "Class 12 Chemistry seems overwhelming because of Organic Chemistry — hundreds of reactions, mechanisms, and conversions. But here's the truth: CBSE Organic Chemistry follows patterns. Once you understand the pattern, most reactions become predictable.",
      },
      {
        t: "h2",
        v: "Chemistry Marks Distribution — Where to Focus",
      },
      {
        t: "table",
        headers: ["Unit", "Topics", "Marks"],
        rows: [
          ["Physical Chemistry", "Solid State, Solutions, Electrochemistry, Chemical Kinetics, Surface Chemistry", "23"],
          ["Inorganic Chemistry", "p-Block, d/f Block, Coordination Compounds", "19"],
          ["Organic Chemistry", "Haloalkanes/Haloarenes, Alcohols/Phenols, Aldehydes/Ketones, Amines, Biomolecules, Polymers", "28"],
        ],
      },
      {
        t: "h2",
        v: "The Systematic Way to Learn Organic Reactions",
      },
      {
        t: "p",
        v: "Do not try to memorise individual reactions. Instead, learn by functional group. Master all reactions of Alcohols together, then all reactions of Aldehydes together. This builds a mental map — when you see a functional group, you know exactly what reactions it undergoes.",
      },
      {
        t: "ol",
        v: [
          "Learn the functional group first — understand what makes an alcohol, a ketone, an amine reactive.",
          "Map reactions by reagent — 'What does this compound do with Na?' 'What does it do with PCC?'",
          "Practise named reactions separately — Lucas test, Tollens' test, Fehling's test, Aldol condensation appear every year.",
          "Learn conversion questions as story problems — 'How do I get from X to Y?' trace the steps logically.",
          "Write each reaction at least 5 times — organic reactions live in muscle memory, not in reading.",
        ],
      },
      {
        t: "h2",
        v: "Named Reactions That Appear Every Year",
      },
      {
        t: "ul",
        v: [
          "Aldol condensation — between two carbonyl compounds in the presence of dilute NaOH",
          "Cannizzaro reaction — for aldehydes without alpha-H in concentrated NaOH",
          "Sandmeyer reaction — conversion of diazonium salts to aryl halides",
          "Hofmann bromamide reaction — conversion of amide to amine with Br₂ and NaOH",
          "Friedel-Crafts reaction — alkylation and acylation of benzene ring",
          "Reimer-Tiemann reaction — introduction of CHO group in phenol",
        ],
      },
      {
        t: "tip",
        v: "Make a 'reaction map' for each chapter — a single A4 sheet with all reactions of that functional group, drawn as arrows with reagents. These sheets are your revision material in the last week.",
      },
      {
        t: "h2",
        v: "How to Score in Inorganic Chemistry Without Memorising Everything",
      },
      {
        t: "p",
        v: "Inorganic Chemistry questions (especially p-Block and Coordination Compounds) appear to require massive memorisation. But CBSE repeats the same questions. Solve the last 7 years of CBSE papers for Inorganic Chemistry questions only — you'll notice that 80% of questions are from a pool of about 30 standard questions. Learn those 30 questions and their answers perfectly.",
      },
      {
        t: "stat",
        v: "28",
        label: "marks from Organic Chemistry — the highest single unit in Class 12 Chemistry",
      },
    ],
  },

  // ── 13 ─────────────────────────────────────────────────────────────────────
  {
    slug: "cbse-chemistry-reactions-memory",
    title: "How to Remember Chemical Reactions for CBSE Board Exam Without Mugging Up",
    description:
      "There's a smarter way to remember CBSE Chemistry reactions — one that actually works under exam pressure. Stop rote memorisation. Use these techniques to recall reactions accurately every time.",
    category: "Chemistry Tips",
    classTarget: "Class 11–12",
    readTime: 5,
    publishDate: "2025-05-08",
    featured: false,
    keywords: [
      "how to remember chemical reactions CBSE",
      "CBSE Chemistry memory techniques board exam",
      "Class 12 Chemistry reactions tips",
      "how to study Organic Chemistry reactions",
      "CBSE Chemistry without mugging up",
      "remember reactions for board exam",
    ],
    content: [
      {
        t: "p",
        v: "The most common complaint about Chemistry: 'I keep forgetting reactions.' The real problem is not memory — it's the method. Rote memorisation fades under exam pressure. Understanding-based learning stays.",
      },
      {
        t: "h2",
        v: "Understand the 'Why' Before Memorising the 'What'",
      },
      {
        t: "p",
        v: "Every chemical reaction happens for a reason — a more reactive element displaces a less reactive one, an acid neutralises a base, a reducing agent donates electrons. When you understand why a reaction occurs, you can reconstruct it even if you forget the exact details during the exam.",
      },
      {
        t: "h2",
        v: "5 Proven Techniques That Work",
      },
      {
        t: "ol",
        v: [
          "Story method — convert the reaction into a story. 'Zinc is the bully that always picks on copper and pushes it out of its solution.' Stories use emotion and imagery — the brain remembers them far better than abstract symbols.",
          "Reaction chains — instead of learning individual reactions, chain them. Learn the full journey of a compound: how it's made, what it reacts with, what it produces. Context makes each step memorable.",
          "Write, don't highlight — writing a reaction by hand activates motor memory. Students who write reactions 5 times recall them far better than students who read them 20 times.",
          "Mnemonics for reactivity and activity series — OIL RIG (Oxidation Is Loss, Reduction Is Gain), PANIC for metal reactivity (Potassium, Aluminium, Nickel, Iron, Copper) with others filled in.",
          "Spaced repetition — review each reaction the next day, then after 3 days, then after a week. Use flashcards (physical or digital) for this. This is scientifically the most effective memory technique.",
        ],
      },
      {
        t: "h2",
        v: "How to Use NCERT for Reactions",
      },
      {
        t: "p",
        v: "NCERT Chemistry textbooks have all reactions highlighted in boxes and tables. Go through each chapter and list every reaction in a dedicated notebook. Then close the book and try to write each reaction from memory. This active recall — trying to remember before checking — doubles retention compared to passive reading.",
      },
      {
        t: "tip",
        v: "Create a 'reaction notebook' — one page per chapter, all reactions written in your own hand. By the time you've filled it, you'll have already memorised 70% of them through the act of writing.",
      },
      {
        t: "h2",
        v: "What to Do When You Blank Out in the Exam",
      },
      {
        t: "ul",
        v: [
          "Write what you do remember — the reactants, the type of reaction, even partial products. Partial marks are available.",
          "Think about the logic — is it an acid-base, redox, or displacement reaction? What should logically happen?",
          "Write the reaction conditions you know even if unsure of products — catalyst, temperature, pressure noted = partial credit.",
          "Move on and come back — sometimes the answer surfaces when you're not actively trying to recall it.",
        ],
      },
    ],
  },

  // ── 14 ─────────────────────────────────────────────────────────────────────
  {
    slug: "cbse-board-exam-timetable",
    title: "How to Make the Perfect CBSE Board Exam Time Table (With a Proven Template)",
    description:
      "A bad time table is worse than no time table. Here's how to build a CBSE board exam study schedule that you'll actually follow — balanced, realistic, and designed for maximum retention.",
    category: "Revision Strategies",
    classTarget: "All Classes",
    readTime: 6,
    publishDate: "2025-06-01",
    featured: false,
    keywords: [
      "CBSE board exam time table",
      "how to make study timetable for board exam",
      "CBSE Class 10 12 study schedule",
      "board exam preparation timetable India",
      "how to study for CBSE boards effectively",
      "CBSE exam study plan",
    ],
    content: [
      {
        t: "p",
        v: "Most students make a beautiful time table on day one — and abandon it by day three. The problem isn't discipline. It's that the time table was designed to look impressive, not to be practical. A real board exam time table looks very different.",
      },
      {
        t: "h2",
        v: "The 5 Principles of a Time Table That Works",
      },
      {
        t: "ol",
        v: [
          "Prioritise by marks, not by difficulty — spend the most time on the chapters that carry the most marks, not the ones you find hardest.",
          "Study in 45-minute blocks with 10-minute breaks — this matches the brain's natural attention cycle. Long sessions without breaks produce poor retention.",
          "Mix subjects every day — never spend an entire day on one subject. Alternating subjects reduces fatigue and improves long-term memory.",
          "Build in buffer days every week — no productive plan has zero flexibility. Buffer days absorb delays without derailing the whole schedule.",
          "Revision must be in the plan — first-time learning and revision are both study. A time table with no revision slots will fail before exams.",
        ],
      },
      {
        t: "h2",
        v: "A Proven Daily Schedule Template",
      },
      {
        t: "table",
        headers: ["Time", "Activity", "Duration"],
        rows: [
          ["6:00–7:30 AM", "Difficult subject (Maths or Physics)", "90 min"],
          ["7:30–8:30 AM", "Morning routine, breakfast", "60 min"],
          ["8:30–10:00 AM", "Second subject (Chemistry or Biology)", "90 min"],
          ["10:00–10:15 AM", "Short break", "15 min"],
          ["10:15–11:45 AM", "Third subject (English or SST)", "90 min"],
          ["12:00–1:00 PM", "Revision of previous day's work", "60 min"],
          ["1:00–4:00 PM", "Lunch + rest (non-negotiable)", "180 min"],
          ["4:00–5:30 PM", "Practice questions / past papers", "90 min"],
          ["7:00–8:30 PM", "Light revision — formulas, diagrams, definitions", "90 min"],
        ],
      },
      {
        t: "h2",
        v: "How to Adapt This to Your Exam Schedule",
      },
      {
        t: "p",
        v: "Work backwards from your first board exam date. In the 3 weeks before the exam, shift from learning new content to revision and practice papers only. The final week should be exclusively revision — no new topics.",
      },
      {
        t: "tip",
        v: "Write your time table in pencil for the first week. Adjust it based on how long topics actually take. A realistic, adjusted timetable on week two beats an optimistic, broken timetable every time.",
      },
      {
        t: "h2",
        v: "The Biggest Time Table Mistakes to Avoid",
      },
      {
        t: "ul",
        v: [
          "Starting too early in the morning — 4 AM study sessions sound productive but destroy afternoon performance.",
          "Scheduling 12-hour study days — sustained attention is physiologically impossible. 6–7 focused hours beats 12 distracted hours.",
          "Not sleeping enough — sleep is when the brain consolidates memory. 7–8 hours is not optional during board preparation.",
          "Studying the same subject for more than 2 hours straight — fatigue rapidly reduces information retention.",
        ],
      },
    ],
  },

  // ── 15 ─────────────────────────────────────────────────────────────────────
  {
    slug: "cbse-last-15-days-strategy",
    title: "Last 15 Days Before CBSE Boards: Exactly What to Do and What to Avoid",
    description:
      "The final 15 days before CBSE board exams are the most critical and the most mismanaged. Here's a day-by-day strategy that keeps you focused, calm, and ready to perform on exam day.",
    category: "Revision Strategies",
    classTarget: "All Classes",
    readTime: 6,
    publishDate: "2025-07-10",
    featured: false,
    keywords: [
      "last 15 days CBSE board exam strategy",
      "what to do before CBSE board exam",
      "CBSE exam last minute preparation",
      "15 days before board exam tips",
      "CBSE board exam final revision plan",
    ],
    content: [
      {
        t: "p",
        v: "The last 15 days before CBSE boards are when most preparation plans fall apart. Students panic, start new topics, stay up all night, and walk into the exam exhausted. The students who perform best in this window do one thing differently — they stick to a plan.",
      },
      {
        t: "h2",
        v: "Days 15 to 10: Consolidation, Not New Learning",
      },
      {
        t: "ul",
        v: [
          "Stop studying new chapters. If you haven't covered a topic in depth by now, a 3-day rush will not help.",
          "Do one full subject revision per day — go through notes, formulas, and key definitions. Not textbooks, your notes.",
          "Solve 2 previous year papers per day — identify which question types you are still getting wrong.",
          "Make a 'weak topics list' — the specific concepts you keep getting wrong. This list becomes your Days 9–5 focus.",
        ],
      },
      {
        t: "h2",
        v: "Days 9 to 5: Targeted Attack on Weak Areas",
      },
      {
        t: "p",
        v: "This is the highest-leverage window. You know your weak areas from the previous 5 days. Now spend focused time only on those. One targeted improvement in a previously weak area can be worth 5–8 marks on the actual paper.",
      },
      {
        t: "ul",
        v: [
          "Spend 2 hours per day on your weakest topic from each subject.",
          "Practise the specific question types you kept getting wrong — not the entire chapter.",
          "Revise all formulae, definitions, and diagrams for each subject — create a single-page formula sheet.",
          "Do one complete sample paper per day with strict time limits.",
        ],
      },
      {
        t: "h2",
        v: "Days 4 to 2: Light Revision Only",
      },
      {
        t: "p",
        v: "These days are not for learning — they're for maintaining confidence. The goal is to keep your brain fresh and calm, not to cram more information into it.",
      },
      {
        t: "ul",
        v: [
          "Read your formula sheets and key definitions once each morning.",
          "Skim through your revision notes — do not re-read textbooks.",
          "Sleep 8 hours every night — this is mandatory, not optional.",
          "Eat well, go outside for 30 minutes each day, keep your stress low.",
        ],
      },
      {
        t: "h2",
        v: "The Night Before the Exam",
      },
      {
        t: "ol",
        v: [
          "Do not study anything new. Not a single new topic.",
          "Spend 30 minutes reading your formula sheet and key diagrams.",
          "Prepare your bag — admit card, pens (3), pencil, eraser, geometry box, water bottle.",
          "Sleep by 10 PM. Your brain needs rest more than it needs last-minute revision.",
          "Set two alarms. Leave for the exam centre 30 minutes earlier than you think you need to.",
        ],
      },
      {
        t: "tip",
        v: "The students who score highest in CBSE boards are not those who studied the hardest in the last 15 days. They are the ones who studied smartest and arrived at the exam rested and confident.",
      },
    ],
  },

  // ── 16 ─────────────────────────────────────────────────────────────────────
  {
    slug: "cbse-board-exam-paper-attempt-strategy",
    title: "How to Attempt the CBSE Board Exam Paper: Sequence, Time Management, and Full Marks",
    description:
      "Most students attempt the CBSE board exam paper in the wrong order. Here's the proven sequence and time allocation that toppers use to maximise marks without running out of time.",
    category: "Board Exam Hacks",
    classTarget: "All Classes",
    readTime: 5,
    publishDate: "2025-08-05",
    featured: false,
    keywords: [
      "how to attempt CBSE board exam paper",
      "CBSE exam time management tips",
      "board exam paper attempt strategy",
      "CBSE paper solving sequence",
      "how to manage time in CBSE board exam",
      "CBSE board exam tips for students",
    ],
    content: [
      {
        t: "p",
        v: "Walking into a CBSE board exam with a clear strategy for how to attempt the paper is worth at least 5–10 extra marks. Most students start from question 1 and work linearly — this is almost never the optimal approach.",
      },
      {
        t: "h2",
        v: "The First 15 Minutes Are the Most Valuable",
      },
      {
        t: "p",
        v: "CBSE gives students 15 minutes to read the question paper before writing begins. Most students use this time to skim quickly. Toppers use it differently — they read every question, mentally categorise them as 'easy', 'medium', or 'hard', and plan their attack sequence.",
      },
      {
        t: "h2",
        v: "The Optimal Attempt Sequence",
      },
      {
        t: "ol",
        v: [
          "Objective / MCQ section first — these require the least writing time and settle your nerves. Complete all MCQs and assertion-reason questions immediately.",
          "Short answers you are confident about — complete all 1-mark and 2-mark questions you know well. Build early momentum.",
          "The 5-mark questions you are strongest at — do your best long answers when your energy and confidence are highest.",
          "Remaining short answers — come back to the 2-mark and 3-mark questions you skipped.",
          "Hard or uncertain questions last — attempt every question, even if partially. Never leave anything blank.",
        ],
      },
      {
        t: "h2",
        v: "Time Allocation Per Section",
      },
      {
        t: "table",
        headers: ["Section", "Time to Allocate"],
        rows: [
          ["Reading the paper (before writing)", "15 minutes"],
          ["MCQ / Objective section", "20 minutes"],
          ["Very Short Answers (1 mark)", "10 minutes"],
          ["Short Answers (2–3 marks)", "40 minutes"],
          ["Long Answers (5 marks)", "40 minutes"],
          ["Revision and checking", "15 minutes"],
        ],
      },
      {
        t: "h2",
        v: "The Rules That Protect Your Marks",
      },
      {
        t: "ul",
        v: [
          "Never spend more than 8 minutes on any single 5-mark question — move on, return if time allows.",
          "Attempt every single question — partial answers always score more than blank spaces.",
          "Write clearly and leave space between answers — rushed, cramped writing costs marks as examiners struggle to read it.",
          "Do not erase — cross out with a single line. Erasing wastes time and looks messy.",
          "Check for silly errors in the last 15 minutes — wrong signs, missing units, and unfinished sentences are common late-paper mistakes.",
        ],
      },
      {
        t: "tip",
        v: "Practise this attempt strategy with every mock paper you do — not just the content. The strategy must be automatic by exam day, so you don't waste mental energy thinking about it during the actual exam.",
      },
    ],
  },

  // ── 17 ─────────────────────────────────────────────────────────────────────
  {
    slug: "cbse-revision-techniques-that-work",
    title: "5 Revision Techniques That Actually Work for CBSE Board Exams (Backed by Science)",
    description:
      "Most CBSE students revise by re-reading notes — the least effective technique known to science. These 5 methods are proven to dramatically improve retention and exam performance.",
    category: "Revision Strategies",
    classTarget: "All Classes",
    readTime: 6,
    publishDate: "2025-09-01",
    featured: false,
    keywords: [
      "CBSE revision techniques that work",
      "how to revise for board exams effectively",
      "best study methods CBSE boards",
      "active recall for board exams",
      "spaced repetition CBSE preparation",
      "how to study smart for CBSE",
    ],
    content: [
      {
        t: "p",
        v: "Passive re-reading — going through your notes or textbook again — feels productive but is one of the least effective revision methods according to educational psychology research. CBSE board exam toppers use different methods. Here are the five that consistently produce results.",
      },
      {
        t: "h2",
        v: "Technique 1: Active Recall (The Most Powerful Method)",
      },
      {
        t: "p",
        v: "Instead of reading your notes, close them and try to recall everything you know about a topic. Write it down, say it aloud, or explain it to someone. The effort of retrieval — even if you get things wrong — dramatically strengthens memory. Research shows active recall is 2–3 times more effective than re-reading.",
      },
      {
        t: "h2",
        v: "Technique 2: Spaced Repetition",
      },
      {
        t: "p",
        v: "Review material at increasing intervals: the next day, then 3 days later, then a week later, then 2 weeks later. Each review resets the forgetting curve. A topic reviewed 4 times using spaced repetition is remembered better than a topic read 20 times in one sitting.",
      },
      {
        t: "h2",
        v: "Technique 3: Past Paper Practice (the CBSE-Specific Technique)",
      },
      {
        t: "p",
        v: "CBSE papers follow highly predictable patterns. Solving past papers is not just practice — it is targeted revision for the actual exam. For every past paper you solve, analyse which chapters the questions came from. You will quickly see that 70–80% of marks come from the same set of topics every year.",
      },
      {
        t: "h2",
        v: "Technique 4: The Feynman Technique",
      },
      {
        t: "ol",
        v: [
          "Pick a concept you want to understand — for example, how photosynthesis works.",
          "Explain it in simple language as if you are teaching a 10-year-old.",
          "Identify the gaps — where did your explanation get vague or wrong?",
          "Go back to the source material to fill those gaps.",
          "Repeat until you can explain it completely without any gaps.",
        ],
      },
      {
        t: "h2",
        v: "Technique 5: Mind Mapping",
      },
      {
        t: "p",
        v: "Create a visual map of a chapter — the central topic in the middle, major concepts branching out, sub-concepts branching further. Mind maps force you to understand relationships between concepts rather than treating them as isolated facts. They are especially useful for Biology, History, and Economics — subjects with large interconnected content.",
      },
      {
        t: "tip",
        v: "Combine techniques: use active recall to test yourself, spaced repetition to schedule reviews, and past papers to guide what to focus on. This triple combination is what CBSE toppers do — often without even knowing it has a scientific name.",
      },
      {
        t: "h2",
        v: "What Doesn't Work (Stop Doing These)",
      },
      {
        t: "ul",
        v: [
          "Re-reading textbooks or notes passively — you feel like you're studying but retention is minimal.",
          "Highlighting everything — if everything is highlighted, nothing is highlighted.",
          "Studying the same subject for 6 hours straight — diminishing returns set in after 90 minutes.",
          "Cramming the night before — acute stress impairs memory retrieval during the exam itself.",
        ],
      },
    ],
  },

  // ── 18 ─────────────────────────────────────────────────────────────────────
  {
    slug: "cbse-english-board-exam-tips",
    title: "CBSE English Board Exam: How to Score 90+ in Class 10 and Class 12",
    description:
      "English is one of the most scoring yet most underestimated subjects in CBSE boards. Students who know the format and follow the marking scheme score 90+ with far less effort than in Science or Maths.",
    category: "Board Exam Hacks",
    classTarget: "All Classes",
    readTime: 6,
    publishDate: "2025-10-01",
    featured: false,
    keywords: [
      "CBSE English board exam tips Class 10",
      "CBSE English Class 12 board exam strategy",
      "how to score 90 in CBSE English",
      "CBSE English writing section tips",
      "CBSE English literature answer format",
      "English board exam CBSE marking scheme",
    ],
    content: [
      {
        t: "p",
        v: "Most CBSE students treat English as the subject they'll prepare at the last minute. Toppers treat it as the easiest 90+ they will ever get. The difference is understanding the format — because CBSE English is almost entirely format-driven.",
      },
      {
        t: "h2",
        v: "How CBSE English Paper Is Structured",
      },
      {
        t: "table",
        headers: ["Section", "Content", "Marks"],
        rows: [
          ["Section A", "Reading Comprehension (2 passages)", "20"],
          ["Section B", "Writing — Letter, Article, Notice, Debate, Speech", "20"],
          ["Section C", "Grammar — Gap fills, editing, transformation", "20"],
          ["Section D", "Literature — Extracts, short answers, long answers", "40"],
        ],
      },
      {
        t: "h2",
        v: "Section A: Reading Comprehension Strategy",
      },
      {
        t: "ul",
        v: [
          "Read the questions before reading the passage — you know what to look for.",
          "The answers are always in the passage — never write from general knowledge.",
          "Use the passage's language in your answers — examiners mark based on information extracted, not your vocabulary.",
          "For vocabulary questions (word meanings, synonyms), look for context clues in the surrounding sentences.",
        ],
      },
      {
        t: "h2",
        v: "Section B: Writing — Format is 50% of the Marks",
      },
      {
        t: "p",
        v: "CBSE writing questions are format-heavy. A letter written in the correct format but with average content scores more than a brilliantly written letter in the wrong format. Learn the exact format for: formal letter, informal letter, article, notice, debate speech, and formal email. Marks are awarded for following the format correctly.",
      },
      {
        t: "tip",
        v: "Practice writing one piece per day for each writing format in the month before boards. 30 days = 30 pieces of writing practice. By exam day, any writing question will feel familiar.",
      },
      {
        t: "h2",
        v: "Section C: Grammar — Practise, Don't Study",
      },
      {
        t: "p",
        v: "Grammar questions test rules you already know intuitively from reading and speaking English. The gap fill, editing, and sentence transformation questions are best prepared by doing practice exercises daily — not by studying grammar rules theoretically. Solve at least 3 grammar exercise sets per week in the 6 weeks before exams.",
      },
      {
        t: "h2",
        v: "Section D: Literature — The Highest-Marks Section",
      },
      {
        t: "ul",
        v: [
          "For extract questions — identify the speaker, context, and significance. These three always earn full marks.",
          "For long answer questions — use the P.E.E. structure: Point, Evidence (quote from text), Explanation.",
          "Learn 5–6 important quotes from each prose and poem — examiners reward textual evidence.",
          "For unseen poems — focus on tone, imagery, and central theme. Do not try to force meaning that isn't there.",
          "For value-based questions — relate the story to real life. CBSE rewards answers that connect literature to values and society.",
        ],
      },
      {
        t: "stat",
        v: "90",
        label: "marks is achievable in CBSE English for any student who masters the format — it's the most format-driven subject in boards",
      },
    ],
  },

  // ── 19 ─────────────────────────────────────────────────────────────────────
  {
    slug: "cbse-parents-guide-board-exam",
    title: "How Parents Can Help Their Child Prepare for CBSE Board Exams Without Adding Pressure",
    description:
      "Parents want to help but often don't know how — and sometimes make things worse without realising. This guide tells you exactly what to do and what to avoid during your child's CBSE board preparation.",
    category: "Parent Guide",
    classTarget: "All Classes",
    readTime: 6,
    publishDate: "2025-11-01",
    featured: false,
    keywords: [
      "how parents can help CBSE board exam preparation",
      "CBSE board exam parent guide",
      "how to support child in CBSE exams",
      "parent role in board exam preparation India",
      "CBSE exam stress tips for parents",
      "Class 10 12 board exam parenting tips",
    ],
    content: [
      {
        t: "p",
        v: "Board exam season is stressful for students — and for parents. The desire to help is real, but parental pressure, even when well-intentioned, is one of the leading causes of CBSE board exam underperformance. Here's how to be genuinely supportive.",
      },
      {
        t: "h2",
        v: "What Parents Do That Hurts More Than Helps",
      },
      {
        t: "ul",
        v: [
          "Constant reminders to study — 'Have you studied?' asked 10 times a day creates anxiety, not motivation. Ask once, then trust.",
          "Comparing with siblings, neighbours, or classmates — comparison damages self-confidence at the worst possible time.",
          "Discussing exam results before the exam — 'What will happen if you don't score well?' is the question that haunts students during papers.",
          "Taking away all breaks and relaxation — rest is not wasted time. The brain consolidates memory during rest periods.",
          "Hovering during study time — a student who feels watched cannot focus deeply.",
        ],
      },
      {
        t: "h2",
        v: "What Actually Helps",
      },
      {
        t: "ol",
        v: [
          "Create a calm study environment — a dedicated, quiet space with good lighting. No TV or loud noise in the house during study hours.",
          "Ensure good meals and adequate sleep — nutrition and 7–8 hours of sleep directly impact memory and performance. This is not negotiable.",
          "Ask what they need, not what they've done — 'Is there anything you need from me?' is far better than 'Why haven't you studied?'",
          "Talk about things other than studying — 30 minutes of normal conversation about films, news, or family releases the pressure valve.",
          "Be emotionally available without being intrusive — let them come to you when stressed. Don't force conversations.",
        ],
      },
      {
        t: "h2",
        v: "How to Handle Exam Day as a Parent",
      },
      {
        t: "p",
        v: "Your energy on exam morning transfers directly to your child. A calm, matter-of-fact morning — good breakfast, quiet confidence, no last-minute quizzing — is the greatest gift you can give on the day of the exam.",
      },
      {
        t: "ul",
        v: [
          "Wake them with enough time — no last-minute rush.",
          "Give a warm, nutritious breakfast — not a heavy meal, not skipped.",
          "Drive calmly, arrive early — stress in the car before an exam lingers inside.",
          "Say 'You've prepared well, you'll do fine' and mean it. Don't say 'Do your best' — it sounds like a warning.",
          "After the exam, ask 'How do you feel?' not 'How did it go?' or 'What did you write for question 5?'",
        ],
      },
      {
        t: "tip",
        v: "If your child seems overwhelmed or anxious, the best thing you can do is acknowledge it without minimising it. 'I know this feels hard. I'm here.' is more powerful than any advice you can give.",
      },
      {
        t: "h2",
        v: "The Role of AI Tools in Board Exam Preparation",
      },
      {
        t: "p",
        v: "Parents often ask whether their child should be using digital tools for board preparation. The answer is yes — selectively. AI-based platforms that evaluate answers against CBSE's actual marking scheme (rather than just providing model answers) give students personalised feedback that no textbook or tutor can match at scale. If your child is using such a tool correctly, it is a significant advantage.",
      },
    ],
  },

  // ── 20 ─────────────────────────────────────────────────────────────────────
  {
    slug: "cbse-class-10-biology-tips",
    title: "CBSE Class 10 Biology: How to Score Full Marks in Life Processes, Heredity, and Evolution",
    description:
      "Class 10 Biology chapters carry 25 marks in the CBSE board exam. Here's a chapter-wise breakdown of what to study, which diagrams to master, and how to write biology answers that earn full marks.",
    category: "Science Tricks",
    classTarget: "Class 8–10",
    readTime: 6,
    publishDate: "2025-12-01",
    featured: false,
    keywords: [
      "CBSE Class 10 Biology tips board exam",
      "Class 10 Life Processes CBSE important topics",
      "CBSE Class 10 Heredity Evolution marks",
      "how to score in Class 10 Biology CBSE",
      "Class 10 Biology diagrams CBSE board",
      "CBSE Biology answer writing Class 10",
    ],
    content: [
      {
        t: "p",
        v: "Biology in Class 10 Science carries 25 marks — exactly a quarter of the paper. The good news: Biology questions follow a very predictable pattern and reward students who know their diagrams and NCERT definitions well.",
      },
      {
        t: "h2",
        v: "Chapter-Wise Marks and Priority",
      },
      {
        t: "table",
        headers: ["Chapter", "Key Topics", "Approximate Marks"],
        rows: [
          ["Life Processes", "Nutrition, Respiration, Transportation, Excretion", "8–10"],
          ["Control & Coordination", "Nervous system, reflexes, hormones, tropic movements", "5–6"],
          ["Reproduction", "Asexual and sexual reproduction in plants and animals", "5–6"],
          ["Heredity & Evolution", "Mendel's laws, sex determination, evolution theories", "5–6"],
        ],
      },
      {
        t: "h2",
        v: "The 5 Diagrams You Cannot Afford to Skip",
      },
      {
        t: "ul",
        v: [
          "Human heart — with all four chambers, valves, and blood flow direction labelled.",
          "Nephron — the functional unit of the kidney, with all tubule sections and their functions.",
          "Human digestive system — mouth to anus with each organ and its digestive role.",
          "Cross section of a leaf — showing palisade mesophyll, guard cells, and stomata.",
          "Monohybrid cross — Punnett square for one trait with correct dominance notation.",
        ],
      },
      {
        t: "p",
        v: "These five diagrams appear almost every year. A well-labelled diagram in Biology is worth 1–2 marks. That means just knowing these five drawings could secure you up to 10 marks.",
      },
      {
        t: "h2",
        v: "How to Write Biology Answers That Score Full Marks",
      },
      {
        t: "ol",
        v: [
          "Always use NCERT definitions exactly — 'Nutrition is the process by which organisms obtain and utilise food' earns more than a paraphrase.",
          "Number every point in a multi-mark answer — never write biology answers as paragraphs for 3+ mark questions.",
          "Draw a diagram whenever the concept has a visual element — even if the question doesn't specifically ask for it, a relevant diagram earns bonus understanding marks.",
          "For process questions, describe events in chronological order — 'First... Then... Finally...'",
          "For comparison questions, use a two-column table format — examiners can check differences instantly.",
        ],
      },
      {
        t: "tip",
        v: "For Life Processes, make sure you know the difference between aerobic and anaerobic respiration in complete detail — it has appeared every year for the last 8 years in some form.",
      },
      {
        t: "h2",
        v: "Heredity and Evolution — How to Tackle Genetics Questions",
      },
      {
        t: "p",
        v: "Genetics questions panic students but are actually very structured. If you know how to draw a Punnett square and understand dominant vs recessive notation, you can answer any Class 10 genetics question. The key terms CBSE expects: phenotype, genotype, F1 generation, F2 generation, dominant, recessive, homozygous, heterozygous. Know these definitions from NCERT.",
      },
    ],
  },

  // ── 21 ─────────────────────────────────────────────────────────────────────
  {
    slug: "cbse-class-12-physical-chemistry-numericals",
    title: "CBSE Class 12 Physical Chemistry: How to Solve Numericals Quickly and Correctly",
    description:
      "Physical Chemistry numericals from Electrochemistry, Chemical Kinetics, and Solutions are worth over 15 marks in CBSE Class 12. Here's a chapter-wise formula guide and solving strategy.",
    category: "Chemistry Tips",
    classTarget: "Class 11–12",
    readTime: 7,
    publishDate: "2026-01-08",
    featured: false,
    keywords: [
      "CBSE Class 12 Physical Chemistry numericals",
      "Class 12 Electrochemistry numericals CBSE",
      "Chemical Kinetics CBSE Class 12 tips",
      "CBSE Class 12 Solutions chapter numericals",
      "how to solve Physical Chemistry problems Class 12",
      "CBSE 12 Chemistry numericals strategy",
    ],
    content: [
      {
        t: "p",
        v: "Physical Chemistry is where most Class 12 Chemistry marks are lost and where they can most reliably be recovered. The numericals follow fixed formulas and fixed patterns. A student who knows the formulas and practises the application consistently will score full marks in this section.",
      },
      {
        t: "h2",
        v: "Chapter-Wise Formula Priority",
      },
      {
        t: "table",
        headers: ["Chapter", "Most Tested Formulas", "Marks"],
        rows: [
          ["Electrochemistry", "Nernst equation, cell EMF, conductivity, Faraday's laws", "4–6"],
          ["Chemical Kinetics", "Rate law, order of reaction, Arrhenius equation, half-life", "4–5"],
          ["Solutions", "Raoult's law, molality, elevation in boiling point, depression in freezing point", "4–5"],
          ["Solid State", "Packing efficiency, density of unit cell, defects", "3"],
          ["Surface Chemistry", "Freundlich adsorption isotherm (qualitative mostly)", "2"],
        ],
      },
      {
        t: "h2",
        v: "The Standard 4-Step Numerical Method",
      },
      {
        t: "ol",
        v: [
          "Identify the chapter — which concept is this numerical testing? Immediately recall the formula.",
          "Write 'Given' — list all quantities with symbols and SI units.",
          "Write 'Formula' — write the complete formula you will apply. Even if your answer is wrong, a correct formula earns partial marks.",
          "Substitute and solve — show every algebraic step. Do not skip. Final answer must include units.",
        ],
      },
      {
        t: "h2",
        v: "Electrochemistry — The Highest-Value Chapter",
      },
      {
        t: "ul",
        v: [
          "Cell EMF = E°cathode − E°anode — learn this formula and the sign convention.",
          "Nernst equation: E = E° − (RT/nF)lnQ — know how to apply at standard and non-standard conditions.",
          "Faraday's First Law: m = ZIt — mass deposited in electrolysis. Simple substitution but high marks.",
          "Kohlrausch's Law — molar conductivity at infinite dilution is additive. Practise 4–5 standard problems.",
        ],
      },
      {
        t: "h2",
        v: "Chemical Kinetics — The Most Predictable Chapter",
      },
      {
        t: "p",
        v: "Chemical Kinetics questions in CBSE follow a rotation of about 6 question types: writing rate expressions, finding order of reaction from data, applying the integrated rate law, calculating half-life, applying Arrhenius equation, and effect of temperature on rate. Solve 3 previous year numericals from each type and you will recognise every kinetics question on the actual paper.",
      },
      {
        t: "tip",
        v: "Create a 'formula card' for each Physical Chemistry chapter — a small index card with all formulas, SI units, and one example. Review these cards every morning in the last 3 weeks.",
      },
      {
        t: "stat",
        v: "15",
        label: "marks available from Physical Chemistry numericals alone — all formulaic and fully practisable",
      },
    ],
  },

  // ── 22 ─────────────────────────────────────────────────────────────────────
  {
    slug: "cbse-class-10-maths-full-marks",
    title: "How to Score Full Marks in CBSE Class 10 Maths Board Exam: Chapter-Wise Guide",
    description:
      "Class 10 Maths is the one board exam where full marks are genuinely achievable. Here's the chapter-wise strategy, common mark-losers, and the exact approach to scoring 100/100.",
    category: "Maths Tips",
    classTarget: "Class 8–10",
    readTime: 7,
    publishDate: "2026-01-20",
    featured: false,
    keywords: [
      "how to score full marks CBSE Class 10 Maths",
      "CBSE Class 10 Maths board exam strategy",
      "Class 10 Maths important chapters CBSE 2026",
      "score 100 in Class 10 Maths CBSE",
      "CBSE Class 10 Maths chapter wise marks",
      "Class 10 board exam Maths tips",
    ],
    content: [
      {
        t: "p",
        v: "Class 10 Maths is the only board exam subject where scoring 100/100 is a realistic and regularly achieved goal — not just for extraordinary students, but for students who prepare systematically. The paper is fully deterministic: if you know the content and the method, every mark is available.",
      },
      {
        t: "h2",
        v: "Chapter-Wise Marks Distribution",
      },
      {
        t: "table",
        headers: ["Unit", "Chapters", "Marks"],
        rows: [
          ["Number Systems", "Real Numbers", "6"],
          ["Algebra", "Polynomials, Linear Equations, Quadratic Equations, Arithmetic Progressions", "20"],
          ["Coordinate Geometry", "Coordinate Geometry", "6"],
          ["Geometry", "Triangles, Circles, Constructions", "15"],
          ["Trigonometry", "Introduction to Trigonometry, Applications of Trigonometry", "12"],
          ["Mensuration", "Areas Related to Circles, Surface Areas and Volumes", "10"],
          ["Statistics & Probability", "Statistics, Probability", "11"],
        ],
      },
      {
        t: "h2",
        v: "The Chapters You Must Absolutely Master",
      },
      {
        t: "ul",
        v: [
          "Quadratic Equations — appears in every paper, in multiple forms. Master all three solving methods: factorisation, completing the square, and quadratic formula.",
          "Arithmetic Progressions — predictable question types every year. Learn nth term and sum formulas by heart.",
          "Triangles (Similarity) — theorem proofs and applications carry 6–8 marks. Know Thales' theorem proof perfectly.",
          "Circles (Tangent Properties) — tangent length and angle in alternate segment appear every year. Simple theorems, high marks.",
          "Trigonometry Identities — sin²θ + cos²θ = 1 and its derived forms unlock dozens of questions.",
          "Surface Areas and Volumes — combination shapes appear every year. Calculate step by step and show all working.",
        ],
      },
      {
        t: "h2",
        v: "Why Students Lose Marks in Class 10 Maths (Even When They Know the Content)",
      },
      {
        t: "ol",
        v: [
          "Not showing construction steps — geometry constructions carry marks for each step. Write 'Step 1, Step 2...' explicitly.",
          "Missing the proof conclusion — a geometry proof without 'Hence proved' or a QED statement is marked incomplete.",
          "Wrong formula selection — confusing curved surface area with total surface area is a one-mark mistake that takes 30 seconds to avoid.",
          "Leaving cases incomplete in probability — always check: 'Have I accounted for all outcomes?'",
          "Arithmetic errors in long calculations — write neatly, work slowly, recheck the final answer.",
        ],
      },
      {
        t: "tip",
        v: "The students who score 100 in Class 10 Maths have solved every single NCERT exercise, example, and additional question — plus the last 5 years of CBSE papers. That combination leaves no surprises on exam day.",
      },
      {
        t: "stat",
        v: "100",
        label: "marks is a realistic target in Class 10 Maths — CBSE toppers achieve it every year with systematic preparation",
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
