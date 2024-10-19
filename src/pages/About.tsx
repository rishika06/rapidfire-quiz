import verion1Image from "../assets/version 1.png";
import verion3Image from "../assets/version 3.png";

import Rapid from "../assets/rapidFire.png";
import Quiz from "../assets/Quiz.png";
import Bolt from "../assets/Bolt Icon.png";
import Box from "../components/Box";

interface AboutProps {
  setShowAbout?: (showAbout: boolean) => void;
}

function About({ setShowAbout }: AboutProps) {
  return (
    <div className="bg-[#06030C] absolute inset-0 h-full overflow-y-scroll overflow-x-hidden">
      <div className="rq-container bg-[#06030C] ">
        <span className="h-[400px] w-[400px] absolute bg-custom-radial-1 top-[-100px] left-96 filter blur-[190px] rounded-full z-0"></span>

        {/* TITLE */}
        <div
          className="relative flex items-center justify-center gap-1 mt-12 px-4 cursor-pointer z-10"
          onClick={() => setShowAbout && setShowAbout(false)}
        >
          <img src={Rapid} alt="Rapid" className="object-cover" />
          <img src={Bolt} alt="Bolt Icon" className="object-cover" />
          <img src={Quiz} alt="Quiz" className="object-cover" />
        </div>

        {/* HEADER */}
        <div className="flex flex-col justify-center ">
          <h1 className="text-gray-light text-4xl md:text-6xl text-center mt-10 md:mt-16">
            Hi, I am rapidFire Quiz
          </h1>
          <p className="text-gray-light mt-10 px-6 md:px-56 text-base md:text-xl text-center leading-relaxed">
            The idea for building this app 💡 came to me when I started
            preparing for interviews. While there’s plenty of interview-related
            content on the web, I wanted something that would help me revise
            questions right before interviews interview environment 🎯
          </p>
        </div>

        {/* BOX 1 */}
        <div className="relative my-14 md:my-20 rounded-3xl overflow-hidden ">
          <Box className="m-6 md:m-0 flex flex-col items-center">
            <div className="flex justify-center p-6 md:absolute top-24 right-[-40%] w-[100%] md:w-[75%] opacity-60">
              <img
                src={verion1Image}
                alt=""
                className="h-auto w-full rounded-2xl "
              />
            </div>
            <div className="px-6 mb-6 md:p-10">
              <div className="text-cyan text-sm">Version 1.0.0</div>
              <h2 className="text-gray-light text-2xl md:text-3xl my-4 md:my-9 md:pr-96">
                To build something you have to start somewhere
              </h2>
              <div className="text-gray-light leading-relaxed md:pr-96">
                <p>
                  In the first version, I built the app specifically for
                  frontend-related interviews 💻. It featured four buttons, each
                  corresponding to different topics.
                </p>
                <p>
                  When a topic was selected, relevant questions would appear,
                  and a timer ⏲ would start, giving 6 seconds for each question.
                  There’s also a feature that allows the user to stop the quiz
                  🛑 mid-way, which resets all selected options.{" "}
                </p>
                <p>
                  Once all the questions are completed, a summary list 📋
                  containing all the questions appears at the end, making it
                  easier to review everything. Additionally, the app is fully
                  responsive 📱, designed to work seamlessly on all
                  major screen sizes.
                </p>
              </div>
            </div>
          </Box>
        </div>

        {/* BOX 2 */}
        {/* <div className="relative my-14 md:my-20 rounded-3xl overflow-hidden ">
          <Box className="m-6 md:m-0 flex flex-col items-center">
            <div className="flex justify-center p-6 md:absolute top-24 left-[-40%] w-[100%] md:w-[75%] opacity-60">
              <img
                src={verion2Image}
                alt=""
                className="h-auto w-full rounded-2xl "
              />
            </div>
            <div className="px-6 mb-6 md:p-10">
              <div className="text-cyan text-sm">Version 1.0.0 - updated</div>
              <h2 className="text-gray-light text-2xl md:text-3xl my-4 md:my-9 md:pl-96">
                To build something you have to start somewhere
              </h2>
              <div className="text-gray-light leading-relaxed md:pl-96">
                <p>
                  In the first version, I built the app specifically for
                  frontend-related interviews 💻. It featured four buttons, each
                  corresponding to different topics.
                </p>
                <p>
                  When a topic was selected, relevant questions would appear,
                  and a timer ⏲ would start, giving 6 seconds for each question.
                  There’s also a feature that allows the user to stop the quiz
                  🛑 mid-way, which resets all selected options.{" "}
                </p>
                <p>
                  Once all the questions are completed, a summary list 📋
                  containing all the questions appears at the end, making it
                  easier to review everything. Additionally, the app is fully
                  responsive 📱, designed to work seamlessly on all
                  major screen sizes.
                </p>
              </div>
            </div>
          </Box>
        </div> */}

        {/* BOX 3 */}
        <div className="relative my-14 md:my-20 rounded-3xl overflow-hidden ">
          <Box className="m-6 md:m-0 flex flex-col items-center">
            <div className="flex justify-center p-6 md:absolute top-16 left-[-40%] w-[100%] md:w-[75%] opacity-60">
              <img
                src={verion3Image}
                alt=""
                className="h-auto w-full rounded-2xl"
              />
            </div>
            <div className="px-6 mb-6 md:p-10">
              <div className="text-cyan text-sm  md:pl-96">Version 1.0.1</div>
              <h2 className="text-gray-light text-2xl md:text-3xl my-4 md:my-4 md:pl-96">
                Major Revamp: A Fresh New Look
              </h2>
              <div className="text-gray-light leading-relaxed md:pl-96">
                <p>
                  This version marked a significant transformation! I
                  collaborated with designer{" "}
                  <a
                    href="https://prandeepdas-porfolio.vercel.app/"
                    target="_blank"
                    className="text-cyan cursor-pointer"
                  >
                    Prandeep Das
                  </a>
                  , who brought a modern and sleek look to the website 🎨✨. He
                  introduced some exciting ideas to enhance the overall user
                  experience, including:
                </p>
                <ul className="ml-6 my-3">
                  <li>🧑‍💼 Role selection</li>
                  <li>⏳ Progress bar with play, pause, and stop controls</li>
                  <li>⏱️ Time tracking for each question</li>
                </ul>
                <p>
                  Prandeep also created unique illustrations and gave the entire
                  app a fresh look and feel, all while maintaining a consistent
                  design language 🎨🌐.
                </p>
              </div>
            </div>
          </Box>
        </div>

        {/* TECH DETAILS */}
        <div className="mx-6 md:mx-3">
          <h2 className="text-gray-light text-3xl">The tech insider</h2>
          <div className="flex flex-col md:flex-row gap-10 text-gray-light mt-8">
            <Box className="px-6 py-4 md:py-6 md:px-8">
              <h3 className="text-2xl font-semibold pb-2">Development</h3>
              <p className="">
                Vite, React, Tailwind, TypeScript, Framer Motion, Vitest
              </p>
            </Box>
            <Box className="px-6 py-4 md:py-6 md:px-8">
              <h3 className="text-2xl font-semibold">Design</h3>
              <p className="">Figma, FigJam</p>
            </Box>
            <Box className="px-6 py-4 md:py-6 md:px-8">
              <h3 className="text-2xl font-semibold">Documentation</h3>
              <p className="">Notion</p>
            </Box>
          </div>
        </div>

        <div className="h-10"></div>
      </div>
    </div>
  );
}

export default About;
