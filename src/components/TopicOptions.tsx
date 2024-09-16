import { topicOptions } from "../constants/constants";
import { FaReact } from "react-icons/fa";
import { FaJsSquare } from "react-icons/fa";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";

interface TopicOptionsProps {
  setTopic: (topic: string) => void;
  topic: string;
  startQuiz: boolean;
}

function TopicOptions({ setTopic, topic, startQuiz }: TopicOptionsProps) {
  function topicIcon(topic: string) {
    switch (topic) {
      case "react":
        return <FaReact />;
      case "javascript":
        return <FaJsSquare />;
      case "html":
        return <FaHtml5 />;
      case "css":
        return <FaCss3Alt />;
      default:
        break;
    }
  }
  return (
    <>
      {topicOptions.map((item) => (
        <button
          className={`relative inline-block  mx-2 p-[2px] rounded-lg bg-gradient-to-r from-violet-500 via-blue-500 to-cyan-500 ${
            startQuiz ? "cursor-not-allowed" : ""
          } `}
          key={item.id}
          onClick={() => setTopic(item.value)}
          disabled={startQuiz}
        >
          <span
            className={`flex items-center justify-center py-1 rounded-lg 
              ${
                item.value === topic
                  ? "bg-slate-800"
                  : startQuiz
                  ? "bg-gray-500"
                  : "bg-slate-950"
              } 
              ${!startQuiz && "hover:bg-slate-800 transition-all duration-300"}
            `}
          >
            {topicIcon(item.value)}
            <span className="ml-2">{item.title}</span>
          </span>
        </button>
      ))}
    </>
  );
}

export default TopicOptions;
