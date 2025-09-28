import { cn } from '@/lib/utils';

import { defaultLogoSquareSize } from '@/components/atoms/logo/config';
import type { LogoProps } from '@/components/atoms/logo/types';

export function UsercentricsLogo({ className }: LogoProps) {
  return (
    <svg
      width="128"
      height="127"
      viewBox="0 0 128 127"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn(defaultLogoSquareSize, className)}
    >
      <g clipPath="url(#clip0_1032_1360)">
        <path
          d="M18.7535 18.5756V63.3971C18.7535 88.1171 39.0491 108.219 64.0111 108.219C88.9709 108.219 109.269 88.1189 109.269 63.3971V18.5756H18.7535ZM64.0111 126.794C28.7296 126.794 0 98.3641 0 63.3971V0H128V63.3971C128 98.3387 99.294 126.794 63.9889 126.794H64.0111Z"
          fill="none"
          className="fill-foreground"
        />
        <path
          d="M31.9609 53.0654L51.0161 86.238H72.7008L53.6461 53.0654H31.9609Z"
          fill="none"
          className="fill-foreground"
        />
        <path
          d="M75.8753 34.1211L50.9404 86.2394H72.6002L97.5604 34.1211H75.8753Z"
          fill="none"
          className="fill-foreground"
        />
      </g>
      <defs>
        <clipPath id="clip0_1032_1360">
          <rect width="128" height="126.794" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
}
