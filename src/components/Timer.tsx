import { FaRegClock } from "react-icons/fa";

function Timer({ timer }: { timer: number }) {
  return (
    <div className="flex text-sm md:text-base justify-center items-center">
      <FaRegClock className="mr-3" />
      Timer : {timer}
    </div>
  );
}

export default Timer;
