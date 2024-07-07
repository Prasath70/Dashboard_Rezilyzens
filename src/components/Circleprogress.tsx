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

  const getColor = (color: string) => {
    switch (color) {
      case "red":
        return "#e3342f";
      case "yellow":
        return "#f59e0b";
      case "green":
        return "#38a169";
      case "purple":
        return "#7b56b6";
      default:
        return color;
    }
  };

  const getBackgroundColor = (color: string) => {
    switch (color) {
      case "red":
        return "#c53030";
      case "yellow":
        return "#d69e2e";
      case "green":
        return "#2f855a";
      case "purple":
        return "#7b56b6";
      default:
        return color;
    }
  };

  return (
    <div className="relative flex items-center justify-center w-[1.8rem] h-[1.8rem]">
      <svg className="w-full h-full" viewBox="0 0 100 100">
        <circle
          style={{ stroke: getColor(color) }}
          strokeWidth={strokeWidth}
          cx="50"
          cy="50"
          r={radius}
          fill="transparent"
        ></circle>
        <circle
          style={{ stroke: getBackgroundColor(color) }}
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
          className={outColor}
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
        className={`absolute w-[1.3rem] h-[1.3rem] text-white rounded-full p-1`}
        style={{ backgroundColor: getBackgroundColor(color) }}
      />
    </div>
  );
};

export default RadialProgress;
