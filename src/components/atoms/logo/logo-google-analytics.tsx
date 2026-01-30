import { cn } from '@/lib/utils';

import { defaultLogoSquareSize } from '@/components/atoms/logo/config';
import type { LogoProps } from '@/components/atoms/logo/types';

export function LogoGoogleAnalytics({ className }: LogoProps) {
  return (
    <svg
      width="128"
      height="128"
      viewBox="0 0 128 128"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn(defaultLogoSquareSize, className)}
    >
      <path
        d="M89 15.053V111.053C89 121.803 96.4091 127.78 104.273 127.78C111.545 127.78 119.545 122.689 119.545 111.053V15.7802C119.545 5.93935 112.273 -0.219727 104.273 -0.219727C96.2727 -0.219727 89 6.57572 89 15.053Z"
        fill="#F8AB00"
      />
      <path
        d="M49 63.78V111.053C49 121.803 56.4091 127.78 64.2727 127.78C71.5455 127.78 79.5455 122.689 79.5455 111.053V64.5073C79.5455 54.6664 72.2727 48.5073 64.2727 48.5073C56.2727 48.5073 49 55.3028 49 63.78Z"
        fill="#E37300"
      />
      <path
        d="M39.5455 112.508C39.5455 120.939 32.7045 127.78 24.2727 127.78C15.8409 127.78 9 120.939 9 112.508C9 104.076 15.8409 97.2349 24.2727 97.2349C32.7045 97.2349 39.5455 104.076 39.5455 112.508Z"
        fill="#E37300"
      />
    </svg>
  );
}
