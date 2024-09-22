interface QuestionCardProps {
  question?: { id: number; question: string };
}

function QuestionCard({ question }: QuestionCardProps) {
  return <div className="m-3 p-3">{question?.question}</div>;
}

export default QuestionCard;
