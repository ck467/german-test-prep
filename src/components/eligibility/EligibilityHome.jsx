import useStyles from "../../useStyles.js";
import { REQUIREMENTS, QUICK_CHECK_URL, SOURCE_URL, SOURCE_LABEL } from "../../data/eligibilityRequirements.js";

export default function EligibilityHome({ onStartCheck }) {
  const { S, isMobile } = useStyles();

  const GREEN = "#10B981";
  const GREEN_BG = "rgba(16,185,129,0.1)";
  const GREEN_BORDER = "rgba(16,185,129,0.2)";
  const GREEN_BORDER_HOVER = "rgba(16,185,129,0.5)";

  return (
    <div
      style={{
        ...S.inner,
        minHeight: isMobile ? undefined : "calc(100vh - 60px)",
        display: "flex",
        flexDirection: "column",
        justifyContent: isMobile ? undefined : "center",
        boxSizing: "border-box",
        padding: isMobile ? "16px 12px" : "24px 24px",
      }}
    >
      {/* Header */}
      <div style={{ marginBottom: 20 }}>
        <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 4 }}>
          <span style={{ fontSize: 24 }}>&#x2705;</span>
          <h1 style={{ ...S.h1, fontSize: isMobile ? 22 : 28 }}>Eligibility Check</h1>
        </div>
        <p style={{ color: S.p.textMuted, fontSize: 14, margin: 0, lineHeight: 1.6 }}>
          This is an informal self-assessment based on the official naturalisation requirements.
          It is <strong style={{ color: S.p.headingText }}>not legal advice</strong> — always consult
          your local Einb&uuml;rgerungsbeh&ouml;rde for a definitive answer.
        </p>
      </div>

      {/* Start Check Button */}
      <div style={{ marginBottom: 24 }}>
        <button
          onClick={onStartCheck}
          style={{
            background: GREEN,
            color: "#0B0D14",
            border: "none",
            borderRadius: 8,
            padding: "12px 28px",
            fontSize: 15,
            fontWeight: 700,
            cursor: "pointer",
            transition: "all 0.15s",
          }}
        >
          Start Check &rarr;
        </button>
      </div>

      {/* 10 Requirement Areas Grid */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: isMobile ? "1fr 1fr" : "1fr 1fr 1fr 1fr 1fr",
          gap: 12,
          marginBottom: 24,
        }}
      >
        {REQUIREMENTS.map((req) => (
          <div
            key={req.id}
            style={{
              ...S.card({ padding: "14px 12px" }),
              textAlign: "center",
              borderColor: GREEN_BORDER,
            }}
          >
            <div style={{ fontSize: 28, marginBottom: 6 }}>{req.icon}</div>
            <div
              style={{
                fontWeight: 700,
                color: S.p.headingText,
                fontSize: 13,
                marginBottom: 2,
                lineHeight: 1.3,
              }}
            >
              {req.title}
            </div>
            <div style={{ color: S.p.textMuted, fontSize: 11, lineHeight: 1.3 }}>
              {req.titleDe}
            </div>
          </div>
        ))}
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
            borderColor: GREEN_BORDER,
            cursor: "pointer",
            transition: "all 0.2s",
            display: "flex",
            alignItems: "center",
            gap: 12,
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.borderColor = GREEN_BORDER_HOVER;
            e.currentTarget.style.transform = "translateY(-2px)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.borderColor = GREEN_BORDER;
            e.currentTarget.style.transform = "";
          }}
        >
          <span style={{ fontSize: 24 }}>&#x1F310;</span>
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

      {/* Source Attribution */}
      <div
        style={{
          textAlign: "center",
          color: S.p.textMuted,
          fontSize: 11,
          marginTop: 20,
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
