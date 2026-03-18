import { LogoProps } from '@/components/atoms/logo/types';
import { cn } from '@/lib/utils';
import { defaultLogoSquareSize } from '@/components/atoms/logo/config';

export function LogoMobbin({ id, className }: LogoProps) {
  return (
    <svg
      viewBox="0 0 128 128"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      id={id}
      className={cn(defaultLogoSquareSize, className)}
    >
      <g clipPath={`url(#${id}-clip0_1185_3849)`}>
        <path
          d="M77.6752 93.8913H44.3575V78.5267L29.9916 93.8903L0 93.8767V62.5373L26.0696 34.9561H62.1066V49.6175L76.1444 34.9561H107.366V59.0711H128V93.8913H91.2726V79.349L77.6752 93.8913Z"
          fill="none"
          className="fill-black dark:fill-white"
        />
      </g>
      <defs>
        <clipPath id={`${id}-clip0_1185_3849`}>
          <rect
            width="128"
            height="58.9353"
            transform="translate(0 34.9561)"
            fill="none"
            className="fill-white dark:fill-black"
          />
        </clipPath>
      </defs>
    </svg>
  );
}
