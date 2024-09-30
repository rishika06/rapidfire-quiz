import { FaRegWindowClose } from "react-icons/fa";
import verion1Image from "../assets/version1.png";
import verion2Image from "../assets/version2.png";
import heart from "../assets/undraw_heart.svg";
import { motion } from "framer-motion";

interface AboutProps {
  setShowAbout: (showAbout: boolean) => void;
}

function About({ setShowAbout }: AboutProps) {
  return (
    <div className="absolute inset-0 bg-slate-950 px-8 py-8  overflow-auto">
      {/* HEADER */}
      <div className="flex items-center justify-between bg-slate-900 rounded-lg py-2 px-6">
        <h1 className="text-center text-lg md:text-xl ">About</h1>
        <div>
          <FaRegWindowClose
            onClick={() => setShowAbout(false)}
            className="cursor-pointer h-10 w-5"
          />
        </div>
      </div>

      {/* INTRODUCTION */}

      <motion.div
        initial={{ opacity: 0, y: -20 }} // Initial state
        animate={{ opacity: 1, y: 0 }} // Animate to this state
        exit={{ opacity: 0, y: 20 }} // Exit state
        transition={{ duration: 0.5 }} // Transition duration
        className="flex items-center justify-center m-auto bg-custom-radial from-slate-800 to-slate-900 rounded-lg mt-10 p-6 w-1/2"
      >
        <p className="md:text-xl w-full">
          The idea for building this app 💡 came to me when I started preparing
          for interviews. While there’s plenty of interview-related content on
          the web, I wanted something that would help me revise questions right
          before interviews in a way that simulated a real interview environment
          🎯
        </p>
      </motion.div>

      {/* VERSION 1 */}

      <motion.div
        initial={{ opacity: 0, y: -20 }} // Initial state
        animate={{ opacity: 1, y: 0 }} // Animate to this state
        exit={{ opacity: 0, y: 20 }} // Exit state
        transition={{ duration: 0.5 }} // Transition duration
        className="flex flex-col lg:flex-row items-start justify-center mt-40 mb-10 lg:space-x-14"
      >
        <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-lg p-6 mb-10 shadow-lg lg:w-1/2">
          <h2 className="text-2xl font-bold text-white mb-4">Version 1</h2>
          <p className="text-gray-300 mb-2">
            In the first version, I built the app specifically for{" "}
            <strong>frontend-related interviews</strong> 💻. It featured four
            buttons, each corresponding to different topics. When a topic was
            selected, relevant questions would appear, and a{" "}
            <strong>timer</strong> ⏲️ would start, giving 6 seconds for each
            question.
          </p>
          <p className="text-gray-300 mb-2">
            There’s also a feature that allows the user to{" "}
            <strong>stop the quiz</strong> 🛑 mid-way, which resets all selected
            options. Once all the questions are completed, a{" "}
            <strong>summary list</strong> 📋 containing all the questions
            appears at the end, making it easier to <strong>review</strong>{" "}
            everything.
          </p>
          <p className="text-gray-300">
            Additionally, the app is fully <strong>responsive</strong> 📱,
            designed to work seamlessly on all major screen sizes.
          </p>
        </div>
        <div className="h-96 w-80 flex-shrink-0 bg-gradient-to-br from-slate-800 to-slate-900 rounded-lg p-3">
          <img
            src={verion1Image}
            alt="version 1 image"
            className="rounded-lg shadow-lg object-cover h-full w-full"
          />
        </div>
      </motion.div>

      {/* VERSION 2 */}

      <motion.div
        initial={{ opacity: 0, y: -20 }} // Initial state
        animate={{ opacity: 1, y: 0 }} // Animate to this state
        exit={{ opacity: 0, y: 20 }} // Exit state
        transition={{ duration: 0.5 }} // Transition duration
        className="flex flex-col lg:flex-row items-start justify-center mt-20 mb-10 lg:space-x-14"
      >
        <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-lg p-6 mb-10 shadow-lg lg:w-1/2">
          <h2 className="text-2xl font-bold text-white mb-4">Version 2</h2>
          <p className="text-gray-300 mb-2">
            In this version, I upgraded the app to include multiple roles 🎭.
            When you first land on the app, you can choose between{" "}
            <strong>Frontend, Backend, or Designer</strong> roles. After
            selecting a role, you're taken to the main page to pick a topic
            related to that role and choose a difficulty level 🧠.
          </p>
          <p className="text-gray-300 mb-2">
            Once the selection is made, you'll get relevant questions with the
            timer ⏳. I also added a new feature that allows users to{" "}
            <strong>pause</strong> and <strong>resume</strong> the timer ⏸️▶️.
            After all the questions are answered, the app shows the{" "}
            <strong>total paused time</strong> as well. This pause/resume
            feature is designed to give users time to{" "}
            <strong>think through their answers</strong> before resuming and
            moving forward.
          </p>
          <p className="text-gray-300">
            Additionally, I introduced an <strong>About page</strong> 📝, which
            provides a brief on the <strong>reason</strong> behind building the
            app and offers insight into the thought process and the need for
            such a tool. The About page also displays all the different versions
            that have been built so far, and will continue to be updated with
            future enhancements 🔄.
          </p>
        </div>
        <div className="h-96 w-80 flex-shrink-0 bg-gradient-to-br from-slate-800 to-slate-900 rounded-lg p-3">
          <img
            src={verion2Image}
            alt="version 1 image"
            className="rounded-lg shadow-lg object-cover h-full w-full"
          />
        </div>
      </motion.div>

      {/* FOOTER */}

      <footer className="flex justify-center items-center w-full text-white text-sm">
        Made with
        <img src={heart} alt="heart image" width="14px" className="m-1" />
        by Rishika.
      </footer>
    </div>
  );
}

export default About;
