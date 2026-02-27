export const marqueeItems = [
  "CBSE Class 5–12",
  "Concept Videos",
  "Topic Notes",
  "Topic Quizzes",
  "Mock Papers",
  "AI Answer Evaluation",
  "Parent Dashboard",
  "Progress Tracking",
  "Handwriting Recognition",
  "CBSE Marking Scheme",
  "Class 10 Boards",
  "Class 12 Boards",
];

export const journeySteps = [
  { num: 1, title: "Pick a topic", sub: "Subject → Chapter → Topic", color: "amber" },
  { num: 2, title: "Watch & Read", sub: "Concept video + clear notes", color: "teal" },
  { num: 3, title: "Take a quiz", sub: "Test your understanding instantly", color: "coral" },
  { num: 4, title: "Attempt mock papers", sub: "CBSE-pattern. On real paper.", color: "violet" },
  { num: 5, title: "Upload your answers", sub: "Photo of your answer sheet", color: "sky" },
  { num: 6, title: "Get AI evaluation", sub: "Marked like a real CBSE examiner", badge: "Only us", color: "green" },
];

export const problemCards = [
  {
    icon: "book-open",
    title: "Reading notes isn't enough",
    body: "Reading builds passive memory. CBSE exams test active recall under pressure. Without regular writing practice, knowledge stays theoretical — it doesn't translate to marks.",
    accent: "amber",
  },
  {
    icon: "pencil",
    title: "Writing without feedback goes nowhere",
    body: "Most students write answers and never find out if they wrote them correctly. Without feedback on format, keywords, and structure, the same mistakes repeat — exam after exam.",
    accent: "teal",
  },
  {
    icon: "target",
    title: "Clear Steps closes the loop",
    body: "Learn the concept. Write the answer. Get it evaluated by AI against the real CBSE marking scheme. Know exactly what to fix. Repeat. That's the loop that actually improves scores.",
    accent: "coral",
  },
];

export const howSteps = [
  {
    num: 1,
    tag: "Step 01",
    tagColor: "amber",
    title: "Pick your exact topic",
    body: "No overwhelming syllabus wall. Pick your subject, then your chapter, then the exact topic you want to focus on today. Precise. Fast. No friction.",
    vis: "drill",
  },
  {
    num: 2,
    tag: "Step 02",
    tagColor: "teal",
    title: "Actually learn the topic",
    body: "A short concept video and clear text explanation — both written specifically for CBSE, for your class. Build real understanding, not just familiarity.",
    vis: "learn",
    reverse: true,
  },
  {
    num: 3,
    tag: "Step 03",
    tagColor: "coral",
    title: "Prove you got it — instantly",
    body: "Right after learning, take a quick topic quiz. If you understood it, great — move on with confidence. If you didn't, find out now — not halfway through the exam paper.",
    vis: "quiz",
  },
  {
    num: 4,
    tag: "Step 04",
    tagColor: "violet",
    title: "Attempt a real mock paper",
    body: "Full CBSE-pattern mock papers. Grab a pen, sit down, and write your answers on real paper — just like the actual board exam. No shortcuts. Real practice.",
    vis: "paper",
    reverse: true,
  },
  {
    num: 5,
    tag: "Step 05",
    tagColor: "sky",
    title: "Upload your answer sheet",
    body: "Done writing? Take a photo of your answer sheet and upload it. That's all you need to do. Our AI takes it from here — no waiting, no guessing.",
    vis: "upload",
  },
  {
    num: 6,
    tag: "Step 06",
    tagColor: "green",
    title: "AI marks it like a real examiner",
    body: "This is where Clear Steps goes further than anyone else. Our AI reads your handwritten answers and evaluates them against the official CBSE marking scheme — giving you marks, feedback, and exactly what to write next time for full marks.",
    vis: "eval",
    reverse: true,
  },
];

export const features = [
  {
    icon: "book-open",
    title: "Topic-by-Topic Learning",
    body: "Subject → Chapter → Topic. Study exactly what you need today, not everything at once.",
    accent: "amber",
    wide: false,
  },
  {
    icon: "video",
    title: "Concept Videos",
    body: "Short, CBSE-aligned concept videos for every topic. Made for the exam, not for views.",
    accent: "teal",
    wide: false,
  },
  {
    icon: "document-text",
    title: "Text Explanations",
    body: "Crisp, exam-focused notes written to the CBSE syllabus.",
    accent: "coral",
    wide: false,
  },
  {
    icon: "check-circle",
    title: "Topic Quizzes",
    body: "Test yourself right after learning. Instant feedback on every question.",
    accent: "violet",
    wide: false,
  },
  {
    icon: "document",
    title: "CBSE Mock Papers",
    body: "Full-length, pattern-accurate mock papers. The closest thing to the real exam.",
    accent: "sky",
    wide: false,
  },
  {
    icon: "chart-bar",
    title: "Progress Dashboard",
    body: "Subject-wise scores, chapter performance, improvement trends — always visible.",
    accent: "green",
    wide: false,
  },
];

export const testimonials = [
  {
    result: "72% → 91% in 6 weeks",
    resultColor: "teal",
    stars: 5,
    quote: "I thought I was studying fine. Then Clear Steps showed me I'd been writing 5-mark answers without any structure — losing 2 marks every single time. Fixed that in a week. The concept videos actually made me understand the chapter, not just memorise it.",
    name: "Riya Sharma",
    role: "Class 10 · CBSE · Delhi",
    avatar: "R",
    featured: false,
  },
  {
    result: "Parent Dashboard changed everything",
    resultColor: "amber",
    stars: 5,
    quote: "I used to ask my son 'Did you study?' every day and get the same 'Yes, Ma' answer. Now I log in to the parent dashboard and I can see exactly what he practised, what he scored, and where he's weak. I finally feel like I know what's happening.",
    name: "Anita Reddy",
    role: "Parent · Class 12 · Hyderabad",
    avatar: "A",
    featured: true,
  },
  {
    result: "Mock + AI Eval → 68 to 88 in boards",
    resultColor: "coral",
    stars: 5,
    quote: "The mock paper and AI evaluation combo is unreal. I attempted 3 full mock papers, uploaded all three, got detailed AI feedback each time, and by the third one I knew exactly what the examiner expected. Went from 68 to 88 in Physics boards.",
    name: "Pranav Kulkarni",
    role: "Class 12 · CBSE · Pune",
    avatar: "P",
    featured: false,
  },
];

export const pricingPlans = [
  {
    name: "Free",
    price: "0",
    note: "Forever free · No card needed",
    popular: false,
    features: [
      { text: "5 AI evaluations per day", included: true },
      { text: "2 subjects", included: true },
      { text: "Topic quizzes", included: true },
      { text: "Basic feedback", included: true },
      { text: "Mock papers", included: false },
      { text: "Parent dashboard", included: false },
    ],
    cta: "Start Free",
    ctaStyle: "outline",
  },
  {
    name: "Scholar",
    badge: "✦ Most Popular",
    price: "299",
    note: "Everything a board student needs",
    popular: true,
    features: [
      { text: "Unlimited AI evaluations", included: true },
      { text: "All subjects", included: true },
      { text: "Full mock paper library", included: true },
      { text: "Detailed marking feedback", included: true },
      { text: "Progress dashboard", included: true },
      { text: "Parent dashboard included", included: true },
    ],
    cta: "Buy for My Child →",
    ctaStyle: "primary",
  },
  {
    name: "Family",
    price: "499",
    note: "For families with 2–3 children",
    popular: false,
    features: [
      { text: "Everything in Scholar", included: true },
      { text: "3 student accounts", included: true },
      { text: "Family overview dashboard", included: true },
      { text: "Priority support", included: true },
      { text: "WhatsApp progress alerts", included: true },
    ],
    cta: "Buy for My Children →",
    ctaStyle: "outline",
  },
];

export const faqItems = [
  {
    q: "How does the AI evaluation actually work?",
    a: "Your child writes answers on paper, takes a photo, and uploads it. Our AI reads the handwriting, understands the answer, and marks it against the official CBSE marking scheme — the same one real examiners use. It then gives a mark breakdown with specific feedback on exactly what was missing.",
  },
  {
    q: "Is Clear Steps just for board exam students?",
    a: "No — Clear Steps is for Class 5 through 12. For younger classes, it's a complete learning tool for building subject knowledge through videos, notes, and quizzes. For Class 9–12, the mock paper and AI evaluation features become especially powerful for board preparation.",
  },
  {
    q: "Is this a replacement for their tuition teacher?",
    a: "No, and we're honest about that. Clear Steps is a practice and evaluation tool. Think of it as the practice partner a tuition teacher never has time to be. Your child still benefits from a good teacher — Clear Steps makes that teaching stick by turning it into daily practice with real feedback.",
  },
  {
    q: "What if my child's handwriting isn't clear?",
    a: "Our AI handles most handwriting styles well. If a photo is too blurry or unclear, we prompt a re-upload. A clean photo of reasonably legible handwriting works perfectly. Typed answers are also supported.",
  },
  {
    q: "Do parents get a separate login?",
    a: "Yes. On Scholar and Family plans, parents get their own login with a dedicated dashboard showing their child's subject scores, quiz results, mock paper history, weak areas, and study activity.",
  },
  {
    q: "Which subjects and classes are covered?",
    a: "Clear Steps covers all CBSE subjects for Class 5 through 12 — Science, Maths, English, Social Studies for lower classes, and Physics, Chemistry, Biology, Maths, Accountancy, and English for Classes 11–12. More subjects are added regularly.",
  },
];
