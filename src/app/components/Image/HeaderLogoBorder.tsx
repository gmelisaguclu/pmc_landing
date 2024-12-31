import React from "react";

export function HeaderLogoBorder() {
  return (
    <div className="relative w-full overflow-hidden flex justify-center">
      <div className="min-w-[670px] md:min-w-[1069px]">
        <svg
          className="w-full h-auto"
          viewBox="0 0 1069 46"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0 1H357.325L376.288 45H690.853L709.816 1H1069"
            stroke="url(#paint0_radial_32_156872)"
            strokeWidth="0.417708"
          />
          <defs>
            <radialGradient
              id="paint0_radial_32_156872"
              cx="0"
              cy="0"
              r="1"
              gradientUnits="userSpaceOnUse"
              gradientTransform="translate(534.5 23) rotate(-3.08029) scale(409.414 3421.2)"
            >
              <stop stopColor="white" />
              <stop offset="1" stopColor="#999999" stopOpacity="0" />
            </radialGradient>
          </defs>
        </svg>
      </div>
    </div>
  );
}
