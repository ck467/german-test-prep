import useStyles from "../../useStyles.js";
import { STATES } from "../../data/citizenshipQuestions.js";

export default function HomeScreen({ onMode, selectedState, setSelectedState, stats }) {
  const { S } = useStyles();
  const stateStats = stats.state?.[selectedState];
  const generalStats = stats.general;

  return (
    <div style={{ ...S.inner, paddingTop: 20, paddingBottom: 20 }}>
      <div style={{ marginBottom: 24 }}>
        <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 4 }}>
          <span style={{ fontSize: 24 }}>🇩🇪</span>
          <h1 style={{ ...S.h1, fontSize: 28 }}>German Citizenship Test</h1>
        </div>
        <p style={{ color: S.p.textMuted, fontSize: 14, margin: 0 }}>
          Full exam prep · 300 general questions · 160 state-specific questions (10 per federal state)
        </p>
      </div>

      {/* State Selector */}
      <div style={{ ...S.card({ padding: "16px 24px" }), marginBottom: 16 }}>
        <div style={{ fontWeight: 600, color: S.p.headingText, marginBottom: 8 }}>Your Federal State (for the exam)</div>
        <select
          value={selectedState}
          onChange={e => setSelectedState(e.target.value)}
          style={{ width: "100%", background: S.p.selectBg, color: S.p.bodyText, border: `1px solid ${S.p.border15}`, borderRadius: 8, padding: "10px 14px", fontSize: 15, cursor: "pointer", outline: "none" }}
        >
          {STATES.map(s => (
            <option key={s.key} value={s.key}>{s.name}</option>
          ))}
        </select>
      </div>

      {/* Mode Cards */}
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 12, marginBottom: 16 }}>
        {[
          {
            icon: "📚", label: "Practice All", desc: "300 general questions", sub: "With instant feedback", mode: "practiceGeneral",
            stat: generalStats ? `${generalStats.score}/${generalStats.max}` : null
          },
          {
            icon: "🏛️", label: "Practice State", desc: `10 questions: ${STATES.find(s => s.key === selectedState)?.name}`, sub: "State-specific", mode: "practiceState",
            stat: stateStats ? `${stateStats.score}/${stateStats.max}` : null
          },
          {
            icon: "⏱️", label: "Practice Exam", desc: "33 questions · 60 minutes", sub: "Real exam simulation", mode: "exam",
            stat: stats.exam ? `${stats.exam.score}/33` : null
          },
        ].map(card => (
          <div
            key={card.mode}
            onClick={() => onMode(card.mode)}
            style={{ ...S.card({ padding: "16px 16px" }), cursor: "pointer", transition: "all 0.2s", textAlign: "center" }}
            onMouseEnter={e => { e.currentTarget.style.borderColor = "rgba(245,200,66,0.4)"; e.currentTarget.style.transform = "translateY(-3px)"; }}
            onMouseLeave={e => { e.currentTarget.style.borderColor = S.p.border08; e.currentTarget.style.transform = ""; }}
          >
            <div style={{ fontSize: 26, marginBottom: 6 }}>{card.icon}</div>
            <div style={{ fontWeight: 700, color: S.p.headingText, marginBottom: 3, fontSize: 14 }}>{card.label}</div>
            <div style={{ color: S.p.textMuted, fontSize: 12, marginBottom: 8 }}>{card.desc}</div>
            <span style={S.tag}>{card.sub}</span>
            {card.stat && <div style={{ marginTop: 8, fontSize: 13, color: "#F5C842", fontWeight: 600 }}>{card.stat}</div>}
          </div>
        ))}
      </div>

      {/* Info Box */}
      <div style={{ ...S.card({ padding: 16 }), borderColor: "rgba(245,200,66,0.2)" }}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr 1fr", gap: 16, textAlign: "center" }}>
          {[
            { n: "300", l: "General Questions" },
            { n: "160", l: "State Questions (16 × 10)" },
            { n: "33", l: "Questions on the real test" },
            { n: "17/33", l: "Passing score" },
          ].map(item => (
            <div key={item.l}>
              <div style={{ fontSize: 24, fontWeight: 700, color: "#F5C842", fontFamily: "'Playfair Display', serif" }}>{item.n}</div>
              <div style={{ color: S.p.textMuted, fontSize: 12, marginTop: 2 }}>{item.l}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
