import { useNavigate } from "react-router-dom";
import useStyles from "../useStyles.js";
import ModuleLayout from "../components/shared/ModuleLayout.jsx";

const FEATURES = [
  {
    title: "Einb\u00FCrgerungstest Prep",
    icon: "\uD83C\uDDE9\uD83C\uDDEA",
    color: "#F5C842",
    border: "rgba(245,200,66,0.15)",
    route: "/citizenship",
    cta: "Start Prep",
    btnBg: "#F5C842",
    items: [
      "300 official BAMF questions",
      "160 state-specific questions",
      "Timed exam simulation (33 questions, 60 min)",
      "English translations for every question",
      "Progress tracking across all categories",
    ],
  },
  {
    title: "B1 German Exam Prep",
    icon: "\uD83D\uDCD6",
    color: "#60A5FA",
    border: "rgba(96,165,250,0.15)",
    route: "/b1-german",
    cta: "Start Learning",
    btnBg: "#60A5FA",
    items: [
      "3,000+ vocabulary flashcards",
      "Goethe & telc B1 practice materials",
      "Structured study plans",
      "Grammar cheat sheets",
      "24 topic-based categories",
    ],
  },
  {
    title: "Eligibility Check",
    icon: "\u2705",
    color: "#10B981",
    border: "rgba(16,185,129,0.15)",
    route: "/eligibility",
    cta: "Check Now",
    btnBg: "#10B981",
    items: [
      "10-question self-assessment",
      "Residency & income checks",
      "Language requirement verification",
      "Instant results with guidance",
      "Based on the Staatsangeh\u00F6rigkeitsgesetz (StAG)",
    ],
  },
];

export default function FeaturesPage() {
  const navigate = useNavigate();
  const { S, isMobile } = useStyles();

  return (
    <ModuleLayout
      title="What You Get — German Citizenship Prep"
      description="Explore all free study tools: Einb\u00FCrgerungstest practice, B1 German exam prep, and eligibility checker for German citizenship."
    >
      <div style={{ maxWidth: 960, margin: "0 auto", padding: isMobile ? "24px 12px 32px" : "48px 24px 48px", boxSizing: "border-box" }}>
        <div style={{ textAlign: "center", marginBottom: 32 }}>
          <h1 style={{ ...S.h1, fontSize: isMobile ? 24 : 36, marginBottom: 8 }}>What You Get</h1>
          <p style={{ color: S.p.textMuted, fontSize: 16, margin: 0, maxWidth: 560, marginLeft: "auto", marginRight: "auto", lineHeight: 1.5 }}>
            Everything you need to prepare for German citizenship — all free, no account required.
          </p>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr 1fr", gap: 24 }}>
          {FEATURES.map((feature) => (
            <div
              key={feature.title}
              style={{
                ...S.card({ padding: isMobile ? "20px 16px" : "28px 24px" }),
                borderColor: feature.border,
                display: "flex",
                flexDirection: "column",
              }}
            >
              <div style={{ fontSize: 36, marginBottom: 12 }}>{feature.icon}</div>
              <h2 style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: isMobile ? 18 : 20, fontWeight: 600, color: feature.color, marginTop: 0, marginBottom: 12 }}>{feature.title}</h2>
              <ul style={{ margin: 0, paddingLeft: 18, listStyle: "disc", flex: 1 }}>
                {feature.items.map((item) => (
                  <li key={item} style={{ color: S.p.textMuted, fontSize: 14, lineHeight: 1.7 }}>{item}</li>
                ))}
              </ul>
              <div style={{ marginTop: 20 }}>
                <button
                  onClick={() => navigate(feature.route)}
                  style={{
                    background: feature.btnBg,
                    color: "#0B0D14",
                    border: "none",
                    borderRadius: 8,
                    padding: "10px 20px",
                    fontSize: 14,
                    fontWeight: 600,
                    cursor: "pointer",
                    width: "100%",
                  }}
                >
                  {feature.cta} →
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </ModuleLayout>
  );
}
