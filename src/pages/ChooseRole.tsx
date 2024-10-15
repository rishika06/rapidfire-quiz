import { roles } from "../constants/constants";
import Title from "../components/Title";
import Box from "../components/Box";

interface ChooseRoleProps {
  setSelectedRole: (name: string) => void;
}

function ChooseRole({ setSelectedRole }: ChooseRoleProps) {
  return (
    <div className="background-image absolute inset-0 overflow-y-scroll lg:overflow-hidden">
      <div className="rq-container">
        <span className="h-[400px] w-[400px] absolute bg-custom-radial-1 top-[-160px] right-0 filter blur-[190px] rounded-full"></span>
        <Title />
        <div className="text-gray-light font-semibold text-xl text-center px-4 mb-16 md:mb-24">
          Select one area where you want to test your knowledge
        </div>

        <div className="flex flex-col md:flex-row items-center justify-center gap-12 m-auto max-w-[1200px] relative">
          {roles.map((item) => (
            <Box key={item.id}>
              <div
                className="relative flex flex-col justify-center items-center gap-[24px] cursor-pointer w-[250px] h-[250px] xl:w-[325px] xl:h-[325px]"
                onClick={() => setSelectedRole(item.value)}
              >
                <span className="h-[150px] w-[150px] absolute top-0 diamond-gradient filter blur-[100px] rounded-full"></span>
                <div className="">
                  <img
                    src={item.image}
                    alt="role image"
                    className="object-contain"
                  />
                </div>
                <div className="text-center">
                  <h2 className="text-gray-light text-lg mb-5">{item.title}</h2>
                  <p className="text-gray-light text-sm px-10">
                    {item.subText}
                  </p>
                </div>
              </div>
            </Box>
          ))}
        </div>
        <div className="h-10"></div>
      </div>
    </div>
  );
}

export default ChooseRole;
