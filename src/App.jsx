import { Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage.jsx";
import CitizenshipModule from "./components/citizenship/CitizenshipModule.jsx";
import B1GermanModule from "./components/b1german/B1GermanModule.jsx";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/citizenship" element={<CitizenshipModule />} />
      <Route path="/b1-german" element={<B1GermanModule />} />
    </Routes>
  );
}
