import { LogoProps } from '@/components/atoms/logo/types';
import { cn } from '@/lib/utils';
import { defaultLogoSquareSize } from '@/components/atoms/logo/config';

export function LogoBetterAuth({ id, className }: LogoProps) {
  return (
    <svg
      viewBox="0 0 128 129"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      id={id}
      className={cn(defaultLogoSquareSize, className)}
    >
      <g clipPath={`url(#${id}-clip0_1183_3473)`}>
        <path
          d="M128 0.3479H0V128.348H128V0.3479Z"
          fill="none"
          className="fill-black dark:fill-white"
        />
        <path
          d="M39.933 31.3239H17.6641V97.6279H39.933V31.3239Z"
          fill="none"
          className="fill-white dark:fill-black"
        />
        <path
          d="M110.08 31.3239H86.4192V97.6279H110.08V31.3239Z"
          fill="none"
          className="fill-white dark:fill-black"
        />
        <path
          d="M109.384 52.6885V31.3239L64.7072 31.3239V52.6885H109.384Z"
          fill="none"
          className="fill-white dark:fill-black"
        />
        <path
          d="M110.08 97.6278V76.2632H64.7072V97.6278H110.08Z"
          fill="none"
          className="fill-white dark:fill-black"
        />
        <path
          d="M64.707 76.2631V52.6884H39.9329V76.2631H64.707Z"
          fill="none"
          className="fill-white dark:fill-black"
        />
      </g>
      <defs>
        <clipPath id={`${id}-clip0_1183_3473`}>
          <rect
            width="128"
            height="128"
            fill="none"
            transform="translate(0 0.3479)"
            className="fill-white dark:fill-black"
          />
        </clipPath>
      </defs>
    </svg>
  );
}
