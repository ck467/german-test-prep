import S from "../../styles.js";
import { B1_TOPICS } from "../../data/b1Vocab.js";

export default function B1HomeScreen({ onSelectTopic }) {
  return (
    <div style={S.inner}>
      <div style={{ marginBottom: 40 }}>
        <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 4 }}>
          <span style={{ fontSize: 28 }}>📖</span>
          <h1 style={S.h1}>B1 German Vocabulary</h1>
        </div>
        <p style={{ color: "#777", fontSize: 15, margin: 0 }}>
          Build your vocabulary with flashcards and quizzes · {B1_TOPICS.length} topics · {B1_TOPICS.reduce((sum, t) => sum + t.cards.length, 0)} words
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
