import { useTheme } from "./ThemeContext.jsx";
import { getStyles } from "./styles.js";

export default function useStyles() {
  const { theme, toggle } = useTheme();
  const S = getStyles(theme);
  const isDark = theme === "dark";
  return { S, theme, isDark, toggle };
}
