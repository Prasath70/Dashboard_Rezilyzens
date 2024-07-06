import React from "react";
import { TiTick } from "react-icons/ti";

interface RadialProgressProps {
  percentage: number; // Progress percentage (0-100)
  size?: number; // Size of the progress bar (default: 100px)
  strokeWidth?: number; // Width of the progress bar stroke (default: 10px)
  color?: string; // Color of the progress bar (default: 'gray')
}

const RadialProgress: React.FC<RadialProgressProps> = ({
  percentage,
  size = 100,
  strokeWidth = 10,
  color = "gray",
}) => {
  // Calculate the circumference of the circle
  const circumference = 2 * Math.PI * (40 - strokeWidth / 2);
  // Calculate the dash offset based on the percentage
  const dashOffset = circumference - (percentage / 100) * circumference;

  return (
    <div className={`relative w-${size} h-${size}`}>
      <svg className="w-full h-full" viewBox="0 0 100 100">
        {/* Background circle */}
        <circle
          className={`stroke-${color}`}
          strokeWidth={strokeWidth}
          cx="50"
          cy="50"
          r="40"
          fill="transparent"
        ></circle>
        {/* Progress circle */}
        <circle
          className="stroke-red-600"
          strokeWidth={strokeWidth}
          strokeLinecap="round"
          cx="50"
          cy="50"
          r="40"
          fill="transparent"
          strokeDasharray={circumference}
          strokeDashoffset={dashOffset}
        ></circle>
      </svg>
      <TiTick className="h-6 w-6  absolute left-2 top-1/2 transform -translate-y-1/2 bg-red-800 rounded-full text-white text-xl" />
    </div>
  );
};

export default RadialProgress;
