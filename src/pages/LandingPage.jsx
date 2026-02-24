import { useNavigate } from "react-router-dom";
import S from "../styles.js";

export default function LandingPage() {
  const navigate = useNavigate();

  return (
    <div style={S.root}>
      <header style={S.header}>
        <div style={S.logo}>German Test Prep</div>
      </header>

      <div style={{ ...S.inner, maxWidth: 960 }}>
        <div style={{ textAlign: "center", marginBottom: 48, paddingTop: 20 }}>
          <h1 style={{ ...S.h1, fontSize: 40, marginBottom: 12 }}>German Test Prep</h1>
          <p style={{ color: "#777", fontSize: 17, margin: 0, maxWidth: 520, marginLeft: "auto", marginRight: "auto", lineHeight: 1.6 }}>
            Everything you need to prepare for life in Germany. Choose your path below.
          </p>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 24, marginBottom: 48 }}>
          {/* Path A: Citizenship Test */}
          <div
            onClick={() => navigate("/citizenship")}
            style={{
              ...S.card({ padding: 40 }),
              cursor: "pointer",
              transition: "all 0.25s",
              textAlign: "center",
              borderColor: "rgba(245,200,66,0.15)",
            }}
            onMouseEnter={e => { e.currentTarget.style.borderColor = "rgba(245,200,66,0.5)"; e.currentTarget.style.transform = "translateY(-4px)"; e.currentTarget.style.boxShadow = "0 8px 32px rgba(245,200,66,0.1)"; }}
            onMouseLeave={e => { e.currentTarget.style.borderColor = "rgba(245,200,66,0.15)"; e.currentTarget.style.transform = ""; e.currentTarget.style.boxShadow = ""; }}
          >
            <div style={{ fontSize: 56, marginBottom: 20 }}>🇩🇪</div>
            <h2 style={{ ...S.h2, fontSize: 26, marginBottom: 12 }}>Einbürgerungstest</h2>
            <p style={{ color: "#888", fontSize: 15, lineHeight: 1.6, marginBottom: 20 }}>
              300 general + 160 state-specific questions. Practice mode, exam simulation, and English translations.
            </p>
            <div style={{ display: "flex", gap: 8, justifyContent: "center", flexWrap: "wrap" }}>
              <span style={S.tag}>300 Questions</span>
              <span style={S.tag}>Exam Mode</span>
              <span style={S.tag}>16 States</span>
            </div>
            <div style={{ marginTop: 24 }}>
              <span style={{ ...S.btn("primary"), display: "inline-block" }}>Start Prep →</span>
            </div>
          </div>

          {/* Path B: B1 German */}
          <div
            onClick={() => navigate("/b1-german")}
            style={{
              ...S.card({ padding: 40 }),
              cursor: "pointer",
              transition: "all 0.25s",
              textAlign: "center",
              borderColor: "rgba(96,165,250,0.15)",
            }}
            onMouseEnter={e => { e.currentTarget.style.borderColor = "rgba(96,165,250,0.5)"; e.currentTarget.style.transform = "translateY(-4px)"; e.currentTarget.style.boxShadow = "0 8px 32px rgba(96,165,250,0.1)"; }}
            onMouseLeave={e => { e.currentTarget.style.borderColor = "rgba(96,165,250,0.15)"; e.currentTarget.style.transform = ""; e.currentTarget.style.boxShadow = ""; }}
          >
            <div style={{ fontSize: 56, marginBottom: 20 }}>📖</div>
            <h2 style={{ ...S.h2, fontSize: 26, marginBottom: 12 }}>B1 German</h2>
            <p style={{ color: "#888", fontSize: 15, lineHeight: 1.6, marginBottom: 20 }}>
              Build your B1-level vocabulary with flashcards and quizzes. 8 everyday topics with example sentences.
            </p>
            <div style={{ display: "flex", gap: 8, justifyContent: "center", flexWrap: "wrap" }}>
              <span style={{ ...S.tag, background: "rgba(96,165,250,0.1)", color: "#60A5FA", borderColor: "rgba(96,165,250,0.2)" }}>Flashcards</span>
              <span style={{ ...S.tag, background: "rgba(96,165,250,0.1)", color: "#60A5FA", borderColor: "rgba(96,165,250,0.2)" }}>Quizzes</span>
              <span style={{ ...S.tag, background: "rgba(96,165,250,0.1)", color: "#60A5FA", borderColor: "rgba(96,165,250,0.2)" }}>8 Topics</span>
            </div>
            <div style={{ marginTop: 24 }}>
              <span style={{ background: "#60A5FA", color: "#0B0D14", border: "none", borderRadius: 8, padding: "10px 20px", fontSize: 14, fontWeight: 600, display: "inline-block" }}>Start Learning →</span>
            </div>
          </div>
        </div>

        {/* Bottom info */}
        <div style={{ textAlign: "center", color: "#555", fontSize: 13 }}>
          Free and open-source · No account needed · Practice at your own pace
        </div>
      </div>
    </div>
  );
}
