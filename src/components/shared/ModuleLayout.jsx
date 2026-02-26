import { useNavigate } from "react-router-dom";
import useStyles from "../../useStyles.js";
import ThemeToggle from "./ThemeToggle.jsx";

export default function ModuleLayout({ nav, children }) {
  const navigate = useNavigate();
  const { S, isMobile } = useStyles();

  return (
    <div style={S.root}>
      <header style={{ ...S.header, padding: isMobile ? "0 12px" : "0 32px" }}>
        <div style={S.logo} onClick={() => navigate("/")}>German Citizenship Prep</div>
        {nav && <nav style={{ ...S.nav, flexWrap: isMobile ? "wrap" : undefined }}>{nav}<ThemeToggle /></nav>}
        {!nav && <ThemeToggle />}
      </header>
      {children}
    </div>
  );
}
