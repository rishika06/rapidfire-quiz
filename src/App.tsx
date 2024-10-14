// @ts-nocheck

import { useEffect, useState } from "react";
import "./App.css";
import QuestionCard from "./components/QuestionCard";
import Timer from "./components/Timer";
import TopicOptions from "./components/TopicOptions";
import frontendQuestions from "./constants/frontend_questions.json";
import backendQuestions from "./constants/backend_questions.json";
import designQuestions from "./constants/design_questions.json";
import AllQuestions from "./components/AllQuestions";
import Footer from "./components/Footer";
import ChooseRole from "./components/ChooseRole";
import { FaInfoCircle } from "react-icons/fa";
import About from "./components/About";
import Home from "./pages/Home";

function App() {
  const [selectedRole, setSelectedRole] = useState<string | undefined>();
  const [topic, setTopic] = useState<string | undefined>();
  const [difficulty, setDifficulty] = useState<
    "easy" | "medium" | "difficult" | undefined
  >(undefined);

  const [timer, setTimer] = useState(6);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [startQuiz, setStartQuiz] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const [pausedTime, setPausedTime] = useState(0);

  const [showAbout, setShowAbout] = useState(false);
  const [isQuizCompleted, setIsQuizCompleted] = useState(false);

  const getQuestionsByRole = (role: string) => {
    switch (role) {
      case "backend":
        return backendQuestions;
      case "frontend":
        return frontendQuestions;
      default:
        return designQuestions;
    }
  };

  const questionsArr = selectedRole && getQuestionsByRole(selectedRole);

  const selectedTopicData =
    (questionsArr &&
      questionsArr?.topics?.find((item: any) => item.name === topic)) ||
    undefined;

  const question =
    difficulty &&
    selectedTopicData &&
    selectedTopicData?.questions[difficulty]?.[currentQuestion];

  // TO TRACK THE TIME LOGIC
  useEffect(() => {
    if (startQuiz && !isPaused && !isQuizCompleted) {
      const interval = setInterval(() => {
        setTimer((prev) => {
          if (prev <= 0) {
            if (difficulty && selectedTopicData) {
              const hasNextQuestion =
                currentQuestion <
                (selectedTopicData?.questions[difficulty]?.length - 1 || 0);
              if (hasNextQuestion) {
                setCurrentQuestion((prevQuestion) => prevQuestion + 1);
                return 6;
              } else {
                setIsQuizCompleted(true);
                return 0;
              }
            }
          }
          return prev - 1;
        });
      }, 1000);

      return () => clearInterval(interval);
    }
  }, [
    startQuiz,
    currentQuestion,
    selectedTopicData,
    isPaused,
    isQuizCompleted,
  ]);

  // TO TRACK PAUSE TIME
  useEffect(() => {
    if (isPaused) {
      const pauseInterval = setInterval(() => {
        setPausedTime((prev) => prev + 1);
      }, 1000);

      return () => clearInterval(pauseInterval);
    }
  }, [isPaused]);

  // TO GO TO THE NEXT QUESTION
  function nextQuestion() {
    if (
      difficulty &&
      selectedTopicData &&
      currentQuestion <
        (selectedTopicData?.questions[difficulty]?.length - 1 || 0)
    ) {
      setCurrentQuestion(currentQuestion + 1);
      setTimer(6);
    } else {
      setIsQuizCompleted(true);
    }
  }

  const resetQuiz = () => {
    setCurrentQuestion(0);
    setStartQuiz(false);
    setIsQuizCompleted(false);
    setTopic("");
    setDifficulty(undefined);
    setTimer(6);
    setIsPaused(false);
    setPausedTime(0);
    setQuestionTimeData([]);
    setQuestionCompleted(false);
  };

  function startTimer() {
    setStartQuiz(true);
  }

  function togglePause() {
    setIsPaused(!isPaused);
  }

  return (
    <Home
      startQuiz={startQuiz}
      topic={topic}
      difficulty={difficulty}
      selectedRole={selectedRole}
      setTopic={setTopic}
      setSelectedRole={setSelectedRole}
      setDifficulty={setDifficulty}
      startTimer={startTimer}
      question={question}
      currentQuestion={currentQuestion}
      selectedTopicData={selectedTopicData}
      timer={timer}
      resetQuiz={resetQuiz}
      nextQuestion={nextQuestion}
      togglePause={togglePause}
      isQuizCompleted={isQuizCompleted}
      showAbout={showAbout}
      setShowAbout={setShowAbout}
    />
  );
}

export default App;
