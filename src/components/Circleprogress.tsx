import React from "react";
import { IoCheckmark } from "react-icons/io5"; // Make sure to import the correct icon

interface RadialProgressProps {
  percentage: number; // Progress percentage (0-100)
  size?: number; // Size of the progress bar (default: 100px)
  strokeWidth?: number; // Width of the progress bar stroke (default: 10px)
  color?: string; // Color of the background progress bar (default: 'gray')
  outColor?: string; // Color of the progress circle
}

const RadialProgress: React.FC<RadialProgressProps> = ({
  percentage,
  size = 100,
  strokeWidth = 10,
  color = 'gray',
  outColor = 'stroke-indigo-500',
}) => {
  // Calculate the circumference of the circle
  const radius = 50 - strokeWidth / 2;
  const circumference = 2 * Math.PI * radius;
  // Calculate the dash offset based on the percentage
  const dashOffset = circumference - (percentage / 100) * circumference;

  return (
    <div className="relative flex items-center justify-center w-[1.8rem] h-[1.8rem]">
      <svg className="w-full h-full" viewBox="0 0 100 100">
        {/* Background circle */}
        <circle
          className={`stroke-${color}`}
          strokeWidth={strokeWidth}
          cx="50"
          cy="50"
          r={radius}
          fill="transparent"
        ></circle>
        {/* Overlay circle */}
        <circle
          className="stroke-red-800"
          strokeWidth={strokeWidth}
          strokeLinecap="round"
          cx="50"
          cy="50"
          r={radius}
          fill="transparent"
          strokeDasharray={circumference}
          strokeDashoffset="1"
        ></circle>
        {/* Progress circle */}
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
      <IoCheckmark className="absolute w-[1.3rem] h-[1.3rem] text-white bg-red-800 rounded-full p-1" />
    </div>
  );
};

export default RadialProgress;
