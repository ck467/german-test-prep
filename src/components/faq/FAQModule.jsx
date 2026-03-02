import { useState } from "react";
import useStyles from "../../useStyles.js";
import ModuleLayout from "../shared/ModuleLayout.jsx";
import { FAQ_SECTIONS } from "../../data/faqData.js";

const NAV_LABELS = ["Eligibility", "Application", "The Test", "2024 Reform", "Special Cases"];

export default function FAQModule() {
  const { S, isMobile } = useStyles();
  const [section, setSection] = useState(null);

  return (
    <ModuleLayout
      title="German Citizenship FAQ \u2014 50 Official Questions Answered"
      description="Frequently asked questions about German citizenship, compiled from official government sources including einb\u00FCrgerung.de, BAMF, and BMI."
      nav={
        <>
          <button style={S.navBtn(section === null)} onClick={() => setSection(null)}>
            {isMobile ? "All" : "All Topics"}
          </button>
          {FAQ_SECTIONS.map((sec, i) => (
            <button key={sec.id} style={S.navBtn(section === i)} onClick={() => setSection(i)}>
              {NAV_LABELS[i]}
            </button>
          ))}
        </>
      }
    >
      <div style={{ maxWidth: 820, margin: "0 auto", padding: isMobile ? "20px 12px 32px" : "32px 24px 48px" }}>
        {section === null ? (
          <>
            <div style={{ textAlign: "center", marginBottom: 28 }}>
              <h1 style={{ ...S.h1, fontSize: isMobile ? 22 : 32, marginBottom: 8 }}>Citizenship FAQ</h1>
              <p style={{ color: S.p.textMuted, fontSize: 14, margin: 0, lineHeight: 1.5, maxWidth: 520, marginLeft: "auto", marginRight: "auto" }}>
                50 questions answered from official German government sources.
              </p>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr", gap: 16 }}>
              {FAQ_SECTIONS.map((sec, i) => (
                <div
                  key={sec.id}
                  onClick={() => setSection(i)}
                  style={{
                    ...S.card({ padding: isMobile ? "20px 16px" : "24px 24px" }),
                    cursor: "pointer",
                    transition: "all 0.25s",
                    borderColor: "rgba(168,85,247,0.12)",
                  }}
                  onMouseEnter={e => { e.currentTarget.style.borderColor = "rgba(168,85,247,0.4)"; e.currentTarget.style.transform = "translateY(-2px)"; }}
                  onMouseLeave={e => { e.currentTarget.style.borderColor = "rgba(168,85,247,0.12)"; e.currentTarget.style.transform = ""; }}
                >
                  <div style={{ fontSize: 28, marginBottom: 8 }}>{sec.icon}</div>
                  <div style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: isMobile ? 16 : 18, fontWeight: 600, color: S.p.headingText, marginBottom: 6 }}>{sec.title}</div>
                  <div style={{ color: S.p.textMuted, fontSize: 13 }}>{sec.questions.length} questions</div>
                </div>
              ))}
            </div>
            <div style={{ textAlign: "center", marginTop: 24, color: S.p.textMuted, fontSize: 12, lineHeight: 1.6, opacity: 0.7 }}>
              Sources: einb&uuml;rgerung.de &middot; bmi.bund.de &middot; bamf.de &middot; auswaertiges-amt.de
            </div>
          </>
        ) : (
          <>
            <div style={{ marginBottom: 24 }}>
              <div style={{ fontSize: 12, color: "#A855F7", fontWeight: 600, marginBottom: 4, cursor: "pointer" }} onClick={() => setSection(null)}>
                &larr; All Topics
              </div>
              <h2 style={{ ...S.h2, fontSize: isMobile ? 20 : 26, marginBottom: 4 }}>
                {FAQ_SECTIONS[section].icon} {FAQ_SECTIONS[section].title}
              </h2>
              <p style={{ color: S.p.textMuted, fontSize: 13, margin: 0 }}>
                {FAQ_SECTIONS[section].questions.length} questions
              </p>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
              {FAQ_SECTIONS[section].questions.map((faq, i) => (
                <div key={i} style={{ ...S.card({ padding: isMobile ? "16px 16px" : "20px 24px" }) }}>
                  <h3 style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: isMobile ? 15 : 16, fontWeight: 600, color: S.p.headingText, marginTop: 0, marginBottom: 10 }}>
                    {faq.q}
                  </h3>
                  <p style={{ color: S.p.textMuted, fontSize: 14, lineHeight: 1.7, margin: 0, marginBottom: 8 }}>{faq.a}</p>
                  <div style={{ fontSize: 11, color: "#A855F7", opacity: 0.7 }}>Source: {faq.source}</div>
                </div>
              ))}
            </div>
            <div style={{ display: "flex", justifyContent: "space-between", marginTop: 24 }}>
              {section > 0 ? (
                <button onClick={() => { setSection(section - 1); window.scrollTo(0, 0); }} style={{ ...S.btn("ghost"), fontSize: 13 }}>
                  &larr; {NAV_LABELS[section - 1]}
                </button>
              ) : <div />}
              {section < FAQ_SECTIONS.length - 1 ? (
                <button onClick={() => { setSection(section + 1); window.scrollTo(0, 0); }} style={{ ...S.btn("ghost"), fontSize: 13 }}>
                  {NAV_LABELS[section + 1]} &rarr;
                </button>
              ) : <div />}
            </div>
          </>
        )}
      </div>
    </ModuleLayout>
  );
}
