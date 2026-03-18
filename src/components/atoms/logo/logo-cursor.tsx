import { cn } from '@/lib/utils';
import { defaultLogoSquareSize } from '@/components/atoms/logo/config';
import { LogoProps } from '@/components/atoms/logo/types';

export function LogoCursor({ id, className }: LogoProps) {
  return (
    <svg
      viewBox="0 0 128 129"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn(defaultLogoSquareSize, className)}
      id={id}
    >
      <g clipPath={`url(#${id}-clip0_1185_3849)`}>
        <path
          d="M118.04 30.2963L66.7979 0.712173C65.1524 -0.238042 63.1221 -0.238042 61.4767 0.712173L10.2372 30.2963C8.85399 31.095 8 32.572 8 34.1718V93.8285C8 95.4282 8.85399 96.9052 10.2372 97.7039L61.4791 127.288C63.1245 128.238 65.1548 128.238 66.8003 127.288L118.042 97.7039C119.425 96.9052 120.279 95.4282 120.279 93.8285V34.1718C120.279 32.572 119.425 31.095 118.042 30.2963H118.04ZM114.821 36.563L65.3545 122.241C65.0201 122.818 64.1373 122.583 64.1373 121.914V65.8127C64.1373 64.6917 63.5383 63.6549 62.5664 63.092L13.9827 35.0426C13.4054 34.7082 13.6412 33.8254 14.3099 33.8254H113.243C114.648 33.8254 115.526 35.3481 114.823 36.5654H114.821V36.563Z"
          fill="none"
          className="fill-[#26251E] dark:fill-[#EDECEC]"
        />
      </g>
      <defs>
        <clipPath id={`${id}-clip0_1185_3849`}>
          <rect
            width="112.277"
            height="128"
            transform="translate(8)"
            fill="none"
            className="fill-white dark:fill-black"
          />
        </clipPath>
      </defs>
    </svg>
  );
}
