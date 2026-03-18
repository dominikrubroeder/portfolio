import { cn } from '@/lib/utils';
import { defaultLogoSquareSize } from '@/components/atoms/logo/config';
import { LogoProps } from '@/components/atoms/logo/types';

export function LogoUpsun({ id, className }: LogoProps) {
  return (
    <svg
      width="128"
      height="129"
      viewBox="0 0 128 129"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      id={id}
      className={cn(defaultLogoSquareSize, className)}
    >
      <g clipPath={`url(#${id}-clip0_1185_3849)`}>
        <path
          d="M63.9853 0.260498C28.6581 0.260498 0 28.889 0 64.2458H31.9852C32.0591 46.56 46.3882 32.2606 64.0295 32.2606C81.6711 32.2606 96.0148 46.5897 96.0148 64.2458H128C127.985 28.9186 99.3569 0.260498 63.9853 0.260498Z"
          fill="none"
          className="fill-[#0E1113] dark:fill-white"
        />
        <path
          d="M96.0002 64.2458H32.0443C32.0443 78.0867 40.8577 89.9021 53.1758 94.3236V94.8706H7.86694C18.7062 114.73 39.8077 128.202 64.0592 128.202C88.3107 128.202 109.368 114.73 120.251 94.8706H74.8688V94.3236C87.2017 89.8724 96.0002 78.0867 96.0002 64.2458Z"
          fill="none"
          className="fill-[#0E1113] dark:fill-white"
        />
      </g>
      <defs>
        <clipPath id={`${id}-clip0_1185_3849`}>
          <rect
            width="128"
            height="127.941"
            transform="translate(0 0.260498)"
            fill="none"
            className="fill-black dark:fill-white"
          />
        </clipPath>
      </defs>
    </svg>
  );
}
