import { LogoProps } from '@/components/atoms/logo/types';
import { cn } from '@/lib/utils';
import { defaultLogoSquareSize } from '@/components/atoms/logo/config';

export function LogoJunie({ id, className }: LogoProps) {
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
          d="M128 42.7004V49.8124C128 99.5898 106.658 128 49.7814 128H42.6667V85.3332H49.7814C74.6622 85.333 85.3516 74.6839 85.3516 49.7786L85.3334 42.7004H128Z"
          fill="#48E054"
        />
        <path
          d="M42.6667 85.3334H0V42.6667L42.6667 42.7006V85.3334Z"
          fill="#48E054"
        />
        <path d="M85.3334 42.7005H42.6667V0H85.3334V42.7005Z" fill="#48E054" />
      </g>
      <defs>
        <clipPath id={`${id}-clip0_1185_3849`}>
          <rect width="128" height="128" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
}
