import { cn } from '@/lib/utils';

import { defaultLogoSquareSize } from '@/components/atoms/logo/config';
import type { LogoProps } from '@/components/atoms/logo/types';

export function LogoRadixUi({ id, className }: LogoProps) {
  return (
    <svg
      width="128"
      height="129"
      viewBox="0 0 128 129"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn(defaultLogoSquareSize, className)}
    >
      <g clipPath={`url(#${id}-clip0_981_2039)`}>
        <path
          d="M60.9565 128C39.4414 128 22 109.313 22 86.2611C22 63.2089 39.4414 44.522 60.9565 44.522V128Z"
          className="fill-foreground"
        />
        <path
          d="M60.9565 0H22V38.9565H60.9565V0Z"
          className="fill-foreground"
        />
        <path
          d="M86 38.9565C96.7576 38.9565 105.478 30.2358 105.478 19.4783C105.478 8.7207 96.7576 0 86 0C75.2426 0 66.5217 8.7207 66.5217 19.4783C66.5217 30.2358 75.2426 38.9565 86 38.9565Z"
          className="fill-foreground"
        />
      </g>
      <defs>
        <clipPath id={`${id}-clip0_981_2039`}>
          <rect
            width="83.4783"
            height="128"
            transform="translate(22)"
            className="fill-background"
          />
        </clipPath>
      </defs>
    </svg>
  );
}
