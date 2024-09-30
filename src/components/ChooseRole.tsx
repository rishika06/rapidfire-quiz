import React from "react";
import { roles } from "../constants/constants";

interface ChooseRoleProps {
  setSelectedRole: (name: string) => void;
}

function ChooseRole({ setSelectedRole }: ChooseRoleProps) {
  return (
    <div className="absolute inset-0 bg-slate-950 flex flex-col justify-center items-center">
      <div className="md:flex items-center justify-center">
        {roles.map((item) => (
          <div
            key={item.id}
            className={`flex flex-col justify-center items-center cursor-pointer mx-8
          transition-shadow duration-300 hover:shadow-2xl hover:shadow-sky-500/20 rounded-lg
         
          `}
            onClick={() => setSelectedRole(item.name)}
          >
            <div className="w-28 h-28 md:w-36 md:h-36 my-6 mx-8 p-4  border-sky-500 border-2 rounded-full">
              <img
                src={item.image}
                alt="role image"
                className="w-full h-full object-contain"
              />
            </div>
            <span className="text-base md:text-lg pb-4">{item.title}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ChooseRole;
