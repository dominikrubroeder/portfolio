import { cn } from '@/lib/utils';

import { defaultLogoSquareSize } from '@/components/atoms/logo/config';
import { LogoProps } from '@/components/atoms/logo/types';

export function LogoJira({ id, className }: LogoProps) {
  return (
    <svg
      width="128"
      height="129"
      viewBox="0 0 128 129"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn(defaultLogoSquareSize, className)}
    >
      <g clipPath={`url(#${id}-clip0_978_2566)`}>
        <path
          d="M40.8465 87.6778H29.469C12.3099 87.6778 0 77.1674 0 61.7773H61.1761C64.3469 61.7773 66.3986 64.0297 66.3986 67.2203V128.78C51.1046 128.78 40.8465 116.393 40.8465 99.1263V87.6778ZM71.0613 57.0852H59.6842C42.525 57.0852 30.2151 46.7625 30.2151 31.3728H91.3913C94.5621 31.3728 96.8004 33.4372 96.8004 36.6278V98.1878C81.5061 98.1878 71.0613 85.8006 71.0613 68.5338V57.0852ZM101.463 26.6807H90.0856C72.9265 26.6807 60.6166 16.1704 60.6166 0.780273H121.793C124.964 0.780273 127.015 3.03246 127.015 6.03542V67.5956C111.721 67.5956 101.463 55.2085 101.463 37.9416V26.6807Z"
          fill="#1868DB"
        />
      </g>
      <defs>
        <clipPath id={`${id}-clip0_978_2566`}>
          <rect
            width="127.015"
            height="128"
            fill="white"
            transform="translate(0 0.780273)"
          />
        </clipPath>
      </defs>
    </svg>
  );
}
