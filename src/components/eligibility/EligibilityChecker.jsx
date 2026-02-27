import { useState } from "react";
import useStyles from "../../useStyles.js";
import ProgressBar from "../shared/ProgressBar.jsx";
import { REQUIREMENTS } from "../../data/eligibilityRequirements.js";

const GREEN = "#10B981";
const RED = "#EF4444";
const AMBER = "#F59E0B";

export default function EligibilityChecker({ answers, onAnswer, onBack, onFinish }) {
  const { S, isMobile } = useStyles();
  const [step, setStep] = useState(0);
  const [showDetails, setShowDetails] = useState(false);

  const req = REQUIREMENTS[step];
  const currentAnswer = answers[req.id] || null;
  const isLast = step === REQUIREMENTS.length - 1;

  const handleBack = () => {
    if (step === 0) {
      onBack();
    } else {
      setStep(step - 1);
      setShowDetails(false);
    }
  };

  const handleNext = () => {
    if (isLast) {
      onFinish();
    } else {
      setStep(step + 1);
      setShowDetails(false);
    }
  };

  const answerButtons = [
    { value: "yes", label: "Yes", color: GREEN, bg: "rgba(16,185,129,0.12)", border: "rgba(16,185,129,0.4)" },
    { value: "no", label: "No", color: RED, bg: "rgba(239,68,68,0.12)", border: "rgba(239,68,68,0.4)" },
    { value: "unsure", label: "Not Sure", color: AMBER, bg: "rgba(245,158,11,0.12)", border: "rgba(245,158,11,0.4)" },
  ];

  return (
    <div style={S.inner}>
      {/* Header */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          marginBottom: 24,
        }}
      >
        <button onClick={handleBack} style={{ ...S.btn("ghost"), padding: "6px 12px" }}>
          &larr; {step === 0 ? "Home" : "Back"}
        </button>
        <div style={{ color: S.p.textMuted, fontSize: 14 }}>
          Step {step + 1} of {REQUIREMENTS.length}
        </div>
      </div>

      {/* Progress */}
      <div style={{ marginBottom: 24 }}>
        <ProgressBar value={step + 1} max={REQUIREMENTS.length} color={GREEN} />
      </div>

      {/* Question Card */}
      <div
        style={{
          ...S.card({ padding: isMobile ? "20px 16px" : "28px 28px" }),
          marginBottom: 20,
          borderColor: "rgba(16,185,129,0.15)",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 16 }}>
          <span style={{ fontSize: 32 }}>{req.icon}</span>
          <div>
            <div style={{ fontWeight: 700, color: S.p.headingText, fontSize: 18 }}>
              {req.title}
            </div>
            <div style={{ color: S.p.textMuted, fontSize: 13 }}>{req.titleDe}</div>
          </div>
        </div>

        <div
          style={{
            fontSize: 17,
            color: S.p.headingText,
            lineHeight: 1.6,
            fontWeight: 500,
            marginBottom: 20,
          }}
        >
          {req.checkQuestion}
        </div>

        {/* Answer Buttons */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 10 }}>
          {answerButtons.map((btn) => {
            const isSelected = currentAnswer === btn.value;
            return (
              <button
                key={btn.value}
                onClick={() => onAnswer(req.id, btn.value)}
                style={{
                  background: isSelected ? btn.bg : "transparent",
                  border: `2px solid ${isSelected ? btn.border : S.p.border15}`,
                  borderRadius: 10,
                  padding: "12px 8px",
                  cursor: "pointer",
                  fontSize: 15,
                  fontWeight: 700,
                  color: isSelected ? btn.color : S.p.textMuted,
                  transition: "all 0.15s",
                  textAlign: "center",
                }}
              >
                {btn.label}
              </button>
            );
          })}
        </div>
      </div>

      {/* Show Details Toggle */}
      <button
        onClick={() => setShowDetails((v) => !v)}
        style={{
          background: "transparent",
          border: "none",
          color: GREEN,
          cursor: "pointer",
          fontSize: 13,
          fontWeight: 600,
          padding: "4px 0",
          marginBottom: 12,
        }}
      >
        {showDetails ? "Hide Details \u25B2" : "Show Details \u25BC"}
      </button>

      {showDetails && (
        <div
          style={{
            ...S.card({ padding: "16px 20px" }),
            marginBottom: 20,
            borderColor: "rgba(16,185,129,0.15)",
          }}
        >
          <div style={{ color: S.p.headingText, fontSize: 14, lineHeight: 1.6, marginBottom: 8 }}>
            {req.requirement}
          </div>
          <div
            style={{
              color: S.p.textMuted,
              fontSize: 13,
              lineHeight: 1.6,
              fontStyle: "italic",
              marginBottom: 10,
            }}
          >
            {req.requirementDe}
          </div>
          <div
            style={{
              color: S.p.textMuted,
              fontSize: 13,
              lineHeight: 1.6,
              background: S.p.exampleBg,
              borderRadius: 8,
              padding: "10px 14px",
            }}
          >
            {req.details}
          </div>
        </div>
      )}

      {/* Next Button */}
      <div style={{ display: "flex", justifyContent: "flex-end", marginTop: 8 }}>
        <button
          onClick={handleNext}
          disabled={!currentAnswer}
          style={{
            background: currentAnswer ? GREEN : S.p.ghostBtnBg,
            color: currentAnswer ? "#0B0D14" : S.p.textMuted,
            border: "none",
            borderRadius: 8,
            padding: "10px 24px",
            fontSize: 14,
            fontWeight: 600,
            cursor: currentAnswer ? "pointer" : "not-allowed",
            opacity: currentAnswer ? 1 : 0.5,
            transition: "all 0.15s",
          }}
        >
          {isLast ? "See Results \u2192" : "Next \u2192"}
        </button>
      </div>
    </div>
  );
}
