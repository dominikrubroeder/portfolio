import { LogoProps } from '@/components/atoms/logo/types';
import { cn } from '@/lib/utils';
import { defaultLogoSquareSize } from '@/components/atoms/logo/config';

export function LogoUnsplash({ id, className }: LogoProps) {
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
          d="M40 36V0H88V36H40ZM88 56H128V128H0V56H40V92H88V56Z"
          fill="none"
          className="fill-black dark:fill-white"
        />
      </g>
      <defs>
        <clipPath id={`${id}-clip0_1185_3849`}>
          <rect
            width="128"
            height="128"
            fill="none"
            className="fill-white dark:fill-black"
          />
        </clipPath>
      </defs>
    </svg>
  );
}
