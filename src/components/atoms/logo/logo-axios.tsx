import { cn } from '@/lib/utils';

import { defaultLogoSquareSize } from '@/components/atoms/logo/config';
import type { LogoProps } from '@/components/atoms/logo/types';

export function LogoAxios({ id, className }: LogoProps) {
  return (
    <svg
      width="128"
      height="128"
      viewBox="0 0 128 128"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn(defaultLogoSquareSize, className)}
    >
      <g clipPath={`url(#${id}-clip0_1018_1253)`}>
        <g clipPath={`url(#${id}-clip1_1018_1253)`}>
          <path
            d="M59.4991 15.2441L27 41.7197H48.224V127.78L59.4991 118.699V15.2441Z"
            fill="#5A29E4"
          />
          <path
            d="M68.8643 111.013L101.935 83.8732H80.1165V-0.219727L68.8643 7.61444V111.013Z"
            fill="#5A29E4"
          />
        </g>
      </g>
      <defs>
        <clipPath id={`${id}-clip0_1018_1253`}>
          <rect width="128" height="128" fill="white" />
        </clipPath>
        <clipPath id={`${id}-clip1_1018_1253`}>
          <rect
            width="74.9344"
            height="128"
            fill="white"
            transform="translate(27 -0.219727)"
          />
        </clipPath>
      </defs>
    </svg>
  );
}
