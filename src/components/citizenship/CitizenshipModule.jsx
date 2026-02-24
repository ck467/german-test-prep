import { useState } from "react";
import { useNavigate } from "react-router-dom";
import S from "../../styles.js";
import { GENERAL_QUESTIONS, STATE_QUESTIONS, STATES } from "../../data/citizenshipQuestions.js";
import HomeScreen from "./HomeScreen.jsx";
import PracticeMode from "./PracticeMode.jsx";
import ExamMode from "./ExamMode.jsx";

export default function CitizenshipModule() {
  const [mode, setMode] = useState("home");
  const [selectedState, setSelectedState] = useState("BE");
  const [stats, setStats] = useState({ general: null, state: {}, exam: null });
  const navigate = useNavigate();

  const handleComplete = (type, score, max) => {
    setStats(prev => {
      if (type === "general") return { ...prev, general: { score, max } };
      if (type === "state") return { ...prev, state: { ...prev.state, [selectedState]: { score, max } } };
      if (type === "exam") return { ...prev, exam: { score, max } };
      return prev;
    });
    setMode("home");
  };

  return (
    <div style={S.root}>
      {/* Header */}
      <header style={S.header}>
        <div style={S.logo} onClick={() => navigate("/")}>German Test Prep</div>
        <nav style={S.nav}>
          <button style={S.navBtn(mode === "home")} onClick={() => setMode("home")}>Home</button>
          <button style={S.navBtn(mode === "practiceGeneral")} onClick={() => setMode("practiceGeneral")}>General Questions</button>
          <button style={S.navBtn(mode === "practiceState")} onClick={() => setMode("practiceState")}>State Questions</button>
          <button style={S.navBtn(mode === "exam")} onClick={() => setMode("exam")}>Practice Exam</button>
        </nav>
      </header>

      {mode === "home" && (
        <HomeScreen
          onMode={setMode}
          selectedState={selectedState}
          setSelectedState={setSelectedState}
          stats={stats}
        />
      )}

      {mode === "practiceGeneral" && (
        <PracticeMode
          questions={GENERAL_QUESTIONS}
          title="General Questions (300)"
          onBack={() => setMode("home")}
          onComplete={(score, max) => handleComplete("general", score, max)}
        />
      )}

      {mode === "practiceState" && (
        <PracticeMode
          questions={STATE_QUESTIONS[selectedState] || []}
          title={`${STATES.find(s => s.key === selectedState)?.name} – State Questions`}
          onBack={() => setMode("home")}
          onComplete={(score, max) => handleComplete("state", score, max)}
        />
      )}

      {mode === "exam" && (
        <ExamMode
          selectedState={selectedState}
          onBack={() => setMode("home")}
          onComplete={(score, max) => handleComplete("exam", score, max)}
        />
      )}
    </div>
  );
}
