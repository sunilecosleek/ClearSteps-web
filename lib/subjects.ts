// ── Types ────────────────────────────────────────────────────────────────────

export interface Chapter {
  name: string;
  marks: number;
  difficulty: "Easy" | "Medium" | "Hard";
  keyTopics: string[];
}

export interface SubjectPage {
  slug: string;           // URL: /cbse-class-10-maths
  subject: string;        // "Mathematics"
  classLabel: string;     // "Class 10"
  classNum: number;       // 10
  theoryMarks: number;    // 80
  practicalMarks: number; // 20
  totalMarks: number;     // 100
  examDuration: string;   // "3 hours"
  color: string;          // tailwind color name
  headline: string;
  subheadline: string;
  description: string;
  keywords: string[];
  chapters: Chapter[];
  importantTopics: string[];
  studyStrategy: string[];
  relatedArticleSlugs: string[]; // slugs from lib/insights.ts
}

// ── Subject Data ─────────────────────────────────────────────────────────────

export const subjects: SubjectPage[] = [
  // ── Class 10 Maths ──────────────────────────────────────────────────────
  {
    slug: "cbse-class-10-maths",
    subject: "Mathematics",
    classLabel: "Class 10",
    classNum: 10,
    theoryMarks: 80,
    practicalMarks: 20,
    totalMarks: 100,
    examDuration: "3 hours",
    color: "amber",
    headline: "CBSE Class 10 Maths Board Exam Preparation",
    subheadline: "The only CBSE subject where 100/100 is genuinely achievable",
    description:
      "Complete chapter-wise preparation guide for CBSE Class 10 Mathematics board exam. Chapter weightage, important topics, exam strategy, and study plan — everything in one place.",
    keywords: [
      "CBSE Class 10 Maths preparation",
      "CBSE Class 10 Maths board exam",
      "CBSE Class 10 Maths important chapters",
      "CBSE Class 10 Maths chapter wise marks",
      "how to score 90 in CBSE Class 10 Maths",
      "CBSE Class 10 Maths exam tips",
      "CBSE Class 10 Maths study plan",
      "Class 10 Maths board exam 2026",
      "CBSE Maths Class 10 mock test",
      "CBSE Class 10 Maths syllabus marks distribution",
    ],
    chapters: [
      { name: "Real Numbers", marks: 6, difficulty: "Easy", keyTopics: ["Euclid's Division Lemma", "Fundamental Theorem of Arithmetic", "Irrational Numbers"] },
      { name: "Polynomials", marks: 6, difficulty: "Easy", keyTopics: ["Zeros of Polynomials", "Relationship between Zeros and Coefficients", "Division Algorithm"] },
      { name: "Pair of Linear Equations", marks: 8, difficulty: "Medium", keyTopics: ["Graphical Method", "Substitution Method", "Elimination Method", "Cross Multiplication"] },
      { name: "Quadratic Equations", marks: 8, difficulty: "Medium", keyTopics: ["Factorisation", "Completing the Square", "Discriminant", "Nature of Roots"] },
      { name: "Arithmetic Progressions", marks: 5, difficulty: "Medium", keyTopics: ["nth Term", "Sum of n Terms", "Finding Common Difference"] },
      { name: "Triangles", marks: 6, difficulty: "Medium", keyTopics: ["Basic Proportionality Theorem", "AA/SSS/SAS Similarity", "Pythagoras Theorem"] },
      { name: "Coordinate Geometry", marks: 6, difficulty: "Easy", keyTopics: ["Distance Formula", "Section Formula", "Area of Triangle"] },
      { name: "Trigonometry & Applications", marks: 12, difficulty: "Medium", keyTopics: ["Trigonometric Ratios", "Trigonometric Identities", "Heights and Distances"] },
      { name: "Circles", marks: 5, difficulty: "Easy", keyTopics: ["Tangent to a Circle", "Number of Tangents from External Point"] },
      { name: "Surface Area & Volume", marks: 10, difficulty: "Medium", keyTopics: ["Cone, Cylinder, Sphere", "Frustum of Cone", "Combination of Solids"] },
      { name: "Statistics", marks: 7, difficulty: "Easy", keyTopics: ["Mean", "Median", "Mode", "Cumulative Frequency"] },
      { name: "Probability", marks: 4, difficulty: "Easy", keyTopics: ["Classical Probability", "Equally Likely Outcomes"] },
    ],
    importantTopics: [
      "Euclid's Division Lemma proof",
      "Quadratic equations — all 3 methods",
      "Trigonometric identities",
      "Heights and distances problems",
      "Surface area and volume of combined solids",
      "Median from grouped data (Step deviation method)",
      "Coordinate geometry — all 3 formulas",
      "Similarity theorems with proofs",
    ],
    studyStrategy: [
      "Start with Easy chapters: Real Numbers, Polynomials, Circles, Statistics, Probability — these carry 28 marks with minimal effort",
      "Master all 3 methods for Quadratic Equations — CBSE often tests a specific method",
      "Trigonometry carries 12 marks — highest single unit. Practice all identities from memory",
      "Always write: Given → Formula → Substitution → Step-by-step solution → Answer with units",
      "Attempt 2 full mock papers timed to 3 hours. Upload answers for AI evaluation to check step marking",
    ],
    relatedArticleSlugs: [
      "score-90-cbse-class-10-maths",
      "how-cbse-marking-scheme-works",
      "cbse-answer-writing-format",
      "why-cbse-students-lose-marks",
    ],
  },

  // ── Class 12 Physics ─────────────────────────────────────────────────────
  {
    slug: "cbse-class-12-physics",
    subject: "Physics",
    classLabel: "Class 12",
    classNum: 12,
    theoryMarks: 70,
    practicalMarks: 30,
    totalMarks: 100,
    examDuration: "3 hours",
    color: "sky",
    headline: "CBSE Class 12 Physics Board Exam Preparation",
    subheadline: "Strategic preparation for the most feared CBSE board subject",
    description:
      "Complete chapter-wise preparation guide for CBSE Class 12 Physics board exam. Unit-wise marks, most important derivations, year-wise topic analysis, and a proven 6-week study plan.",
    keywords: [
      "CBSE Class 12 Physics preparation",
      "CBSE Class 12 Physics board exam",
      "CBSE Class 12 Physics important topics",
      "CBSE Class 12 Physics chapter wise marks",
      "how to score 90 in CBSE Class 12 Physics",
      "CBSE Physics important derivations Class 12",
      "Class 12 Physics board exam 2026",
      "CBSE Class 12 Physics mock test",
      "CBSE Physics Class 12 study plan",
      "CBSE Class 12 Physics syllabus marks distribution",
    ],
    chapters: [
      { name: "Electric Charges & Fields", marks: 5, difficulty: "Hard", keyTopics: ["Coulomb's Law", "Electric Field", "Gauss's Law", "Electric Dipole"] },
      { name: "Electrostatic Potential & Capacitance", marks: 3, difficulty: "Hard", keyTopics: ["Potential Energy", "Capacitors", "Dielectrics"] },
      { name: "Current Electricity", marks: 7, difficulty: "Medium", keyTopics: ["Ohm's Law", "Kirchhoff's Laws", "Wheatstone Bridge", "Potentiometer"] },
      { name: "Magnetic Effects of Current", marks: 5, difficulty: "Medium", keyTopics: ["Biot-Savart Law", "Ampere's Law", "Moving Coil Galvanometer"] },
      { name: "Magnetism & Matter", marks: 3, difficulty: "Medium", keyTopics: ["Bar Magnet", "Magnetic Properties", "Hysteresis"] },
      { name: "Electromagnetic Induction", marks: 4, difficulty: "Medium", keyTopics: ["Faraday's Laws", "Lenz's Law", "Self & Mutual Inductance"] },
      { name: "Alternating Current", marks: 4, difficulty: "Hard", keyTopics: ["RMS Values", "LCR Circuit", "Resonance", "Power in AC"] },
      { name: "Electromagnetic Waves", marks: 3, difficulty: "Easy", keyTopics: ["Displacement Current", "EM Spectrum", "Properties of EM Waves"] },
      { name: "Ray Optics", marks: 8, difficulty: "Medium", keyTopics: ["Mirror Formula", "Lens Formula", "TIR", "Optical Instruments"] },
      { name: "Wave Optics", marks: 6, difficulty: "Hard", keyTopics: ["Huygens Principle", "Young's Double Slit", "Diffraction", "Polarisation"] },
      { name: "Dual Nature of Radiation", marks: 4, difficulty: "Medium", keyTopics: ["Photoelectric Effect", "Einstein's Equation", "de Broglie Wavelength"] },
      { name: "Atoms & Nuclei", marks: 6, difficulty: "Medium", keyTopics: ["Bohr's Model", "Hydrogen Spectrum", "Nuclear Binding Energy", "Radioactivity"] },
      { name: "Semiconductor Electronics", marks: 7, difficulty: "Easy", keyTopics: ["p-n Junction", "Logic Gates", "Transistor", "Zener Diode"] },
    ],
    importantTopics: [
      "Derivation using Gauss's Law — Electric field due to infinite wire, plane, shell",
      "Kirchhoff's Laws — numerical with 2–3 loops",
      "Biot-Savart Law — field due to circular loop",
      "Faraday's Laws — all 3 forms",
      "Mirror formula and Lens formula — ray diagram + numerical",
      "Young's Double Slit — fringe width derivation",
      "Photoelectric effect — Einstein's equation and graph",
      "Truth tables — AND, OR, NOT, NAND, NOR, XOR",
    ],
    studyStrategy: [
      "Optics carries 14 marks — most in any unit. Start here. Master all ray diagrams cold",
      "Learn derivations first, then numericals. Derivations are fully predictable year after year",
      "For every numerical: Given → Formula → Substitution → Answer with correct SI units",
      "Semiconductors (7 marks) is the easiest high-weight chapter. Master logic gates and p-n junction in 2 days",
      "Week 5–6: only mock papers. Upload for AI evaluation — Physics marking scheme is very specific about steps",
    ],
    relatedArticleSlugs: [
      "cbse-class-12-physics-important-topics",
      "how-cbse-marking-scheme-works",
      "30-day-cbse-board-exam-plan",
      "cbse-answer-writing-format",
    ],
  },

  // ── Class 12 Chemistry ───────────────────────────────────────────────────
  {
    slug: "cbse-class-12-chemistry",
    subject: "Chemistry",
    classLabel: "Class 12",
    classNum: 12,
    theoryMarks: 70,
    practicalMarks: 30,
    totalMarks: 100,
    examDuration: "3 hours",
    color: "coral",
    headline: "CBSE Class 12 Chemistry Board Exam Preparation",
    subheadline: "Master Physical, Organic and Inorganic Chemistry for boards",
    description:
      "Complete chapter-wise preparation guide for CBSE Class 12 Chemistry board exam. Unit-wise marks distribution, key reactions to remember, and a strategic study plan for 90+ scores.",
    keywords: [
      "CBSE Class 12 Chemistry preparation",
      "CBSE Class 12 Chemistry board exam",
      "CBSE Class 12 Chemistry important chapters",
      "CBSE Class 12 Chemistry chapter wise marks",
      "how to score 90 in CBSE Class 12 Chemistry",
      "CBSE Chemistry important reactions Class 12",
      "Class 12 Chemistry board exam 2026",
      "CBSE Class 12 Chemistry mock test",
      "CBSE Chemistry Class 12 study plan",
      "CBSE Class 12 Chemistry organic inorganic physical",
    ],
    chapters: [
      { name: "Solid State", marks: 4, difficulty: "Medium", keyTopics: ["Types of Solids", "Crystal Systems", "Defects", "Electrical & Magnetic Properties"] },
      { name: "Solutions", marks: 5, difficulty: "Medium", keyTopics: ["Raoult's Law", "Colligative Properties", "van't Hoff Factor"] },
      { name: "Electrochemistry", marks: 5, difficulty: "Hard", keyTopics: ["Nernst Equation", "Kohlrausch Law", "Electrolysis", "Fuel Cells"] },
      { name: "Chemical Kinetics", marks: 5, difficulty: "Medium", keyTopics: ["Rate Laws", "Order of Reaction", "Arrhenius Equation", "Half Life"] },
      { name: "Surface Chemistry", marks: 4, difficulty: "Easy", keyTopics: ["Adsorption", "Catalysis", "Colloids", "Emulsions"] },
      { name: "General Principles of Isolation", marks: 3, difficulty: "Easy", keyTopics: ["Metallurgy", "Refining Methods"] },
      { name: "p-Block Elements", marks: 8, difficulty: "Hard", keyTopics: ["Group 15, 16, 17, 18", "Structures", "Preparation & Properties"] },
      { name: "d & f Block Elements", marks: 5, difficulty: "Medium", keyTopics: ["Transition Metals", "Lanthanoids & Actinoids", "Complex Compounds"] },
      { name: "Coordination Compounds", marks: 3, difficulty: "Hard", keyTopics: ["Werner Theory", "IUPAC Nomenclature", "Isomerism", "VBT"] },
      { name: "Haloalkanes & Haloarenes", marks: 4, difficulty: "Medium", keyTopics: ["SN1, SN2 Reactions", "Elimination", "Haloarene Properties"] },
      { name: "Alcohols, Phenols & Ethers", marks: 4, difficulty: "Medium", keyTopics: ["Preparation", "Properties", "Reactions of Phenol"] },
      { name: "Aldehydes, Ketones & Carboxylic Acids", marks: 6, difficulty: "Hard", keyTopics: ["Nucleophilic Addition", "Aldol Condensation", "Cannizzaro Reaction"] },
      { name: "Amines & Biomolecules", marks: 5, difficulty: "Medium", keyTopics: ["Basicity", "Diazonium Salts", "Proteins", "Nucleic Acids"] },
      { name: "Polymers & Chemistry in Everyday Life", marks: 4, difficulty: "Easy", keyTopics: ["Classification", "Preparation", "Drug-Receptor Interaction"] },
    ],
    importantTopics: [
      "Nernst equation — derivation and numerical",
      "Kohlrausch Law — calculation of limiting molar conductivity",
      "Colligative properties — all 4 types with formulas",
      "p-Block structures — XeF2, XeF4, XeO3, PCl5, SF6",
      "Named reactions — Aldol, Cannizzaro, Reimer-Tiemann, Kolbe",
      "IUPAC nomenclature of coordination compounds",
      "Mechanism of SN1 and SN2 reactions",
      "Polymers — addition vs condensation with examples",
    ],
    studyStrategy: [
      "Split the syllabus into 3 parts: Physical (chapters 1–5), Inorganic (6–9), Organic (10–14). Prepare each separately",
      "Physical Chemistry is calculation-heavy — practice 5 numericals per chapter minimum",
      "Inorganic requires pure memorization — make a one-page summary per chapter of reactions and properties",
      "Organic reactions: learn the mechanism, not just the product. CBSE often asks 'why' and 'how'",
      "Do 2 full mock papers under timed conditions. AI evaluation catches keyword errors in naming and mechanism writing",
    ],
    relatedArticleSlugs: [
      "how-cbse-marking-scheme-works",
      "why-cbse-students-lose-marks",
      "30-day-cbse-board-exam-plan",
      "cbse-answer-writing-format",
    ],
  },

  // ── Class 10 Science ─────────────────────────────────────────────────────
  {
    slug: "cbse-class-10-science",
    subject: "Science",
    classLabel: "Class 10",
    classNum: 10,
    theoryMarks: 80,
    practicalMarks: 20,
    totalMarks: 100,
    examDuration: "3 hours",
    color: "teal",
    headline: "CBSE Class 10 Science Board Exam Preparation",
    subheadline: "Physics, Chemistry and Biology — one complete board strategy",
    description:
      "Complete chapter-wise preparation guide for CBSE Class 10 Science board exam. Unit-wise marks, important diagrams, key reactions, and study strategy for all three sections.",
    keywords: [
      "CBSE Class 10 Science preparation",
      "CBSE Class 10 Science board exam",
      "CBSE Class 10 Science important chapters",
      "CBSE Class 10 Science chapter wise marks",
      "how to score 90 in CBSE Class 10 Science",
      "CBSE Science Class 10 important diagrams",
      "Class 10 Science board exam 2026",
      "CBSE Class 10 Science mock test",
      "CBSE Science Class 10 study plan",
      "CBSE Class 10 Science Physics Chemistry Biology",
    ],
    chapters: [
      { name: "Chemical Reactions & Equations", marks: 6, difficulty: "Easy", keyTopics: ["Types of Reactions", "Balancing Equations", "Oxidation & Reduction"] },
      { name: "Acids, Bases & Salts", marks: 6, difficulty: "Easy", keyTopics: ["pH Scale", "Indicators", "Common Salts", "Neutralisation"] },
      { name: "Metals & Non-metals", marks: 6, difficulty: "Medium", keyTopics: ["Reactivity Series", "Ionic Bond Formation", "Extraction of Metals", "Corrosion"] },
      { name: "Carbon & Its Compounds", marks: 6, difficulty: "Medium", keyTopics: ["Covalent Bonds", "Functional Groups", "Homologous Series", "Soaps & Detergents"] },
      { name: "Life Processes", marks: 10, difficulty: "Hard", keyTopics: ["Nutrition", "Respiration", "Transportation", "Excretion", "Diagrams"] },
      { name: "Control & Coordination", marks: 7, difficulty: "Medium", keyTopics: ["Nervous System", "Reflex Arc", "Hormones", "Diagram of Brain"] },
      { name: "Reproduction", marks: 8, difficulty: "Medium", keyTopics: ["Asexual Reproduction", "Human Reproductive System", "Fertilisation", "Diagrams"] },
      { name: "Heredity & Evolution", marks: 5, difficulty: "Medium", keyTopics: ["Mendel's Laws", "Sex Determination", "Evolution Stages"] },
      { name: "Light — Reflection & Refraction", marks: 7, difficulty: "Easy", keyTopics: ["Mirror Formula", "Lens Formula", "Power of Lens", "Ray Diagrams"] },
      { name: "Human Eye & Colourful World", marks: 5, difficulty: "Easy", keyTopics: ["Defects of Vision", "Scattering of Light", "Dispersion", "Rainbow"] },
      { name: "Electricity", marks: 7, difficulty: "Medium", keyTopics: ["Ohm's Law", "Series & Parallel Circuits", "Power", "Heating Effect"] },
      { name: "Magnetic Effects of Current", marks: 5, difficulty: "Easy", keyTopics: ["Electromagnetic Induction", "AC & DC Generator", "Motor"] },
      { name: "Our Environment & Management", marks: 4, difficulty: "Easy", keyTopics: ["Food Chain", "Ozone Layer", "Waste Management", "Ecosystems"] },
    ],
    importantTopics: [
      "Life Processes diagrams — Human heart, nephron, digestive system, respiratory system",
      "Reflex arc diagram — every year",
      "Human reproductive system — male and female",
      "Mirror formula and lens formula with ray diagrams",
      "Electricity — series/parallel circuit numericals",
      "Balancing chemical equations — all types",
      "Reactivity series — order and reactions",
      "Mendel's cross — monohybrid and dihybrid",
    ],
    studyStrategy: [
      "Split Science into 3 parts: Physics (Light, Electricity, Magnetic Effects), Chemistry (Chapters 1–4), Biology (Chapters 5–8). Each section needs a different study approach",
      "Biology = diagrams. Every important process has a diagram. Draw and label from memory daily. Diagrams carry 30–40% of Biology marks",
      "Chemistry = reactions and equations. Balance every equation you study. CBSE gives 1 mark per correctly balanced equation",
      "Physics = numericals + ray diagrams. Practice mirror and lens problems with all 3 cases: real/virtual, magnified/diminished",
      "Mock papers reveal which section is weakest. Upload for AI evaluation to catch diagram labelling mistakes before the exam",
    ],
    relatedArticleSlugs: [
      "why-cbse-students-lose-marks",
      "how-cbse-marking-scheme-works",
      "cbse-answer-writing-format",
      "30-day-cbse-board-exam-plan",
    ],
  },
];

// ── Helpers ──────────────────────────────────────────────────────────────────

export function getSubjectBySlug(slug: string): SubjectPage | undefined {
  return subjects.find((s) => s.slug === slug);
}

export const subjectSlugs = subjects.map((s) => s.slug);
