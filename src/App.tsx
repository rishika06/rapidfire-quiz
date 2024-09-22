import { useEffect, useState } from "react";
import "./App.css";
import QuestionCard from "./components/QuestionCard";
import Timer from "./components/Timer";
import TopicOptions from "./components/TopicOptions";
import questions from "./constants/questions.json";
import AllQuestions from "./components/AllQuestions";
import Footer from "./components/Footer";

function App() {
  const [topic, setTopic] = useState("");

  const [timer, setTimer] = useState(6);
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

              return 6;
            } else {
              setShowAllQuestions(true);
              return 0;
            }
          }
          return prev - 1;
        });
      }, 500);

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
    setTimer(6);
  };

  const question = selectedTopicData?.questions[currentQuestion];

  return (
    <div className="h-screen max-h-full bg-slate-950 text-white px-8 py-8">
      <h1 className="text-center text-lg md:text-xl bg-slate-900 rounded-lg py-2">
        Rapidfire Quiz
      </h1>
      <div className="grid grid-cols-2 gap-4 mt-12 md:grid-cols-4">
        <TopicOptions setTopic={setTopic} topic={topic} startQuiz={startQuiz} />
      </div>
      <div className="relative bg-custom-radial from-slate-800 to-slate-900 rounded-lg mt-12">
        {!showAllQuestions && (
          <div className="absolute top-0 right-0 bg-slate-950 text-slate-400 px-4 py-2 rounded-lg mt-3 mr-3">
            <Timer timer={timer} />
          </div>
        )}

        {/* QUESTION CARD */}
        <div className="flex justify-center items-center text-white h-80 md:h-72">
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
            </>
          )}
        </div>
      </div>
      {/* BUTTONS */}
      <div className="flex justify-center items-center">
        {!startQuiz && (
          <button
            className={`text-sm md:text-lg font-semibold py-2 px-4 mt-12 rounded-lg transition-transform transform duration-300 border-2 text-teal-600
                        ${
                          topic === ""
                            ? "opacity-50 cursor-not-allowed"
                            : "bg-slate-950"
                        }`}
            onClick={startTimer}
            disabled={topic === ""}
          >
            Start Quiz
          </button>
        )}

        {startQuiz && !showAllQuestions && (
          <button
            className="text-sm md:text-lg py-2 px-4 mt-12 rounded-lg border-2 font-semibold text-red-500"
            onClick={resetQuiz}
          >
            Stop Quiz
          </button>
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
    </div>
  );
}

export default App;
