import { LogoProps } from '@/components/atoms/logo/types';
import { cn } from '@/lib/utils';
import { defaultLogoSquareSize } from '@/components/atoms/logo/config';

export function LogoAngular({ id, className }: LogoProps) {
  return (
    <svg
      viewBox="0 0 128 129"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      id={id}
      className={cn(defaultLogoSquareSize, className)}
    >
      <g clipPath={`url(#${id}-clip0_1185_3849)`}>
        <mask
          id={`${id}-mask0_1185_3849`}
          maskUnits="userSpaceOnUse"
          x="5"
          y="0"
          width="119"
          height="128"
        >
          <path d="M5 0H123.938V128H5V0Z" fill="white" />
        </mask>
        <g mask={`url(#${id}-mask0_1185_3849)`}>
          <path
            d="M123.937 20.9899L119.642 88.4298L78.5796 0L123.937 20.9899ZM95.4955 108.193L64.4686 125.897L33.4412 108.193L39.7517 92.8996H89.1849L95.4955 108.193ZM64.4686 33.5665L80.7267 73.0928H48.2099L64.4686 33.5665ZM9.25078 88.4298L5 20.9899L50.357 0L9.25078 88.4298Z"
            fill={`url(#${id}-paint0_linear_1185_3849)`}
          />
          <path
            d="M123.937 20.9899L119.642 88.4298L78.5796 0L123.937 20.9899ZM95.4955 108.193L64.4686 125.897L33.4412 108.193L39.7517 92.8996H89.1849L95.4955 108.193ZM64.4686 33.5665L80.7267 73.0928H48.2099L64.4686 33.5665ZM9.25078 88.4298L5 20.9899L50.357 0L9.25078 88.4298Z"
            fill={`url(#${id}-paint1_radial_1185_3849)`}
          />
        </g>
      </g>
      <defs>
        <linearGradient
          id={`${id}-paint0_linear_1185_3849`}
          x1="5"
          y1="102.828"
          x2="530.925"
          y2="102.828"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#F0070C" />
          <stop offset="0.526" stopColor="#CC26D5" />
          <stop offset="1" stopColor="#7702FF" />
        </linearGradient>
        <radialGradient
          id={`${id}-paint1_radial_1185_3849`}
          cx="0"
          cy="0"
          r="1"
          gradientUnits="userSpaceOnUse"
          gradientTransform="translate(168.615 -32.9375) rotate(118.122) scale(110.216 110.216)"
        >
          <stop stopColor="#FF41F8" />
          <stop offset="0.707" stopColor="#FF41F8" stopOpacity="0.5" />
          <stop offset="1" stopColor="#FF41F8" stopOpacity="0" />
        </radialGradient>
        <clipPath id={`${id}-clip0_1185_3849`}>
          <rect
            width="118.938"
            height="128"
            fill="none"
            transform="translate(5)"
            className="fill-white dark:fill-black"
          />
        </clipPath>
      </defs>
    </svg>
  );
}
