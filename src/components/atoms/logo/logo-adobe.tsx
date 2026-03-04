import { LogoProps } from '@/components/atoms/logo/types';
import { cn } from '@/lib/utils';
import { defaultLogoSquareSize } from '@/components/atoms/logo/config';

export function LogoAdobe({ id, className }: LogoProps) {
  return (
    <svg
      viewBox="0 0 128 128"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      id={id}
      className={cn(defaultLogoSquareSize, className)}
    >
      <g clipPath={`url(#${id}-clip0_1185_3849)`}>
        <path d="M80.688 7.72949H128V121.007L80.688 7.72949Z" fill="#FA0F00" />
        <path d="M47.3502 7.72949H0V121.007L47.3502 7.72949Z" fill="#FA0F00" />
        <path
          d="M64.0191 49.4788L94.1632 121.008H74.406L65.3906 98.2292H43.3315L64.0191 49.4788Z"
          fill="#FA0F00"
        />
      </g>
      <defs>
        <clipPath id={`${id}-clip0_1185_3849`}>
          <rect
            width="128"
            height="113.278"
            fill="none"
            transform="translate(0 7.72949)"
            className="fill-white dark:fill-black"
          />
        </clipPath>
      </defs>
    </svg>
  );
}
