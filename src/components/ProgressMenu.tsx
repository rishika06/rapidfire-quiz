import React, { useEffect, useState } from "react";
import StopIcon from "../assets/stop-circle.svg";
import PauseIcon from "../assets/pause-circle.svg";
import NextIcon from "../assets/arrow-right-circle.svg";

function ProgressBar({ timer }: any) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const newProgress = ((6 - timer) / 6) * 100;
    setProgress(newProgress);
  }, [timer]);

  return (
    <div className="relative h-[2px] w-[700px] bg-cyan rounded-md overflow-hidden">
      <div
        style={{
          width: `${progress}%`,
          backgroundColor: "#8563db",
          transition: "width 0.1s linear",
        }}
        aria-valuemin={0}
        aria-valuemax={6}
        aria-valuenow={progress}
        role="progressbar"
        className="h-full transition-all duration-1000 ease-in-out"
      />
    </div>
  );
}

function ProgressMenu({ timer, resetQuiz, nextQuestion, togglePause }: any) {
  return (
    <div className="flex justify-between items-center h-24 px-6 opacity-30 hover:opacity-100 cursor-pointer transition duration-300 ease-in-out">
      <div className="flex-shrink-0">
        <img
          src={StopIcon}
          alt="stop icon"
          className="cursor-pointer"
          onClick={resetQuiz}
        />
      </div>

      <div className="flex items-center gap-4">
        <ProgressBar timer={timer} />
        <div className="text-cyan text-xl">{timer}</div>
      </div>

      <div className="flex items-center gap-16">
        <img
          src={PauseIcon}
          alt="pause icon"
          className="cursor-pointer"
          onClick={togglePause}
        />
        <img
          src={NextIcon}
          alt="next icon"
          className="cursor-pointer"
          onClick={nextQuestion}
        />
      </div>
    </div>
  );
}

export default ProgressMenu;
