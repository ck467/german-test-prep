import S from "../../styles.js";
import { B1_TOPICS } from "../../data/b1Vocab.js";

export default function B1HomeScreen({ onSelectTopic, onSelectExam, onSelectStudyPlan, onSelectCheatSheets, exams = [] }) {
  const totalWords = B1_TOPICS.reduce((sum, t) => sum + t.cards.length, 0);

  return (
    <div style={S.inner}>
      {/* Exam Practice Section */}
      {exams.length > 0 && (
        <div style={{ marginBottom: 48 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 4 }}>
            <span style={{ fontSize: 28 }}>📝</span>
            <h1 style={S.h1}>Exam Practice</h1>
          </div>
          <p style={{ color: "#777", fontSize: 15, margin: 0, marginBottom: 20 }}>
            Practice with real B1 exam questions from official mock tests
          </p>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
            {exams.map((exam) => (
              <div
                key={exam.id}
                onClick={() => onSelectExam(exam)}
                style={{
                  ...S.card({ padding: 28 }),
                  cursor: "pointer",
                  transition: "all 0.25s",
                  borderColor: exam.source === "goethe" ? "rgba(96,165,250,0.15)" : "rgba(168,85,247,0.15)",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = exam.source === "goethe" ? "rgba(96,165,250,0.5)" : "rgba(168,85,247,0.5)";
                  e.currentTarget.style.transform = "translateY(-3px)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = exam.source === "goethe" ? "rgba(96,165,250,0.15)" : "rgba(168,85,247,0.15)";
                  e.currentTarget.style.transform = "";
                }}
              >
                <div style={{ fontSize: 14, fontWeight: 700, textTransform: "uppercase", letterSpacing: 1, marginBottom: 8, color: exam.source === "goethe" ? "#60A5FA" : "#A855F7" }}>
                  {exam.source}
                </div>
                <div style={{ fontWeight: 700, color: "#F5F3EE", fontSize: 17, marginBottom: 6 }}>{exam.title}</div>
                <div style={{ color: "#888", fontSize: 13, marginBottom: 14 }}>{exam.subtitle}</div>
                <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
                  <span style={{
                    ...S.tag,
                    background: exam.source === "goethe" ? "rgba(96,165,250,0.1)" : "rgba(168,85,247,0.1)",
                    color: exam.source === "goethe" ? "#60A5FA" : "#A855F7",
                    borderColor: exam.source === "goethe" ? "rgba(96,165,250,0.2)" : "rgba(168,85,247,0.2)",
                  }}>{exam.totalItems} Questions</span>
                  <span style={{
                    ...S.tag,
                    background: exam.source === "goethe" ? "rgba(96,165,250,0.1)" : "rgba(168,85,247,0.1)",
                    color: exam.source === "goethe" ? "#60A5FA" : "#A855F7",
                    borderColor: exam.source === "goethe" ? "rgba(96,165,250,0.2)" : "rgba(168,85,247,0.2)",
                  }}>{exam.timeMinutes} min</span>
                  <span style={{
                    ...S.tag,
                    background: exam.source === "goethe" ? "rgba(96,165,250,0.1)" : "rgba(168,85,247,0.1)",
                    color: exam.source === "goethe" ? "#60A5FA" : "#A855F7",
                    borderColor: exam.source === "goethe" ? "rgba(96,165,250,0.2)" : "rgba(168,85,247,0.2)",
                  }}>{exam.sections.length} Sections</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Study Plan Section */}
      <div style={{ marginBottom: 48 }}>
        <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 4 }}>
          <span style={{ fontSize: 28 }}>📋</span>
          <h1 style={S.h1}>Study Plan</h1>
        </div>
        <p style={{ color: "#777", fontSize: 15, margin: 0, marginBottom: 20 }}>
          Structured study paths to B1 certification — sprint or intensive
        </p>
        <div
          onClick={onSelectStudyPlan}
          style={{
            ...S.card({ padding: 28 }),
            cursor: "pointer",
            transition: "all 0.25s",
            borderColor: "rgba(232,113,43,0.15)",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.borderColor = "rgba(232,113,43,0.5)";
            e.currentTarget.style.transform = "translateY(-3px)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.borderColor = "rgba(232,113,43,0.15)";
            e.currentTarget.style.transform = "";
          }}
        >
          <div style={{ display: "flex", gap: 24, alignItems: "center" }}>
            <div style={{ fontSize: 48 }}>📅</div>
            <div style={{ flex: 1 }}>
              <div style={{ fontWeight: 700, color: "#F5F3EE", fontSize: 18, marginBottom: 6 }}>German B1 Study Plan</div>
              <div style={{ color: "#888", fontSize: 13, marginBottom: 12 }}>
                Two structured paths — 18-day sprint or 8-week intensive track. Covers Lesen, Hören, Schreiben & Sprechen.
              </div>
              <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
                <span style={{ ...S.tag, background: "rgba(232,113,43,0.1)", color: "#E8712B", borderColor: "rgba(232,113,43,0.2)" }}>
                  2 Study Tracks
                </span>
                <span style={{ ...S.tag, background: "rgba(232,113,43,0.1)", color: "#E8712B", borderColor: "rgba(232,113,43,0.2)" }}>
                  Exam Structure
                </span>
                <span style={{ ...S.tag, background: "rgba(232,113,43,0.1)", color: "#E8712B", borderColor: "rgba(232,113,43,0.2)" }}>
                  Daily Schedules
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Cheat Sheets Section */}
      <div style={{ marginBottom: 48 }}>
        <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 4 }}>
          <span style={{ fontSize: 28 }}>{"\uD83D\uDCCB"}</span>
          <h1 style={S.h1}>Exam Cheat Sheets</h1>
        </div>
        <p style={{ color: "#777", fontSize: 15, margin: 0, marginBottom: 20 }}>
          Quick-reference strategies, templates & scoring for all 5 exam sections
        </p>
        <div
          onClick={onSelectCheatSheets}
          style={{
            ...S.card({ padding: 28 }),
            cursor: "pointer",
            transition: "all 0.25s",
            borderColor: "rgba(52,211,153,0.15)",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.borderColor = "rgba(52,211,153,0.5)";
            e.currentTarget.style.transform = "translateY(-3px)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.borderColor = "rgba(52,211,153,0.15)";
            e.currentTarget.style.transform = "";
          }}
        >
          <div style={{ display: "flex", gap: 24, alignItems: "center" }}>
            <div style={{ fontSize: 48 }}>{"\uD83D\uDCDD"}</div>
            <div style={{ flex: 1 }}>
              <div style={{ fontWeight: 700, color: "#F5F3EE", fontSize: 18, marginBottom: 6 }}>Exam Cheat Sheets</div>
              <div style={{ color: "#888", fontSize: 13, marginBottom: 12 }}>
                Quick-reference templates, tables & strategies for Schreiben, Sprachbausteine, Lesen, H{"\u00F6"}ren & Sprechen.
              </div>
              <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
                <span style={{ ...S.tag, background: "rgba(52,211,153,0.1)", color: "#34D399", borderColor: "rgba(52,211,153,0.2)" }}>
                  5 Sections
                </span>
                <span style={{ ...S.tag, background: "rgba(52,211,153,0.1)", color: "#34D399", borderColor: "rgba(52,211,153,0.2)" }}>
                  Templates
                </span>
                <span style={{ ...S.tag, background: "rgba(52,211,153,0.1)", color: "#34D399", borderColor: "rgba(52,211,153,0.2)" }}>
                  Strategies
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Vocabulary Section */}
      <div style={{ marginBottom: 40 }}>
        <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 4 }}>
          <span style={{ fontSize: 28 }}>📖</span>
          <h1 style={S.h1}>Vocabulary</h1>
        </div>
        <p style={{ color: "#777", fontSize: 15, margin: 0 }}>
          Build your vocabulary with flashcards and quizzes · {B1_TOPICS.length} topics · {totalWords} words
        </p>
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))", gap: 16 }}>
        {B1_TOPICS.map(topic => (
          <div
            key={topic.id}
            onClick={() => onSelectTopic(topic)}
            style={{ ...S.card(), cursor: "pointer", transition: "all 0.2s", textAlign: "center" }}
            onMouseEnter={e => { e.currentTarget.style.borderColor = "rgba(245,200,66,0.4)"; e.currentTarget.style.transform = "translateY(-3px)"; }}
            onMouseLeave={e => { e.currentTarget.style.borderColor = "rgba(255,255,255,0.08)"; e.currentTarget.style.transform = ""; }}
          >
            <div style={{ fontSize: 40, marginBottom: 12 }}>{topic.icon}</div>
            <div style={{ fontWeight: 700, color: "#F5F3EE", marginBottom: 6, fontSize: 16 }}>{topic.name}</div>
            <span style={S.tag}>{topic.cards.length} cards</span>
          </div>
        ))}
      </div>
    </div>
  );
}
