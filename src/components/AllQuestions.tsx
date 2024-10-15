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

function AllQuestions({
  selectedTopicData,
  difficulty,
  questionTimeData,
}: any) {
  const questions = selectedTopicData?.questions[difficulty] || [];

  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="overflow-y-auto custom-scrollbar mt-10"
    >
      <Box className="mx-6">
        <div className="text-white flex text-xl md:text-lg justify-between mx-4 md:mx-8 my-3">
          <span>All Questions</span>
          <span>Time Taken</span>
        </div>
        <hr className="border-t-2 border-purple opacity-20 mx-6"></hr>
        {questionTimeData?.map((item: any, index: any) => (
          <div key={item.question.id}>
            <div className="text-gray-light text-lg mx-4 md:mx-8 py-3 flex justify-between">
              <div className="mb-1 md:mb-2">{item.question.question}</div>
              <div className="pr-3 md:pr-12">{item.timeSpent}</div>
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
