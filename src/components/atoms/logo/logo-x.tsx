import { cn } from '@/lib/utils';
import { defaultLogoSquareSize } from '@/components/atoms/logo/config';
import { BaseComponentProps } from '@/lib/types';

export function LogoX({ className }: BaseComponentProps) {
  return (
    <svg
      viewBox="0 0 128 129"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn(defaultLogoSquareSize, className)}
    >
      <g clipPath="url(#clip0_1177_3378)">
        <path
          d="M64 128C99.3462 128 128 99.3462 128 64C128 28.6538 99.3462 0 64 0C28.6538 0 0 28.6538 0 64C0 99.3462 28.6538 128 64 128Z"
          fill="black"
        />
        <path
          d="M46.1698 32.7226H36.534L80.8875 96.1659H90.5233L46.1698 32.7226ZM28 28H49.175L67.5343 54.719L90.5203 28H96.7935L70.32 58.773L99.1111 100.674H77.9361L58.5477 72.4572L34.2735 100.674H28L55.7621 68.4031L28 28Z"
          fill="white"
        />
      </g>
      <defs>
        <clipPath id="clip0_1177_3378">
          <rect width="128" height="128" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
}
