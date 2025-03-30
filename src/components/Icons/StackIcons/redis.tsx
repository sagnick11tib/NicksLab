import type React from "react";

export const IconRedis = (props: React.SVGAttributes<SVGElement>) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="256"
      height="256"
      viewBox="0 0 256 256"
      fill="none"
      {...props}
    >
      <rect width="256" height="256" fill="#242938" rx="60" />
      <g clipPath="url(#redis_icon)">
        <path
          fill="#DC382D"
          d="M128 28L43 78V178L128 228L213 178V78L128 28Z"
        />
        <path
          fill="#fff"
          d="M128 65L64 92L128 119L192 92L128 65ZM64 104L128 131L192 104V118L128 145L64 118V104ZM64 130L128 157L192 130V144L128 171L64 144V130Z"
        />
        <path
          fill="#fff"
          d="M102 86L128 98L154 86L128 74L102 86Z"
        />
      </g>
      <defs>
        <clipPath id="redis_icon">
          <rect width="170" height="200" fill="#fff" transform="translate(43 28)" />
        </clipPath>
      </defs>
    </svg>
  );
};
