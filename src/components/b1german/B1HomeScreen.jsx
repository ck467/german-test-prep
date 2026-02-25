import useStyles from "../../useStyles.js";
import { B1_TOPICS } from "../../data/b1Vocab.js";

const MODULE_CARDS = [
  {
    key: "exam",
    icon: "📝",
    title: "Exam Practice",
    subtitle: "Real B1 exam questions from official mock tests",
    tags: ["2 Exams", "Timed", "All Sections"],
    color: "#818CF8",
    bg: "rgba(129,140,248,0.1)",
    border: "rgba(129,140,248,0.15)",
    borderHover: "rgba(129,140,248,0.5)",
  },
  {
    key: "studyplan",
    icon: "📅",
    title: "Study Plan",
    subtitle: "Structured paths — 18-day sprint or 8-week intensive",
    tags: ["2 Tracks", "Daily Schedules"],
    color: "#E8712B",
    bg: "rgba(232,113,43,0.1)",
    border: "rgba(232,113,43,0.15)",
    borderHover: "rgba(232,113,43,0.5)",
  },
  {
    key: "cheatsheets",
    icon: "📋",
    title: "Cheat Sheets",
    subtitle: "Templates, tables & strategies for all 5 sections",
    tags: ["5 Sections", "Templates"],
    color: "#34D399",
    bg: "rgba(52,211,153,0.1)",
    border: "rgba(52,211,153,0.15)",
    borderHover: "rgba(52,211,153,0.5)",
  },
  {
    key: "vocabulary",
    icon: "📖",
    title: "Vocabulary",
    subtitle: "Flashcards & quizzes across 24 everyday topics",
    tags: ["24 Topics", "3,173 Words"],
    color: "#F5C842",
    bg: "rgba(245,200,66,0.1)",
    border: "rgba(245,200,66,0.15)",
    borderHover: "rgba(245,200,66,0.5)",
  },
];

export default function B1HomeScreen({
  onSelectExamList,
  onSelectStudyPlan,
  onSelectCheatSheets,
  onSelectVocabulary,
  exams = [],
}) {
  const { S } = useStyles();
  const totalWords = B1_TOPICS.reduce((sum, t) => sum + t.cards.length, 0);

  const handlers = {
    exam: onSelectExamList,
    studyplan: onSelectStudyPlan,
    cheatsheets: onSelectCheatSheets,
    vocabulary: onSelectVocabulary,
  };

  return (
    <div style={S.inner}>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
        {MODULE_CARDS.map((card) => (
          <div
            key={card.key}
            onClick={handlers[card.key]}
            style={{
              ...S.card({ padding: 24 }),
              cursor: "pointer",
              transition: "all 0.25s",
              borderColor: card.border,
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = card.borderHover;
              e.currentTarget.style.transform = "translateY(-3px)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = card.border;
              e.currentTarget.style.transform = "";
            }}
          >
            <div style={{ fontSize: 36, marginBottom: 10 }}>{card.icon}</div>
            <div style={{ fontWeight: 700, color: S.p.headingText, fontSize: 17, marginBottom: 4 }}>
              {card.title}
            </div>
            <div style={{ color: S.p.textMuted, fontSize: 13, marginBottom: 12, lineHeight: 1.4 }}>
              {card.subtitle}
            </div>
            <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
              {card.tags.map((tag) => (
                <span
                  key={tag}
                  style={{
                    ...S.tag,
                    background: card.bg,
                    color: card.color,
                    borderColor: card.border,
                  }}
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div
        style={{
          marginTop: 20,
          padding: "12px 0",
          textAlign: "center",
          color: S.p.textMuted,
          fontSize: 13,
          letterSpacing: 0.3,
        }}
      >
        {B1_TOPICS.length} topics · {totalWords.toLocaleString()} words · {exams.length} exams · 5 cheat sheets
      </div>
    </div>
  );
}
