import { useTheme } from "./ThemeContext.jsx";
import { getStyles } from "./styles.js";
import useIsMobile from "./useIsMobile.js";

export default function useStyles() {
  const { theme, toggle } = useTheme();
  const S = getStyles(theme);
  const isDark = theme === "dark";
  const isMobile = useIsMobile();
  return { S, theme, isDark, toggle, isMobile };
}
