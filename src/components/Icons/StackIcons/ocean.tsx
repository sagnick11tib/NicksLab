import type React from "react";

export const IconDigitalOcean = (props: React.SVGAttributes<SVGElement>) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="256"
      height="256"
      viewBox="0 0 16 16"
      fill="none"
      {...props}
    >
      <rect width="16" height="16" fill="#00152D" rx="4" />
      <g fill="#0080FF">
        <path d="M8 12.208v2.652c4.495 0 7.988-4.34 6.518-9.053a6.642 6.642 0 00-4.333-4.333C5.48.004 1.14 3.504 1.14 7.992h2.652c0-2.815 2.792-4.993 5.756-3.92a3.975 3.975 0 012.372 2.372c1.08 2.961-1.1 5.75-3.912 5.756V9.563H5.363v2.645H8z"/>
        <path d="M5.363 14.245H3.325v-2.037h2.038v2.037zM1.622 12.208h1.703v-1.704H1.622v1.704z"/>
      </g>
    </svg>
  );
};
