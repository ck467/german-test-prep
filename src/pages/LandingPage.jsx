import { useNavigate } from "react-router-dom";
import useStyles from "../useStyles.js";
import ThemeToggle from "../components/shared/ThemeToggle.jsx";
import { MODULES } from "../data/modules.js";

export default function LandingPage() {
  const navigate = useNavigate();
  const { S } = useStyles();

  return (
    <div style={S.root}>
      <header style={S.header}>
        <div style={S.logo}>German Test Prep</div>
        <ThemeToggle />
      </header>

      <div style={{ ...S.inner, maxWidth: 960 }}>
        <div style={{ textAlign: "center", marginBottom: 32, paddingTop: 12 }}>
          <h1 style={{ ...S.h1, fontSize: 36, marginBottom: 8 }}>German Test Prep</h1>
          <p style={{ color: S.p.textMuted, fontSize: 16, margin: 0, maxWidth: 520, marginLeft: "auto", marginRight: "auto", lineHeight: 1.5 }}>
            Everything you need to prepare for life in Germany. Choose your path below.
          </p>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20, marginBottom: 32 }}>
          {MODULES.map((mod) => (
            <div
              key={mod.id}
              onClick={() => navigate(mod.route)}
              style={{
                ...S.card({ padding: "28px 32px" }),
                cursor: "pointer",
                transition: "all 0.25s",
                textAlign: "center",
                borderColor: mod.accent.border,
              }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = mod.accent.borderHover; e.currentTarget.style.transform = "translateY(-4px)"; e.currentTarget.style.boxShadow = `0 8px 32px ${mod.accent.shadow}`; }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = mod.accent.border; e.currentTarget.style.transform = ""; e.currentTarget.style.boxShadow = ""; }}
            >
              <div style={{ fontSize: 44, marginBottom: 14 }}>{mod.icon}</div>
              <h2 style={{ ...S.h2, fontSize: 24, marginBottom: 8 }}>{mod.title}</h2>
              <p style={{ color: S.p.textMuted, fontSize: 14, lineHeight: 1.5, marginBottom: 14 }}>
                {mod.description}
              </p>
              <div style={{ display: "flex", gap: 8, justifyContent: "center", flexWrap: "wrap" }}>
                {mod.tags.map((tag) => (
                  <span key={tag} style={{ ...S.tag, background: mod.accent.tagBg, color: mod.accent.text, borderColor: mod.accent.tagBorder }}>{tag}</span>
                ))}
              </div>
              <div style={{ marginTop: 16 }}>
                <span style={{ background: mod.accent.btnBg, color: mod.accent.btnColor, border: "none", borderRadius: 8, padding: "10px 20px", fontSize: 14, fontWeight: 600, display: "inline-block" }}>{mod.cta} →</span>
              </div>
            </div>
          ))}
        </div>

        <div style={{ textAlign: "center", color: S.p.textMuted, fontSize: 13 }}>
          Free and open-source · No account needed · Practice at your own pace
        </div>
      </div>
    </div>
  );
}
