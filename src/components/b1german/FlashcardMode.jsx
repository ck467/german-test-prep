import { useState } from "react";
import S from "../../styles.js";
import ProgressBar from "../shared/ProgressBar.jsx";

export default function FlashcardMode({ topic, onBack, onStartQuiz }) {
  const [idx, setIdx] = useState(0);
  const [flipped, setFlipped] = useState(false);
  const [known, setKnown] = useState({});
  const [learning, setLearning] = useState({});

  const cards = topic.cards;
  const card = cards[idx];
  const knownCount = Object.keys(known).length;
  const learningCount = Object.keys(learning).length;

  const handleFlip = () => setFlipped(f => !f);

  const handleKnow = () => {
    setKnown(prev => ({ ...prev, [card.id]: true }));
    const nl = { ...learning };
    delete nl[card.id];
    setLearning(nl);
    advance();
  };

  const handleLearning = () => {
    setLearning(prev => ({ ...prev, [card.id]: true }));
    advance();
  };

  const advance = () => {
    setFlipped(false);
    if (idx + 1 < cards.length) {
      setIdx(idx + 1);
    }
  };

  const handlePrev = () => {
    if (idx > 0) {
      setIdx(idx - 1);
      setFlipped(false);
    }
  };

  const handleNext = () => {
    if (idx + 1 < cards.length) {
      setIdx(idx + 1);
      setFlipped(false);
    }
  };

  return (
    <div style={S.inner}>
      {/* Header */}
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 24 }}>
        <button onClick={onBack} style={{ ...S.btn("ghost"), padding: "6px 12px" }}>← Back</button>
        <div style={{ color: "#888", fontSize: 14 }}>{topic.icon} {topic.name}</div>
        <div style={{ display: "flex", gap: 8 }}>
          <span style={{ background: "rgba(16,185,129,0.15)", color: "#10B981", borderRadius: 6, padding: "2px 10px", fontSize: 13, fontWeight: 600 }}>
            {knownCount} known
          </span>
          <span style={{ background: "rgba(245,200,66,0.15)", color: "#F5C842", borderRadius: 6, padding: "2px 10px", fontSize: 13, fontWeight: 600 }}>
            {learningCount} learning
          </span>
        </div>
      </div>

      {/* Progress */}
      <div style={{ marginBottom: 24 }}>
        <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 6 }}>
          <span style={{ color: "#666", fontSize: 13 }}>Card {idx + 1} of {cards.length}</span>
        </div>
        <ProgressBar value={idx + 1} max={cards.length} />
      </div>

      {/* Flashcard */}
      <div
        onClick={handleFlip}
        style={{
          perspective: "1000px",
          marginBottom: 24,
          cursor: "pointer",
        }}
      >
        <div style={{
          position: "relative",
          width: "100%",
          minHeight: 260,
          transition: "transform 0.5s",
          transformStyle: "preserve-3d",
          transform: flipped ? "rotateY(180deg)" : "rotateY(0deg)",
        }}>
          {/* Front */}
          <div style={{
            ...S.card({ padding: 40 }),
            position: "absolute",
            width: "100%",
            minHeight: 260,
            backfaceVisibility: "hidden",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            boxSizing: "border-box",
            borderColor: "rgba(245,200,66,0.3)",
          }}>
            <div style={{ fontSize: 13, color: "#666", marginBottom: 12, textTransform: "uppercase", letterSpacing: 1 }}>German</div>
            <div style={{ fontSize: 32, fontFamily: "'Playfair Display', serif", fontWeight: 700, color: "#F5F3EE", textAlign: "center" }}>
              {card.de}
            </div>
            <div style={{ fontSize: 13, color: "#555", marginTop: 20 }}>Tap to flip</div>
          </div>

          {/* Back */}
          <div style={{
            ...S.card({ padding: 40 }),
            position: "absolute",
            width: "100%",
            minHeight: 260,
            backfaceVisibility: "hidden",
            transform: "rotateY(180deg)",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            boxSizing: "border-box",
            borderColor: "rgba(96,165,250,0.3)",
          }}>
            <div style={{ fontSize: 13, color: "#666", marginBottom: 12, textTransform: "uppercase", letterSpacing: 1 }}>English</div>
            <div style={{ fontSize: 28, fontFamily: "'Playfair Display', serif", fontWeight: 700, color: "#60A5FA", textAlign: "center", marginBottom: 16 }}>
              {card.en}
            </div>
            <div style={{ background: "rgba(255,255,255,0.04)", borderRadius: 8, padding: "10px 16px", maxWidth: 400 }}>
              <div style={{ fontSize: 13, color: "#666", marginBottom: 4 }}>Example:</div>
              <div style={{ fontSize: 15, color: "#aaa", fontStyle: "italic", lineHeight: 1.5 }}>{card.example}</div>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <div style={{ display: "flex", gap: 12, justifyContent: "center", marginBottom: 24 }}>
        <button onClick={handlePrev} disabled={idx === 0} style={{ ...S.btn("ghost"), opacity: idx === 0 ? 0.3 : 1 }}>← Prev</button>
        <button onClick={handleNext} disabled={idx + 1 >= cards.length} style={{ ...S.btn("ghost"), opacity: idx + 1 >= cards.length ? 0.3 : 1 }}>Next →</button>
      </div>

      {/* Know it / Still learning */}
      <div style={{ display: "flex", gap: 12, justifyContent: "center", marginBottom: 32 }}>
        <button
          onClick={handleLearning}
          style={{ ...S.btn("ghost"), borderRadius: 10, padding: "12px 24px", border: "1px solid rgba(245,200,66,0.3)", color: "#F5C842" }}
        >
          Still Learning
        </button>
        <button
          onClick={handleKnow}
          style={{ ...S.btn("ghost"), borderRadius: 10, padding: "12px 24px", border: "1px solid rgba(16,185,129,0.3)", color: "#10B981" }}
        >
          Know It ✓
        </button>
      </div>

      {/* Start Quiz */}
      <div style={{ textAlign: "center" }}>
        <button onClick={onStartQuiz} style={S.btn("primary")}>
          Start Quiz →
        </button>
      </div>
    </div>
  );
}
