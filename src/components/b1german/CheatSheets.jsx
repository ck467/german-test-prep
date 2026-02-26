import { useState } from "react";
import useStyles from "../../useStyles.js";
import { getCS } from "../../palettes.js";
import { B1_CHEAT_SHEETS } from "../../data/b1CheatSheets.js";

function BlockHeading({ text, CS }) {
  return (
    <h3 style={{
      fontFamily: "'Source Sans 3', sans-serif",
      fontSize: 13,
      fontWeight: 700,
      letterSpacing: 1,
      textTransform: "uppercase",
      color: CS.muted,
      marginTop: 28,
      marginBottom: 12,
      paddingBottom: 8,
      borderBottom: `1px solid ${CS.grayBorder}`,
    }}>
      {text}
    </h3>
  );
}

function BlockTemplate({ title, lines, CS }) {
  return (
    <div style={{
      background: CS.grayLight,
      border: `1px solid ${CS.grayBorder}`,
      borderLeft: `3px solid ${CS.green}`,
      padding: "16px 20px",
      fontFamily: "'Source Code Pro', 'Courier New', monospace",
      fontSize: 12,
      lineHeight: 1.8,
      marginBottom: 12,
      whiteSpace: "pre-wrap",
      color: CS.white,
      borderRadius: 4,
    }}>
      {lines.map((line, i) => {
        const parts = line.split(/(\[[^\]]+\])/g);
        return (
          <div key={i} style={{ minHeight: line === "" ? 8 : undefined }}>
            {parts.map((part, j) =>
              part.startsWith("[") && part.endsWith("]") ? (
                <span key={j} style={{ color: CS.green, fontWeight: 500 }}>{part}</span>
              ) : (
                <span key={j}>{part}</span>
              )
            )}
          </div>
        );
      })}
    </div>
  );
}

function BlockTable({ headers, rows, CS }) {
  return (
    <div style={{ overflowX: "auto", marginBottom: 12 }}>
      <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 13 }}>
        <thead>
          <tr>
            {headers.map((h, i) => (
              <th key={i} style={{
                background: CS.gray,
                fontFamily: "'Source Sans 3', sans-serif",
                fontSize: 10,
                fontWeight: 700,
                letterSpacing: 1,
                textTransform: "uppercase",
                padding: "8px 12px",
                textAlign: "left",
                border: `1px solid ${CS.grayBorder}`,
                color: CS.muted,
              }}>
                {h}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, i) => (
            <tr key={i}>
              {row.map((cell, j) => (
                <td key={j} style={{
                  padding: "9px 12px",
                  border: `1px solid ${CS.grayBorder}`,
                  verticalAlign: "top",
                  lineHeight: 1.5,
                  color: CS.white,
                  background: i % 2 === 1 ? CS.stripeBg : "transparent",
                }}>
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function BlockTip({ title, text, CS }) {
  return (
    <div style={{
      background: CS.tipBg,
      border: `1px solid ${CS.tipBorder}`,
      borderRadius: 6,
      padding: "14px 18px",
      fontSize: 13,
      lineHeight: 1.6,
      marginBottom: 16,
      color: CS.white,
    }}>
      {title && <strong style={{ color: CS.green }}>{title}: </strong>}
      {text}
    </div>
  );
}

function BlockList({ title, items, CS }) {
  return (
    <div style={{
      background: CS.grayLight,
      border: `1px solid ${CS.grayBorder}`,
      borderRadius: 6,
      padding: "16px 20px",
      marginBottom: 12,
    }}>
      {title && (
        <div style={{
          fontSize: 11,
          fontWeight: 700,
          letterSpacing: 1,
          textTransform: "uppercase",
          color: CS.muted,
          marginBottom: 10,
        }}>
          {title}
        </div>
      )}
      <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
        {items.map((item, i) => (
          <li key={i} style={{
            fontSize: 13,
            padding: "5px 0",
            borderBottom: i < items.length - 1 ? `1px solid ${CS.grayBorder}` : "none",
            display: "flex",
            gap: 10,
            alignItems: "baseline",
            color: CS.white,
          }}>
            <span style={{ color: CS.green, fontSize: 12, flexShrink: 0 }}>{"\u2192"}</span>
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

function BlockPills({ items, CS }) {
  return (
    <div style={{ display: "flex", flexWrap: "wrap", gap: 8, marginBottom: 12 }}>
      {items.map((item, i) => (
        <span key={i} style={{
          fontSize: 12,
          padding: "5px 12px",
          border: `1px solid ${CS.grayBorder}`,
          background: CS.grayLight,
          borderRadius: 4,
          color: CS.white,
        }}>
          {item}
        </span>
      ))}
    </div>
  );
}

function BlockScoring({ title, items, CS }) {
  return (
    <div style={{
      background: CS.warnBg,
      border: `1px solid ${CS.warnBorder}`,
      borderRadius: 6,
      padding: "16px 20px",
      marginBottom: 16,
      display: "flex",
      gap: 16,
      alignItems: "flex-start",
    }}>
      <span style={{ fontSize: 20, flexShrink: 0, marginTop: 2 }}>{"\uD83D\uDCCA"}</span>
      <div style={{ fontSize: 13, lineHeight: 1.6, color: CS.white }}>
        {items.map((item, i) => (
          <span key={i}>
            <strong style={{ color: "#F59E42" }}>{item.label}:</strong> {item.value}
            {i < items.length - 1 && " \u00B7 "}
          </span>
        ))}
      </div>
    </div>
  );
}

function ContentBlock({ block, CS }) {
  switch (block.type) {
    case "heading": return <BlockHeading text={block.text} CS={CS} />;
    case "template": return <BlockTemplate title={block.title} lines={block.lines} CS={CS} />;
    case "table": return <BlockTable headers={block.headers} rows={block.rows} CS={CS} />;
    case "tip": return <BlockTip title={block.title} text={block.text} CS={CS} />;
    case "list": return <BlockList title={block.title} items={block.items} CS={CS} />;
    case "pills": return <BlockPills items={block.items} CS={CS} />;
    case "scoring": return <BlockScoring title={block.title} items={block.items} CS={CS} />;
    default: return null;
  }
}

export default function CheatSheets({ onBack }) {
  const { S, theme, isMobile } = useStyles();
  const CS = getCS(theme);
  const [activeTab, setActiveTab] = useState(0);
  const section = B1_CHEAT_SHEETS[activeTab];

  return (
    <div style={S.inner}>
      {/* Header */}
      <div style={{ marginBottom: 8 }}>
        <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 4 }}>
          <span style={{ fontSize: 28 }}>{"\uD83D\uDCCB"}</span>
          <h1 style={{ ...S.h1, fontSize: isMobile ? 22 : undefined }}>Exam Cheat Sheets</h1>
        </div>
        <p style={{ color: S.p.textMuted, fontSize: 15, margin: 0, marginBottom: 20 }}>
          Quick-reference strategies, templates & scoring for all 5 exam sections
        </p>
      </div>

      {/* Tabs */}
      <div style={{
        display: "flex",
        gap: 8,
        flexWrap: "wrap",
        marginBottom: 24,
      }}>
        {B1_CHEAT_SHEETS.map((sheet, i) => (
          <button
            key={sheet.id}
            onClick={() => setActiveTab(i)}
            style={{
              padding: "8px 16px",
              fontSize: 13,
              fontWeight: activeTab === i ? 700 : 500,
              letterSpacing: 0.5,
              cursor: "pointer",
              border: `1px solid ${activeTab === i ? CS.green : CS.grayBorder}`,
              background: activeTab === i ? CS.greenLight : CS.grayLight,
              color: activeTab === i ? CS.green : CS.muted,
              borderRadius: 6,
              transition: "all 0.2s",
            }}
          >
            {sheet.icon} {sheet.title}
          </button>
        ))}
      </div>

      {/* Content */}
      <div>
        {section.content.map((block, i) => (
          <ContentBlock key={`${section.id}-${i}`} block={block} CS={CS} />
        ))}
      </div>

      {/* Back button */}
      <div style={{ marginTop: 32, textAlign: "center" }}>
        <button
          onClick={onBack}
          style={{
            ...S.btn(),
            border: `1px solid ${CS.grayBorder}`,
          }}
        >
          Back to Home
        </button>
      </div>
    </div>
  );
}
