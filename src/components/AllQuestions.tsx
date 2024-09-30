import { motion } from "framer-motion";
interface Question {
  id: number;
  question: string;
}

interface TopicData {
  questions: Question[];
}

interface AllQuestionsProps {
  selectedTopicData: TopicData | undefined;
}

function AllQuestions({ selectedTopicData }: AllQuestionsProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="overflow-y-auto custom-scrollbar h-64 md:h-72"
    >
      {selectedTopicData?.map((item: any) => (
        <div key={item.id} className="m-4 p-2 bg-gray-900 rounded-lg text-base">
          <div>{item.question}</div>
        </div>
      ))}
    </motion.div>
  );
}

export default AllQuestions;
