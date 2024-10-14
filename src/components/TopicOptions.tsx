import { topicOptions, difficultyOptions, roles } from "../constants/constants";
import SelectList from "../components/SelectList";

interface TopicOptionsProps {
  startQuiz: boolean;
  topic: string | undefined;
  difficulty: "easy" | "medium" | "difficult" | undefined;
  selectedRole?: string;
  setTopic: (topic: string) => void;
  setSelectedRole: (selectedRole: string) => void;
  setDifficulty: (
    difficulty: "easy" | "medium" | "difficult" | undefined
  ) => void;
}

function TopicOptions({
  startQuiz,
  topic,
  difficulty,
  selectedRole,
  setSelectedRole,
  setTopic,
  setDifficulty,
}: TopicOptionsProps) {
  const selectedTopicOptions = topicOptions.filter(
    (item) => item.category === selectedRole
  );

  return (
    <div className="flex flex-col justify-center items-center md:flex-row gap-4 md:gap-8 mt-10">
      {/* ROLE */}
      <SelectList
        label="Selected Role"
        id="role"
        value={selectedRole}
        options={roles}
        disabled={startQuiz}
        onChange={setSelectedRole}
        // placeholder="-- Please select role --"
      />

      {/* TOPIC */}
      <SelectList
        label="Select Topic"
        id="topic"
        value={topic}
        options={selectedTopicOptions}
        disabled={startQuiz}
        onChange={setTopic}
        placeholder="-- Please select topic --"
      />

      {/* DIFFICULTY */}
      <SelectList
        label="Select Difficulty"
        id="difficulty"
        value={difficulty}
        options={difficultyOptions}
        disabled={startQuiz}
        onChange={(value) =>
          setDifficulty(value as "easy" | "medium" | "difficult")
        }
        placeholder="-- Please select difficulty --"
      />
    </div>
  );
}

export default TopicOptions;

// interface TopicOptionsProps {
//   startQuiz: boolean;
//   topic: string | undefined;
//   difficulty: "easy" | "medium" | "difficult" | undefined;
//   selectedRole?: string;
//   setTopic: (topic: string) => void;
//   setSelectedRole: (selectedRole: string) => void;
//   setDifficulty: (
//     difficulty: "easy" | "medium" | "difficult" | undefined
//   ) => void;
// }

// function TopicOptions({
//   startQuiz,
//   topic,
//   difficulty,
//   selectedRole,
//   setSelectedRole,
//   setTopic,
//   setDifficulty,
// }: TopicOptionsProps) {
//   const selectedTopicOptions = topicOptions.filter(
//     (item) => item.category === selectedRole
//   );

//   return (
//     <>
//       <div className="flex flex-col justify-center items-center md:flex-row gap-4 md:gap-8 mt-10">
//         {/* ROLE */}
//         <div className="w-64">
//           <label htmlFor="role" className="text-gray-light text-sm pl-1">
//             Selected Role
//           </label>
//           <select
//             id="role"
//             name="role"
//             disabled={startQuiz}
//             className={`block w-full bg-transparent mt-1 py-3 px-2 text-gray-light text-base border-[1px] border-gray-dark
//                     focus:outline-none sm:text-sm rounded-md ${
//                       startQuiz
//                         ? "cursor-not-allowed opacity-55"
//                         : "cursor-pointer "
//                     }`}
//             onChange={(e: any) => setSelectedRole(e.target.value)}
//           >
//             {roles.map((item) => (
//               <option
//                 key={item.id}
//                 className="text-sm bg-[#06030c] text-gray-light"
//                 value={item.name}
//                 selected={item.name === selectedRole}
//               >
//                 {item.title}
//               </option>
//             ))}
//           </select>
//         </div>

//         {/* TOPIC */}
//         <div className="w-64">
//           <label htmlFor="topic" className="text-gray-400">
//             Select Topic
//           </label>
//           <select
//             id="topic"
//             name="topic"
//             value={topic || ""}
//             disabled={startQuiz}
//             className={`mt-1 block w-full pl-3 border-2 bg-transparent text-white pr-10 py-2 text-base border-gray-300
//                     focus:outline-none focus:ring-sky-500 focus:border-sky-500 sm:text-sm rounded-md ${
//                       startQuiz
//                         ? "cursor-not-allowed opacity-55"
//                         : "cursor-pointer "
//                     }`}
//             onChange={(e: any) => setTopic(e.target.value)}
//           >
//             <option value="" disabled>
//               -- Please select topic --
//             </option>

//             {selectedTopicOptions &&
//               selectedTopicOptions?.map((item) => (
//                 <option
//                   key={item.id}
//                   className="bg-slate-950"
//                   value={item.value}
//                 >
//                   {item.title}
//                 </option>
//               ))}
//           </select>
//         </div>

//         {/* DIFFICULTY */}
//         <div className="w-64">
//           <label htmlFor="difficulty" className="text-gray-400">
//             Select Difficulty
//           </label>
//           <select
//             id="difficulty"
//             name="difficulty"
//             value={difficulty || ""}
//             disabled={startQuiz}
//             className={`mt-1 block w-full pl-3 border-2 bg-transparent text-white pr-10 py-2 text-base border-gray-300
//                     focus:outline-none focus:ring-sky-500 focus:border-sky-500 sm:text-sm rounded-md ${
//                       startQuiz
//                         ? "cursor-not-allowed opacity-55"
//                         : "cursor-pointer "
//                     }`}
//             onChange={(e: any) => setDifficulty(e.target.value)}
//           >
//             <option value="" disabled>
//               -- Please select difficulty --
//             </option>
//             {difficultyOptions.map((item) => (
//               <option key={item.id} className="bg-slate-950" value={item.value}>
//                 {item.title}
//               </option>
//             ))}
//           </select>
//         </div>
//       </div>
//     </>
//   );
// }

// export default TopicOptions;
