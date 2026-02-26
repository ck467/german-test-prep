import { useState } from "react";
import useStyles from "../../useStyles.js";
import { getEX } from "../../palettes.js";

// ── Exam header bar (mimics the ZERTIFIKAT B1 | LESEN bar) ──
function ExamHeader({ source, sectionTitle, EX }) {
  const isGoethe = source === "goethe";
  const accent = isGoethe ? EX.orange : "#A855F7";
  return (
    <div style={{
      background: EX.gray,
      borderRadius: "8px 8px 0 0",
      padding: "10px 20px",
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      marginBottom: 0,
      borderBottom: `2px solid ${accent}`,
    }}>
      <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
        <span style={{
          background: accent,
          color: "#fff",
          fontWeight: 800,
          fontSize: 13,
          padding: "3px 10px",
          borderRadius: 4,
          letterSpacing: 1,
          textTransform: "uppercase",
        }}>
          {isGoethe ? "ZERTIFIKAT B1" : "TELC B1"}
        </span>
        {sectionTitle && (
          <span style={{ color: EX.white, fontWeight: 700, fontSize: 14, letterSpacing: 0.5 }}>
            {sectionTitle}
          </span>
        )}
      </div>
      <span style={{ color: EX.muted, fontSize: 11, textTransform: "uppercase", letterSpacing: 1 }}>
        {isGoethe ? "MODELLSATZ" : "ÜBUNGSTEST 1"}
      </span>
    </div>
  );
}

// ── Teil header (e.g. "Teil 1   Arbeitszeit: 10 Minuten") ──
function TeilHeader({ title, timeMinutes, instructions, context, topic, EX }) {
  return (
    <div style={{
      background: EX.grayLight,
      border: `1px solid ${EX.grayBorder}`,
      borderTop: "none",
      borderRadius: "0 0 8px 8px",
      padding: "20px 24px",
      marginBottom: 24,
    }}>
      <div style={{ display: "flex", alignItems: "baseline", gap: 14, marginBottom: instructions ? 12 : 0, flexWrap: "wrap" }}>
        <h2 style={{ margin: 0, fontFamily: "'Playfair Display', Georgia, serif", fontSize: 20, fontWeight: 700, color: EX.white }}>{title}</h2>
        {timeMinutes && (
          <span style={{
            fontSize: 12,
            color: EX.orange,
            fontWeight: 600,
            background: EX.orangeLight,
            border: `1px solid ${EX.orangeBorder}`,
            padding: "3px 10px",
            borderRadius: 4,
          }}>
            Arbeitszeit: {timeMinutes} Minuten
          </span>
        )}
      </div>
      {instructions && (
        <p style={{ color: EX.subtleText, fontSize: 13, lineHeight: 1.6, margin: 0, marginBottom: context || topic ? 12 : 0 }}>{instructions}</p>
      )}
      {(context || topic) && (
        <p style={{ color: EX.softText, fontSize: 14, lineHeight: 1.6, margin: 0, fontStyle: "italic" }}>{context || topic}</p>
      )}
    </div>
  );
}

// ── Passage box (blog, newspaper article, Hausordnung, letter) ──
function PassageBox({ children, title, subtitle, source: src, variant, EX }) {
  const isBlog = variant === "blog";
  const isNewspaper = variant === "newspaper";
  const isDocument = variant === "document";
  const isLetter = variant === "letter";

  return (
    <div style={{
      background: EX.passageBg,
      border: `1px solid ${EX.passageBorder}`,
      borderRadius: 8,
      padding: 0,
      marginBottom: 24,
      overflow: "hidden",
    }}>
      {/* Blog-style header */}
      {isBlog && title && (
        <div style={{
          background: "rgba(245,200,66,0.06)",
          borderBottom: `1px solid ${EX.passageBorder}`,
          padding: "14px 24px",
          textAlign: "center",
        }}>
          <div style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: 20, fontWeight: 700, color: "#F5C842", letterSpacing: 0.5 }}>
            {title}
          </div>
          {subtitle && <div style={{ fontSize: 12, color: EX.subtleText, fontStyle: "italic", marginTop: 2 }}>{subtitle}</div>}
        </div>
      )}
      {/* Newspaper-style header */}
      {isNewspaper && title && (
        <div style={{ padding: "18px 24px 0" }}>
          <h3 style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: 22, fontWeight: 700, color: EX.white, margin: 0, lineHeight: 1.3 }}>
            {title}
          </h3>
          {subtitle && <p style={{ color: EX.subtleText, fontSize: 13, margin: "4px 0 0", fontStyle: "italic" }}>{subtitle}</p>}
        </div>
      )}
      {/* Document-style header */}
      {isDocument && title && (
        <div style={{
          borderBottom: `1px solid ${EX.passageBorder}`,
          padding: "16px 24px",
          textAlign: "center",
        }}>
          <div style={{ fontWeight: 800, fontSize: 18, color: EX.white, letterSpacing: 2, textTransform: "uppercase" }}>
            {title}
          </div>
        </div>
      )}
      {/* Letter header */}
      {isLetter && title && (
        <div style={{ padding: "16px 24px 0" }}>
          <div style={{ fontStyle: "italic", color: EX.subtleText, fontSize: 13 }}>{title}</div>
        </div>
      )}
      {/* Body */}
      <div style={{ padding: "16px 24px 20px" }}>
        {children}
        {src && <p style={{ color: EX.muted, fontSize: 11, marginTop: 12, marginBottom: 0, fontStyle: "italic", textAlign: "right" }}>{src}</p>}
      </div>
    </div>
  );
}

// ── Answer feedback styling ──
function feedbackBorder(isCorrect, isWrong, submitted, EX) {
  if (!submitted) return EX.grayBorder;
  if (isCorrect) return "rgba(34,197,94,0.4)";
  if (isWrong) return "rgba(239,68,68,0.4)";
  return EX.grayBorder;
}

// ── Answer option button ──
const optBtn = (selected, correct, submitted, EX) => ({
  padding: "7px 16px",
  borderRadius: 5,
  border: "1.5px solid",
  cursor: submitted ? "default" : "pointer",
  fontSize: 14,
  lineHeight: 1.5,
  textAlign: "left",
  transition: "all 0.15s",
  background: submitted
    ? correct ? "rgba(34,197,94,0.1)" : selected ? "rgba(239,68,68,0.1)" : EX.ghostBg
    : selected ? EX.orangeLight : EX.ghostBg,
  borderColor: submitted
    ? correct ? "rgba(34,197,94,0.5)" : selected ? "rgba(239,68,68,0.5)" : EX.ghostBorder
    : selected ? EX.orangeBorder : EX.ghostBorder,
  color: submitted
    ? correct ? "#22C55E" : selected ? "#EF4444" : EX.softText
    : selected ? EX.orange : EX.softText,
  fontWeight: selected || correct ? 600 : 400,
});

// ── Richtig/Falsch button (exam-style rectangular) ──
const rfBtn = (selected, correct, submitted, EX) => ({
  ...optBtn(selected, correct, submitted, EX),
  minWidth: 80,
  textAlign: "center",
  fontWeight: 600,
  fontSize: 13,
  padding: "6px 18px",
  borderRadius: 4,
});

// ── Ad accent colors for matching ──
const adAccents = [
  { border: "rgba(96,165,250,0.25)", bg: "rgba(96,165,250,0.04)", label: "#60A5FA" },
  { border: "rgba(168,85,247,0.25)", bg: "rgba(168,85,247,0.04)", label: "#A855F7" },
  { border: "rgba(245,200,66,0.2)", bg: "rgba(245,200,66,0.04)", label: "#F5C842" },
  { border: "rgba(34,197,94,0.25)", bg: "rgba(34,197,94,0.04)", label: "#22C55E" },
  { border: "rgba(251,146,60,0.25)", bg: "rgba(251,146,60,0.04)", label: "#FB923C" },
  { border: "rgba(236,72,153,0.25)", bg: "rgba(236,72,153,0.04)", label: "#EC4899" },
];

// ═══════════════════════════════════════════════════════
// MAIN COMPONENT
// ═══════════════════════════════════════════════════════
export default function ExamPractice({ exam, onBack }) {
  const { S, theme, isMobile } = useStyles();
  const EX = getEX(theme);
  const [sectionIdx, setSectionIdx] = useState(null);
  const [answers, setAnswers] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const section = sectionIdx !== null ? exam.sections[sectionIdx] : null;

  const setAnswer = (qId, val) => {
    if (submitted) return;
    setAnswers((prev) => ({ ...prev, [qId]: val }));
  };

  const getAllQuestions = (sec) => {
    if (sec.type === "opinion") return sec.opinions;
    if (sec.articles) return sec.articles.flatMap((a) => a.questions);
    return sec.questions || [];
  };

  const handleSubmit = () => setSubmitted(true);
  const handleReset = () => { setAnswers({}); setSubmitted(false); };
  const handleBackToSections = () => { setSectionIdx(null); setAnswers({}); setSubmitted(false); };

  // ── Section selector ──
  if (sectionIdx === null) {
    const isGoethe = exam.source === "goethe";
    const accent = isGoethe ? EX.orange : "#A855F7";
    const accentLight = isGoethe ? EX.orangeLight : "rgba(168,85,247,0.12)";
    const accentBorder = isGoethe ? EX.orangeBorder : "rgba(168,85,247,0.3)";

    return (
      <div style={S.inner}>
        <button onClick={onBack} style={{ ...S.btn(), marginBottom: 24, fontSize: 13 }}>← Back</button>

        {/* Exam cover card */}
        <div style={{
          background: EX.gray,
          borderRadius: 12,
          overflow: "hidden",
          marginBottom: 32,
          border: `1px solid ${EX.grayBorder}`,
        }}>
          {/* Orange/purple accent band */}
          <div style={{ height: 4, background: accent }} />
          <div style={{ padding: "28px 32px" }}>
            <div style={{
              display: "inline-block",
              background: accent,
              color: "#fff",
              fontWeight: 800,
              fontSize: 28,
              padding: "6px 18px",
              borderRadius: 6,
              marginBottom: 16,
              letterSpacing: 1,
            }}>
              B1
            </div>
            <h1 style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: 26, fontWeight: 700, color: EX.white, margin: "0 0 6px" }}>
              {exam.title}
            </h1>
            <p style={{ color: EX.subtleText, fontSize: 14, margin: 0, marginBottom: 16 }}>{exam.subtitle}</p>
            <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
              <span style={{ ...S.tag, background: accentLight, color: accent, borderColor: accentBorder }}>{exam.totalItems} Questions</span>
              <span style={{ ...S.tag, background: accentLight, color: accent, borderColor: accentBorder }}>{exam.timeMinutes} min</span>
              <span style={{ ...S.tag, background: accentLight, color: accent, borderColor: accentBorder }}>{exam.sections.length} Sections</span>
            </div>
          </div>
        </div>

        {/* Section cards — mimics the Inhalt/table of contents */}
        <div style={{ fontWeight: 600, color: EX.muted, fontSize: 12, textTransform: "uppercase", letterSpacing: 1.5, marginBottom: 12, paddingLeft: 4 }}>
          Kandidatenblätter — Lesen
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
          {exam.sections.map((sec, i) => {
            const q = getAllQuestions(sec);
            return (
              <div
                key={sec.id}
                onClick={() => setSectionIdx(i)}
                style={{
                  background: EX.grayLight,
                  border: `1px solid ${EX.grayBorder}`,
                  borderRadius: 8,
                  padding: "16px 20px",
                  cursor: "pointer",
                  transition: "all 0.2s",
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
                onMouseEnter={(e) => { e.currentTarget.style.borderColor = accentBorder; e.currentTarget.style.background = accentLight; }}
                onMouseLeave={(e) => { e.currentTarget.style.borderColor = EX.grayBorder; e.currentTarget.style.background = EX.grayLight; }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
                  <span style={{
                    background: accent,
                    color: "#fff",
                    fontWeight: 800,
                    fontSize: 12,
                    width: 28,
                    height: 28,
                    borderRadius: "50%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}>
                    {i + 1}
                  </span>
                  <div>
                    <div style={{ fontWeight: 700, color: EX.white, fontSize: 15 }}>{sec.title}</div>
                    <div style={{ color: EX.muted, fontSize: 12, marginTop: 2 }}>
                      {sec.type === "trueFalse" && "Richtig / Falsch"}
                      {sec.type === "multipleChoice" && "Multiple Choice (a / b / c)"}
                      {sec.type === "matching" && "Zuordnung"}
                      {sec.type === "opinion" && "Ja / Nein"}
                      {sec.type === "cloze" && "Grammatik (a / b / c)"}
                      {sec.type === "wordBankCloze" && "Wortschatz-Zuordnung"}
                      {" · "}{q.length} Aufgaben
                      {sec.timeMinutes ? ` · ${sec.timeMinutes} min` : ""}
                    </div>
                  </div>
                </div>
                <span style={{ color: accent, fontSize: 18, fontWeight: 700 }}>→</span>
              </div>
            );
          })}
        </div>
      </div>
    );
  }

  // ── Section practice view ──
  const questions = getAllQuestions(section);
  const answeredCount = questions.filter((q) => answers[q.id] !== undefined).length;
  const score = submitted
    ? questions.filter((q) => answers[q.id] === q.answer).length
    : null;

  return (
    <div style={S.inner}>
      {/* Navigation + score */}
      <div style={{ display: "flex", gap: 12, marginBottom: 20, alignItems: "center", flexWrap: "wrap" }}>
        <button onClick={handleBackToSections} style={{ ...S.btn(), fontSize: 13 }}>← Sections</button>
        <div style={{ flex: 1 }} />
        {!submitted && (
          <span style={{ color: EX.muted, fontSize: 13 }}>{answeredCount} / {questions.length}</span>
        )}
        {submitted && (
          <span style={{
            fontSize: 15, fontWeight: 700, padding: "5px 14px", borderRadius: 6,
            background: score / questions.length >= 0.6 ? "rgba(34,197,94,0.12)" : "rgba(239,68,68,0.12)",
            color: score / questions.length >= 0.6 ? "#22C55E" : "#EF4444",
          }}>
            {score} / {questions.length} ({Math.round((score / questions.length) * 100)}%)
          </span>
        )}
      </div>

      {/* Exam header bar */}
      <ExamHeader source={exam.source} sectionTitle={section.title.split("–")[0]?.trim()} EX={EX} />

      {/* Teil header */}
      <TeilHeader
        title={section.title}
        timeMinutes={section.timeMinutes}
        instructions={section.instructions}
        context={section.context}
        topic={section.type === "opinion" ? section.topic : null}
        EX={EX}
      />

      {/* Render by type */}
      {section.type === "trueFalse" && renderTrueFalse(section, answers, setAnswer, submitted, EX, isMobile)}
      {section.type === "multipleChoice" && renderMC(section, answers, setAnswer, submitted, EX, isMobile)}
      {section.type === "matching" && renderMatching(section, answers, setAnswer, submitted, EX, isMobile)}
      {section.type === "opinion" && renderOpinion(section, answers, setAnswer, submitted, EX, isMobile)}
      {section.type === "cloze" && renderCloze(section, answers, setAnswer, submitted, EX, isMobile)}
      {section.type === "wordBankCloze" && renderWordBank(section, answers, setAnswer, submitted, EX, isMobile)}

      {/* Submit / Reset */}
      <div style={{ marginTop: 32, display: "flex", gap: 12 }}>
        {!submitted ? (
          <button
            onClick={handleSubmit}
            disabled={answeredCount < questions.length}
            style={{
              ...S.btn("primary"),
              opacity: answeredCount < questions.length ? 0.4 : 1,
            }}
          >
            Antworten prüfen
          </button>
        ) : (
          <button onClick={handleReset} style={S.btn("primary")}>Nochmal versuchen</button>
        )}
      </div>
    </div>
  );
}


// ═══════════════════════════════════════════════════════
// RENDERERS
// ═══════════════════════════════════════════════════════

// ── True/False (Richtig/Falsch) — exam table layout ──
function renderTrueFalse(section, answers, setAnswer, submitted, EX, isMobile) {
  let blogTitle = null;
  let blogSubtitle = null;
  let passageBody = section.passage || "";
  const lines = passageBody.split("\n");
  if (lines[0] && (lines[0].includes("Blog") || lines[0].includes(".at") || lines[0].includes(".de"))) {
    blogTitle = lines[0].trim();
    if (lines[1] && lines[1].trim().startsWith("Mein") || lines[1]?.includes("...")) {
      blogSubtitle = lines[1].trim();
      passageBody = lines.slice(2).join("\n").trim();
    } else {
      passageBody = lines.slice(1).join("\n").trim();
    }
  }

  return (
    <>
      {section.passage && (
        <PassageBox variant={blogTitle ? "blog" : undefined} title={blogTitle} subtitle={blogSubtitle} EX={EX}>
          <p style={{ color: EX.passageText, fontSize: 14, lineHeight: 1.85, margin: 0, whiteSpace: "pre-line" }}>{passageBody}</p>
        </PassageBox>
      )}

      {/* Questions in exam table style */}
      <div style={{ display: "flex", flexDirection: "column", gap: 0 }}>
        {section.questions.map((q, qi) => {
          const isCorrect = submitted && answers[q.id] === q.answer;
          const isWrong = submitted && answers[q.id] !== undefined && answers[q.id] !== q.answer;
          return (
            <div key={q.id} style={{
              display: "flex",
              alignItems: "center",
              gap: 16,
              padding: "14px 16px",
              borderBottom: `1px solid ${EX.grayBorder}`,
              borderLeft: `3px solid ${feedbackBorder(isCorrect, isWrong, submitted, EX)}`,
              background: qi % 2 === 0 ? EX.stripeBg : "transparent",
              transition: "all 0.2s",
            }}>
              <span style={{ fontWeight: 700, color: EX.orange, fontSize: 16, minWidth: 24 }}>{q.id}</span>
              <span style={{ flex: 1, color: EX.white, fontSize: 14, lineHeight: 1.5 }}>{q.text}</span>
              <div style={{ display: "flex", gap: 6, flexShrink: 0 }}>
                {["richtig", "falsch"].map((val) => (
                  <button
                    key={val}
                    onClick={() => setAnswer(q.id, val)}
                    style={rfBtn(answers[q.id] === val, submitted && q.answer === val, submitted, EX)}
                  >
                    {val === "richtig" ? "Richtig" : "Falsch"}
                  </button>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}


// ── Multiple Choice — newspaper article + questions ──
function renderMC(section, answers, setAnswer, submitted, EX, isMobile) {
  return (
    <>
      {(section.articles || []).map((article, ai) => (
        <div key={ai}>
          {article.passage && (
            <PassageBox
              variant={article.title ? "newspaper" : undefined}
              title={article.title}
              subtitle={article.subtitle}
              source={article.source}
              EX={EX}
            >
              <p style={{ color: EX.passageText, fontSize: 14, lineHeight: 1.85, margin: 0, whiteSpace: "pre-line", columnCount: isMobile ? 1 : (article.passage.length > 600 ? 2 : 1), columnGap: 28 }}>
                {article.passage}
              </p>
            </PassageBox>
          )}

          {/* Questions */}
          {article.questions.map((q) => {
            const isCorrect = submitted && answers[q.id] === q.answer;
            const isWrong = submitted && answers[q.id] !== undefined && answers[q.id] !== q.answer;
            return (
              <div key={q.id} style={{
                background: EX.grayLight,
                border: `1px solid ${feedbackBorder(isCorrect, isWrong, submitted, EX)}`,
                borderRadius: 8,
                padding: "16px 20px",
                marginBottom: 10,
                transition: "all 0.2s",
              }}>
                <div style={{ fontWeight: 600, marginBottom: 12, color: EX.white, fontSize: 14, lineHeight: 1.5 }}>
                  <span style={{ color: EX.orange, fontWeight: 700, marginRight: 8 }}>{q.id}</span>
                  {q.text}
                </div>
                <div style={{ display: "flex", flexDirection: "column", gap: 6, paddingLeft: 24 }}>
                  {q.options.map((opt) => (
                    <button
                      key={opt.label}
                      onClick={() => setAnswer(q.id, opt.label)}
                      style={optBtn(answers[q.id] === opt.label, submitted && q.answer === opt.label, submitted, EX)}
                    >
                      <span style={{ fontWeight: 700, marginRight: 6 }}>{opt.label})</span> {opt.text}
                    </button>
                  ))}
                </div>
              </div>
            );
          })}
          {ai < (section.articles || []).length - 1 && <div style={{ height: 20 }} />}
        </div>
      ))}
    </>
  );
}


// ── Matching — ad cards grid + situation assignments ──
function parseAdText(text) {
  const idx = text.indexOf(" – ");
  if (idx > 0 && idx < 80) return { heading: text.slice(0, idx), body: text.slice(idx + 3) };
  return { heading: "", body: text };
}

function renderMatching(section, answers, setAnswer, submitted, EX, isMobile) {
  const optionLabels = section.options.map((o) => o.label);
  const noMatch = section.noMatchLabel || "0";
  const allLabels = [...optionLabels, noMatch].filter((v, i, a) => a.indexOf(v) === i);
  const avgLen = section.options.reduce((sum, o) => sum + o.text.length, 0) / section.options.length;
  const isAdStyle = avgLen > 80;

  return (
    <>
      {/* Ad-style card grid */}
      {isAdStyle ? (
        <div style={{
          display: "grid",
          gridTemplateColumns: isMobile ? "1fr" : "repeat(auto-fill, minmax(280px, 1fr))",
          gap: 14,
          marginBottom: 28,
        }}>
          {section.options.map((opt, i) => {
            const { heading, body } = parseAdText(opt.text);
            const accent = adAccents[i % adAccents.length];
            return (
              <div key={opt.label} style={{
                background: accent.bg,
                border: `1.5px solid ${accent.border}`,
                borderRadius: 8,
                padding: "20px 18px 16px",
                position: "relative",
                minHeight: 90,
              }}>
                <div style={{
                  position: "absolute", top: -11, left: 14,
                  background: accent.label, color: "#1A1B2E",
                  fontWeight: 800, fontSize: 13,
                  width: 26, height: 26, borderRadius: "50%",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  boxShadow: `0 0 8px ${accent.border}`,
                }}>{opt.label}</div>
                {heading && (
                  <div style={{ fontWeight: 700, color: EX.white, fontSize: 15, marginTop: 2, marginBottom: 6 }}>
                    {heading}
                  </div>
                )}
                <div style={{ color: EX.subtleText, fontSize: 13, lineHeight: 1.6, marginTop: heading ? 0 : 6 }}>
                  {body || opt.text}
                </div>
              </div>
            );
          })}
          {/* No-match card */}
          <div style={{
            background: EX.noMatchBg,
            border: `1.5px dashed ${EX.noMatchBorder}`,
            borderRadius: 8,
            padding: "20px 18px 16px",
            position: "relative",
            display: "flex", alignItems: "center", justifyContent: "center",
            minHeight: 60,
          }}>
            <div style={{
              position: "absolute", top: -11, left: 14,
              background: "#555", color: "#fff",
              fontWeight: 800, fontSize: 13,
              width: 26, height: 26, borderRadius: "50%",
              display: "flex", alignItems: "center", justifyContent: "center",
            }}>{noMatch}</div>
            <span style={{ color: EX.muted, fontSize: 13, fontStyle: "italic" }}>Keine passende Anzeige</span>
          </div>
        </div>
      ) : (
        /* Compact list for short headlines */
        <div style={{
          background: EX.passageBg,
          border: `1px solid ${EX.passageBorder}`,
          borderRadius: 8,
          padding: "16px 20px",
          marginBottom: 24,
        }}>
          <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
            {section.options.map((opt, i) => {
              const accent = adAccents[i % adAccents.length];
              return (
                <div key={opt.label} style={{ display: "flex", alignItems: "flex-start", gap: 10, fontSize: 14, color: EX.passageText, lineHeight: 1.5 }}>
                  <span style={{
                    background: accent.label, color: "#1A1B2E",
                    fontWeight: 800, fontSize: 12,
                    minWidth: 22, height: 22, borderRadius: "50%",
                    display: "inline-flex", alignItems: "center", justifyContent: "center",
                    flexShrink: 0, marginTop: 1,
                  }}>{opt.label}</span>
                  {opt.text}
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* Situation question rows — exam table style */}
      <div style={{ display: "flex", flexDirection: "column", gap: 0 }}>
        {section.questions.map((q, qi) => {
          const isCorrect = submitted && answers[q.id] === q.answer;
          const isWrong = submitted && answers[q.id] !== undefined && answers[q.id] !== q.answer;
          return (
            <div key={q.id} style={{
              padding: "14px 16px",
              borderBottom: `1px solid ${EX.grayBorder}`,
              borderLeft: `3px solid ${feedbackBorder(isCorrect, isWrong, submitted, EX)}`,
              background: qi % 2 === 0 ? EX.stripeBg : "transparent",
            }}>
              <div style={{ fontWeight: 600, marginBottom: 10, color: EX.white, fontSize: 14, lineHeight: 1.6 }}>
                <span style={{ color: EX.orange, fontWeight: 700, marginRight: 8 }}>{q.id}</span>
                {q.text}
              </div>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 5, paddingLeft: 24 }}>
                {allLabels.map((label) => {
                  const isSelected = answers[q.id] === label;
                  const isAnswer = submitted && q.answer === label;
                  const accentIdx = optionLabels.indexOf(label);
                  const accent = accentIdx >= 0 ? adAccents[accentIdx % adAccents.length] : null;
                  return (
                    <button
                      key={label}
                      onClick={() => setAnswer(q.id, label)}
                      style={{
                        padding: "4px 11px", fontSize: 13, minWidth: 32, textAlign: "center",
                        fontWeight: 700, borderRadius: 4, border: "1.5px solid", cursor: submitted ? "default" : "pointer",
                        transition: "all 0.15s",
                        background: submitted
                          ? isAnswer ? "rgba(34,197,94,0.1)" : isSelected ? "rgba(239,68,68,0.1)" : EX.ghostBg
                          : isSelected ? (accent ? accent.bg : EX.orangeLight) : EX.ghostBg,
                        borderColor: submitted
                          ? isAnswer ? "rgba(34,197,94,0.5)" : isSelected ? "rgba(239,68,68,0.5)" : EX.ghostBorder
                          : isSelected ? (accent ? accent.border : EX.orangeBorder) : (accent ? accent.border : EX.ghostBorder),
                        color: submitted
                          ? isAnswer ? "#22C55E" : isSelected ? "#EF4444" : EX.muted
                          : isSelected ? (accent ? accent.label : EX.orange) : (accent ? accent.label : EX.muted),
                      }}
                    >
                      {label}
                    </button>
                  );
                })}
              </div>
              {submitted && isWrong && (
                <div style={{ color: "#22C55E", fontSize: 12, marginTop: 6, paddingLeft: 24 }}>Richtige Antwort: {q.answer}</div>
              )}
            </div>
          );
        })}
      </div>
    </>
  );
}


// ── Opinion (Ja/Nein) — Leserbriefe newspaper style ──
function renderOpinion(section, answers, setAnswer, submitted, EX, isMobile) {
  return (
    <>
      {/* LESERBRIEFE newspaper header */}
      <div style={{
        textAlign: "center",
        margin: "8px 0 24px",
        padding: "16px 0",
        borderTop: `3px solid ${EX.muted}`,
        borderBottom: `1px solid ${EX.muted}`,
      }}>
        <div style={{
          fontFamily: "'Playfair Display', Georgia, serif",
          fontSize: 28,
          fontWeight: 700,
          color: EX.white,
          letterSpacing: 4,
          textTransform: "uppercase",
        }}>
          Leserbriefe
        </div>
      </div>

      {/* Person grid */}
      <div style={{ display: "grid", gridTemplateColumns: `repeat(auto-fill, minmax(${isMobile ? "130px" : "160px"}, 1fr))`, gap: 8, marginBottom: 24 }}>
        {section.opinions.map((op) => (
          <div key={op.id + "-badge"} style={{
            background: EX.grayLight,
            border: `1px solid ${EX.grayBorder}`,
            borderRadius: 6,
            padding: "8px 12px",
            display: "flex",
            alignItems: "center",
            gap: 8,
          }}>
            <span style={{ color: EX.orange, fontWeight: 700, fontSize: 15 }}>{op.id}</span>
            <span style={{ color: EX.softText, fontSize: 13 }}>{op.person}</span>
          </div>
        ))}
      </div>

      {/* Opinion cards */}
      {section.opinions.map((op, oi) => {
        const isCorrect = submitted && answers[op.id] === op.answer;
        const isWrong = submitted && answers[op.id] !== undefined && answers[op.id] !== op.answer;
        return (
          <div key={op.id} style={{
            padding: "16px 20px",
            borderBottom: `1px solid ${EX.grayBorder}`,
            borderLeft: `3px solid ${feedbackBorder(isCorrect, isWrong, submitted, EX)}`,
            background: oi % 2 === 0 ? EX.stripeBg : "transparent",
          }}>
            <div style={{ display: "flex", alignItems: "baseline", gap: 10, marginBottom: 10 }}>
              <span style={{ color: EX.orange, fontWeight: 700, fontSize: 16 }}>{op.id}</span>
              <span style={{ fontWeight: 600, color: "#F5C842", fontSize: 13 }}>{op.person}</span>
            </div>
            <p style={{ color: EX.passageText, fontSize: 14, lineHeight: 1.75, margin: "0 0 12px", paddingLeft: 26 }}>{op.text}</p>
            <div style={{ display: "flex", gap: 6, paddingLeft: 26 }}>
              {["ja", "nein"].map((val) => (
                <button
                  key={val}
                  onClick={() => setAnswer(op.id, val)}
                  style={rfBtn(answers[op.id] === val, submitted && op.answer === val, submitted, EX)}
                >
                  {val === "ja" ? "Ja" : "Nein"}
                </button>
              ))}
            </div>
          </div>
        );
      })}
    </>
  );
}


// ── Cloze (grammar) — letter-style passage + inline blanks ──
function renderCloze(section, answers, setAnswer, submitted, EX, isMobile) {
  const renderPassage = () => {
    const parts = section.passage.split(/\[(\d+)\]/g);
    return parts.map((part, i) => {
      if (i % 2 === 1) {
        const qId = parseInt(part);
        const q = section.questions.find((q) => q.id === qId);
        const ans = answers[qId];
        const word = ans ? q?.options.find((o) => o.label === ans)?.text : null;
        const correct = submitted && q && ans === q.answer;
        const wrong = submitted && q && ans && ans !== q.answer;
        return (
          <span key={i} style={{
            display: "inline-block",
            minWidth: 60,
            borderBottom: `2px solid ${submitted ? (correct ? "#22C55E" : wrong ? "#EF4444" : EX.muted) : EX.orange}`,
            padding: "1px 6px",
            margin: "0 2px",
            fontWeight: 600,
            color: submitted ? (correct ? "#22C55E" : wrong ? "#EF4444" : EX.subtleText) : (word ? EX.orange : EX.muted),
            textAlign: "center",
            fontSize: 14,
          }}>
            {word || <span style={{ color: EX.muted }}>__{qId}__</span>}
          </span>
        );
      }
      return <span key={i}>{part}</span>;
    });
  };

  return (
    <>
      <PassageBox variant="letter" title={section.passage.includes("Liebe") || section.passage.includes("Sehr geehrte") ? "Brief" : null} EX={EX}>
        <p style={{ color: EX.passageText, fontSize: 14, lineHeight: 2.1, margin: 0, whiteSpace: "pre-line" }}>
          {renderPassage()}
        </p>
      </PassageBox>

      {/* Answer options per gap */}
      <div style={{ display: "flex", flexDirection: "column", gap: 0 }}>
        {section.questions.map((q, qi) => {
          const isCorrect = submitted && answers[q.id] === q.answer;
          const isWrong = submitted && answers[q.id] !== undefined && answers[q.id] !== q.answer;
          return (
            <div key={q.id} style={{
              display: "flex", alignItems: "center", gap: 10, flexWrap: "wrap",
              padding: "10px 16px",
              borderBottom: `1px solid ${EX.grayBorder}`,
              borderLeft: `3px solid ${feedbackBorder(isCorrect, isWrong, submitted, EX)}`,
              background: qi % 2 === 0 ? EX.stripeBg : "transparent",
            }}>
              <span style={{ fontWeight: 700, color: EX.orange, fontSize: 15, minWidth: 28 }}>{q.id}</span>
              {q.options.map((opt) => (
                <button
                  key={opt.label}
                  onClick={() => setAnswer(q.id, opt.label)}
                  style={{ ...optBtn(answers[q.id] === opt.label, submitted && q.answer === opt.label, submitted, EX), padding: "5px 14px", fontSize: 13 }}
                >
                  <span style={{ fontWeight: 700, marginRight: 4 }}>{opt.label})</span> {opt.text}
                </button>
              ))}
            </div>
          );
        })}
      </div>
    </>
  );
}


// ── Word Bank Cloze — passage with drag-style word bank ──
function renderWordBank(section, answers, setAnswer, submitted, EX, isMobile) {
  const usedLetters = Object.values(answers);

  const renderPassage = () => {
    const parts = section.passage.split(/\[(\d+)\]/g);
    return parts.map((part, i) => {
      if (i % 2 === 1) {
        const qId = parseInt(part);
        const q = section.questions.find((q) => q.id === qId);
        const ans = answers[qId];
        const word = ans ? section.wordBank.find((w) => w.label === ans)?.word : null;
        const correct = submitted && q && ans === q.answer;
        const wrong = submitted && q && ans && ans !== q.answer;
        return (
          <span key={i} style={{
            display: "inline-block",
            minWidth: 70,
            borderBottom: `2px solid ${submitted ? (correct ? "#22C55E" : wrong ? "#EF4444" : EX.muted) : EX.orange}`,
            padding: "1px 6px",
            margin: "0 2px",
            fontWeight: 600,
            color: submitted ? (correct ? "#22C55E" : wrong ? "#EF4444" : EX.subtleText) : (word ? EX.orange : EX.muted),
            textAlign: "center",
            fontSize: 14,
          }}>
            {word || <span style={{ color: EX.muted }}>__{qId}__</span>}
          </span>
        );
      }
      return <span key={i}>{part}</span>;
    });
  };

  return (
    <>
      {/* Word bank */}
      <div style={{
        background: EX.grayLight,
        border: `1px solid ${EX.grayBorder}`,
        borderRadius: 8,
        padding: "14px 20px",
        marginBottom: 20,
      }}>
        <div style={{ fontWeight: 600, color: EX.muted, fontSize: 11, textTransform: "uppercase", letterSpacing: 1, marginBottom: 10 }}>Wortbank</div>
        <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
          {section.wordBank.map((w) => (
            <span
              key={w.label}
              style={{
                background: usedLetters.includes(w.label) ? EX.ghostBg : EX.orangeLight,
                color: usedLetters.includes(w.label) ? EX.muted : EX.orange,
                border: `1px solid ${usedLetters.includes(w.label) ? EX.ghostBorder : EX.orangeBorder}`,
                borderRadius: 4,
                padding: "4px 10px",
                fontSize: 13,
                fontWeight: 600,
                textDecoration: usedLetters.includes(w.label) ? "line-through" : "none",
                transition: "all 0.2s",
              }}
            >
              {w.label}) {w.word}
            </span>
          ))}
        </div>
      </div>

      {/* Passage */}
      <PassageBox variant="letter" title={section.passage.includes("Sehr geehrte") || section.passage.includes("Liebe") ? "Brief" : null} EX={EX}>
        <p style={{ color: EX.passageText, fontSize: 14, lineHeight: 2.1, margin: 0, whiteSpace: "pre-line" }}>
          {renderPassage()}
        </p>
      </PassageBox>

      {/* Gap selectors */}
      <div style={{ display: "flex", flexDirection: "column", gap: 0 }}>
        {section.questions.map((q, qi) => {
          const isCorrect = submitted && answers[q.id] === q.answer;
          const isWrong = submitted && answers[q.id] !== undefined && answers[q.id] !== q.answer;
          return (
            <div key={q.id} style={{
              display: "flex", alignItems: "center", gap: 8, flexWrap: "wrap",
              padding: "10px 16px",
              borderBottom: `1px solid ${EX.grayBorder}`,
              borderLeft: `3px solid ${feedbackBorder(isCorrect, isWrong, submitted, EX)}`,
              background: qi % 2 === 0 ? EX.stripeBg : "transparent",
            }}>
              <span style={{ fontWeight: 700, color: EX.orange, fontSize: 15, minWidth: 28 }}>{q.id}</span>
              <select
                value={answers[q.id] || ""}
                onChange={(e) => setAnswer(q.id, e.target.value)}
                disabled={submitted}
                style={{
                  background: EX.selectBg, color: EX.selectColor,
                  border: `1.5px solid ${submitted ? (isCorrect ? "rgba(34,197,94,0.5)" : isWrong ? "rgba(239,68,68,0.5)" : EX.grayBorder) : (answers[q.id] ? EX.orangeBorder : EX.grayBorder)}`,
                  borderRadius: 6, padding: "7px 12px", fontSize: 14, minWidth: 200,
                }}
              >
                <option value="">— auswählen —</option>
                {section.wordBank.map((w) => (
                  <option key={w.label} value={w.label}>{w.label}) {w.word}</option>
                ))}
              </select>
              {submitted && isWrong && (
                <span style={{ color: "#22C55E", fontSize: 12 }}>
                  Richtig: {q.answer}) {section.wordBank.find((w) => w.label === q.answer)?.word}
                </span>
              )}
            </div>
          );
        })}
      </div>
    </>
  );
}
