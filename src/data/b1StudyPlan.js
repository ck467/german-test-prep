export const STUDY_PLANS = {
  sprint: {
    title: "18-Day Sprint Plan",
    subtitle: "Short on time",
    duration: "18 Days",
    dailyHours: "2–4 hrs",
    targetScore: "70%+",
    targetPoints: "158+ / 225 points",
    minimumPass: "60%",
    passNote: "Written + Oral separate",
    criticalRule: "You must pass both sections independently. Written exam (Lesen + Hören + Schreiben = 195 pts) requires minimum 117 pts (60%). Oral exam (Sprechen = 75 pts) requires minimum 45 pts (60%). Failing one section fails the whole exam, even if your total is high.",
    phases: [
      {
        number: "01",
        title: "Foundation & Assessment",
        subtitle: "Grammar + first mock exam",
        tag: "Days 1–6 · 2–3 hrs/day",
        schedule: [
          { time: "60 min", activity: "Morning — Grammar Review", desc: "Structured topic per day" },
          { time: "45 min", activity: "Afternoon — Reading Practice", desc: "1 Telc-style text with comprehension questions" },
          { time: "45 min", activity: "Evening — Listening + Vocabulary", desc: "Podcast / Deutsche Welle + 15 new words" },
        ],
        days: [
          { label: "Day 1–2", focus: "Perfekt, Modal Verbs & Wechselpräpositionen", note: "haben vs. sein · können, müssen, dürfen · in/an/auf + case" },
          { label: "Day 3–4", focus: "Subordinate Clauses & Konjunktiv II", note: "weil/dass/obwohl/als/wenn · wäre, hätte, würde + inf." },
          { label: "Day 5–6", focus: "First Full Mock Exam", note: "Identify weak sections · note every error for Week 2 targeting", type: "mock" },
        ],
      },
      {
        number: "02",
        title: "Intensive Practice",
        subtitle: "Targeted drilling on weak areas",
        tag: "Days 7–12 · 3–4 hrs/day",
        schedule: [
          { time: "90 min", activity: "Morning — Grammar Weak Points + Writing", desc: "Fix errors from mock exam · 2 writing tasks daily" },
          { time: "60 min", activity: "Afternoon — Reading + Listening", desc: "Alternate sections daily · Telc-format materials" },
          { time: "45 min", activity: "Evening — Vocabulary + Speaking Prep", desc: "Thematic vocab · record speaking answers aloud" },
        ],
        infoBlocks: [
          {
            title: "Writing Focus (Schreiben)",
            items: [
              "Practice both formal & semi-formal letters daily",
              "Always address all 4 bullet points (10/10 pts for task completion)",
              "Learn connector templates: weil, deshalb, trotzdem, außerdem",
              "Use correct register: Sehr geehrte... vs. Liebe/r...",
            ],
          },
          {
            title: "Listening & Reading Sources",
            items: [
              "Easy German (YouTube) — authentic B1 dialogues",
              "Deutsche Welle — Langsam gesprochene Nachrichten",
              "Telc sample tests — official format familiarity",
              "Goethe-Institut online practice materials",
            ],
          },
        ],
      },
      {
        number: "03",
        title: "Exam Simulation",
        subtitle: "Timing, strategy, confidence",
        tag: "Days 13–17 · 3–4 hrs/day",
        days: [
          { label: "Day 13", focus: "Full Mock Exam #2", note: "Strict timing · review all errors thoroughly", type: "mock" },
          { label: "Day 14", focus: "Error Analysis + Speaking Practice", note: "Record yourself · practise speaking templates out loud" },
          { label: "Day 15", focus: "Full Mock Exam #3", note: "Target 70%+ to benchmark readiness", type: "mock" },
          { label: "Day 16", focus: "Timing Drills + Weak Section Blitz", note: "Practice exam strategies, not just content" },
          { label: "Day 17 — Eve of Exam", focus: "Light Review Only", note: "Review error list · speak prompts aloud · rest well", type: "rest" },
        ],
      },
    ],
    scoring: {
      title: "Schreiben Scoring Breakdown",
      subtitle: "Part 1 — Formal Letter (30 points)",
      rows: [
        { points: "10 pts", name: "Aufgabenbewältigung", desc: "All 4 bullet points addressed fully — most important criterion" },
        { points: "8 pts", name: "Formale Richtigkeit", desc: "Grammar, word order, case usage, verb conjugation" },
        { points: "7 pts", name: "Kommunikative Gestaltung", desc: "Structure, opening/closing, register, connectors" },
        { points: "5 pts", name: "Wortschatz", desc: "Range and accuracy of vocabulary" },
      ],
    },
  },
  intensive: {
    title: "8-Week Intensive Plan",
    subtitle: "Full-time study",
    duration: "8 Weeks",
    dailyHours: "6–8 hrs",
    totalHours: "~380 hrs",
    totalHoursRange: "350–400 realistic range",
    vocabTarget: "2,400+",
    vocabNote: "Goethe B1 word list",
    dailyTemplate: {
      morning: {
        title: "Morning Block — 3–4 hours",
        rows: [
          { time: "60 min", activity: "Grammar Lesson", desc: "New concept introduction + examples" },
          { time: "60 min", activity: "Vocabulary Acquisition", desc: "Thematic sets, spaced repetition (Anki)" },
          { time: "60 min", activity: "Grammar Practice", desc: "Exercises applying the new concept" },
          { time: "30 min", activity: "Vocabulary Review", desc: "Flashcard drill, previous day's words" },
        ],
      },
      afternoon: {
        title: "Afternoon Block — 3–4 hours",
        rows: [
          { time: "90 min", activity: "Listening Practice", desc: "Podcasts, news, B1 audio exercises" },
          { time: "60 min", activity: "Reading Practice", desc: "Authentic German texts at level" },
          { time: "60 min", activity: "Speaking Practice", desc: "Shadowing, recording, conversation" },
          { time: "30 min", activity: "Writing (Week 3+)", desc: "Letters, descriptions, structured responses" },
        ],
      },
    },
    phases: [
      {
        number: "01",
        title: "Foundation Building",
        subtitle: "Core grammar, basic vocabulary, pronunciation",
        tag: "Weeks 1–2 · 7 hrs/day",
        infoBlocks: [
          {
            title: "Grammar Topics",
            items: [
              "Nominative, accusative, dative cases",
              "Regular and irregular verbs",
              "Modal verbs (können, müssen, wollen, dürfen)",
              "Word order in main clauses",
              "Questions and negation",
            ],
          },
          {
            title: "Vocabulary Target: 500–800 Words",
            items: [
              "Personal information and family",
              "Numbers, time, dates",
              "Food, drink, daily routines",
              "Basic adjectives and emotions",
            ],
          },
        ],
      },
      {
        number: "02",
        title: "Intermediate Structures",
        subtitle: "Past tenses, complex sentences, writing begins",
        tag: "Weeks 3–4 · 7 hrs/day",
        infoBlocks: [
          {
            title: "Grammar Topics",
            items: [
              "Perfekt and Präteritum",
              "Subordinate clauses (weil, dass, wenn)",
              "Prepositions with accusative/dative",
              "Comparative and superlative",
              "Reflexive verbs",
            ],
          },
          {
            title: "Vocabulary Target: 1,200–1,500 Words",
            items: [
              "Travel and transportation",
              "Health and body",
              "Weather and seasons",
              "Clothing, shopping, work",
            ],
          },
        ],
      },
      {
        number: "03",
        title: "Advanced Structures & Test Introduction",
        subtitle: "Complex grammar, formal registers, exam formats",
        tag: "Weeks 5–6 · 7.5 hrs/day",
        infoBlocks: [
          {
            title: "Grammar Topics",
            items: [
              "Passive voice (Passiv)",
              "Konjunktiv II for polite requests",
              "Relative clauses",
              "Future tense (Futur I)",
              "Advanced conjunctions",
            ],
          },
          {
            title: "Vocabulary Target: 2,000–2,500 Words",
            items: [
              "Education and learning",
              "Technology and media",
              "Environment and society",
              "Culture, traditions, abstract concepts",
            ],
          },
        ],
        testFormat: [
          { section: "Lesen", detail: "5 reading parts, 65 minutes", desc: "Global, detailed, and selective comprehension" },
          { section: "Hören", detail: "4 listening parts, 40 minutes", desc: "True/false, multiple choice, selective tasks" },
          { section: "Schreiben", detail: "3 tasks, 60 minutes", desc: "Formal letter covering all 4 bullet points" },
          { section: "Sprechen", detail: "3 parts, 15 minutes", desc: "Introduction, topic discussion, joint planning" },
        ],
      },
      {
        number: "04A",
        title: "Intensive Test Preparation",
        subtitle: "Timed practice, weak area improvement",
        tag: "Week 7 · 8 hrs/day",
        schedule: [
          { time: "3 hrs", activity: "Mock Tests", desc: "Full B1 practice tests under strict timed conditions" },
          { time: "2 hrs", activity: "Weak Area Focus", desc: "Targeted exercises on problem sections identified" },
          { time: "1.5 hrs", activity: "Listening Intensive", desc: "Test-format audio with answer review" },
          { time: "1 hr", activity: "Speaking Partner / Recording", desc: "Simulate exam scenarios, record for review" },
          { time: "30 min", activity: "Timed Writing", desc: "30-min letter under exam conditions" },
        ],
      },
      {
        number: "04B",
        title: "Final Preparation & Test Week",
        subtitle: "Review, polish, confidence building",
        tag: "Week 8 · 6 hrs → rest",
        days: [
          { label: "Days 1–5", focus: "Review & Polish (6 hrs/day)", note: "Morning: grammar + vocab review · Afternoon: practice tests + skill refinement" },
          { label: "Days 6–7", focus: "Rest & Light Review", note: "Light vocabulary only · test logistics · relaxation + confidence building", type: "rest" },
        ],
      },
    ],
  },
  examOverview: {
    sections: [
      { name: "Lesen", label: "Reading", duration: "65 min", points: 75 },
      { name: "Hören", label: "Listening", duration: "30 min", points: 75 },
      { name: "Schreiben", label: "Writing", duration: "30 min", points: 45 },
      { name: "Sprechen", label: "Speaking", duration: "15 min", points: 75 },
    ],
    totalPoints: 270,
    passPercent: 60,
  },
};
