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
    <div className="overflow-y-auto custom-scrollbar h-48 md:h-72">
      {selectedTopicData?.questions?.map((item) => (
        <div key={item.id} className="m-4 p-2 bg-gray-900 rounded-lg text-base">
          <div>{item.question}</div>
        </div>
      ))}
    </div>
  );
}

export default AllQuestions;
