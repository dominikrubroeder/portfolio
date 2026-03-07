import { cn } from '@/lib/utils';
import { defaultLogoSquareSize } from '@/components/atoms/logo/config';
import { LogoProps } from '@/components/atoms/logo/types';

export function LogoRemix({ id, className }: LogoProps) {
  return (
    <svg
      viewBox="0 0 128 129"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      id={id}
      className={cn(defaultLogoSquareSize, className)}
    >
      <g clipPath={`url(#${id}-clip0_1185_3849)`}>
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M114.336 98.961C115.488 113.75 115.488 120.683 115.488 128.25H81.2701C81.2701 126.602 81.2996 125.094 81.3294 123.565C81.4219 118.812 81.5185 113.855 80.7484 103.846C79.7306 89.1916 73.4202 85.9353 61.8171 85.9353H51.537H8V59.2732H63.4457C78.1021 59.2732 85.4305 54.8145 85.4305 43.0098C85.4305 32.6299 78.1021 26.3398 63.4457 26.3398H8V0.25H69.5526C102.733 0.25 119.222 15.9217 119.222 40.9556C119.222 59.6802 107.619 71.8918 91.9445 73.9271C105.176 76.5729 112.912 84.1035 114.336 98.961Z"
          fill="none"
          className="fill-[#121212] dark:fill-white"
        />
        <path
          d="M8 128.25V108.374H44.1802C50.2235 108.374 51.5357 112.856 51.5357 115.53V128.25H8Z"
          fill="none"
          className="fill-[#121212] dark:fill-white"
        />
      </g>
      <defs>
        <clipPath id={`${id}-clip0_1185_3849`}>
          <rect
            width="111.222"
            height="128"
            fill="none"
            transform="translate(8 0.25)"
            className="fill-white dark:fill-black"
          />
        </clipPath>
      </defs>
    </svg>
  );
}
