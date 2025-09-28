import { cn } from '@/lib/utils';

import { defaultLogoSquareSize } from '@/components/atoms/logo/config';
import type { LogoProps } from '@/components/atoms/logo/types';

export function MeilisearchLogo({ className }: LogoProps) {
  return (
    <svg
      width="128"
      height="128"
      viewBox="0 0 128 128"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn(defaultLogoSquareSize, className)}
    >
      <g clipPath="url(#clip0_1018_1253)">
        <path
          d="M0 101.424L23.6482 40.9185C26.9807 32.3921 35.1993 26.7803 44.3537 26.7803H58.6109L34.9626 87.2855C31.6303 95.8119 23.4117 101.424 14.2572 101.424H0Z"
          fill="url(#paint0_linear_1018_1253)"
        />
        <path
          d="M34.6934 101.424L58.3414 40.9185C61.674 32.3921 69.8924 26.7803 79.0471 26.7803H93.3043L69.656 87.2857C66.3233 95.812 58.105 101.424 48.9506 101.424H34.6934Z"
          fill="url(#paint1_linear_1018_1253)"
        />
        <path
          d="M69.3887 101.424L93.037 40.9185C96.3693 32.3921 104.588 26.7803 113.742 26.7803H128L104.351 87.2857C101.019 95.812 92.8003 101.424 83.6459 101.424H69.3887Z"
          fill="url(#paint2_linear_1018_1253)"
        />
      </g>
      <defs>
        <linearGradient
          id="paint0_linear_1018_1253"
          x1="127.999"
          y1="21.0788"
          x2="-1.31778e-05"
          y2="93.3912"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#FF5CAA" />
          <stop offset="1" stopColor="#FF4E62" />
        </linearGradient>
        <linearGradient
          id="paint1_linear_1018_1253"
          x1="127.999"
          y1="21.0786"
          x2="0.000406295"
          y2="93.3911"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#FF5CAA" />
          <stop offset="1" stopColor="#FF4E62" />
        </linearGradient>
        <linearGradient
          id="paint2_linear_1018_1253"
          x1="128"
          y1="21.0786"
          x2="0.000900828"
          y2="93.3911"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#FF5CAA" />
          <stop offset="1" stopColor="#FF4E62" />
        </linearGradient>
        <clipPath id="clip0_1018_1253">
          <rect
            width="128"
            height="74.6435"
            fill="white"
            transform="translate(0 26.7803)"
          />
        </clipPath>
      </defs>
    </svg>
  );
}
