export default function ScoreBadge({ score, max }) {
  const pct = max > 0 ? Math.round((score / max) * 100) : 0;
  const color = max === 0 ? "#888" : pct >= 60 ? "#10B981" : pct >= 40 ? "#F59E0B" : "#EF4444";
  return (
    <span style={{ background: color + "22", color, border: `1px solid ${color}44`, borderRadius: 6, padding: "2px 10px", fontSize: 13, fontWeight: 700 }}>
      {score}/{max}{max > 0 ? ` (${pct}%)` : ""}
    </span>
  );
}
