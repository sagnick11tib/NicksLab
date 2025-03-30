import type React from "react";

export const IconFramerMotion = (props: React.SVGAttributes<SVGElement>) => {
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
      <g clipPath="url(#framermotion_icon)">
        <path fill="#ffffff" d="M86 36H170V102H114L86 74V36Z" />
        <path fill="#ffffff" d="M114 102H170V168H58L114 102Z" />
        <path fill="#ffffff" d="M114 168H170V232L114 168Z" />
        <path
          fill="url(#paint0_linear)"
          d="M114 168L58 232V168H114Z"
        />
      </g>
      <defs>
        <linearGradient
          id="paint0_linear"
          x1="58"
          y1="168"
          x2="58"
          y2="232"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#FF0080" />
          <stop offset="1" stopColor="#FF6600" />
        </linearGradient>
        <clipPath id="framermotion_icon">
          <rect width="112" height="200" fill="#fff" transform="translate(58 28)" />
        </clipPath>
      </defs>
    </svg>
  );
};
