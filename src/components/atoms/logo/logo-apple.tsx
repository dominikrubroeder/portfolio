import { LogoProps } from '@/components/atoms/logo/types';
import { cn } from '@/lib/utils';
import { defaultLogoSquareSize } from '@/components/atoms/logo/config';

export function LogoApple({ id, className }: LogoProps) {
  return (
    <svg
      viewBox="0 0 128 129"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn(defaultLogoSquareSize, className)}
      id={id}
    >
      <g clipPath={`url(#${id}-clip0_1183_3473)`}>
        <path
          d="M112.877 43.6352C112.134 44.2112 99.0272 51.5968 99.0272 68.0192C99.0272 87.0144 115.706 93.7344 116.205 93.9008C116.128 94.3104 113.555 103.104 107.411 112.064C101.933 119.949 96.2112 127.821 87.5072 127.821C78.8032 127.821 76.5632 122.765 66.5152 122.765C56.7232 122.765 53.2416 127.987 45.28 127.987C37.3184 127.987 31.7632 120.691 25.376 111.731C17.9776 101.21 12 84.864 12 69.3504C12 44.4672 28.1792 31.2704 44.1024 31.2704C52.5632 31.2704 59.616 36.8256 64.928 36.8256C69.984 36.8256 77.8688 30.9376 87.4944 30.9376C91.1424 30.9376 104.25 31.2704 112.877 43.6352ZM82.9248 20.4032C86.9056 15.68 89.7216 9.1264 89.7216 2.5728C89.7216 1.664 89.6448 0.7424 89.4784 0C83.0016 0.2432 75.296 4.3136 70.6496 9.7024C67.0016 13.8496 63.5968 20.4032 63.5968 27.0464C63.5968 28.0448 63.7632 29.0432 63.84 29.3632C64.2496 29.44 64.9152 29.5296 65.5808 29.5296C71.392 29.5296 78.7008 25.6384 82.9248 20.4032Z"
          fill="none"
          className="fill-black dark:fill-white"
        />
      </g>
      <defs>
        <clipPath id={`${id}-clip0_1183_3473`}>
          <rect
            width="104.192"
            height="128"
            fill="none"
            transform="translate(12)"
            className="fill-white dark:fill-black"
          />
        </clipPath>
      </defs>
    </svg>
  );
}
