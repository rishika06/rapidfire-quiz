import { motion } from "framer-motion";

interface QuestionCardProps {
  question?: { id: number; question: string };
}

function QuestionCard({ question }: QuestionCardProps) {
  return (
    <motion.div
      className="m-3 p-3"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 20 }}
      transition={{ duration: 0.5 }}
    >
      {question?.question}
    </motion.div>
  );
}

export default QuestionCard;
