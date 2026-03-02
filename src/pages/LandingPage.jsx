import { useNavigate } from "react-router-dom";
import useStyles from "../useStyles.js";
import ThemeToggle from "../components/shared/ThemeToggle.jsx";
import { MODULES } from "../data/modules.js";

export default function LandingPage() {
  const navigate = useNavigate();
  const { S, isMobile } = useStyles();

  const TOOL_ROUTES = {
    "B1 German": "/b1-german",
    "Citizenship module": "/citizenship",
    "Eligibility Check": "/eligibility",
  };

  return (
    <div style={S.root}>
      <title>German Citizenship Prep — Free Study Tools</title>
      <meta name="description" content="Free study tools for the German citizenship journey — Einbürgerungstest practice, B1 German exam prep, eligibility checker, and official FAQs." />
      <header style={{ ...S.header, padding: isMobile ? "8px 12px" : "0 32px" }}>
        <div style={S.logo}>German Citizenship Prep</div>
        <ThemeToggle />
      </header>

      <div style={{ maxWidth: 960, margin: "0 auto", padding: isMobile ? "24px 12px 32px" : "48px 24px 48px", boxSizing: "border-box" }}>
        <div style={{ textAlign: "center", marginBottom: 32 }}>
          <h1 style={{ ...S.h1, fontSize: isMobile ? 24 : 36, marginBottom: 10 }}>German Citizenship Prep</h1>
          <p style={{ color: S.p.textMuted, fontSize: 15, margin: 0, maxWidth: 580, marginLeft: "auto", marginRight: "auto", lineHeight: 1.6 }}>
            Free tools for the German citizenship journey — Einb&#252;rgerungstest practice, B1 exam prep, eligibility check, and 50 official FAQs. No account required.
          </p>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr", gap: 20 }}>
          {MODULES.map((mod) => (
            <div
              key={mod.id}
              onClick={() => navigate(mod.route)}
              style={{
                ...S.card({ padding: isMobile ? "20px 16px" : "28px 28px" }),
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
              <div style={{ fontSize: 40, marginBottom: 12 }}>{mod.icon}</div>
              <h2 style={{ ...S.h2, fontSize: isMobile ? 18 : 22, marginBottom: 8 }}>{mod.title}</h2>
              <p style={{ color: S.p.textMuted, fontSize: 14, lineHeight: 1.5, marginBottom: 14, flex: 1 }}>
                {mod.description}
              </p>
              <div style={{ display: "flex", gap: 6, justifyContent: "center", flexWrap: "wrap", marginBottom: 16 }}>
                {mod.tags.map((tag) => (
                  <span key={tag} style={{ ...S.tag, background: mod.accent.tagBg, color: mod.accent.text, borderColor: mod.accent.tagBorder }}>{tag}</span>
                ))}
              </div>
              <span style={{ background: mod.accent.btnBg, color: mod.accent.btnColor, border: "none", borderRadius: 8, padding: "9px 18px", fontSize: 13, fontWeight: 600, display: "inline-block" }}>{mod.cta} →</span>
            </div>
          ))}
        </div>

        {/* Stats Bar */}
        <div style={{ display: "grid", gridTemplateColumns: isMobile ? "1fr 1fr" : "1fr 1fr 1fr 1fr", gap: isMobile ? 12 : 16, marginTop: 28 }}>
          {[
            { number: "310+", label: "Test Questions" },
            { number: "3,000+", label: "Vocabulary Words" },
            { number: "50", label: "Official FAQs" },
            { number: "16", label: "German States" },
          ].map((stat) => (
            <div key={stat.label} style={{ ...S.card({ padding: isMobile ? "16px 12px" : "18px 16px" }), textAlign: "center" }}>
              <div style={{ fontSize: isMobile ? 22 : 28, fontWeight: 700, color: "#F5C842", fontFamily: "'Playfair Display', Georgia, serif", marginBottom: 4 }}>{stat.number}</div>
              <div style={{ fontSize: isMobile ? 12 : 13, color: S.p.textMuted, fontWeight: 500 }}>{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Your Path to German Citizenship — Journey Steps */}
        <div style={{ marginTop: 40 }}>
          <h2 style={{ ...S.h2, fontSize: isMobile ? 20 : 26, textAlign: "center", marginBottom: 8 }}>Your Path to German Citizenship</h2>
          <p style={{ color: S.p.textMuted, fontSize: 14, textAlign: "center", margin: "0 auto 24px", maxWidth: 540, lineHeight: 1.5 }}>
            Five steps from language learner to German citizen — and how this site helps at each stage.
          </p>
          {isMobile ? (
            <div style={{ position: "relative", paddingLeft: 32 }}>
              <div style={{ position: "absolute", left: 11, top: 8, bottom: 8, width: 2, background: S.p.border08 }} />
              {[
                { step: 1, title: "Learn German to B1 Level", tool: "B1 German", color: "#60A5FA" },
                { step: 2, title: "Pass the B1 Pr\u00FCfung", tool: "B1 German", color: "#60A5FA" },
                { step: 3, title: "Study for the Einb\u00FCrgerungstest", tool: "Citizenship module", color: "#F5C842" },
                { step: 4, title: "Check Your Eligibility", tool: "Eligibility Check", color: "#10B981" },
                { step: 5, title: "Apply for Naturalization", tool: "Document Checklist (coming soon)", color: "#F59E0B" },
              ].map((s) => (
                <div key={s.step} style={{ position: "relative", marginBottom: 24 }}>
                  <div style={{ position: "absolute", left: -32, top: 0, width: 24, height: 24, borderRadius: "50%", background: s.color, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 12, fontWeight: 700, color: "#0B0D14" }}>{s.step}</div>
                  <div style={{ fontWeight: 600, color: S.p.headingText, fontSize: 15, marginBottom: 4 }}>{s.title}</div>
                  <div style={{ fontSize: 13, color: s.color }}>&#8594;{" "}
                    {TOOL_ROUTES[s.tool] ? (
                      <span onClick={() => navigate(TOOL_ROUTES[s.tool])} style={{ textDecoration: "underline", cursor: "pointer" }}>{s.tool}</span>
                    ) : (
                      <span style={{ opacity: 0.6 }}>{s.tool}</span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div style={{ position: "relative", display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
              <div style={{ position: "absolute", top: 12, left: 40, right: 40, height: 2, background: S.p.border08 }} />
              {[
                { step: 1, title: "Learn German to B1 Level", tool: "B1 German", color: "#60A5FA" },
                { step: 2, title: "Pass the B1 Pr\u00FCfung", tool: "B1 German", color: "#60A5FA" },
                { step: 3, title: "Study for the Einb\u00FCrgerungstest", tool: "Citizenship module", color: "#F5C842" },
                { step: 4, title: "Check Your Eligibility", tool: "Eligibility Check", color: "#10B981" },
                { step: 5, title: "Apply for Naturalization", tool: "Document Checklist (coming soon)", color: "#F59E0B" },
              ].map((s) => (
                <div key={s.step} style={{ textAlign: "center", flex: 1, position: "relative" }}>
                  <div style={{ width: 26, height: 26, borderRadius: "50%", background: s.color, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 13, fontWeight: 700, color: "#0B0D14", margin: "0 auto 10px", position: "relative", zIndex: 1 }}>{s.step}</div>
                  <div style={{ fontWeight: 600, color: S.p.headingText, fontSize: 13, marginBottom: 4, padding: "0 4px" }}>{s.title}</div>
                  <div style={{ fontSize: 12, color: s.color }}>&#8594;{" "}
                    {TOOL_ROUTES[s.tool] ? (
                      <span onClick={() => navigate(TOOL_ROUTES[s.tool])} style={{ textDecoration: "underline", cursor: "pointer" }}>{s.tool}</span>
                    ) : (
                      <span style={{ opacity: 0.6 }}>{s.tool}</span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        <div style={{ textAlign: "center", color: S.p.textMuted, fontSize: 13, marginTop: 32 }}>
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
