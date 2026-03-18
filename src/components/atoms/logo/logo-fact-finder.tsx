import { LogoProps } from '@/components/atoms/logo/types';
import { cn } from '@/lib/utils';
import { defaultLogoSquareSize } from '@/components/atoms/logo/config';

export function LogoFactFinder({ id, className }: LogoProps) {
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
          d="M0 0.294922V128.018H14.2045V14.4995H85.2863H85.3687V28.6921H85.2863H28.4621V71.2882H85.2863H85.3687V85.4867H85.2863H28.6684H28.4621V128.018L128 128.053V0.336211V0.330287H113.801V0.336211V113.819H42.702H42.6609V99.6854H42.702H99.5675V57.0894H42.702H42.6609V57.0835V42.8909H42.702H99.5675V0.294922H0Z"
          fill="#AA73F2"
        />
      </g>
      <defs>
        <clipPath id={`${id}-clip0_1185_3849`}>
          <rect
            width="128"
            height="127.758"
            fill="white"
            transform="translate(0 0.294922)"
          />
        </clipPath>
      </defs>
    </svg>
  );
}
