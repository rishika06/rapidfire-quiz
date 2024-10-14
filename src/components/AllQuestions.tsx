import { motion } from "framer-motion";
import Box from "./Box";
interface Question {
  id: number;
  question: string;
}

interface TopicData {
  questions: {
    easy: Question[];
    medium: Question[];
    difficult: Question[];
  };
}

interface AllQuestionsProps {
  selectedTopicData?: TopicData | undefined;
  difficulty: "easy" | "medium" | "difficult";
}

function AllQuestions({ selectedTopicData, difficulty }: any) {
  const questions = selectedTopicData?.questions[difficulty] || [];

  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="overflow-y-auto custom-scrollbar mt-10"
    >
      <Box>
        <div className="text-white flex text-lg justify-between mx-8 my-3">
          <span>All Questions | Difficulty : {difficulty}</span>
          {/* <span>Time Taken</span> */}
        </div>
        <hr className="border-t-2 border-purple opacity-20 mx-6"></hr>
        {questions?.map((item: any, index: any) => (
          <div key={item.id}>
            <div className="text-gray-light mx-8 py-3 flex justify-between">
              {/* <div className="mb-2">{item.question.question}</div>
              <div className="pr-12">{item.timeSpent}</div> */}
              <div className="mb-2">{item.question}</div>
              {/* <div className="pr-12">{item.timeSpent}</div> */}
            </div>
            {index < questions.length - 1 && (
              <hr className="border-t-2 border-purple opacity-20 mx-6"></hr>
            )}
          </div>
        ))}
      </Box>
    </motion.div>
  );
}

export default AllQuestions;
