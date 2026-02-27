const palettes = {
  dark: {
    rootBg: "#0B0D14",
    cardBg: "#141720",
    surface: "#23262F",
    surfaceLight: "#1A1D27",
    headerBg: "rgba(11,13,20,0.96)",
    headingText: "#F5F3EE",
    bodyText: "#E8E6E0",
    textMuted: "#888",
    border08: "rgba(255,255,255,0.08)",
    border07: "rgba(255,255,255,0.07)",
    border15: "rgba(255,255,255,0.15)",
    progressTrack: "#1E2130",
    ghostBtnBg: "rgba(255,255,255,0.06)",
    ghostBtnText: "#ccc",
    ghostBtnBg07: "rgba(255,255,255,0.07)",
    selectBg: "#0B0D14",
    stripeBg: "rgba(255,255,255,0.03)",
    exampleBg: "rgba(255,255,255,0.04)",
  },
  light: {
    rootBg: "#F8F7F4",
    cardBg: "#FFFFFF",
    surface: "#F0EEE9",
    surfaceLight: "#F5F3EE",
    headerBg: "rgba(255,255,255,0.96)",
    headingText: "#1A1A1A",
    bodyText: "#2D2D2D",
    textMuted: "#666",
    border08: "rgba(0,0,0,0.08)",
    border07: "rgba(0,0,0,0.07)",
    border15: "rgba(0,0,0,0.15)",
    progressTrack: "#E5E3DE",
    ghostBtnBg: "rgba(0,0,0,0.05)",
    ghostBtnText: "#555",
    ghostBtnBg07: "rgba(0,0,0,0.05)",
    selectBg: "#F8F7F4",
    stripeBg: "rgba(0,0,0,0.02)",
    exampleBg: "rgba(0,0,0,0.03)",
  },
};

export function getStyles(theme) {
  const p = palettes[theme] || palettes.dark;

  return {
    p,
    root: { background: p.rootBg, minHeight: "100vh", fontFamily: "'Source Sans 3', 'Segoe UI', sans-serif", color: p.bodyText },
    header: { background: p.rootBg, borderBottom: `1px solid ${p.border07}`, padding: "0 32px", display: "flex", alignItems: "center", justifyContent: "space-between", minHeight: 60, position: "sticky", top: 0, zIndex: 100 },
    logo: { fontFamily: "'Playfair Display', Georgia, serif", fontSize: 18, fontWeight: 700, color: "#F5C842", cursor: "pointer", letterSpacing: 0.5 },
    nav: { display: "flex", gap: 4, alignItems: "center" },
    navBtn: (active) => ({ background: active ? "rgba(245,200,66,0.12)" : "transparent", color: active ? "#F5C842" : p.textMuted, border: active ? "1px solid rgba(245,200,66,0.25)" : "1px solid transparent", borderRadius: 6, padding: "5px 10px", cursor: "pointer", fontSize: 13, fontWeight: active ? 600 : 400, transition: "all 0.15s", whiteSpace: "nowrap" }),
    inner: { maxWidth: 880, margin: "0 auto", padding: "32px 24px" },
    h1: { fontFamily: "'Playfair Display', Georgia, serif", fontSize: 32, fontWeight: 700, color: p.headingText, marginBottom: 8, lineHeight: 1.2 },
    h2: { fontFamily: "'Playfair Display', Georgia, serif", fontSize: 22, fontWeight: 600, color: p.headingText, marginBottom: 16 },
    card: (extra) => ({ background: p.cardBg, border: `1px solid ${p.border08}`, borderRadius: 12, padding: 24, ...extra }),
    tag: { background: "rgba(245,200,66,0.1)", color: "#F5C842", border: "1px solid rgba(245,200,66,0.2)", borderRadius: 4, padding: "3px 8px", fontSize: 12, fontWeight: 600 },
    btn: (v) => ({
      background: v === "primary" ? "#F5C842" : v === "danger" ? "#EF4444" : p.ghostBtnBg,
      color: v === "primary" ? "#0B0D14" : v === "danger" ? "#fff" : p.ghostBtnText,
      border: "none", borderRadius: 8, padding: "10px 20px", cursor: "pointer", fontSize: 14, fontWeight: 600, transition: "all 0.15s",
    }),
    backBtn: { background: "none", border: `1px solid ${p.border08}`, color: p.textMuted, padding: "6px 16px", borderRadius: 6, cursor: "pointer", fontSize: 13 },
    progress: (pct, color = "#F5C842") => ({
      height: 4, background: p.progressTrack, borderRadius: 2, overflow: "hidden",
      after: { width: `${pct}%`, height: "100%", background: color, display: "block" }
    }),
  };
}

// Default export for backwards compatibility during migration
const S = getStyles("dark");
export default S;
