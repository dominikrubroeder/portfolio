import { cn } from '@/lib/utils';
import { defaultLogoSquareSize } from '@/components/atoms/logo/config';
import { LogoProps } from '@/components/atoms/logo/types';

export function LogoBaseUi({ id, className }: LogoProps) {
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
          d="M70.2732 34.9982C68.6697 34.8993 67.3635 36.2111 67.3635 37.8178V128C93.07 128 113.909 107.161 113.909 81.4542C113.909 56.7252 94.624 36.5001 70.2732 34.9982Z"
          fill="none"
          className="fill-black dark:fill-white"
        />
        <path
          d="M61.5455 51.2V64V128C35.8391 128 15 105.077 15 76.8V64V0C40.7064 0 61.5455 22.923 61.5455 51.2Z"
          fill="none"
          className="fill-black dark:fill-white"
        />
      </g>
      <defs>
        <clipPath id={`${id}-clip0_1185_3849`}>
          <rect
            width="98.9091"
            height="128"
            transform="translate(15)"
            fill="none"
            className="fill-white dark:fill-black"
          />
        </clipPath>
      </defs>
    </svg>
  );
}
