import { LogoProps } from '@/components/atoms/logo/types';
import { cn } from '@/lib/utils';
import { defaultLogoSquareSize } from '@/components/atoms/logo/config';

export function LogoSublimeText({ id, className }: LogoProps) {
  return (
    <svg
      viewBox="0 0 128 128"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      id={id}
      className={cn(defaultLogoSquareSize, className)}
    >
      <g clipPath={`url(#${id}-clip0_1185_3849)`}>
        <path
          d="M124.8 0H3.2C1.43269 0 0 1.43269 0 3.2V124.8C0 126.567 1.43269 128 3.2 128H124.8C126.567 128 128 126.567 128 124.8V3.2C128 1.43269 126.567 0 124.8 0Z"
          fill={`url(#${id}-paint0_linear_1185_3849)`}
        />
        <path
          opacity="0.4"
          d="M38.3999 99.2L63.9999 124.8H128V67.2L89.5999 28.8V48L67.1999 55.4667L89.5999 62.9334V82.1334L38.3999 99.2Z"
          fill={`url(#${id}-paint1_linear_1185_3849)`}
        />
        <path
          d="M38.3999 80.0003L89.5999 62.9336V82.1336L38.3999 99.2003V80.0003Z"
          fill={`url(#${id}-paint2_linear_1185_3849)`}
        />
        <path
          opacity="0.184"
          d="M0 6.4V3.2C0 1.42718 1.42719 0 3.2 0H124.8C126.573 0 128 1.42718 128 3.2V6.4C128 4.62718 126.573 3.2 124.8 3.2H3.2C1.42719 3.2 0 4.62718 0 6.4Z"
          fill="white"
        />
        <path
          opacity="0.481"
          d="M0 121.6V124.8C0 126.573 1.42719 128 3.2 128H124.8C126.573 128 128 126.573 128 124.8V121.6C128 123.373 126.573 124.8 124.8 124.8H3.2C1.42719 124.8 0 123.373 0 121.6Z"
          fill="black"
        />
        <path
          d="M89.5999 28.8L38.3999 45.8688V65.0688L89.5999 82.1313V62.9313L67.1999 55.4688L89.5999 48V28.8Z"
          fill={`url(#${id}-paint3_linear_1185_3849)`}
        />
      </g>
      <defs>
        <linearGradient
          id={`${id}-paint0_linear_1185_3849`}
          x1="128"
          y1="128"
          x2="0"
          y2="0"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#172525" />
          <stop offset="1" stopColor="#536161" />
        </linearGradient>
        <linearGradient
          id={`${id}-paint1_linear_1185_3849`}
          x1="60.7999"
          y1="51.2"
          x2="105.6"
          y2="96"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#292C2F" />
          <stop offset="1" stopOpacity="0" />
        </linearGradient>
        <linearGradient
          id={`${id}-paint2_linear_1185_3849`}
          x1="73.5999"
          y1="76.8003"
          x2="68.5671"
          y2="91.8987"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#B1621E" />
          <stop offset="1" stopColor="#FFA21D" />
        </linearGradient>
        <linearGradient
          id={`${id}-paint3_linear_1185_3849`}
          x1="872.37"
          y1="-161.829"
          x2="453.066"
          y2="-287.228"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#CD7223" />
          <stop offset="0.53" stopColor="#F48E00" />
          <stop offset="1" stopColor="#FFA92D" />
        </linearGradient>
        <clipPath id={`${id}-clip0_1185_3849`}>
          <rect width="128" height="128" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
}
