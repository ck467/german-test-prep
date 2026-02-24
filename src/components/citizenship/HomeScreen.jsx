import S from "../../styles.js";
import { STATES } from "../../data/citizenshipQuestions.js";

export default function HomeScreen({ onMode, selectedState, setSelectedState, stats }) {
  const stateStats = stats.state?.[selectedState];
  const generalStats = stats.general;

  return (
    <div style={S.inner}>
      <div style={{ marginBottom: 40 }}>
        <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 4 }}>
          <span style={{ fontSize: 28 }}>🇩🇪</span>
          <h1 style={S.h1}>German Citizenship Test</h1>
        </div>
        <p style={{ color: "#777", fontSize: 15, margin: 0 }}>
          Full exam prep · 300 general questions · 160 state-specific questions (10 per federal state)
        </p>
      </div>

      {/* State Selector */}
      <div style={{ ...S.card(), marginBottom: 24 }}>
        <div style={{ fontWeight: 600, color: "#F5F3EE", marginBottom: 12 }}>Your Federal State (for the exam)</div>
        <select
          value={selectedState}
          onChange={e => setSelectedState(e.target.value)}
          style={{ width: "100%", background: "#0B0D14", color: "#E8E6E0", border: "1px solid rgba(255,255,255,0.15)", borderRadius: 8, padding: "10px 14px", fontSize: 15, cursor: "pointer", outline: "none" }}
        >
          {STATES.map(s => (
            <option key={s.key} value={s.key}>{s.name}</option>
          ))}
        </select>
      </div>

      {/* Mode Cards */}
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 16, marginBottom: 32 }}>
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
            style={{ ...S.card(), cursor: "pointer", transition: "all 0.2s", textAlign: "center" }}
            onMouseEnter={e => { e.currentTarget.style.borderColor = "rgba(245,200,66,0.4)"; e.currentTarget.style.transform = "translateY(-3px)"; }}
            onMouseLeave={e => { e.currentTarget.style.borderColor = "rgba(255,255,255,0.08)"; e.currentTarget.style.transform = ""; }}
          >
            <div style={{ fontSize: 32, marginBottom: 10 }}>{card.icon}</div>
            <div style={{ fontWeight: 700, color: "#F5F3EE", marginBottom: 4, fontSize: 15 }}>{card.label}</div>
            <div style={{ color: "#777", fontSize: 13, marginBottom: 10 }}>{card.desc}</div>
            <span style={S.tag}>{card.sub}</span>
            {card.stat && <div style={{ marginTop: 10, fontSize: 13, color: "#F5C842", fontWeight: 600 }}>{card.stat}</div>}
          </div>
        ))}
      </div>

      {/* Info Box */}
      <div style={{ ...S.card({ padding: 20 }), borderColor: "rgba(245,200,66,0.2)" }}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr 1fr", gap: 16, textAlign: "center" }}>
          {[
            { n: "300", l: "General Questions" },
            { n: "160", l: "State Questions (16 × 10)" },
            { n: "33", l: "Questions on the real test" },
            { n: "17/33", l: "Passing score" },
          ].map(item => (
            <div key={item.l}>
              <div style={{ fontSize: 24, fontWeight: 700, color: "#F5C842", fontFamily: "'Playfair Display', serif" }}>{item.n}</div>
              <div style={{ color: "#666", fontSize: 12, marginTop: 2 }}>{item.l}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
