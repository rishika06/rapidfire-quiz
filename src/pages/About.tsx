import verion1Image from "../assets/version 1.png";
import verion2Image from "../assets/version 2.png";
import verion3Image from "../assets/version 3.png";

import Rapid from "../assets/rapidFire.png";
import Quiz from "../assets/Quiz.png";
import Bolt from "../assets/Bolt Icon.png";
import Box from "../components/Box";

function About() {
  return (
    <div className="bg-[#06030C] absolute inset-0 h-full overflow-y-scroll ">
      <div className="rq-container bg-[#06030C] ">
        <span className="h-[400px] w-[400px] absolute bg-custom-radial-1 top-[-100px] left-96 filter blur-[190px] rounded-full"></span>

        {/* TITLE */}
        <div className="flex items-center justify-center gap-1 mt-12">
          <img src={Rapid} alt="Rapid" className="object-cover" />
          <img src={Bolt} alt="Bolt Icon" className="object-cover" />
          <img src={Quiz} alt="Quiz" className="object-cover" />
        </div>

        {/* HEADER */}
        <div className="flex flex-col justify-center ">
          <h1 className="text-gray-light text-6xl text-center mt-24">
            Hi, I am rapidFire Quiz
          </h1>
          <p className="text-gray-light mt-10 px-56 text-xl text-center">
            The idea for building this app 💡 came to me when I started
            preparing for interviews. While there’s plenty of interview-related
            content on the web, I wanted something that would help me revise
            questions right before interviews in a way that simulated a real
            interview environment 🎯
          </p>
        </div>

        {/* BOX 1 */}
        <div className="relative my-20 overflow-x-hidden overflow-y-hidden rounded-3xl">
          <Box>
            <div className="p-10 ">
              <div className="text-cyan text-sm">Version 1.0.0</div>
              <h2 className="text-gray-light text-4xl my-9 pr-96">
                To build something you have to start somewhere
              </h2>
              <p className="text-gray-light pr-96">
                In the first version, I built the app specifically for
                frontend-related interviews 💻. It featured four buttons, each
                corresponding to different topics. When a topic was selected,
                relevant questions would appear, and a timer ⏲ would start,
                giving 6 seconds for each question. There’s also a feature that
                allows the user to stop the quiz 🛑 mid-way, which resets all
                selected options. Once all the questions are completed, a
                summary list 📋 containing all the questions appears at the end,
                making it easier to review everything. Additionally, the app is
                fully responsive 📱, designed to work seamlessly on all
                major screen sizes.
              </p>
            </div>
            <div className="absolute top-24 right-[-500px]  w-[900px]">
              <img src={verion1Image} alt="" className="h-96 rounded-3xl" />
            </div>
          </Box>
        </div>

        {/* BOX 2 */}
        <div className="relative my-20 overflow-hidden rounded-3xl">
          <Box>
            <div className="p-10">
              <div className="absolute top-24 left-[-200px]  w-[900px]">
                <img src={verion2Image} alt="" className="h-96 rounded-3xl" />
              </div>
              <div className="text-cyan text-sm pl-96">Version 1.0.0</div>
              <h2 className="text-gray-light text-4xl my-9 pl-96">
                To build something you have to start somewhere
              </h2>
              <p className="text-gray-light pl-96">
                In the first version, I built the app specifically for
                frontend-related interviews 💻. It featured four buttons, each
                corresponding to different topics. When a topic was selected,
                relevant questions would appear, and a timer ⏲ would start,
                giving 6 seconds for each question. There’s also a feature that
                allows the user to stop the quiz 🛑 mid-way, which resets all
                selected options. Once all the questions are completed, a
                summary list 📋 containing all the questions appears at the end,
                making it easier to review everything. Additionally, the app is
                fully responsive 📱, designed to work seamlessly on all
                major screen sizes.
              </p>
            </div>
          </Box>
        </div>

        {/* BOX 3 */}
        <div className="relative my-20 overflow-hidden rounded-3xl">
          <Box>
            <div className="p-10">
              <div className="text-cyan text-sm">Version 1.0.0</div>
              <h2 className="text-gray-light text-4xl my-9 pr-96">
                To build something you have to start somewhere
              </h2>
              <p className="text-gray-light pr-96">
                In the first version, I built the app specifically for
                frontend-related interviews 💻. It featured four buttons, each
                corresponding to different topics. When a topic was selected,
                relevant questions would appear, and a timer ⏲ would start,
                giving 6 seconds for each question. There’s also a feature that
                allows the user to stop the quiz 🛑 mid-way, which resets all
                selected options. Once all the questions are completed, a
                summary list 📋 containing all the questions appears at the end,
                making it easier to review everything. Additionally, the app is
                fully responsive 📱, designed to work seamlessly on all
                major screen sizes.
              </p>
            </div>
            <div className="absolute top-24 right-[-500px]  w-[900px]">
              <img src={verion3Image} alt="" className="h-96 rounded-3xl" />
            </div>
          </Box>
        </div>

        <div className="">
          <h2 className="text-gray-light text-3xl">The tech insider</h2>
          <div className="flex gap-10 text-gray-light mt-8">
            <Box>
              <div className="py-6 px-8">
                <h3 className="text-2xl font-semibold pb-2">Development</h3>
                <p className="">
                  Vite, React, Tailwind, TypeScript, Framer Motion, Vitest
                </p>
              </div>
            </Box>
            <Box>
              <div className="py-6 px-8">
                <h3 className="text-2xl font-semibold">Design</h3>
                <p className="">Figma, FigJam</p>
              </div>
            </Box>
            <Box>
              <div className="py-6 px-8">
                <h3 className="text-2xl font-semibold">Documentation</h3>
                <p className="">Notion</p>
              </div>
            </Box>
          </div>
        </div>

        <div className="h-10"></div>
      </div>
    </div>
  );
}

export default About;
