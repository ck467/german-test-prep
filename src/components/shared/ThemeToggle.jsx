import { useTheme } from "../../ThemeContext.jsx";

export default function ThemeToggle() {
  const { theme, toggle } = useTheme();
  const isDark = theme === "dark";
  return (
    <button
      onClick={toggle}
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
      style={{
        background: "none",
        border: "1px solid " + (isDark ? "rgba(255,255,255,0.12)" : "rgba(0,0,0,0.12)"),
        borderRadius: 8,
        padding: "5px 10px",
        cursor: "pointer",
        fontSize: 18,
        lineHeight: 1,
        color: isDark ? "#F5C842" : "#E8712B",
        transition: "all 0.2s",
      }}
    >
      {isDark ? "\u2600\uFE0F" : "\uD83C\uDF19"}
    </button>
  );
}
