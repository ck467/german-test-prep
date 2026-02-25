import { useNavigate } from "react-router-dom";
import S from "../../styles.js";

export default function ModuleLayout({ nav, children }) {
  const navigate = useNavigate();

  return (
    <div style={S.root}>
      <header style={S.header}>
        <div style={S.logo} onClick={() => navigate("/")}>German Test Prep</div>
        {nav && <nav style={S.nav}>{nav}</nav>}
      </header>
      {children}
    </div>
  );
}
