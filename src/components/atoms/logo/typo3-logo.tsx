import { cn } from '@/lib/utils';

import { defaultLogoSquareSize } from '@/components/atoms/logo/config';
import type { LogoProps } from '@/components/atoms/logo/types';

export function Typo3Logo({ className }: LogoProps) {
  return (
    <svg
      width="128"
      height="129"
      viewBox="0 0 128 129"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn(defaultLogoSquareSize, className)}
    >
      <path
        d="M96.5962 88.9913C94.696 89.5514 93.1817 89.7445 91.2008 89.7445C74.9479 89.7445 51.075 32.9481 51.075 14.045C51.075 7.08153 52.7284 4.76037 55.0527 2.77148C35.1576 5.09106 11.2814 12.3884 3.65185 21.673C1.99524 23.9957 1 27.6428 1 32.2836C1 61.7988 32.5026 128.78 54.7221 128.78C65.0003 128.78 82.337 111.869 96.5962 88.9913Z"
        fill="#FF8700"
      />
      <path
        d="M86.223 0.780273C106.783 0.780273 127.346 4.09667 127.346 15.7025C127.346 39.2479 112.423 67.7663 104.795 67.7663C91.2007 67.7663 74.2881 29.9648 74.2881 11.0617C74.2881 2.44005 77.6045 0.780273 86.223 0.780273Z"
        fill="#FF8700"
      />
    </svg>
  );
}
