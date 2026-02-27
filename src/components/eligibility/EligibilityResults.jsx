import { useState } from "react";
import useStyles from "../../useStyles.js";
import {
  REQUIREMENTS,
  EXCLUSION_GROUNDS,
  DISCRETIONARY_NOTES,
  QUICK_CHECK_URL,
  SOURCE_URL,
  SOURCE_LABEL,
} from "../../data/eligibilityRequirements.js";

const GREEN = "#10B981";
const RED = "#EF4444";
const AMBER = "#F59E0B";

function getVerdict(answers) {
  const yesCount = REQUIREMENTS.filter((r) => answers[r.id] === "yes").length;
  const noCount = REQUIREMENTS.filter((r) => answers[r.id] === "no").length;

  if (yesCount === REQUIREMENTS.length) {
    return { label: "Likely Eligible", color: GREEN, icon: "\uD83C\uDF89", bg: "rgba(16,185,129,0.1)", border: "rgba(16,185,129,0.3)" };
  }
  if (noCount === 0) {
    return { label: "May Need Further Steps", color: AMBER, icon: "\uD83D\uDD0D", bg: "rgba(245,158,11,0.1)", border: "rgba(245,158,11,0.3)" };
  }
  return { label: "Not Yet Eligible", color: RED, icon: "\u26A0\uFE0F", bg: "rgba(239,68,68,0.1)", border: "rgba(239,68,68,0.3)" };
}

export default function EligibilityResults({ answers, onStartOver }) {
  const { S, isMobile } = useStyles();
  const [expanded, setExpanded] = useState({});

  const verdict = getVerdict(answers);
  const yesCount = REQUIREMENTS.filter((r) => answers[r.id] === "yes").length;
  const noCount = REQUIREMENTS.filter((r) => answers[r.id] === "no").length;
  const unsureCount = REQUIREMENTS.filter((r) => answers[r.id] === "unsure").length;

  const toggleExpand = (id) => {
    setExpanded((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <div style={S.inner}>
      {/* Verdict Banner */}
      <div
        style={{
          background: verdict.bg,
          border: `1px solid ${verdict.border}`,
          borderRadius: 12,
          padding: isMobile ? "24px 16px" : "32px 28px",
          textAlign: "center",
          marginBottom: 24,
        }}
      >
        <div style={{ fontSize: 48, marginBottom: 12 }}>{verdict.icon}</div>
        <h1
          style={{
            fontFamily: "'Playfair Display', Georgia, serif",
            fontSize: isMobile ? 24 : 32,
            fontWeight: 700,
            color: verdict.color,
            marginBottom: 8,
          }}
        >
          {verdict.label}
        </h1>
        <div
          style={{
            fontSize: isMobile ? 40 : 56,
            fontFamily: "'Playfair Display', serif",
            fontWeight: 700,
            color: verdict.color,
            marginBottom: 12,
          }}
        >
          {yesCount}/{REQUIREMENTS.length}
        </div>

        {/* Mini Stats Badges */}
        <div style={{ display: "flex", gap: 10, justifyContent: "center", flexWrap: "wrap" }}>
          <span
            style={{
              background: "rgba(16,185,129,0.15)",
              color: GREEN,
              border: "1px solid rgba(16,185,129,0.3)",
              borderRadius: 6,
              padding: "4px 12px",
              fontSize: 13,
              fontWeight: 700,
            }}
          >
            {yesCount} Yes
          </span>
          {noCount > 0 && (
            <span
              style={{
                background: "rgba(239,68,68,0.15)",
                color: RED,
                border: "1px solid rgba(239,68,68,0.3)",
                borderRadius: 6,
                padding: "4px 12px",
                fontSize: 13,
                fontWeight: 700,
              }}
            >
              {noCount} No
            </span>
          )}
          {unsureCount > 0 && (
            <span
              style={{
                background: "rgba(245,158,11,0.15)",
                color: AMBER,
                border: "1px solid rgba(245,158,11,0.3)",
                borderRadius: 6,
                padding: "4px 12px",
                fontSize: 13,
                fontWeight: 700,
              }}
            >
              {unsureCount} Unsure
            </span>
          )}
        </div>
      </div>

      {/* Color-Coded Requirement List */}
      <div style={{ marginBottom: 24 }}>
        <h2 style={{ ...S.h2, fontSize: 18, marginBottom: 12 }}>Requirement Details</h2>
        <div style={{ display: "grid", gap: 8 }}>
          {REQUIREMENTS.map((req) => {
            const answer = answers[req.id];
            const color = answer === "yes" ? GREEN : answer === "no" ? RED : AMBER;
            const symbol = answer === "yes" ? "\u2713" : answer === "no" ? "\u2717" : "?";
            const isExpandable = answer === "no" || answer === "unsure";
            const isExpanded = expanded[req.id];

            return (
              <div key={req.id}>
                <div
                  onClick={isExpandable ? () => toggleExpand(req.id) : undefined}
                  style={{
                    ...S.card({ padding: "12px 16px" }),
                    borderColor: `${color}33`,
                    cursor: isExpandable ? "pointer" : "default",
                    display: "flex",
                    alignItems: "center",
                    gap: 12,
                    transition: "all 0.15s",
                  }}
                >
                  <span
                    style={{
                      width: 28,
                      height: 28,
                      borderRadius: 14,
                      background: `${color}1A`,
                      border: `2px solid ${color}`,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: 14,
                      fontWeight: 700,
                      color,
                      flexShrink: 0,
                    }}
                  >
                    {symbol}
                  </span>
                  <div style={{ flex: 1 }}>
                    <span style={{ fontSize: 18, marginRight: 8 }}>{req.icon}</span>
                    <span style={{ fontWeight: 600, color: S.p.headingText, fontSize: 14 }}>
                      {req.title}
                    </span>
                  </div>
                  {isExpandable && (
                    <span style={{ color: S.p.textMuted, fontSize: 12 }}>
                      {isExpanded ? "\u25B2" : "\u25BC"}
                    </span>
                  )}
                </div>

                {isExpanded && (
                  <div
                    style={{
                      background: S.p.exampleBg,
                      border: `1px solid ${S.p.border08}`,
                      borderTop: "none",
                      borderRadius: "0 0 12px 12px",
                      padding: "14px 16px",
                      marginTop: -1,
                    }}
                  >
                    <div style={{ color: S.p.headingText, fontSize: 14, lineHeight: 1.6, marginBottom: 6 }}>
                      {req.requirement}
                    </div>
                    <div style={{ color: S.p.textMuted, fontSize: 13, lineHeight: 1.6, fontStyle: "italic", marginBottom: 8 }}>
                      {req.requirementDe}
                    </div>
                    <div style={{ color: S.p.textMuted, fontSize: 13, lineHeight: 1.6 }}>
                      {req.details}
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>

      {/* Exclusion Grounds Warning */}
      <div
        style={{
          ...S.card({ padding: "18px 20px" }),
          borderColor: "rgba(239,68,68,0.3)",
          marginBottom: 16,
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 10 }}>
          <span style={{ fontSize: 18 }}>{"\uD83D\uDEA8"}</span>
          <span style={{ fontWeight: 700, color: RED, fontSize: 15 }}>Exclusion Grounds</span>
        </div>
        <div style={{ color: S.p.textMuted, fontSize: 13, lineHeight: 1.5, marginBottom: 10 }}>
          Naturalisation will be refused if any of the following apply:
        </div>
        <ul style={{ margin: 0, paddingLeft: 20 }}>
          {EXCLUSION_GROUNDS.map((ground, i) => (
            <li
              key={i}
              style={{ color: S.p.bodyText, fontSize: 13, lineHeight: 1.6, marginBottom: 4 }}
            >
              {ground}
            </li>
          ))}
        </ul>
      </div>

      {/* Discretionary Naturalisation Info */}
      <div
        style={{
          ...S.card({ padding: "18px 20px" }),
          borderColor: "rgba(245,158,11,0.3)",
          marginBottom: 24,
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 10 }}>
          <span style={{ fontSize: 18 }}>{"\u2696\uFE0F"}</span>
          <span style={{ fontWeight: 700, color: AMBER, fontSize: 15 }}>Discretionary Naturalisation</span>
        </div>
        <div style={{ color: S.p.textMuted, fontSize: 13, lineHeight: 1.5, marginBottom: 10 }}>
          {DISCRETIONARY_NOTES.summary}
        </div>
        <div style={{ color: S.p.textMuted, fontSize: 12, fontWeight: 600, marginBottom: 6 }}>
          Still mandatory even under discretion:
        </div>
        <ul style={{ margin: 0, paddingLeft: 20 }}>
          {DISCRETIONARY_NOTES.mandatoryEvenForDiscretionary.map((item, i) => (
            <li
              key={i}
              style={{ color: S.p.bodyText, fontSize: 13, lineHeight: 1.6, marginBottom: 2 }}
            >
              {item}
            </li>
          ))}
        </ul>
      </div>

      {/* Official Quick Check Link */}
      <a
        href={QUICK_CHECK_URL}
        target="_blank"
        rel="noopener noreferrer"
        style={{ textDecoration: "none" }}
      >
        <div
          style={{
            ...S.card({ padding: "16px 20px" }),
            borderColor: "rgba(16,185,129,0.2)",
            cursor: "pointer",
            transition: "all 0.2s",
            display: "flex",
            alignItems: "center",
            gap: 12,
            marginBottom: 24,
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.borderColor = "rgba(16,185,129,0.5)";
            e.currentTarget.style.transform = "translateY(-2px)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.borderColor = "rgba(16,185,129,0.2)";
            e.currentTarget.style.transform = "";
          }}
        >
          <span style={{ fontSize: 24 }}>{"\uD83C\uDF10"}</span>
          <div style={{ flex: 1 }}>
            <div style={{ fontWeight: 700, color: GREEN, fontSize: 14, marginBottom: 2 }}>
              Official Quick Check
            </div>
            <div style={{ color: S.p.textMuted, fontSize: 13 }}>
              einbuergerung.de &mdash; the federal government&apos;s official eligibility questionnaire
            </div>
          </div>
          <span style={{ color: GREEN, fontSize: 18 }}>&rarr;</span>
        </div>
      </a>

      {/* Start Over Button */}
      <div style={{ textAlign: "center", marginBottom: 20 }}>
        <button
          onClick={onStartOver}
          style={{
            background: GREEN,
            color: "#0B0D14",
            border: "none",
            borderRadius: 8,
            padding: "10px 24px",
            fontSize: 14,
            fontWeight: 600,
            cursor: "pointer",
            transition: "all 0.15s",
          }}
        >
          Start Over
        </button>
      </div>

      {/* Source Attribution */}
      <div
        style={{
          textAlign: "center",
          color: S.p.textMuted,
          fontSize: 11,
          lineHeight: 1.6,
          opacity: 0.7,
        }}
      >
        Source:{" "}
        <a
          href={SOURCE_URL}
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: "inherit", textDecoration: "underline" }}
        >
          {SOURCE_LABEL}
        </a>
      </div>
    </div>
  );
}
