import { cn } from '@/lib/utils';

import { defaultIconSize } from '@/components/atoms/logo/config';

export function VercelLogo({ className }: { className?: string }) {
  return (
    <svg
      width="128"
      height="111"
      viewBox="0 0 128 111"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn(defaultIconSize, className)}
    >
      <g clipPath="url(#clip0_878_981)">
        <path d="M64 0L128 110.853H0L64 0Z" fill="black" />
      </g>
      <defs>
        <clipPath id="clip0_878_981">
          <rect width="128" height="110.853" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
}
