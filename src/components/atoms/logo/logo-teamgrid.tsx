import { LogoProps } from '@/components/atoms/logo/types';
import { cn } from '@/lib/utils';
import { defaultLogoSquareSize } from '@/components/atoms/logo/config';

export function LogoTeamGrid({ id, className }: LogoProps) {
  return (
    <svg
      viewBox="0 0 128 128"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn(defaultLogoSquareSize, className)}
      id={id}
    >
      <g clipPath={`url(#${id}-clip0_1185_3849)`}>
        <path
          d="M59.993 89.3286L44.967 104.577V22.9912L59.993 38.2399V89.3286ZM36.7304 87.1025L21.7043 100.014V27.5547L36.7304 40.466V87.1025ZM13.4678 80.9808L0 91.666V38.2399L13.4678 46.5877V80.9808ZM68.1183 89.3286L83.1443 104.577V22.9912L68.1183 38.2399V89.3286ZM91.3809 87.1025L106.407 100.014V27.5547L91.3809 40.466V87.1025ZM114.532 80.9808L128 91.666V38.2399L114.532 46.5877V80.9808Z"
          fill="#365EE4"
        />
      </g>
      <defs>
        <clipPath id={`${id}-clip0_1185_3849`}>
          <rect
            width="128"
            height="81.5861"
            fill="none"
            transform="translate(0 22.9912)"
            className="fill-white dark:fill-black"
          />
        </clipPath>
      </defs>
    </svg>
  );
}
