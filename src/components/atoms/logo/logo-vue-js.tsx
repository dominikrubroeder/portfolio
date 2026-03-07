import { LogoProps } from '@/components/atoms/logo/types';
import { cn } from '@/lib/utils';
import { defaultLogoSquareSize } from '@/components/atoms/logo/config';

export function LogoVueJs({ id, className }: LogoProps) {
  return (
    <svg
      viewBox="0 0 128 128"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn(defaultLogoSquareSize, className)}
    >
      <g clipPath={`url(#${id}-clip0_1185_3849)`}>
        <path
          d="M78.8 8.50879L64 33.9088L49.2 8.50879H0L64 118.509L128 8.50879H78.8Z"
          fill="#42B883"
        />
        <path
          d="M78.8003 8.50879L64.0003 33.9088L49.2003 8.50879H25.6003L64.0003 74.5088L102.4 8.50879H78.8003Z"
          fill="#35495E"
        />
      </g>
      <defs>
        <clipPath id={`${id}-clip0_1185_3849`}>
          <rect
            width="128"
            height="110"
            fill="none"
            transform="translate(0 8.50879)"
            className="fill-white dark:fill-black"
          />
        </clipPath>
      </defs>
    </svg>
  );
}
