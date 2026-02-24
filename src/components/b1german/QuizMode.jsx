import { useState, useMemo } from "react";
import S from "../../styles.js";
import ProgressBar from "../shared/ProgressBar.jsx";
import ScoreBadge from "../shared/ScoreBadge.jsx";
import { B1_TOPICS } from "../../data/b1Vocab.js";

function shuffle(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

export default function QuizMode({ topic, onBack, onBackToFlashcards }) {
  const allCards = useMemo(() => B1_TOPICS.flatMap(t => t.cards), []);

  const questions = useMemo(() => {
    return topic.cards.map(card => {
      // Get 3 wrong answers from other cards
      const wrongPool = allCards.filter(c => c.id !== card.id);
      const wrongOptions = shuffle(wrongPool).slice(0, 3).map(c => c.en);
      const options = shuffle([card.en, ...wrongOptions]);
      const correctIdx = options.indexOf(card.en);
      return { ...card, options, correctIdx };
    });
  }, [topic, allCards]);

  const [idx, setIdx] = useState(0);
  const [selected, setSelected] = useState(null);
  const [showResult, setShowResult] = useState(false);
  const [score, setScore] = useState(0);
  const [finished, setFinished] = useState(false);

  const q = questions[idx];

  const handleSelect = (optIdx) => {
    if (selected !== null) return;
    setSelected(optIdx);
    setShowResult(true);
    if (optIdx === q.correctIdx) {
      setScore(s => s + 1);
    }
  };

  const handleNext = () => {
    if (idx + 1 >= questions.length) {
      setFinished(true);
      return;
    }
    setIdx(idx + 1);
    setSelected(null);
    setShowResult(false);
  };

  if (finished) {
    const pct = Math.round((score / questions.length) * 100);
    return (
      <div style={S.inner}>
        <div style={{ textAlign: "center", padding: "60px 0" }}>
          <div style={{ fontSize: 64, marginBottom: 20 }}>{pct >= 70 ? "🎉" : "📚"}</div>
          <h2 style={{ ...S.h1, marginBottom: 8 }}>Quiz Complete</h2>
          <div style={{ color: "#777", marginBottom: 32 }}>{topic.icon} {topic.name}</div>
          <div style={{ fontSize: 48, fontFamily: "'Playfair Display', serif", fontWeight: 700, color: pct >= 70 ? "#10B981" : "#F59E0B", marginBottom: 8 }}>
            {score}/{questions.length}
          </div>
          <div style={{ color: "#888", marginBottom: 40 }}>{pct}% correct</div>
          <div style={{ display: "flex", gap: 12, justifyContent: "center" }}>
            <button onClick={onBack} style={S.btn("ghost")}>← Topics</button>
            <button onClick={onBackToFlashcards} style={S.btn("ghost")}>← Flashcards</button>
            <button onClick={() => { setIdx(0); setSelected(null); setShowResult(false); setScore(0); setFinished(false); }} style={S.btn("primary")}>
              Try Again
            </button>
          </div>
        </div>
      </div>
    );
  }

  const isCorrect = selected === q.correctIdx;

  return (
    <div style={S.inner}>
      {/* Header */}
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 24 }}>
        <button onClick={onBack} style={{ ...S.btn("ghost"), padding: "6px 12px" }}>← Back</button>
        <div style={{ color: "#888", fontSize: 14 }}>{topic.icon} {topic.name} – Quiz</div>
        <ScoreBadge score={score} max={idx + (selected !== null ? 1 : 0)} />
      </div>

      {/* Progress */}
      <div style={{ marginBottom: 24 }}>
        <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 6 }}>
          <span style={{ color: "#666", fontSize: 13 }}>Question {idx + 1} of {questions.length}</span>
        </div>
        <ProgressBar value={idx + 1} max={questions.length} />
      </div>

      {/* Question */}
      <div style={{ ...S.card(), marginBottom: 20, textAlign: "center" }}>
        <div style={{ fontSize: 13, color: "#666", marginBottom: 8, textTransform: "uppercase", letterSpacing: 1 }}>What does this mean?</div>
        <div style={{ fontSize: 28, fontFamily: "'Playfair Display', serif", fontWeight: 700, color: "#F5F3EE" }}>
          {q.de}
        </div>
      </div>

      {/* Options */}
      <div style={{ display: "grid", gap: 10, marginBottom: 24 }}>
        {q.options.map((opt, i) => {
          let border = "1px solid rgba(255,255,255,0.08)";
          let bg = "#141720";
          let color = "#ccc";
          if (selected !== null) {
            if (i === q.correctIdx) { border = "1px solid rgba(16,185,129,0.6)"; bg = "rgba(16,185,129,0.12)"; color = "#10B981"; }
            else if (i === selected && !isCorrect) { border = "1px solid rgba(239,68,68,0.6)"; bg = "rgba(239,68,68,0.12)"; color = "#EF4444"; }
          }
          return (
            <button
              key={i}
              onClick={() => handleSelect(i)}
              disabled={selected !== null}
              style={{ background: bg, border, borderRadius: 10, padding: "14px 18px", cursor: selected !== null ? "default" : "pointer", textAlign: "left", color, fontSize: 15, transition: "all 0.15s", display: "flex", alignItems: "center", gap: 12 }}
            >
              <span style={{ width: 26, height: 26, borderRadius: 6, border: `1px solid ${color}44`, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 12, fontWeight: 700, flexShrink: 0, color }}>
                {selected !== null && i === q.correctIdx ? "✓" : selected !== null && i === selected && !isCorrect ? "✗" : String.fromCharCode(65 + i)}
              </span>
              {opt}
            </button>
          );
        })}
      </div>

      {/* Feedback */}
      {showResult && (
        <div style={{ background: isCorrect ? "rgba(16,185,129,0.1)" : "rgba(239,68,68,0.1)", border: `1px solid ${isCorrect ? "rgba(16,185,129,0.3)" : "rgba(239,68,68,0.3)"}`, borderRadius: 10, padding: 16, marginBottom: 24, display: "flex", alignItems: "center", justifyContent: "space-between", gap: 12 }}>
          <div>
            <div style={{ fontWeight: 700, color: isCorrect ? "#10B981" : "#EF4444", marginBottom: 4 }}>
              {isCorrect ? "✓ Correct!" : "✗ Incorrect"}
            </div>
            {!isCorrect && (
              <div style={{ color: "#aaa", fontSize: 14 }}>
                Correct: <span style={{ color: "#10B981", fontWeight: 600 }}>{q.en}</span>
              </div>
            )}
            <div style={{ color: "#666", fontSize: 13, marginTop: 4, fontStyle: "italic" }}>{q.example}</div>
          </div>
          <button onClick={handleNext} style={S.btn("primary")}>
            {idx + 1 >= questions.length ? "Finish →" : "Next →"}
          </button>
        </div>
      )}
    </div>
  );
}
