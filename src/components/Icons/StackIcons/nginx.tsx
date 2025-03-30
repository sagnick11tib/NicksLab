import type React from "react";

export const IconNginx = (props: React.SVGAttributes<SVGElement>) => {
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
      <g clipPath="url(#nginx_icon)">
        <path
          fill="#009639"
          d="M128 28L43 78V178L128 228L213 178V78L128 28Z"
        />
        <path
          fill="#fff"
          d="M100 164V92L156 164V92"
        />
      </g>
      <defs>
        <clipPath id="nginx_icon">
          <rect width="170" height="200" fill="#fff" transform="translate(43 28)" />
        </clipPath>
      </defs>
    </svg>
  );
};
