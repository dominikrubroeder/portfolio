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
      className={cn('rounded-2xl-xl', defaultLogoSquareSize, className)}
    >
      <rect width="128" height="128" fill="#4B4B4B" />
      <path
        d="M38.3999 80.0003L89.5999 62.9336V82.1336L38.3999 99.2003V80.0003Z"
        fill="url(#paint0_linear_1185_3849)"
      />
      <path
        d="M89.5999 28.8L38.3999 45.8688V65.0688L89.5999 82.1313V62.9313L67.1999 55.4688L89.5999 48V28.8Z"
        fill="url(#paint1_linear_1185_3849)"
      />
      <defs>
        <linearGradient
          id="paint0_linear_1185_3849"
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
          id="paint1_linear_1185_3849"
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
      </defs>
    </svg>
  );
}
