import React from 'react';

const FigLogoSymbol: React.FC = () => {
  return (
    <svg viewBox="0 0 280 280" className="h-5 w-auto text-theme-contrary">
      <mask id="subtract">
        <path
          x="0"
          y="0"
          width="280"
          height="280"
          d="M0 53C0 23.7289 23.7289 0 53 0H227C256.271 0 280 23.7289 280 53V227C280 256.271 256.271 280 227 280H53C23.7289 280 0 256.271 0 227V53Z"
          fill="white"
        ></path>
        <rect
          x="140"
          y="30"
          width="112"
          height="220"
          rx="38"
          fill="black"
        ></rect>
      </mask>
      <path
        mask="url(#subtract)"
        x="0"
        y="0"
        width="280"
        height="280"
        d="M0 53C0 23.7289 23.7289 0 53 0H227C256.271 0 280 23.7289 280 53V227C280 256.271 256.271 280 227 280H53C23.7289 280 0 256.271 0 227V53Z"
      ></path>
    </svg>
  );
};

export default FigLogoSymbol;
