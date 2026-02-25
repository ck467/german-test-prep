import { useNavigate } from "react-router-dom";
import useStyles from "../../useStyles.js";
import ThemeToggle from "./ThemeToggle.jsx";

export default function ModuleLayout({ nav, children }) {
  const navigate = useNavigate();
  const { S } = useStyles();

  return (
    <div style={S.root}>
      <header style={S.header}>
        <div style={S.logo} onClick={() => navigate("/")}>German Test Prep</div>
        {nav && <nav style={S.nav}>{nav}<ThemeToggle /></nav>}
        {!nav && <ThemeToggle />}
      </header>
      {children}
    </div>
  );
}
