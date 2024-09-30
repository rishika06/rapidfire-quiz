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

  const [showAllQuestions, setShowAllQuestions] = useState(false);

  const [showAbout, setShowAbout] = useState(false);

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
    questionsArr &&
    questionsArr?.topics?.find((item: any) => item.name === topic);

  useEffect(() => {
    if (startQuiz && !isPaused) {
      const interval = setInterval(() => {
        setTimer((prev) => {
          if (prev <= 0) {
            if (
              difficulty &&
              selectedTopicData?.questions[difficulty] &&
              currentQuestion <
                (selectedTopicData?.questions[difficulty]?.length - 1 || 0)
            ) {
              setCurrentQuestion(currentQuestion + 1);

              return 6;
            } else {
              setShowAllQuestions(true);
              return 0;
            }
          }
          return prev - 1;
        });
      }, 1000);

      return () => clearInterval(interval);
    }
  }, [startQuiz, currentQuestion, selectedTopicData, isPaused]);

  // Track pause time
  useEffect(() => {
    if (isPaused) {
      const pauseInterval = setInterval(() => {
        setPausedTime((prev) => prev + 1);
      }, 1000);

      return () => clearInterval(pauseInterval);
    }
  }, [isPaused]);

  function startTimer() {
    setStartQuiz(true);
  }

  function togglePause() {
    setIsPaused(!isPaused);
  }

  const resetQuiz = () => {
    setCurrentQuestion(0);
    setStartQuiz(false);
    setShowAllQuestions(false);
    setTopic("");
    setDifficulty();
    setTimer(6);
    setIsPaused(false);
    setPausedTime(0);
  };

  const question =
    difficulty && selectedTopicData?.questions[difficulty]?.[currentQuestion];

  return (
    <div className="h-screen max-h-full overflow-auto bg-slate-950 text-white px-8 py-8">
      <div className="flex items-center justify-between bg-slate-900 rounded-lg py-2 px-6">
        <h1 className="text-center text-lg md:text-xl ">Rapidfire Quiz</h1>
        <div>
          <FaInfoCircle
            onClick={() => setShowAbout(true)}
            className="cursor-pointer h-10 w-5"
          />
        </div>
      </div>

      <TopicOptions
        startQuiz={startQuiz}
        topic={topic}
        difficulty={difficulty}
        selectedRole={selectedRole}
        setTopic={setTopic}
        setSelectedRole={setSelectedRole}
        setDifficulty={setDifficulty}
      />

      <div className="relative bg-custom-radial from-slate-800 to-slate-900 rounded-lg mt-12">
        {!showAllQuestions && (
          <div className="absolute top-0 right-0 bg-slate-950 text-slate-400 px-4 py-2 rounded-lg mt-3 mr-3">
            <Timer timer={timer} />
          </div>
        )}

        {/* QUESTION CARD */}
        <div className="flex justify-center items-center text-white h-64 md:h-72">
          {startQuiz ? (
            difficulty &&
            selectedTopicData?.questions[difficulty] &&
            !showAllQuestions &&
            currentQuestion <
              selectedTopicData?.questions[difficulty]?.length && (
              <QuestionCard key={currentQuestion} question={question} />
            )
          ) : topic ? (
            <div className="p-3">
              You have selected {topic.toUpperCase()}. Now click the below
              button to start
            </div>
          ) : (
            <div className="p-2">
              Please select a{" "}
              <span className="uppercase font-semibold">topic</span> and
              <span className="uppercase font-semibold"> difficulty</span> level
              from above
            </div>
          )}

          {showAllQuestions && (
            <>
              <AllQuestions
                selectedTopicData={selectedTopicData?.questions[difficulty]}
              />

              <div className="absolute top-[-42px] md:top-0 right-0 bg-slate-950 text-amber-500 px-4 py-2 rounded-lg mt-3 mr-3">
                Total Paused Time: {pausedTime} seconds
              </div>
            </>
          )}
        </div>
      </div>
      {/* BUTTONS */}
      <div className="flex justify-center items-center">
        {!startQuiz && (
          <button
            className={`text-sm md:text-lg font-semibold py-2 px-4 mt-8 rounded-lg transition-transform transform duration-300 border-2 text-teal-600
                  ${
                    !topic || !difficulty
                      ? "opacity-50 cursor-not-allowed"
                      : "bg-slate-950"
                  }`}
            onClick={startTimer}
            disabled={!topic || !difficulty}
          >
            Start Quiz
          </button>
        )}

        {startQuiz && !showAllQuestions && (
          <div className="mt-8">
            <button
              className="text-sm md:text-lg py-2 px-4 rounded-lg border-2 font-semibold text-amber-500 mr-6"
              onClick={togglePause}
            >
              {isPaused ? "Resume" : "Pause"}
            </button>
            <button
              className="text-sm md:text-lg py-2 px-4 rounded-lg border-2 font-semibold text-red-500"
              onClick={resetQuiz}
            >
              Stop
            </button>
          </div>
        )}

        {showAllQuestions && (
          <button
            className="text-sm md:text-lg py-2 px-4 mt-12 rounded-lg border-2 font-semibold text-sky-500 "
            onClick={resetQuiz}
          >
            Reset Quiz
          </button>
        )}
      </div>

      <Footer />

      {/*CHOOSE ROLE  */}
      {!selectedRole && <ChooseRole setSelectedRole={setSelectedRole} />}

      {/* ABOUT PAGE */}
      {showAbout && <About setShowAbout={setShowAbout} />}
    </div>
  );
}

export default App;
