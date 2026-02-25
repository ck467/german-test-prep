import useStyles from "../../useStyles.js";

export default function ProgressBar({ value, max, color = "#F5C842" }) {
  const { S } = useStyles();
  return (
    <div style={{ height: 5, background: S.p.progressTrack, borderRadius: 3, overflow: "hidden" }}>
      <div style={{ width: `${Math.round((value / max) * 100)}%`, height: "100%", background: color, transition: "width 0.3s ease", borderRadius: 3 }} />
    </div>
  );
}
