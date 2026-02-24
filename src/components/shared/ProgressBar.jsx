export default function ProgressBar({ value, max, color = "#F5C842" }) {
  return (
    <div style={{ height: 5, background: "#1E2230", borderRadius: 3, overflow: "hidden" }}>
      <div style={{ width: `${Math.round((value / max) * 100)}%`, height: "100%", background: color, transition: "width 0.3s ease", borderRadius: 3 }} />
    </div>
  );
}
