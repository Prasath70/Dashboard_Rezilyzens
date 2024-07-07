import React from "react";
import { IoCheckmark } from "react-icons/io5"; 

interface RadialProgressProps {
  percentage: number; 
  size?: number; 
  strokeWidth?: number; 
  color?: string; 
  outColor?: string; 
}

const RadialProgress: React.FC<RadialProgressProps> = ({
  percentage,
  strokeWidth = 10,
  color = "red",
  outColor = "stroke-indigo-500",
}) => {
  const radius = 50 - strokeWidth / 2;
  const circumference = 2 * Math.PI * radius;
  const dashOffset = circumference - (percentage / 100) * circumference;

  return (
    <div className="relative flex items-center justify-center w-[1.8rem] h-[1.8rem]">
      <svg className="w-full h-full" viewBox="0 0 100 100">
        <circle
          className={`stroke-${color}`}
          strokeWidth={strokeWidth}
          cx="50"
          cy="50"
          r={radius}
          fill="transparent"
        ></circle>
        <circle
          className={`${(color == "red"
            ? `stroke-${color}-800`
            : `stroke-${color}-500`)}  `}
          strokeWidth={strokeWidth}
          strokeLinecap="round"
          cx="50"
          cy="50"
          r={radius}
          fill="transparent"
          strokeDasharray={circumference}
          strokeDashoffset="1"
        ></circle>
        <circle
          className={`${outColor}`}
          strokeWidth={strokeWidth}
          strokeLinecap="round"
          cx="50"
          cy="50"
          r={radius}
          fill="transparent"
          strokeDasharray={circumference}
          strokeDashoffset={dashOffset}
        ></circle>
      </svg>
      <IoCheckmark
        className={`absolute w-[1.3rem] h-[1.3rem] text-white  rounded-full p-1 ${
          color == "red" ? `bg-${color}-800` : `bg-${color}-500`
        }`}
      />
    </div>
  );
};

export default RadialProgress;
