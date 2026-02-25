import { useState } from "react";
import useStyles from "../../useStyles.js";
import ProgressBar from "../shared/ProgressBar.jsx";
import ScoreBadge from "../shared/ScoreBadge.jsx";

const assetPath = (p) => import.meta.env.BASE_URL + p.slice(1);

export default function PracticeMode({ questions, title, onBack, onComplete }) {
  const { S } = useStyles();
  const [idx, setIdx] = useState(0);
  const [selected, setSelected] = useState(null);
  const [showResult, setShowResult] = useState(false);
  const [score, setScore] = useState(0);
  const [finished, setFinished] = useState(false);
  const [filter, setFilter] = useState("all");
  const [seen, setSeen] = useState({});
  const [wrong, setWrong] = useState({});
  const [showTranslation, setShowTranslation] = useState(false);

  const filtered = filter === "wrong"
    ? questions.filter(q => wrong[q.id])
    : filter === "unseen"
    ? questions.filter(q => !seen[q.id])
    : questions;

  const q = filtered[idx];

  const handleSelect = (optIdx) => {
    if (selected !== null) return;
    setSelected(optIdx);
    setShowResult(true);
    setSeen(prev => ({ ...prev, [q.id]: true }));
    if (optIdx === q.a) {
      setScore(s => s + 1);
      setWrong(prev => { const n = { ...prev }; delete n[q.id]; return n; });
    } else {
      setWrong(prev => ({ ...prev, [q.id]: true }));
    }
  };

  const handleNext = () => {
    if (idx + 1 >= filtered.length) {
      setFinished(true);
      onComplete?.(score + (selected === q?.a ? 1 : 0), filtered.length);
      return;
    }
    setIdx(idx + 1);
    setSelected(null);
    setShowResult(false);
    setShowTranslation(false);
  };

  if (finished || !q) {
    const finalScore = score;
    const total = filtered.length;
    const pct = Math.round((finalScore / total) * 100);
    return (
      <div style={S.inner}>
        <div style={{ textAlign: "center", padding: "60px 0" }}>
          <div style={{ fontSize: 64, marginBottom: 20 }}>{pct >= 60 ? "🎉" : "📚"}</div>
          <h2 style={{ ...S.h1, marginBottom: 8 }}>Session Complete</h2>
          <div style={{ color: S.p.textMuted, marginBottom: 32 }}>{title}</div>
          <div style={{ fontSize: 48, fontFamily: "'Playfair Display', serif", fontWeight: 700, color: pct >= 60 ? "#10B981" : "#EF4444", marginBottom: 8 }}>
            {finalScore}/{total}
          </div>
          <div style={{ color: S.p.textMuted, marginBottom: 40 }}>{pct}% correct</div>
          <div style={{ display: "flex", gap: 12, justifyContent: "center" }}>
            <button onClick={onBack} style={S.btn("ghost")}>← Back</button>
            <button onClick={() => { setIdx(0); setSelected(null); setShowResult(false); setScore(0); setFinished(false); }} style={S.btn("primary")}>
              Practice Again
            </button>
          </div>
        </div>
      </div>
    );
  }

  const isCorrect = selected === q.a;

  return (
    <div style={S.inner}>
      {/* Header */}
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 24 }}>
        <button onClick={onBack} style={{ ...S.btn("ghost"), padding: "6px 12px" }}>← Back</button>
        <div style={{ color: S.p.textMuted, fontSize: 14 }}>{title}</div>
        <ScoreBadge score={score} max={idx + (selected !== null ? 1 : 0)} />
      </div>

      {/* Filter */}
      <div style={{ display: "flex", gap: 8, marginBottom: 20 }}>
        {["all", "wrong", "unseen"].map(f => (
          <button key={f} onClick={() => { setFilter(f); setIdx(0); setSelected(null); setShowResult(false); }}
            style={{ ...S.btn(filter === f ? "primary" : "ghost"), padding: "5px 12px", fontSize: 13 }}>
            {f === "all" ? `All (${questions.length})` : f === "wrong" ? `Incorrect (${Object.keys(wrong).length})` : `Unseen (${questions.filter(q => !seen[q.id]).length})`}
          </button>
        ))}
      </div>

      {/* Progress */}
      <div style={{ marginBottom: 24 }}>
        <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 6 }}>
          <span style={{ color: S.p.textMuted, fontSize: 13 }}>Question {idx + 1} of {filtered.length}</span>
          <span style={{ color: S.p.textMuted, fontSize: 13 }}>Q#{q.id}</span>
        </div>
        <ProgressBar value={idx + 1} max={filtered.length} />
      </div>

      {/* Question */}
      <div style={{ ...S.card(), marginBottom: 20 }}>
        <div style={{ fontSize: 17, color: S.p.headingText, lineHeight: 1.6, fontWeight: 500 }}>{q.q}</div>
        {q.img && (
          <div style={{ marginTop: 14 }}>
            <img src={assetPath(q.img)} alt="" style={{ maxWidth: "100%", maxHeight: 280, borderRadius: 8, border: `1px solid ${S.p.border08}` }} />
          </div>
        )}
      </div>

      {/* Options */}
      <div style={{ display: "grid", gap: 10, marginBottom: 24, ...(q.optImgs ? { gridTemplateColumns: "1fr 1fr" } : {}) }}>
        {q.opts.map((opt, i) => {
          let border = "1px solid transparent";
          let bg = "transparent";
          let color = S.p.ghostBtnText;
          if (selected !== null) {
            if (i === q.a) { border = "1px solid rgba(16,185,129,0.6)"; bg = "rgba(16,185,129,0.12)"; color = "#10B981"; }
            else if (i === selected && !isCorrect) { border = "1px solid rgba(239,68,68,0.6)"; bg = "rgba(239,68,68,0.12)"; color = "#EF4444"; }
          }
          return (
            <button
              key={i}
              onClick={() => handleSelect(i)}
              disabled={selected !== null}
              style={{ background: bg, border, borderRadius: 10, padding: q.optImgs ? "12px" : "14px 18px", cursor: selected !== null ? "default" : "pointer", textAlign: q.optImgs ? "center" : "left", color, fontSize: 15, transition: "all 0.15s", display: "flex", flexDirection: q.optImgs ? "column" : "row", alignItems: "center", gap: q.optImgs ? 8 : 12 }}
            >
              <span style={{ width: 26, height: 26, borderRadius: 6, background: selected === null ? S.p.ghostBtnBg : "transparent", border: selected !== null ? `1px solid ${color}44` : "1px solid transparent", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 12, fontWeight: 700, flexShrink: 0, color }}>
                {selected !== null && i === q.a ? "✓" : selected !== null && i === selected && !isCorrect ? "✗" : (q.img || q.optImgs) ? String(i + 1) : String.fromCharCode(65 + i)}
              </span>
              {q.optImgs?.[i] && <img src={assetPath(q.optImgs[i])} alt="" style={{ maxWidth: "100%", maxHeight: 120, borderRadius: 6 }} />}
              {opt}
            </button>
          );
        })}
      </div>

      {/* Feedback */}
      {showResult && (
        <div style={{ marginBottom: 24 }}>
          <div style={{ background: isCorrect ? "rgba(16,185,129,0.1)" : "rgba(239,68,68,0.1)", border: `1px solid ${isCorrect ? "rgba(16,185,129,0.3)" : "rgba(239,68,68,0.3)"}`, borderRadius: 10, padding: 16, marginBottom: 10, display: "flex", alignItems: "flex-start", justifyContent: "space-between", gap: 12 }}>
            <div>
              <div style={{ fontWeight: 700, color: isCorrect ? "#10B981" : "#EF4444", marginBottom: 4 }}>
                {isCorrect ? "✓ Correct!" : "✗ Incorrect"}
              </div>
              {!isCorrect && (
                <div style={{ color: S.p.textMuted, fontSize: 14 }}>
                  Correct answer: <span style={{ color: "#10B981", fontWeight: 600 }}>{q.opts[q.a]}</span>
                </div>
              )}
            </div>
            <div style={{ display: "flex", gap: 8, flexShrink: 0 }}>
              {q.eq && (
                <button
                  onClick={() => setShowTranslation(v => !v)}
                  style={{ background: showTranslation ? "rgba(96,165,250,0.25)" : "rgba(96,165,250,0.1)", color: "#60A5FA", border: "1px solid rgba(96,165,250,0.35)", borderRadius: 8, padding: "8px 14px", cursor: "pointer", fontSize: 13, fontWeight: 600 }}>
                  🌐 {showTranslation ? "Hide EN" : "Show EN"}
                </button>
              )}
              <button onClick={handleNext} style={S.btn("primary")}>
                {idx + 1 >= filtered.length ? "Finish →" : "Next →"}
              </button>
            </div>
          </div>

          {/* English Translation Panel */}
          {showTranslation && q.eq && (
            <div style={{ background: "rgba(96,165,250,0.07)", border: "1px solid rgba(96,165,250,0.2)", borderRadius: 10, padding: 16 }}>
              <div style={{ display: "flex", alignItems: "center", gap: 6, marginBottom: 10 }}>
                <span style={{ fontSize: 14 }}>🌐</span>
                <span style={{ fontSize: 12, fontWeight: 700, color: "#60A5FA", letterSpacing: 0.5, textTransform: "uppercase" }}>English Translation</span>
              </div>
              <div style={{ color: "#C7D8F5", fontSize: 15, fontWeight: 500, marginBottom: 12, lineHeight: 1.5 }}>{q.eq}</div>
              <div style={{ display: "grid", gap: 6 }}>
                {q.eopts.map((opt, i) => (
                  <div key={i} style={{
                    background: i === q.a ? "rgba(16,185,129,0.12)" : S.p.stripeBg,
                    border: `1px solid ${i === q.a ? "rgba(16,185,129,0.4)" : S.p.border07}`,
                    borderRadius: 8, padding: "9px 14px", display: "flex", alignItems: "center", gap: 10
                  }}>
                    <span style={{ width: 22, height: 22, borderRadius: 6, border: `1px solid ${i === q.a ? "rgba(16,185,129,0.5)" : S.p.border15}`, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 11, fontWeight: 700, flexShrink: 0, color: i === q.a ? "#10B981" : S.p.textMuted }}>
                      {i === q.a ? "✓" : String.fromCharCode(65 + i)}
                    </span>
                    <span style={{ fontSize: 14, color: i === q.a ? "#10B981" : S.p.textMuted }}>{opt}</span>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
