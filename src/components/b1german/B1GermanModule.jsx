import { useState } from "react";
import S from "../../styles.js";
import ModuleLayout from "../shared/ModuleLayout.jsx";
import B1HomeScreen from "./B1HomeScreen.jsx";
import FlashcardMode from "./FlashcardMode.jsx";
import QuizMode from "./QuizMode.jsx";
import ExamPractice from "./ExamPractice.jsx";
import StudyPlan from "./StudyPlan.jsx";
import { B1_EXAMS } from "../../data/b1Exams.js";

export default function B1GermanModule() {
  const [screen, setScreen] = useState("home"); // home | flashcards | quiz | exam | studyplan
  const [selectedTopic, setSelectedTopic] = useState(null);
  const [selectedExam, setSelectedExam] = useState(null);

  const handleSelectTopic = (topic) => {
    setSelectedTopic(topic);
    setScreen("flashcards");
  };

  const handleSelectExam = (exam) => {
    setSelectedExam(exam);
    setScreen("exam");
  };

  const handleSelectStudyPlan = () => {
    setScreen("studyplan");
  };

  const handleStartQuiz = () => {
    setScreen("quiz");
  };

  const handleBackToHome = () => {
    setScreen("home");
    setSelectedTopic(null);
    setSelectedExam(null);
  };

  const handleBackToFlashcards = () => {
    setScreen("flashcards");
  };

  return (
    <ModuleLayout nav={
      <>
        <button style={S.navBtn(screen === "home")} onClick={handleBackToHome}>Home</button>
        {selectedTopic && (
          <>
            <button style={S.navBtn(screen === "flashcards")} onClick={handleBackToFlashcards}>Flashcards</button>
            <button style={S.navBtn(screen === "quiz")} onClick={handleStartQuiz}>Quiz</button>
          </>
        )}
        {screen === "exam" && (
          <button style={S.navBtn(true)}>Exam Practice</button>
        )}
        {screen === "studyplan" && (
          <button style={S.navBtn(true)}>Study Plan</button>
        )}
      </>
    }>

      {screen === "home" && (
        <B1HomeScreen onSelectTopic={handleSelectTopic} onSelectExam={handleSelectExam} onSelectStudyPlan={handleSelectStudyPlan} exams={B1_EXAMS} />
      )}

      {screen === "flashcards" && selectedTopic && (
        <FlashcardMode
          topic={selectedTopic}
          onBack={handleBackToHome}
          onStartQuiz={handleStartQuiz}
        />
      )}

      {screen === "quiz" && selectedTopic && (
        <QuizMode
          topic={selectedTopic}
          onBack={handleBackToHome}
          onBackToFlashcards={handleBackToFlashcards}
        />
      )}

      {screen === "exam" && selectedExam && (
        <ExamPractice exam={selectedExam} onBack={handleBackToHome} />
      )}

      {screen === "studyplan" && (
        <StudyPlan onBack={handleBackToHome} />
      )}
    </ModuleLayout>
  );
}
