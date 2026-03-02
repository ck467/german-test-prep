import { useState } from "react";
import { useNavigate } from "react-router-dom";
import useStyles from "../useStyles.js";
import ThemeToggle from "../components/shared/ThemeToggle.jsx";
import { MODULES } from "../data/modules.js";

export default function LandingPage() {
  const navigate = useNavigate();
  const { S, isMobile } = useStyles();
  const [activeTab, setActiveTab] = useState(0);

  const TOOL_ROUTES = {
    "B1 German": "/b1-german",
    "Citizenship module": "/citizenship",
    "Eligibility Check": "/eligibility",
  };

  const TABS = ["FAQs", "Coming Soon"];

  return (
    <div style={S.root}>
      <title>German Citizenship Prep — Free Study Tools</title>
      <meta name="description" content="Free study tools for the German citizenship journey — Einbürgerungstest practice, B1 German exam prep, and eligibility checker." />
      <header style={{ ...S.header, padding: isMobile ? "8px 12px" : "0 32px" }}>
        <div style={S.logo}>German Citizenship Prep</div>
        <ThemeToggle />
      </header>

      <div style={{ maxWidth: 960, margin: "0 auto", padding: isMobile ? "24px 12px 32px" : "48px 24px 48px", boxSizing: "border-box" }}>
        <div style={{ textAlign: "center", marginBottom: 32 }}>
          <h1 style={{ ...S.h1, fontSize: isMobile ? 24 : 36, marginBottom: 8 }}>German Citizenship Prep</h1>
          <p style={{ color: S.p.textMuted, fontSize: 16, margin: 0, maxWidth: 560, marginLeft: "auto", marginRight: "auto", lineHeight: 1.5, marginBottom: 12 }}>
            Your free study companion for the German citizenship journey — from language prep to the Einb&#252;rgerungstest.
          </p>
          <p style={{ color: S.p.textMuted, fontSize: 14, margin: 0, maxWidth: 620, marginLeft: "auto", marginRight: "auto", lineHeight: 1.6 }}>
            Practice the official Einb&#252;rgerungstest questions, build your B1 German vocabulary with 3,000+ flashcards, and check your eligibility for naturalization — all free, no account required.
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

        {/* Stats Bar */}
        <div style={{ display: "grid", gridTemplateColumns: isMobile ? "1fr 1fr" : "1fr 1fr 1fr 1fr", gap: isMobile ? 12 : 16, marginTop: 32 }}>
          {[
            { number: "310+", label: "Test Questions" },
            { number: "3,000+", label: "Vocabulary Words" },
            { number: "24", label: "Study Topics" },
            { number: "16", label: "German States" },
          ].map((stat) => (
            <div key={stat.label} style={{ ...S.card({ padding: isMobile ? "16px 12px" : "20px 16px" }), textAlign: "center" }}>
              <div style={{ fontSize: isMobile ? 22 : 28, fontWeight: 700, color: "#F5C842", fontFamily: "'Playfair Display', Georgia, serif", marginBottom: 4 }}>{stat.number}</div>
              <div style={{ fontSize: isMobile ? 12 : 13, color: S.p.textMuted, fontWeight: 500 }}>{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Your Path to German Citizenship — Journey Steps */}
        <div style={{ marginTop: 48 }}>
          <h2 style={{ ...S.h2, fontSize: isMobile ? 20 : 28, textAlign: "center", marginBottom: 8 }}>Your Path to German Citizenship</h2>
          <p style={{ color: S.p.textMuted, fontSize: 14, textAlign: "center", margin: "0 auto 28px", maxWidth: 540, lineHeight: 1.5 }}>
            Five steps from language learner to German citizen — and how this site helps at each stage.
          </p>
          {isMobile ? (
            /* Vertical timeline for mobile */
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
            /* Horizontal timeline for desktop */
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

        {/* Tabs: FAQs | Coming Soon */}
        <div style={{ marginTop: 48 }}>
          <div style={{ display: "flex", justifyContent: "center", gap: 8, marginBottom: 24 }}>
            {TABS.map((tab, i) => (
              <button
                key={tab}
                onClick={() => setActiveTab(i)}
                style={{
                  padding: "8px 20px",
                  borderRadius: 8,
                  fontSize: 14,
                  fontWeight: activeTab === i ? 700 : 500,
                  cursor: "pointer",
                  border: "1px solid transparent",
                  background: activeTab === i ? "#F5C842" : S.p.ghostBtnBg,
                  color: activeTab === i ? "#0B0D14" : S.p.textMuted,
                  transition: "all 0.2s",
                }}
              >
                {tab}
              </button>
            ))}
          </div>

          {activeTab === 0 && (
            <div style={{ display: "flex", flexDirection: "column", gap: 16, maxWidth: 720, margin: "0 auto" }}>
              {[
                {
                  q: "How many questions are on the Einb\u00FCrgerungstest?",
                  a: "The official Einb\u00FCrgerungstest consists of 33 questions drawn from a pool of 300 general knowledge questions plus 10 state-specific questions for your Bundesland. You need at least 17 correct answers (over 50%) to pass. The test takes 60 minutes. Our practice tool covers all 300 general questions and all 160 state-specific questions across all 16 German states.",
                },
                {
                  q: "What is the B1 German exam, and which version should I take?",
                  a: "B1 is the intermediate level of the Common European Framework of Reference (CEFR) for languages. For German citizenship, you need to prove B1-level German. The two most widely accepted exams are the Goethe-Zertifikat B1 (from the Goethe-Institut) and the telc Deutsch B1. Both test reading, listening, writing, and speaking. The Goethe exam is internationally recognized, while telc is popular within Germany. Either certificate is accepted for the citizenship application.",
                },
                {
                  q: "Is the B1 German exam required for German citizenship?",
                  a: "Yes. Under the Staatsangeh\u00F6rigkeitsgesetz (StAG), applicants must demonstrate German language skills at B1 level or higher. You can prove this with a Goethe-Zertifikat B1, telc Deutsch B1, or an equivalent recognized certificate. Exceptions may apply if you have a German school diploma, a university degree from a German-language program, or in certain hardship cases.",
                },
                {
                  q: "How long do you have to live in Germany to apply for citizenship?",
                  a: "The standard requirement is 8 years of lawful habitual residence in Germany. This can be reduced to 7 years if you complete an integration course, or to 6 years if you demonstrate special integration achievements (e.g., excellent German skills at B2 or higher, volunteer work, or professional accomplishments). Spouses of German citizens may apply after 3 years of residence if they have been married for at least 2 years.",
                },
                {
                  q: "What documents do I need for the German citizenship application?",
                  a: "Typical documents include a valid passport, birth certificate, proof of residence (Meldebescheinigung), B1 language certificate, Einb\u00FCrgerungstest certificate, proof of income or employment, proof of pension contributions, a clean criminal record, and proof of giving up your previous citizenship (if required). Requirements can vary by state and individual circumstances — check with your local Einb\u00FCrgerungsbeh\u00F6rde for the exact list.",
                },
                {
                  q: "Is dual citizenship allowed in Germany?",
                  a: "Since the reform of June 2024, Germany generally allows dual citizenship for all naturalization applicants. Previously, most applicants had to give up their existing citizenship, with exceptions for EU citizens and cases of unreasonable hardship. Under the new rules, you can keep your current nationality when naturalizing as a German citizen. This also applies retroactively — Germans who previously lost their citizenship by acquiring another can now reclaim it.",
                },
              ].map((faq) => (
                <div key={faq.q} style={{ ...S.card({ padding: isMobile ? "16px 16px" : "20px 24px" }) }}>
                  <h3 style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: isMobile ? 15 : 16, fontWeight: 600, color: S.p.headingText, marginTop: 0, marginBottom: 8 }}>{faq.q}</h3>
                  <p style={{ color: S.p.textMuted, fontSize: 14, lineHeight: 1.7, margin: 0 }}>{faq.a}</p>
                </div>
              ))}
            </div>
          )}

          {activeTab === 1 && (
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
          )}
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
