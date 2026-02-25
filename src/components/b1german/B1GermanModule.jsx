import { useState } from "react";
import useStyles from "../../useStyles.js";
import ModuleLayout from "../shared/ModuleLayout.jsx";
import B1HomeScreen from "./B1HomeScreen.jsx";
import FlashcardMode from "./FlashcardMode.jsx";
import QuizMode from "./QuizMode.jsx";
import ExamPractice from "./ExamPractice.jsx";
import StudyPlan from "./StudyPlan.jsx";
import CheatSheets from "./CheatSheets.jsx";
import { B1_EXAMS } from "../../data/b1Exams.js";
import { B1_TOPICS } from "../../data/b1Vocab.js";

export default function B1GermanModule() {
  const { S } = useStyles();
  const [screen, setScreen] = useState("home");
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

  const handleSelectExamList = () => {
    setScreen("examselect");
  };

  const handleSelectVocabulary = () => {
    setScreen("vocabulary");
  };

  const handleSelectStudyPlan = () => {
    setScreen("studyplan");
  };

  const handleSelectCheatSheets = () => {
    setScreen("cheatsheets");
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
        {screen === "examselect" && (
          <button style={S.navBtn(true)}>Exam Practice</button>
        )}
        {screen === "vocabulary" && (
          <button style={S.navBtn(true)}>Vocabulary</button>
        )}
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
        {screen === "cheatsheets" && (
          <button style={S.navBtn(true)}>Cheat Sheets</button>
        )}
      </>
    }>

      {screen === "home" && (
        <B1HomeScreen
          onSelectExamList={handleSelectExamList}
          onSelectStudyPlan={handleSelectStudyPlan}
          onSelectCheatSheets={handleSelectCheatSheets}
          onSelectVocabulary={handleSelectVocabulary}
          exams={B1_EXAMS}
        />
      )}

      {screen === "examselect" && (
        <div style={S.inner}>
          <button onClick={handleBackToHome} style={{ ...S.backBtn, marginBottom: 24 }}>{"\u2190"} Back to Home</button>
          <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 4 }}>
            <span style={{ fontSize: 28 }}>📝</span>
            <h1 style={S.h1}>Exam Practice</h1>
          </div>
          <p style={{ color: S.p.textMuted, fontSize: 15, margin: 0, marginBottom: 20 }}>
            Practice with real B1 exam questions from official mock tests
          </p>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
            {B1_EXAMS.map((exam) => (
              <div
                key={exam.id}
                onClick={() => handleSelectExam(exam)}
                style={{
                  ...S.card({ padding: 28 }),
                  cursor: "pointer",
                  transition: "all 0.25s",
                  borderColor: exam.source === "goethe" ? "rgba(96,165,250,0.15)" : "rgba(168,85,247,0.15)",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = exam.source === "goethe" ? "rgba(96,165,250,0.5)" : "rgba(168,85,247,0.5)";
                  e.currentTarget.style.transform = "translateY(-3px)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = exam.source === "goethe" ? "rgba(96,165,250,0.15)" : "rgba(168,85,247,0.15)";
                  e.currentTarget.style.transform = "";
                }}
              >
                <div style={{ fontSize: 14, fontWeight: 700, textTransform: "uppercase", letterSpacing: 1, marginBottom: 8, color: exam.source === "goethe" ? "#60A5FA" : "#A855F7" }}>
                  {exam.source}
                </div>
                <div style={{ fontWeight: 700, color: S.p.headingText, fontSize: 17, marginBottom: 6 }}>{exam.title}</div>
                <div style={{ color: S.p.textMuted, fontSize: 13, marginBottom: 14 }}>{exam.subtitle}</div>
                <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
                  {[
                    `${exam.totalItems} Questions`,
                    `${exam.timeMinutes} min`,
                    `${exam.sections.length} Sections`,
                  ].map((label) => (
                    <span key={label} style={{
                      ...S.tag,
                      background: exam.source === "goethe" ? "rgba(96,165,250,0.1)" : "rgba(168,85,247,0.1)",
                      color: exam.source === "goethe" ? "#60A5FA" : "#A855F7",
                      borderColor: exam.source === "goethe" ? "rgba(96,165,250,0.2)" : "rgba(168,85,247,0.2)",
                    }}>{label}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {screen === "vocabulary" && (
        <div style={S.inner}>
          <button onClick={handleBackToHome} style={{ ...S.backBtn, marginBottom: 24 }}>{"\u2190"} Back to Home</button>
          <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 4 }}>
            <span style={{ fontSize: 28 }}>📖</span>
            <h1 style={S.h1}>Vocabulary</h1>
          </div>
          <p style={{ color: S.p.textMuted, fontSize: 15, margin: 0, marginBottom: 20 }}>
            Build your vocabulary with flashcards and quizzes · {B1_TOPICS.length} topics · {B1_TOPICS.reduce((sum, t) => sum + t.cards.length, 0).toLocaleString()} words
          </p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))", gap: 16 }}>
            {B1_TOPICS.map((topic) => (
              <div
                key={topic.id}
                onClick={() => handleSelectTopic(topic)}
                style={{ ...S.card(), cursor: "pointer", transition: "all 0.2s", textAlign: "center" }}
                onMouseEnter={(e) => { e.currentTarget.style.borderColor = "rgba(245,200,66,0.4)"; e.currentTarget.style.transform = "translateY(-3px)"; }}
                onMouseLeave={(e) => { e.currentTarget.style.borderColor = S.p.border08; e.currentTarget.style.transform = ""; }}
              >
                <div style={{ fontSize: 40, marginBottom: 12 }}>{topic.icon}</div>
                <div style={{ fontWeight: 700, color: S.p.headingText, marginBottom: 6, fontSize: 16 }}>{topic.name}</div>
                <span style={S.tag}>{topic.cards.length} cards</span>
              </div>
            ))}
          </div>
        </div>
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

      {screen === "cheatsheets" && (
        <CheatSheets onBack={handleBackToHome} />
      )}
    </ModuleLayout>
  );
}
