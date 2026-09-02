import { cn } from '@/lib/utils';
import { defaultLogoSquareSize } from '@/components/atoms/logo/config';
import { LogoProps } from '@/components/atoms/logo/types';

export function LogoHeroUi({ id, className }: LogoProps) {
  return (
    <svg
      viewBox="0 0 128 128"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      id={id}
      className={cn(defaultLogoSquareSize, className)}
    >
      <g clipPath={`url(#${id}-clip0_1486_7374)`}>
        <path
          d="M18 31.9214V70.1659C18 71.9735 18.9292 73.6534 20.4578 74.6092L46.532 90.9147C50.0065 93.0875 54.507 90.5802 54.507 86.4714V54.3239C54.507 52.4742 55.4792 50.762 57.0647 49.8192L72.9698 40.364V122.756C72.9698 126.851 77.4431 129.361 80.9189 127.216L107.831 110.606C109.374 109.653 110.315 107.965 110.315 106.146V27.0264C110.315 22.9514 105.88 20.4387 102.404 22.5436L72.9698 40.364V5.2434C72.9698 1.17941 68.557 -1.33493 65.08 0.747887L20.543 27.4259C18.9659 28.3707 18 30.0781 18 31.9214Z"
          fill="none"
          className="fill-foreground"
        />
      </g>
      <defs>
        <clipPath id={`${id}-clip0_1486_7374`}>
          <rect
            width="92.3146"
            height="128"
            fill="none"
            transform="translate(18)"
            className="fill-background"
          />
        </clipPath>
      </defs>
    </svg>
  );
}
