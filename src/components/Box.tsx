import React from "react";

interface BoxProps {
  children: React.ReactNode;
  className?: string;
}

function Box({ children, className }: BoxProps) {
  return (
    <div
      className={`bg-[#8A8593] border-2 border-[#E1E1E11A] bg-opacity-10 rounded-3xl ${className}`}
    >
      {children}
    </div>
  );
}

export default Box;
