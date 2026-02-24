import { useState, useEffect, useCallback } from "react";
import S from "../../styles.js";
import { GENERAL_QUESTIONS, STATE_QUESTIONS, STATES, shuffle } from "../../data/citizenshipQuestions.js";

export default function ExamMode({ selectedState, onBack, onComplete }) {
  const [phase, setPhase] = useState("intro");
  const [questions, setQuestions] = useState([]);
  const [answers, setAnswers] = useState({});
  const [timeLeft, setTimeLeft] = useState(3600);
  const [startTime, setStartTime] = useState(null);
  const [showTranslations, setShowTranslations] = useState(false);

  const stateName = STATES.find(s => s.key === selectedState)?.name || selectedState;

  const startExam = useCallback(() => {
    let genQ = shuffle(GENERAL_QUESTIONS).slice(0, 30);
    let stateQ = shuffle(STATE_QUESTIONS[selectedState] || []).slice(0, 3);
    const hasImage = [...genQ, ...stateQ].some(q => q.img || q.optImgs);
    if (!hasImage) {
      const allPool = [...GENERAL_QUESTIONS, ...(STATE_QUESTIONS[selectedState] || [])];
      const imgPool = allPool.filter(q => q.img || q.optImgs);
      if (imgPool.length > 0) {
        const pick = imgPool[Math.floor(Math.random() * imgPool.length)];
        const isState = String(pick.id).match(/^[A-Z]/);
        if (isState) {
          stateQ[Math.floor(Math.random() * stateQ.length)] = pick;
        } else {
          genQ[Math.floor(Math.random() * genQ.length)] = pick;
        }
      }
    }
    setQuestions([...genQ, ...stateQ]);
    setAnswers({});
    setTimeLeft(3600);
    setStartTime(Date.now());
    setPhase("active");
  }, [selectedState]);

  useEffect(() => {
    if (phase !== "active") return;
    const timer = setInterval(() => {
      setTimeLeft(t => {
        if (t <= 1) { clearInterval(timer); setPhase("result"); return 0; }
        return t - 1;
      });
    }, 1000);
    return () => clearInterval(timer);
  }, [phase]);

  const submitExam = () => setPhase("result");

  const formatTime = (s) => `${String(Math.floor(s / 60)).padStart(2, "0")}:${String(s % 60).padStart(2, "0")}`;

  if (phase === "intro") {
    return (
      <div style={S.inner}>
        <div style={{ textAlign: "center", padding: "40px 0" }}>
          <div style={{ fontSize: 56, marginBottom: 20 }}>⏱️</div>
          <h2 style={{ ...S.h1, marginBottom: 12 }}>Practice Exam</h2>
          <p style={{ color: "#888", marginBottom: 32, maxWidth: 480, margin: "0 auto 32px" }}>
            33 questions (30 general + 3 for {stateName}) · 60 minutes · At least 17 correct answers to pass
          </p>
          <div style={{ display: "flex", gap: 12, justifyContent: "center" }}>
            <button onClick={onBack} style={S.btn("ghost")}>← Back</button>
            <button onClick={startExam} style={S.btn("primary")}>Start Exam →</button>
          </div>
        </div>
      </div>
    );
  }

  if (phase === "result") {
    const correct = questions.filter(q => answers[q.id] === q.a).length;
    const passed = correct >= 17;
    onComplete?.(correct, 33);
    return (
      <div style={S.inner}>
        <div style={{ textAlign: "center", padding: "40px 0" }}>
          <div style={{ fontSize: 64, marginBottom: 20 }}>{passed ? "🎓" : "📖"}</div>
          <h2 style={{ ...S.h1, marginBottom: 8 }}>{passed ? "Passed!" : "Not Passed"}</h2>
          <div style={{ color: "#777", marginBottom: 32 }}>Passing score: 17 out of 33</div>
          <div style={{ fontSize: 56, fontFamily: "'Playfair Display', serif", fontWeight: 700, color: passed ? "#10B981" : "#EF4444", marginBottom: 8 }}>
            {correct}/33
          </div>
          <div style={{ color: "#888", marginBottom: 40 }}>{Math.round((correct / 33) * 100)}% correct</div>

          {/* Question review */}
          <div style={{ textAlign: "left", marginBottom: 32 }}>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 12 }}>
              <h3 style={{ ...S.h2, fontSize: 18, margin: 0 }}>Review</h3>
              <button
                onClick={() => setShowTranslations(v => !v)}
                style={{ background: showTranslations ? "rgba(96,165,250,0.25)" : "rgba(96,165,250,0.1)", color: "#60A5FA", border: "1px solid rgba(96,165,250,0.35)", borderRadius: 8, padding: "8px 14px", cursor: "pointer", fontSize: 13, fontWeight: 600 }}>
                🌐 {showTranslations ? "Hide EN" : "Show EN"}
              </button>
            </div>
            <div style={{ display: "grid", gap: 8 }}>
              {questions.map((q, i) => {
                const ans = answers[q.id];
                const ok = ans === q.a;
                return (
                  <div key={q.id} style={{ background: "#141720", border: `1px solid ${ok ? "rgba(16,185,129,0.25)" : "rgba(239,68,68,0.25)"}`, borderRadius: 8, padding: "12px 16px" }}>
                    <div style={{ display: "flex", gap: 8, alignItems: "flex-start" }}>
                      <span style={{ color: ok ? "#10B981" : "#EF4444", fontWeight: 700, marginTop: 1 }}>{ok ? "✓" : "✗"}</span>
                      <div style={{ flex: 1 }}>
                        <div style={{ color: "#ddd", fontSize: 14, marginBottom: 4 }}>
                          <span style={{ color: "#666", fontSize: 12, marginRight: 6 }}>Q{i + 1}</span>
                          {q.q.length > 80 ? q.q.slice(0, 80) + "…" : q.q}
                        </div>
                        {showTranslations && q.eq && (
                          <div style={{ color: "#60A5FA", fontSize: 13, marginBottom: 4, fontStyle: "italic" }}>
                            {q.eq.length > 80 ? q.eq.slice(0, 80) + "…" : q.eq}
                          </div>
                        )}
                        {!ok && (
                          <div style={{ fontSize: 13, color: "#888" }}>
                            Your answer: <span style={{ color: "#EF4444" }}>{ans !== undefined ? q.opts[ans] : "—"}</span>
                            {" · "}Correct: <span style={{ color: "#10B981" }}>{q.opts[q.a]}</span>
                            {showTranslations && q.eopts && (
                              <span style={{ color: "#60A5FA", fontStyle: "italic" }}>{" · "}{q.eopts[q.a]}</span>
                            )}
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <div style={{ display: "flex", gap: 12, justifyContent: "center" }}>
            <button onClick={onBack} style={S.btn("ghost")}>← Home</button>
            <button onClick={startExam} style={S.btn("primary")}>Try Again</button>
          </div>
        </div>
      </div>
    );
  }

  // Active exam
  const answered = Object.keys(answers).length;
  const timerColor = timeLeft < 600 ? "#EF4444" : timeLeft < 1800 ? "#F59E0B" : "#10B981";

  return (
    <div style={S.root}>
      {/* Sticky exam header */}
      <div style={{ position: "sticky", top: 0, zIndex: 50, background: "#0B0D14", borderBottom: "1px solid rgba(255,255,255,0.08)", padding: "12px 32px", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
          <span style={{ color: "#888", fontSize: 13 }}>Practice Exam · {stateName}</span>
          <span style={{ background: "rgba(255,255,255,0.06)", borderRadius: 6, padding: "4px 10px", fontSize: 13 }}>{answered}/33 answered</span>
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
          <span style={{ fontFamily: "monospace", fontSize: 20, fontWeight: 700, color: timerColor }}>{formatTime(timeLeft)}</span>
          <button onClick={submitExam} style={S.btn("primary")}>Submit</button>
        </div>
      </div>

      <div style={S.inner}>
        {questions.map((q, i) => {
          const ans = answers[q.id];
          const isState = i >= 30;
          return (
            <div key={q.id} style={{ ...S.card(), marginBottom: 16, borderColor: isState ? "rgba(245,200,66,0.2)" : "rgba(255,255,255,0.08)" }}>
              <div style={{ display: "flex", alignItems: "flex-start", gap: 12, marginBottom: 14 }}>
                <span style={{ background: isState ? "rgba(245,200,66,0.15)" : "rgba(255,255,255,0.07)", color: isState ? "#F5C842" : "#888", borderRadius: 6, padding: "2px 8px", fontSize: 12, fontWeight: 700, flexShrink: 0 }}>
                  {i + 1}{isState ? " 🏛️ State" : ""}
                </span>
                <div>
                  <div style={{ color: "#F5F3EE", fontSize: 16, lineHeight: 1.6 }}>{q.q}</div>
                  {q.img && (
                    <div style={{ marginTop: 10 }}>
                      <img src={q.img} alt="" style={{ maxWidth: "100%", maxHeight: 280, borderRadius: 8, border: "1px solid rgba(255,255,255,0.1)" }} />
                    </div>
                  )}
                </div>
              </div>
              <div style={{ display: "grid", gap: 8, ...(q.optImgs ? { gridTemplateColumns: "1fr 1fr" } : {}) }}>
                {q.opts.map((opt, oi) => (
                  <button
                    key={oi}
                    onClick={() => setAnswers(prev => ({ ...prev, [q.id]: oi }))}
                    style={{
                      background: ans === oi ? "rgba(245,200,66,0.12)" : "rgba(255,255,255,0.03)",
                      border: `1px solid ${ans === oi ? "rgba(245,200,66,0.5)" : "rgba(255,255,255,0.08)"}`,
                      borderRadius: 8, padding: q.optImgs ? "10px" : "11px 16px", cursor: "pointer", textAlign: q.optImgs ? "center" : "left",
                      color: ans === oi ? "#F5C842" : "#aaa", fontSize: 14, transition: "all 0.12s",
                      display: "flex", flexDirection: q.optImgs ? "column" : "row", alignItems: "center", gap: q.optImgs ? 6 : 10
                    }}
                  >
                    <span style={{ width: 22, height: 22, borderRadius: 11, border: `2px solid ${ans === oi ? "#F5C842" : "rgba(255,255,255,0.15)"}`, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                      {ans === oi && <span style={{ width: 10, height: 10, borderRadius: 5, background: "#F5C842", display: "block" }} />}
                    </span>
                    {q.optImgs?.[oi] && <img src={q.optImgs[oi]} alt="" style={{ maxWidth: "100%", maxHeight: 100, borderRadius: 6 }} />}
                    {opt}
                  </button>
                ))}
              </div>
            </div>
          );
        })}
        <div style={{ textAlign: "center", padding: "24px 0" }}>
          <button onClick={submitExam} style={S.btn("primary")}>Submit Exam →</button>
        </div>
      </div>
    </div>
  );
}
