interface QuestionCardProps {
  question?: { id: number; question: string };
}

function QuestionCard({ question }: QuestionCardProps) {
  return <div>{question?.question}</div>;
}

export default QuestionCard;
