import { useEffect, useState } from "react";
import "./App.css";
import QuestionCard from "./components/QuestionCard";
import Timer from "./components/Timer";
import TopicOptions from "./components/TopicOptions";
import questions from "./constants/questions.json";
import AllQuestions from "./components/AllQuestions";

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
    <div className="h-screen flex flex-col bg-slate-950 text-white px-8 py-8">
      <h1 className="text-center text-xl bg-slate-900 rounded-lg py-4">
        RapidFire Coding Quiz
      </h1>

      <div className="my-14 flex justify-center">
        <TopicOptions setTopic={setTopic} topic={topic} />
      </div>

      <div className="relative bg-custom-radial from-slate-800 to-slate-900 rounded-lg min-h-80">
        <div className="absolute top-2 right-2 bg-slate-950 text-slate-400 px-4 py-2 rounded-lg mt-3 mr-3">
          <Timer timer={timer} />
        </div>
        <div className="flex justify-center items-center h-full text-white text-lg">
          {startQuiz ? (
            selectedTopicData?.questions &&
            !showAllQuestions &&
            currentQuestion < selectedTopicData?.questions?.length && (
              <QuestionCard question={question} />
            )
          ) : (
            <div>PLease select a topic from the above</div>
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

      <div className="flex justify-center items-center mt-10">
        {!startQuiz && (
          <button
            className={`px-8 py-2 mx-4 border-2 rounded-lg transition-transform transform duration-300
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
            className="px-8 py-2 mx-4 border-2 bg-custom-radial from-blue-600 via-blue-800 to-indigo-900 text-white rounded-lg hover:bg-sky-950 transition-transform transform hover:scale-105 hover:shadow-[0_0_8px_2px_rgba(75,0,130,0.8)] duration-300"
            onClick={resetQuiz}
          >
            Start Again
          </button>
        )}
      </div>
    </div>
  );
}

export default App;
