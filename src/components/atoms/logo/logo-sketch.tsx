import { cn } from '@/lib/utils';

import { defaultLogoSquareSize } from '@/components/atoms/logo';
import type { LogoProps } from '@/components/atoms/logo/types';

export function LogoSketch({ id, className }: LogoProps) {
  return (
    <svg
      width="128"
      height="129"
      viewBox="0 0 128 129"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn(defaultLogoSquareSize, className)}
    >
      <g clipPath={`url(#${id}-clip0_1018_1222)`}>
        <path
          d="M27.9268 10.1653L63.9994 6.35168L100.072 10.1653L127.999 47.6552L63.9994 122.182L-0.000488281 47.6552L27.9268 10.1653Z"
          fill="#FDB300"
        />
        <path
          d="M25.9227 47.6552L63.9995 122.182L-0.000488281 47.6552H25.9227Z"
          fill="#EA6C00"
        />
        <path
          d="M102.076 47.6552L63.999 122.182L127.999 47.6552H102.076Z"
          fill="#EA6C00"
        />
        <path
          d="M25.9229 47.6552H102.076L63.9997 122.182L25.9229 47.6552Z"
          fill="#FDAD00"
        />
        <path
          d="M63.9997 6.35168L27.9268 10.1653L25.9229 47.6551L63.9997 6.35168Z"
          fill="#FDD231"
        />
        <path
          d="M63.9994 6.35168L100.072 10.1653L102.076 47.6551L63.9994 6.35168Z"
          fill="#FDD231"
        />
        <path
          d="M128 47.6552L100.072 10.1653L102.076 47.6552H128Z"
          fill="#FDAD00"
        />
        <path
          d="M-0.000488281 47.6552L27.9267 10.1653L25.9227 47.6552H-0.000488281Z"
          fill="#FDAD00"
        />
        <path
          d="M63.9997 6.35168L25.9229 47.6551H102.076L63.9997 6.35168Z"
          fill="#FEEEB7"
        />
      </g>
      <defs>
        <clipPath id={`${id}-clip0_1018_1222`}>
          <rect
            width="128"
            height="115.831"
            fill="white"
            transform="translate(0 6.35168)"
          />
        </clipPath>
      </defs>
    </svg>
  );
}
