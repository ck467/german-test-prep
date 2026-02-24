const S = {
  root: { background: "#0B0D14", minHeight: "100vh", fontFamily: "'Source Sans 3', 'Segoe UI', sans-serif", color: "#E8E6E0" },
  header: { background: "rgba(11,13,20,0.96)", borderBottom: "1px solid rgba(255,255,255,0.07)", padding: "0 32px", display: "flex", alignItems: "center", justifyContent: "space-between", height: 60, position: "sticky", top: 0, zIndex: 100, backdropFilter: "blur(12px)" },
  logo: { fontFamily: "'Playfair Display', Georgia, serif", fontSize: 18, fontWeight: 700, color: "#F5C842", cursor: "pointer", letterSpacing: 0.5 },
  nav: { display: "flex", gap: 4 },
  navBtn: (active) => ({ background: active ? "rgba(245,200,66,0.12)" : "transparent", color: active ? "#F5C842" : "#888", border: active ? "1px solid rgba(245,200,66,0.25)" : "1px solid transparent", borderRadius: 6, padding: "6px 14px", cursor: "pointer", fontSize: 13, fontWeight: active ? 600 : 400, transition: "all 0.15s" }),
  inner: { maxWidth: 880, margin: "0 auto", padding: "32px 24px" },
  h1: { fontFamily: "'Playfair Display', Georgia, serif", fontSize: 32, fontWeight: 700, color: "#F5F3EE", marginBottom: 8, lineHeight: 1.2 },
  h2: { fontFamily: "'Playfair Display', Georgia, serif", fontSize: 22, fontWeight: 600, color: "#F5F3EE", marginBottom: 16 },
  card: (extra) => ({ background: "#141720", border: "1px solid rgba(255,255,255,0.08)", borderRadius: 12, padding: 24, ...extra }),
  tag: { background: "rgba(245,200,66,0.1)", color: "#F5C842", border: "1px solid rgba(245,200,66,0.2)", borderRadius: 4, padding: "3px 8px", fontSize: 12, fontWeight: 600 },
  btn: (v) => ({
    background: v === "primary" ? "#F5C842" : v === "danger" ? "#EF4444" : "rgba(255,255,255,0.06)",
    color: v === "primary" ? "#0B0D14" : v === "danger" ? "#fff" : "#ccc",
    border: "none", borderRadius: 8, padding: "10px 20px", cursor: "pointer", fontSize: 14, fontWeight: 600, transition: "all 0.15s",
  }),
  progress: (pct, color = "#F5C842") => ({
    height: 4, background: "#1E2130", borderRadius: 2, overflow: "hidden",
    after: { width: `${pct}%`, height: "100%", background: color, display: "block" }
  }),
};

export default S;
