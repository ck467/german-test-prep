import { useState } from "react";
import { useNavigate } from "react-router-dom";
import S from "../../styles.js";
import B1HomeScreen from "./B1HomeScreen.jsx";
import FlashcardMode from "./FlashcardMode.jsx";
import QuizMode from "./QuizMode.jsx";

export default function B1GermanModule() {
  const [screen, setScreen] = useState("home"); // home | flashcards | quiz
  const [selectedTopic, setSelectedTopic] = useState(null);
  const navigate = useNavigate();

  const handleSelectTopic = (topic) => {
    setSelectedTopic(topic);
    setScreen("flashcards");
  };

  const handleStartQuiz = () => {
    setScreen("quiz");
  };

  const handleBackToHome = () => {
    setScreen("home");
    setSelectedTopic(null);
  };

  const handleBackToFlashcards = () => {
    setScreen("flashcards");
  };

  return (
    <div style={S.root}>
      {/* Header */}
      <header style={S.header}>
        <div style={S.logo} onClick={() => navigate("/")}>German Test Prep</div>
        <nav style={S.nav}>
          <button style={S.navBtn(screen === "home")} onClick={handleBackToHome}>Topics</button>
          {selectedTopic && (
            <>
              <button style={S.navBtn(screen === "flashcards")} onClick={handleBackToFlashcards}>Flashcards</button>
              <button style={S.navBtn(screen === "quiz")} onClick={handleStartQuiz}>Quiz</button>
            </>
          )}
        </nav>
      </header>

      {screen === "home" && (
        <B1HomeScreen onSelectTopic={handleSelectTopic} />
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
    </div>
  );
}
