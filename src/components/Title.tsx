import Rapid from "../assets/rapidFire.png";
import Quiz from "../assets/Quiz.png";
import Bolt from "../assets/Bolt Icon.png";
import InfoSvg from "../assets/info.svg";

interface TitleProps {
  setShowAbout: (showAbout: boolean) => void;
}

function Title({ setShowAbout }: TitleProps) {
  return (
    <div className="p-6 cursor-pointer" onClick={() => setShowAbout(true)}>
      <div className="flex items-center gap-1">
        <img src={Rapid} alt="Rapid" className="object-cover" />
        <img src={Bolt} alt="Bolt Icon" className="object-cover" />
        <img src={Quiz} alt="Quiz" className="object-cover" />
      </div>
      <div className="text-[#999999] text-sm flex items-center gap-2">
        version 1.0.1
        <img src={InfoSvg} alt="Bolt Icon" className="object-cover" />
      </div>
    </div>
  );
}

export default Title;
