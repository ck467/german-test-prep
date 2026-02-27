import { useNavigate } from "react-router-dom";
import useStyles from "../../useStyles.js";
import ThemeToggle from "./ThemeToggle.jsx";

export default function ModuleLayout({ nav, children, title, description }) {
  const navigate = useNavigate();
  const { S, isMobile } = useStyles();

  return (
    <div style={S.root}>
      {title && <title>{title}</title>}
      {description && <meta name="description" content={description} />}
      <header style={{
        ...S.header,
        padding: isMobile ? "8px 12px" : "0 32px",
        flexWrap: isMobile ? "wrap" : undefined,
        gap: isMobile ? 8 : 0,
      }}>
        <div style={{ ...S.logo, fontSize: isMobile ? 15 : 18 }} onClick={() => navigate("/")}>German Citizenship Prep</div>
        {nav && (
          <nav style={{ ...S.nav, flexWrap: "wrap", gap: isMobile ? 4 : 4 }}>
            {nav}
            <ThemeToggle />
          </nav>
        )}
        {!nav && <ThemeToggle />}
      </header>
      {children}
    </div>
  );
}
