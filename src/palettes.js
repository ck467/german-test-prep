const dark = {
  gray: "#23262F",
  grayLight: "#1A1D27",
  grayBorder: "rgba(255,255,255,0.1)",
  white: "#F5F3EE",
  muted: "#888",
  passageBg: "#101218",
  passageBorder: "rgba(255,255,255,0.08)",
  stripeBg: "rgba(255,255,255,0.01)",
  ghostBg: "rgba(255,255,255,0.02)",
  ghostBorder: "rgba(255,255,255,0.08)",
  bodyText: "#E8E6E0",
  passageText: "#C8C6BE",
  subtleText: "#999",
  softText: "#bbb",
  noMatchBg: "rgba(255,255,255,0.02)",
  noMatchBorder: "rgba(255,255,255,0.12)",
  selectBg: "#1A1D27",
  selectColor: "#E8E6E0",
};

const light = {
  gray: "#F0EEE9",
  grayLight: "#F5F3EE",
  grayBorder: "rgba(0,0,0,0.1)",
  white: "#1A1A1A",
  muted: "#666",
  passageBg: "#FAFAF8",
  passageBorder: "rgba(0,0,0,0.08)",
  stripeBg: "rgba(0,0,0,0.02)",
  ghostBg: "rgba(0,0,0,0.02)",
  ghostBorder: "rgba(0,0,0,0.08)",
  bodyText: "#2D2D2D",
  passageText: "#3D3D3D",
  subtleText: "#555",
  softText: "#444",
  noMatchBg: "rgba(0,0,0,0.02)",
  noMatchBorder: "rgba(0,0,0,0.12)",
  selectBg: "#F5F3EE",
  selectColor: "#2D2D2D",
};

function pick(theme) { return theme === "dark" ? dark : light; }

export function getEX(theme) {
  const p = pick(theme);
  return {
    orange: "#E8712B",
    orangeLight: "rgba(232,113,43,0.12)",
    orangeBorder: "rgba(232,113,43,0.3)",
    gray: p.gray,
    grayLight: p.grayLight,
    grayBorder: p.grayBorder,
    white: p.white,
    muted: p.muted,
    passageBg: p.passageBg,
    passageBorder: p.passageBorder,
    stripeBg: p.stripeBg,
    ghostBg: p.ghostBg,
    ghostBorder: p.ghostBorder,
    bodyText: p.bodyText,
    passageText: p.passageText,
    subtleText: p.subtleText,
    softText: p.softText,
    noMatchBg: p.noMatchBg,
    noMatchBorder: p.noMatchBorder,
    selectBg: p.selectBg,
    selectColor: p.selectColor,
    green: "#22C55E",
    greenLight: "rgba(34,197,94,0.12)",
    greenBorder: "rgba(34,197,94,0.3)",
    red: "#EF4444",
    redLight: "rgba(239,68,68,0.12)",
    redBorder: "rgba(239,68,68,0.3)",
  };
}

export function getCS(theme) {
  const p = pick(theme);
  return {
    green: "#34D399",
    greenLight: "rgba(52,211,153,0.12)",
    greenBorder: "rgba(52,211,153,0.3)",
    greenSoft: "rgba(52,211,153,0.06)",
    gray: p.gray,
    grayLight: p.grayLight,
    grayBorder: p.grayBorder,
    white: p.white,
    muted: p.muted,
    accent: "#34D399",
    tipBg: "rgba(52,211,153,0.08)",
    tipBorder: "rgba(52,211,153,0.25)",
    warnBg: "rgba(245,158,66,0.08)",
    warnBorder: "rgba(245,158,66,0.25)",
    stripeBg: p.stripeBg,
    ghostBg: p.ghostBg,
  };
}
