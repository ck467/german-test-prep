import { useState } from "react";
import useStyles from "../../useStyles.js";
import ModuleLayout from "../shared/ModuleLayout.jsx";
import EligibilityHome from "./EligibilityHome.jsx";
import EligibilityChecker from "./EligibilityChecker.jsx";
import EligibilityResults from "./EligibilityResults.jsx";

export default function EligibilityModule() {
  const { S, isMobile } = useStyles();
  const [mode, setMode] = useState("home");
  const [answers, setAnswers] = useState({});

  const hasAnswers = Object.keys(answers).length > 0;

  const handleAnswer = (id, value) => {
    setAnswers((prev) => ({ ...prev, [id]: value }));
  };

  const handleStartOver = () => {
    setAnswers({});
    setMode("home");
  };

  return (
    <ModuleLayout title="German Citizenship Eligibility Check" description="Check if you qualify for German citizenship. Free 10-question assessment covering residency, language, and legal requirements."
      nav={
        <>
          <button
            style={S.navBtn(mode === "home")}
            onClick={() => setMode("home")}
          >
            Home
          </button>
          <button
            style={S.navBtn(mode === "check")}
            onClick={() => setMode("check")}
          >
            {isMobile ? "Check" : "Eligibility Check"}
          </button>
          {hasAnswers && (
            <button
              style={S.navBtn(mode === "result")}
              onClick={() => setMode("result")}
            >
              Results
            </button>
          )}
        </>
      }
    >
      {mode === "home" && (
        <EligibilityHome onStartCheck={() => setMode("check")} />
      )}

      {mode === "check" && (
        <EligibilityChecker
          answers={answers}
          onAnswer={handleAnswer}
          onBack={() => setMode("home")}
          onFinish={() => setMode("result")}
        />
      )}

      {mode === "result" && (
        <EligibilityResults
          answers={answers}
          onStartOver={handleStartOver}
        />
      )}
    </ModuleLayout>
  );
}
