import { Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage.jsx";
import CitizenshipModule from "./components/citizenship/CitizenshipModule.jsx";
import B1GermanModule from "./components/b1german/B1GermanModule.jsx";
import EligibilityModule from "./components/eligibility/EligibilityModule.jsx";
import { MODULES } from "./data/modules.js";

const MODULE_COMPONENTS = {
  "citizenship": CitizenshipModule,
  "b1-german": B1GermanModule,
  "eligibility": EligibilityModule,
};

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      {MODULES.map((mod) => {
        const Component = MODULE_COMPONENTS[mod.id];
        return <Route key={mod.id} path={mod.route} element={<Component />} />;
      })}
    </Routes>
  );
}
