import type React from "react";

export const IconCSS = (props: React.SVGAttributes<SVGElement>) => {
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
      <g clipPath="url(#css_icon)">
        <path
          fill="#264DE4"
          d="M38 228L68.8 28H187.2L218 228L128 256L38 228Z"
        />
        <path fill="#2965F1" d="M128 237.8L190.8 219.2L217.6 50H128V237.8Z" />
        <path
          fill="#EBEBEB"
          d="M128 112H94L91.2 88H128V66H67.2L67.8 71.4L74.4 130H128V112ZM128 174.8H128.2L101.8 168.2L100 150H77.8L81.2 185.2L128 198V174.8Z"
        />
        <path
          fill="#fff"
          d="M128 112V130H156L152.4 168.2L128 174.8V198L175.2 185.2L175.6 181.4L180 132L180.6 126H128ZM128 66V88H183L184.4 76L185.4 66H128Z"
        />
      </g>
      <defs>
        <clipPath id="css_icon">
          <rect width="180" height="200" fill="#fff" transform="translate(38 28)" />
        </clipPath>
      </defs>
    </svg>
  );
};
