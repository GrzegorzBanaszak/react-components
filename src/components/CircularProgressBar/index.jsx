import React, { useEffect } from "react";
import "./circularProgressBar.css";
const CircularProgressBar = ({ color, progress }) => {
  return (
    <div className="card">
      <div className="percent">
        <p className="percent-value" style={{ color: color }}>
          {progress}%
        </p>
        <svg>
          <circle cx="70" cy="70" r="70" />
          <circle
            cx="70"
            cy="70"
            r="70"
            style={{
              stroke: color,
              strokeDashoffset: `calc(440 - (440 * ${progress}) / 100)`,
            }}
          />
        </svg>
      </div>
    </div>
  );
};

export default CircularProgressBar;
