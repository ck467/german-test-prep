import { useState } from "react";
import { STUDY_PLANS } from "../../data/b1StudyPlan.js";
import useStyles from "../../useStyles.js";
import { getEX } from "../../palettes.js";

function ScheduleBlock({ title, rows, EX }) {
  return (
    <div style={{ background: EX.grayLight, border: `1px solid ${EX.grayBorder}`, borderRadius: 10, overflow: "hidden", marginBottom: 16 }}>
      {title && (
        <div style={{ padding: "10px 16px", borderBottom: `1px solid ${EX.grayBorder}`, fontSize: 11, fontWeight: 600, textTransform: "uppercase", letterSpacing: 1, color: EX.muted }}>
          {title}
        </div>
      )}
      {rows.map((r, i) => {
        const isTip = r.type === "tip";
        const isInfo = r.type === "info";
        const isHeader = r.type === "header";
        const rowBg = isTip ? "rgba(245,158,11,0.08)" : isInfo ? "rgba(96,165,250,0.08)" : "transparent";
        const timeColor = isTip ? "#F59E0B" : isInfo ? "#60A5FA" : isHeader ? EX.muted : EX.orange;
        const timeFontSize = isHeader ? 11 : 12;
        return (
          <div key={i} style={{ display: "flex", alignItems: "baseline", gap: 14, padding: "10px 16px", borderBottom: i < rows.length - 1 ? `1px solid ${EX.grayBorder}` : "none", background: rowBg }}>
            <span style={{ fontFamily: "monospace", fontSize: timeFontSize, color: timeColor, minWidth: 60, flexShrink: 0 }}>{r.time}</span>
            <span style={{ fontSize: 14, fontWeight: isHeader ? 600 : 500, color: EX.white, flex: 1 }}>{r.activity}</span>
            <span style={{ fontSize: 12, color: EX.muted }}>{r.desc}</span>
          </div>
        );
      })}
    </div>
  );
}

function DayCard({ day, EX }) {
  const isMock = day.type === "mock";
  const isRest = day.type === "rest";
  const borderColor = isMock ? EX.redBorder : isRest ? EX.greenBorder : EX.grayBorder;
  const bg = isMock ? EX.redLight : isRest ? EX.greenLight : EX.grayLight;
  const labelColor = isMock ? EX.red : isRest ? EX.green : EX.muted;

  return (
    <div style={{ background: bg, border: `1px solid ${borderColor}`, borderRadius: 10, padding: 16, minWidth: 0 }}>
      <div style={{ fontFamily: "monospace", fontSize: 10, letterSpacing: 1, textTransform: "uppercase", color: labelColor, marginBottom: 6 }}>{day.label}</div>
      <div style={{ fontSize: 14, fontWeight: 600, color: EX.white, marginBottom: 6, lineHeight: 1.3 }}>{day.focus}</div>
      <div style={{ fontSize: 12, color: EX.muted, lineHeight: 1.4 }}>{day.note}</div>
    </div>
  );
}

function InfoBlock({ title, items, EX }) {
  return (
    <div style={{ background: EX.grayLight, border: `1px solid ${EX.grayBorder}`, borderRadius: 10, padding: 16 }}>
      <div style={{ fontFamily: "monospace", fontSize: 11, letterSpacing: 1, textTransform: "uppercase", color: EX.muted, marginBottom: 12 }}>{title}</div>
      {items.map((item, i) => (
        <div key={i} style={{ fontSize: 13, color: EX.white, padding: "5px 0", borderBottom: i < items.length - 1 ? `1px solid ${EX.grayBorder}` : "none", display: "flex", gap: 8, alignItems: "baseline" }}>
          <span style={{ color: EX.orange, fontSize: 12, flexShrink: 0 }}>→</span>
          <span>{item}</span>
        </div>
      ))}
    </div>
  );
}

function PhaseSection({ phase, EX, isMobile }) {
  return (
    <div style={{ marginBottom: 32 }}>
      <div style={{ display: "flex", alignItems: "baseline", gap: 14, marginBottom: 16, paddingBottom: 10, borderBottom: `1px solid ${EX.grayBorder}`, flexWrap: "wrap" }}>
        <span style={{ fontFamily: "monospace", fontSize: 11, color: EX.muted, letterSpacing: 1 }}>PHASE {phase.number}</span>
        <span style={{ fontSize: 20, fontWeight: 600, color: EX.white }}>{phase.title}</span>
        {phase.subtitle && <span style={{ fontSize: 13, color: EX.muted, fontStyle: "italic" }}>{phase.subtitle}</span>}
        <span style={{ marginLeft: "auto", fontFamily: "monospace", fontSize: 11, padding: "4px 10px", border: `1px solid ${EX.grayBorder}`, color: EX.muted }}>{phase.tag}</span>
      </div>

      {phase.schedule && <ScheduleBlock title="Daily Schedule" rows={phase.schedule} EX={EX} />}

      {phase.days && (
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))", gap: 12, marginBottom: 16 }}>
          {phase.days.map((d, i) => <DayCard key={i} day={d} EX={EX} />)}
        </div>
      )}

      {phase.infoBlocks && (
        <div style={{ display: "grid", gridTemplateColumns: isMobile ? "1fr" : (phase.infoBlocks.length > 1 ? "1fr 1fr" : "1fr"), gap: 12, marginBottom: 16 }}>
          {phase.infoBlocks.map((b, i) => <InfoBlock key={i} title={b.title} items={b.items} EX={EX} />)}
        </div>
      )}

      {phase.testFormat && (
        <ScheduleBlock
          title="Test Format Introduction"
          rows={phase.testFormat.map(t => ({ time: t.section, activity: t.detail, desc: t.desc }))}
          EX={EX}
        />
      )}
    </div>
  );
}

export default function StudyPlan({ onBack }) {
  const { S, theme, isMobile } = useStyles();
  const EX = getEX(theme);
  const [track, setTrack] = useState("sprint");
  const plan = track === "sprint" ? STUDY_PLANS.sprint : STUDY_PLANS.intensive;
  const exam = STUDY_PLANS.examOverview;

  return (
    <div style={{ maxWidth: 880, margin: "0 auto", padding: isMobile ? "20px 12px 48px" : "32px 24px 64px" }}>
      {/* Back */}
      <button onClick={onBack} style={{ background: "none", border: `1px solid ${EX.grayBorder}`, color: EX.muted, padding: "6px 16px", borderRadius: 6, cursor: "pointer", fontSize: 13, marginBottom: 24 }}>
        ← Back to Home
      </button>

      {/* Header */}
      <div style={{ marginBottom: 32 }}>
        <div style={{ display: "inline-block", fontFamily: "monospace", fontSize: 11, letterSpacing: 1.5, textTransform: "uppercase", background: EX.orangeLight, color: EX.orange, padding: "4px 10px", marginBottom: 12, border: `1px solid ${EX.orangeBorder}` }}>
          Telc · Goethe · ÖSD Compatible
        </div>
        <h1 style={{ fontSize: isMobile ? 22 : 32, fontWeight: 700, color: EX.white, marginBottom: 8, fontFamily: "'Playfair Display', serif" }}>
          German B1 Study Plan
        </h1>
        <p style={{ color: EX.muted, fontSize: 15, lineHeight: 1.6, maxWidth: 560 }}>
          Two structured paths to B1 certification — choose the sprint plan if your exam is approaching, or the intensive track if you're building from the ground up.
        </p>
      </div>

      {/* Exam Structure */}
      <div style={{ display: "grid", gridTemplateColumns: isMobile ? "1fr 1fr" : "repeat(4, 1fr)", gap: 0, border: `1px solid ${EX.grayBorder}`, borderRadius: 10, overflow: "hidden", marginBottom: 32 }}>
        {exam.sections.map((s, i) => (
          <div key={i} style={{ padding: "16px 14px", borderRight: isMobile ? (i % 2 === 0 ? `1px solid ${EX.grayBorder}` : "none") : (i < 3 ? `1px solid ${EX.grayBorder}` : "none"), borderBottom: isMobile && i < 2 ? `1px solid ${EX.grayBorder}` : "none", background: EX.gray }}>
            <div style={{ fontFamily: "monospace", fontSize: 10, letterSpacing: 1, textTransform: "uppercase", color: EX.muted, marginBottom: 4 }}>Section {String(i + 1).padStart(2, "0")}</div>
            <div style={{ fontWeight: 600, fontSize: 14, color: EX.white, marginBottom: 2 }}>{s.name}</div>
            <div style={{ fontSize: 12, color: EX.muted }}>{s.label} · {s.duration}</div>
            <div style={{ fontFamily: "monospace", fontSize: 18, fontWeight: 500, color: EX.orange, marginTop: 6 }}>{s.points} pts</div>
          </div>
        ))}
      </div>

      {/* Track Switcher */}
      <div style={{ display: "flex", gap: 0, borderBottom: `1px solid ${EX.grayBorder}`, marginBottom: 32 }}>
        {[
          { key: "sprint", label: "18-Day Sprint Plan", tag: "Short on time", tagColor: EX.red, tagBg: EX.redLight },
          { key: "intensive", label: "8-Week Intensive Plan", tag: "Full-time study", tagColor: EX.orange, tagBg: EX.orangeLight },
        ].map(t => (
          <button
            key={t.key}
            onClick={() => setTrack(t.key)}
            style={{
              padding: "12px 24px",
              fontSize: 14,
              fontWeight: 500,
              cursor: "pointer",
              background: "none",
              border: "none",
              borderBottom: `3px solid ${track === t.key ? EX.orange : "transparent"}`,
              color: track === t.key ? EX.white : EX.muted,
              position: "relative",
              bottom: -1,
              fontFamily: "inherit",
            }}
          >
            {t.label}{" "}
            <span style={{ display: "inline-block", fontFamily: "monospace", fontSize: 10, padding: "2px 6px", marginLeft: 6, background: t.tagBg, color: t.tagColor, borderRadius: 2 }}>
              {t.tag}
            </span>
          </button>
        ))}
      </div>

      {/* Overview Ribbon */}
      <div style={{ display: "flex", gap: 0, border: `1px solid ${EX.grayBorder}`, borderRadius: 10, overflow: "hidden", marginBottom: 32, flexDirection: isMobile ? "column" : "row" }}>
        {track === "sprint" ? (
          <>
            <RibbonItem label="Duration" value={plan.duration} sub="3 focused phases" EX={EX} isMobile={isMobile} />
            <RibbonItem label="Daily Hours" value={plan.dailyHours} sub="Escalating week to week" EX={EX} isMobile={isMobile} />
            <RibbonItem label="Target Score" value={plan.targetScore} sub={plan.targetPoints} EX={EX} isMobile={isMobile} />
            <RibbonItem label="Minimum Pass" value={plan.minimumPass} sub={plan.passNote} last EX={EX} isMobile={isMobile} />
          </>
        ) : (
          <>
            <RibbonItem label="Duration" value={plan.duration} sub="4 progressive phases" EX={EX} isMobile={isMobile} />
            <RibbonItem label="Daily Hours" value={plan.dailyHours} sub="Full-time commitment" EX={EX} isMobile={isMobile} />
            <RibbonItem label="Total Hours" value={plan.totalHours} sub={plan.totalHoursRange} EX={EX} isMobile={isMobile} />
            <RibbonItem label="Vocab Target" value={plan.vocabTarget} sub={plan.vocabNote} last EX={EX} isMobile={isMobile} />
          </>
        )}
      </div>

      {/* Critical Rule (sprint only) */}
      {track === "sprint" && plan.criticalRule && (
        <div style={{ background: "rgba(239,68,68,0.08)", border: `1px solid ${EX.redBorder}`, borderRadius: 10, padding: "14px 18px", marginBottom: 32, display: "flex", gap: 14, alignItems: "flex-start" }}>
          <span style={{ fontSize: 18, flexShrink: 0 }}>⚠</span>
          <p style={{ fontSize: 13, lineHeight: 1.6, color: EX.white, margin: 0 }}>
            <strong style={{ color: EX.red }}>Critical Rule: </strong>
            {plan.criticalRule.replace("You must pass both sections independently. ", "")}
          </p>
        </div>
      )}

      {/* Daily Template (intensive only) */}
      {track === "intensive" && plan.dailyTemplate && (
        <div style={{ marginBottom: 32 }}>
          <div style={{ display: "flex", alignItems: "baseline", gap: 14, marginBottom: 16, paddingBottom: 10, borderBottom: `1px solid ${EX.grayBorder}` }}>
            <span style={{ fontFamily: "monospace", fontSize: 11, color: EX.muted, letterSpacing: 1 }}>DAILY TEMPLATE</span>
            <span style={{ fontSize: 20, fontWeight: 600, color: EX.white }}>Standard Day Structure</span>
            <span style={{ fontSize: 13, color: EX.muted, fontStyle: "italic" }}>Applies across all 8 weeks</span>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr", gap: 12 }}>
            <ScheduleBlock title={plan.dailyTemplate.morning.title} rows={plan.dailyTemplate.morning.rows} EX={EX} />
            <ScheduleBlock title={plan.dailyTemplate.afternoon.title} rows={plan.dailyTemplate.afternoon.rows} EX={EX} />
          </div>
        </div>
      )}

      {/* Phases */}
      {plan.phases.map((phase, i) => (
        <PhaseSection key={i} phase={phase} EX={EX} isMobile={isMobile} />
      ))}

      {/* Scoring Sections (sprint only) */}
      {track === "sprint" && plan.scoringSections && (
        <div style={{ marginBottom: 32 }}>
          <div style={{ display: "flex", alignItems: "baseline", gap: 14, marginBottom: 16, paddingBottom: 10, borderBottom: `1px solid ${EX.grayBorder}` }}>
            <span style={{ fontFamily: "monospace", fontSize: 11, color: EX.muted, letterSpacing: 1 }}>REFERENCE</span>
            <span style={{ fontSize: 20, fontWeight: 600, color: EX.white }}>{plan.scoringSections.title}</span>
          </div>
          {plan.scoringSections.sections.map((section, i) => (
            <ScheduleBlock key={i} title={section.title} rows={section.rows} EX={EX} />
          ))}
        </div>
      )}
    </div>
  );
}

function RibbonItem({ label, value, sub, last, EX, isMobile }) {
  return (
    <div style={{ flex: 1, padding: "14px 16px", borderRight: isMobile ? "none" : (last ? "none" : `1px solid ${EX.grayBorder}`), borderBottom: isMobile && !last ? `1px solid ${EX.grayBorder}` : "none", background: EX.gray }}>
      <div style={{ fontFamily: "monospace", fontSize: 10, letterSpacing: 1, textTransform: "uppercase", color: EX.muted, marginBottom: 4 }}>{label}</div>
      <div style={{ fontSize: 20, fontWeight: 700, color: EX.white }}>{value}</div>
      {sub && <div style={{ fontSize: 12, color: EX.muted, marginTop: 2 }}>{sub}</div>}
    </div>
  );
}
