import { useEffect, useState } from "react";
import "./App.css";
import QuestionCard from "./components/QuestionCard";
import Timer from "./components/Timer";
import TopicOptions from "./components/TopicOptions";
import questions from "./constants/questions.json";
import AllQuestions from "./components/AllQuestions";
import Footer from "./components/Footer";

import { FaArrowDown } from "react-icons/fa";

function App() {
  const [topic, setTopic] = useState("");

  const [timer, setTimer] = useState(3);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [startQuiz, setStartQuiz] = useState(false);
  const [showAllQuestions, setShowAllQuestions] = useState(false);

  const selectedTopicData = questions.find((item) => item.topic === topic);

  useEffect(() => {
    if (startQuiz) {
      const interval = setInterval(() => {
        setTimer((prev) => {
          if (prev <= 0) {
            if (
              selectedTopicData?.questions &&
              currentQuestion < (selectedTopicData?.questions?.length - 1 || 0)
            ) {
              setCurrentQuestion(currentQuestion + 1);

              return 3;
            } else {
              setShowAllQuestions(true);
              return 0;
            }
          }
          return prev - 1;
        });
      }, 100);

      return () => clearInterval(interval);
    }
  }, [startQuiz, currentQuestion, selectedTopicData]);

  function startTimer() {
    setStartQuiz(true);
  }

  const resetQuiz = () => {
    setCurrentQuestion(0);
    setStartQuiz(false);
    setShowAllQuestions(false);
    setTopic("");
    setTimer(3);
  };

  const question = selectedTopicData?.questions[currentQuestion];

  return (
    <div className="h-screen max-h-full bg-slate-950 text-white px-8 py-8">
      <h1 className="text-center text-lg md:text-xl bg-slate-900 rounded-lg py-2">
        RapidFire Coding Quiz
      </h1>

      <div className="grid grid-cols-2 gap-4 mt-12 md:grid-cols-4">
        <TopicOptions setTopic={setTopic} topic={topic} startQuiz={startQuiz} />
      </div>

      <div className="relative bg-custom-radial from-slate-800 to-slate-900 rounded-lg mt-12">
        {!showAllQuestions && (
          <div className="absolute top-2 right-2 bg-slate-950 text-slate-400 px-4 py-2 rounded-lg mt-3 mr-3">
            <Timer timer={timer} />
          </div>
        )}

        {/* QUESTION CARD */}
        <div className="flex justify-center items-center text-white h-48 md:h-72">
          {startQuiz ? (
            selectedTopicData?.questions &&
            !showAllQuestions &&
            currentQuestion < selectedTopicData?.questions?.length && (
              <QuestionCard question={question} />
            )
          ) : topic ? (
            <div className="p-3">
              You have selected {topic.toUpperCase()}. Now click the below
              button to start
            </div>
          ) : (
            <div>Please select a topic from above</div>
          )}

          {showAllQuestions && (
            <>
              <AllQuestions selectedTopicData={selectedTopicData} />
              <div className="absolute bottom-4 right-4 transform -translate-x-1/2 mb-2">
                <FaArrowDown />
              </div>
            </>
          )}
        </div>
      </div>

      {/* BUTTONS */}

      <div className="flex justify-center items-center">
        {!startQuiz && (
          <button
            className={`text-sm md:text-lg py-2 px-4 mt-12 rounded-lg transition-transform transform duration-300
    ${
      topic === ""
        ? "bg-gray-500 cursor-not-allowed"
        : "bg-custom-radial from-blue-600 via-blue-800 to-indigo-900 hover:bg-sky-950 hover:scale-105 hover:shadow-[0_0_8px_2px_rgba(75,0,130,0.8)] text-white"
    }`}
            onClick={startTimer}
            disabled={topic === ""}
          >
            Start Quiz
          </button>
        )}

        {showAllQuestions && (
          <button
            className="text-sm md:text-lg py-2 px-4 mt-12 rounded-lg bg-custom-radial from-cyan-700 via-blue-700 to-indigo-700 text-white hover:shadow-[0_0_8px_2px_rgba(0,255,255,0.5),0_0_8px_2px_rgba(0,0,255,0.5),0_0_8px_2px_rgba(75,0,130,0.5)]  transition-transform transform hover:scale-105 duration-300"
            onClick={resetQuiz}
          >
            Start Again
          </button>
        )}
      </div>

      <Footer />
    </div>
  );
}

export default App;