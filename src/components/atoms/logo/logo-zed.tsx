import { LogoProps } from '@/components/atoms/logo/types';
import { cn } from '@/lib/utils';
import { defaultLogoSquareSize } from '@/components/atoms/logo/config';

export function LogoZed({ id, className }: LogoProps) {
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
          d="M8 12C8 9.79084 9.79084 8 12 8H114.343L100.343 22H30C25.5817 22 22 25.5817 22 30V80H30V30H92.3431L78.3431 44H50C46.6863 44 44 46.6863 44 50V60H52V52H70.3431L4.58579 117.757C0.806006 121.537 3.483 128 8.82843 128H116C122.628 128 128 122.628 128 116V28H120V116C120 118.209 118.209 120 116 120H13.6569L27.6569 106H98C102.419 106 106 102.419 106 98V48H98V98H35.6569L49.4068 84.25H78C81.3137 84.25 84 81.5637 84 78.25V68H76V76.25H57.4068L123.414 10.2427C127.194 6.46287 124.517 0 119.172 0H12C5.37259 0 0 5.37259 0 12V100H8V12Z"
          fill="none"
          className="fill-[#084CCF] dark:fill-white"
        />
      </g>
      <defs>
        <clipPath id={`${id}-clip0_1185_3849`}>
          <rect width="128" height="128" fill="none" className="fill-white" />
        </clipPath>
      </defs>
    </svg>
  );
}
