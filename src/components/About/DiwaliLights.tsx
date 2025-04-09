import React from 'react';

const DiwaliLights: React.FC = () => {
  return (
    <svg
      viewBox="0 0 800 200"
      xmlns="http://www.w3.org/2000/svg"
      className="w-full h-auto"
      style={{ marginBottom: '-100px' }}
    >
      {/* Wire Path */}
      <path
        d="M 50,100 C 150,50 250,150 350,100 S 550,50 650,100 S 850,150 750,100"
        fill="none"
        stroke="#555"
        strokeWidth="2"
      />
      
      {/* Light Bulbs */}
      {[...Array(8)].map((_, i) => {
        const x = 100 + i * 100;
        const y = i % 2 === 0 ? 90 : 110;
        const colors = ['#FFD700', '#FF6B6B', '#4ECDC4', '#FFB347', '#87CEEB'];
        const randomColor = colors[i % colors.length];
        
        return (
          <g key={i}>
            {/* Bulb Glow Effect */}
            <circle
              cx={x}
              cy={y}
              r="15"
              fill={randomColor}
              opacity="0.3"
              className={`animate-pulse delay-${i * 100}`}
            >
              <animate
                attributeName="opacity"
                values="0.3;0.7;0.3"
                dur={`${1 + (i * 0.2)}s`}
                repeatCount="indefinite"
              />
            </circle>
            
            {/* Main Bulb */}
            <circle
              cx={x}
              cy={y}
              r="8"
              fill={randomColor}
              className="drop-shadow-lg"
            >
              <animate
                attributeName="fill-opacity"
                values="0.8;1;0.8"
                dur={`${0.8 + (i * 0.2)}s`}
                repeatCount="indefinite"
              />
            </circle>
            
            {/* Bulb Cap */}
            <rect
              x={x - 3}
              y={y - 12}
              width="6"
              height="4"
              fill="#666"
              rx="1"
            />
          </g>
        );
      })}
    </svg>
  );
};

export default DiwaliLights;