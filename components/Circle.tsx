import React from "react";

interface CircleProps {
  minute: number;
}

const Circle: React.FC<CircleProps> = ({ minute }) => {
  const radius = 36;
  const circumference = 2 * Math.PI * radius;
  const progress = (minute * circumference) / 90;

  let text;
  if (minute === 0) {
    text = "0";
  } else if (minute < 45) {
    text = `${minute}`;
  } else if (minute === 45) {
    text = "HT";
  } else if (minute < 90) {
    text = `${minute}`;
  } else {
    text = "FT";
  }

  return (
    <div className="relative flex items-center justify-center w-20 h-20">
      <svg width="80" height="80" className="transform -rotate-90">
        <circle
          stroke="gray"
          fill="transparent"
          strokeWidth="2"
          r={radius}
          cx="40"
          cy="40"
        />
        <circle
          stroke="green"
          fill="transparent"
          strokeWidth="2"
          strokeDasharray={circumference}
          strokeDashoffset={circumference - progress}
          r={radius}
          cx="40"
          cy="40"
        />
      </svg>
      <div className="absolute flex items-center justify-center w-full h-full text-lg font-bold">
        {text}
      </div>
    </div>
  );
};

export default Circle;
