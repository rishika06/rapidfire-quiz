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
    <div className="overflow-y-auto max-h-72 custom-scrollbar">
      {selectedTopicData?.questions?.map((item) => (
        <div key={item.id} className="mb-4 p-4 bg-gray-900 rounded-lg">
          <div>{item.question}</div>
        </div>
      ))}
    </div>
  );
}

export default AllQuestions;
