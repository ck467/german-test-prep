import { useNavigate } from "react-router-dom";
import useStyles from "../useStyles.js";
import ThemeToggle from "../components/shared/ThemeToggle.jsx";
import { MODULES } from "../data/modules.js";

export default function LandingPage() {
  const navigate = useNavigate();
  const { S, isMobile } = useStyles();

  return (
    <div style={S.root}>
      <header style={{ ...S.header, padding: isMobile ? "8px 12px" : "0 32px" }}>
        <div style={S.logo}>German Citizenship Prep</div>
        <ThemeToggle />
      </header>

      <div style={{ maxWidth: 960, margin: "0 auto", padding: isMobile ? "0 12px" : "0 24px", minHeight: "calc(100vh - 60px)", display: "flex", flexDirection: "column", justifyContent: "center", boxSizing: "border-box" }}>
        <div style={{ textAlign: "center", marginBottom: 32 }}>
          <h1 style={{ ...S.h1, fontSize: isMobile ? 24 : 36, marginBottom: 8 }}>German Citizenship Prep</h1>
          <p style={{ color: S.p.textMuted, fontSize: 16, margin: 0, maxWidth: 560, marginLeft: "auto", marginRight: "auto", lineHeight: 1.5 }}>
            Your free study companion for the German citizenship journey — from language prep to the Einb&#252;rgerungstest.
          </p>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr 1fr", gap: 24 }}>
          {MODULES.map((mod) => (
            <div
              key={mod.id}
              onClick={() => navigate(mod.route)}
              style={{
                ...S.card({ padding: isMobile ? "20px 16px" : "32px 32px" }),
                cursor: "pointer",
                transition: "all 0.25s",
                textAlign: "center",
                borderColor: mod.accent.border,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = mod.accent.borderHover; e.currentTarget.style.transform = "translateY(-4px)"; e.currentTarget.style.boxShadow = `0 8px 32px ${mod.accent.shadow}`; }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = mod.accent.border; e.currentTarget.style.transform = ""; e.currentTarget.style.boxShadow = ""; }}
            >
              <div style={{ fontSize: 48, marginBottom: 16 }}>{mod.icon}</div>
              <h2 style={{ ...S.h2, fontSize: isMobile ? 18 : 24, marginBottom: 8 }}>{mod.title}</h2>
              <p style={{ color: S.p.textMuted, fontSize: 15, lineHeight: 1.5, marginBottom: 16, flex: 1 }}>
                {mod.description}
              </p>
              <div style={{ display: "flex", gap: 8, justifyContent: "center", flexWrap: "wrap" }}>
                {mod.tags.map((tag) => (
                  <span key={tag} style={{ ...S.tag, background: mod.accent.tagBg, color: mod.accent.text, borderColor: mod.accent.tagBorder }}>{tag}</span>
                ))}
              </div>
              <div style={{ marginTop: 20 }}>
                <span style={{ background: mod.accent.btnBg, color: mod.accent.btnColor, border: "none", borderRadius: 8, padding: "10px 20px", fontSize: 14, fontWeight: 600, display: "inline-block" }}>{mod.cta} →</span>
              </div>
            </div>
          ))}
        </div>

        {/* Coming Soon Teasers */}
        <div style={{ marginTop: 32 }}>
          <div style={{ textAlign: "center", marginBottom: 16 }}>
            <span style={{ fontSize: 11, fontWeight: 700, letterSpacing: 1.5, textTransform: "uppercase", color: S.p.textMuted }}>Coming Soon</span>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr", gap: 16 }}>
            {[
              { icon: "\uD83D\uDCDD", title: "Full Mock Exams", desc: "Complete timed Goethe & telc B1 practice exams with all sections — Lesen, H\u00F6ren, Schreiben, Sprechen", color: "#A855F7", border: "rgba(168,85,247,0.12)" },
              { icon: "\uD83D\uDCC4", title: "Document Checklist", desc: "Sample forms, required documents, and templates you need for your Einb\u00FCrgerung application", color: "#F59E0B", border: "rgba(245,158,11,0.12)" },
            ].map((t) => (
              <div
                key={t.title}
                style={{
                  ...S.card({ padding: "20px 20px" }),
                  textAlign: "center",
                  borderColor: t.border,
                  opacity: 0.6,
                }}
              >
                <div style={{ fontSize: 28, marginBottom: 10 }}>{t.icon}</div>
                <div style={{ fontWeight: 700, color: S.p.headingText, fontSize: 15, marginBottom: 6 }}>{t.title}</div>
                <div style={{ color: S.p.textMuted, fontSize: 13, lineHeight: 1.5, marginBottom: 12 }}>{t.desc}</div>
                <span style={{ fontSize: 11, fontWeight: 600, color: t.color, letterSpacing: 0.5 }}>Coming Soon</span>
              </div>
            ))}
          </div>
        </div>

        <div style={{ textAlign: "center", color: S.p.textMuted, fontSize: 13, marginTop: 24 }}>
          Free and open-source · No account needed · Practice at your own pace
        </div>

        <div style={{ textAlign: "center", color: S.p.textMuted, fontSize: 11, marginTop: 16, lineHeight: 1.6, maxWidth: 600, marginLeft: "auto", marginRight: "auto", opacity: 0.7 }}>
          Content based on publicly available materials from{" "}
          <a href="https://www.bamf.de" target="_blank" rel="noopener noreferrer" style={{ color: "inherit", textDecoration: "underline" }}>BAMF</a>,{" "}
          <a href="https://www.goethe.de" target="_blank" rel="noopener noreferrer" style={{ color: "inherit", textDecoration: "underline" }}>Goethe-Institut</a>, and{" "}
          <a href="https://www.telc.net" target="_blank" rel="noopener noreferrer" style={{ color: "inherit", textDecoration: "underline" }}>telc</a>.
          This is an independent study aid, not affiliated with or endorsed by these organizations.
        </div>
      </div>
    </div>
  );
}
