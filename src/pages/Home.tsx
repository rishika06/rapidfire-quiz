import Title from "../components/Title";
import Box from "../components/Box";
import TopicOptions from "../components/TopicOptions";
import QuestionCard from "../components/QuestionCard";
import ProgressMenu from "../components/ProgressMenu";
import AllQuestions from "../components/AllQuestions";
import About from "../pages/About";
import ChooseRole from "../pages/ChooseRole";

function Home({
  startQuiz,
  topic,
  difficulty,
  selectedRole,
  setSelectedRole,
  setTopic,
  setDifficulty,
  startTimer,
  question,
  currentQuestion,
  selectedTopicData,
  timer,
  resetQuiz,
  nextQuestion,
  togglePause,
  isQuizCompleted,
  showAbout,
  setShowAbout,
  questionTimeData,
}: any) {
  return (
    <div className="background-image overflow-y-scroll lg:overflow-hidden">
      <div className="rq-container">
        <span className="h-[400px] w-[400px] absolute bg-custom-radial-1 top-[-160px] right-0 filter blur-[190px] rounded-full"></span>
        <Title setShowAbout={setShowAbout} />

        {!startQuiz && (
          <>
            <div className="gradient-text font-semibold text-xl text-center mt-24 px-4">
              Please select from the below to start the quiz
            </div>

            {/* TOPIC OPTIONS */}

            <TopicOptions
              startQuiz={startQuiz}
              topic={topic}
              difficulty={difficulty}
              selectedRole={selectedRole}
              setTopic={setTopic}
              setSelectedRole={setSelectedRole}
              setDifficulty={setDifficulty}
            />
          </>
        )}

        {/* SHOW SINGLE QUESTION */}
        {startQuiz &&
          difficulty &&
          selectedTopicData &&
          selectedTopicData?.questions[difficulty] &&
          !isQuizCompleted &&
          currentQuestion <
            selectedTopicData?.questions[difficulty]?.length && (
            <QuestionCard
              key={currentQuestion}
              question={typeof question === "string" ? undefined : question}
            />
          )}

        {/* SHOW ALL QUESTIONS LIST */}
        {isQuizCompleted && (
          <AllQuestions
            selectedTopicData={selectedTopicData}
            difficulty={difficulty}
            questionTimeData={questionTimeData}
          />
        )}

        {/* BUTTON */}
        <div className="absolute bottom-6 w-[100%] px-10">
          <Box className="p-4">
            {/* START BUTTON */}
            {!startQuiz && !isQuizCompleted && (
              <div className="w-full">
                <button
                  onClick={startTimer}
                  disabled={!topic || !difficulty}
                  className={`diamond-gradient text-white rounded-3xl text-lg h-16 w-full ${
                    !topic || !difficulty
                      ? "opacity-50 cursor-not-allowed"
                      : "opacity-100"
                  }`}
                >
                  Start Quiz
                </button>
              </div>
            )}

            {/* PROGRESS BAR ALONG WITH STOP, PAUSE AND NEXT */}
            {startQuiz && !isQuizCompleted && (
              <ProgressMenu
                timer={timer}
                resetQuiz={resetQuiz}
                nextQuestion={nextQuestion}
                togglePause={togglePause}
              />
            )}

            {/* RESET BUTTON */}
            {isQuizCompleted && (
              <button
                className="diamond-gradient text-white rounded-3xl text-lg h-16 w-full"
                onClick={resetQuiz}
              >
                Restart
              </button>
            )}
          </Box>
        </div>

        {/*CHOOSE ROLE  */}
      </div>
      {!selectedRole && <ChooseRole setSelectedRole={setSelectedRole} />}
      {/* ABOUT PAGE */}
      {showAbout && <About />}
    </div>
  );
}

export default Home;
