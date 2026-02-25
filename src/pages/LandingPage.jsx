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
        <div style={{ textAlign: "center", marginBottom: 48, paddingTop: 20 }}>
          <h1 style={{ ...S.h1, fontSize: 40, marginBottom: 12 }}>German Test Prep</h1>
          <p style={{ color: S.p.textMuted, fontSize: 17, margin: 0, maxWidth: 520, marginLeft: "auto", marginRight: "auto", lineHeight: 1.6 }}>
            Everything you need to prepare for life in Germany. Choose your path below.
          </p>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 24, marginBottom: 48 }}>
          {MODULES.map((mod) => (
            <div
              key={mod.id}
              onClick={() => navigate(mod.route)}
              style={{
                ...S.card({ padding: 40 }),
                cursor: "pointer",
                transition: "all 0.25s",
                textAlign: "center",
                borderColor: mod.accent.border,
              }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = mod.accent.borderHover; e.currentTarget.style.transform = "translateY(-4px)"; e.currentTarget.style.boxShadow = `0 8px 32px ${mod.accent.shadow}`; }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = mod.accent.border; e.currentTarget.style.transform = ""; e.currentTarget.style.boxShadow = ""; }}
            >
              <div style={{ fontSize: 56, marginBottom: 20 }}>{mod.icon}</div>
              <h2 style={{ ...S.h2, fontSize: 26, marginBottom: 12 }}>{mod.title}</h2>
              <p style={{ color: S.p.textMuted, fontSize: 15, lineHeight: 1.6, marginBottom: 20 }}>
                {mod.description}
              </p>
              <div style={{ display: "flex", gap: 8, justifyContent: "center", flexWrap: "wrap" }}>
                {mod.tags.map((tag) => (
                  <span key={tag} style={{ ...S.tag, background: mod.accent.tagBg, color: mod.accent.text, borderColor: mod.accent.tagBorder }}>{tag}</span>
                ))}
              </div>
              <div style={{ marginTop: 24 }}>
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
