import { cn } from '@/lib/utils';

import { defaultIconSize } from '@/components/atoms/logo/config';
import type { LogoProps } from '@/components/atoms/logo/types';

export function HotjarLogo({ className }: LogoProps) {
  return (
    <svg
      width="128"
      height="128"
      viewBox="0 0 128 128"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn(defaultIconSize, className)}
    >
      <path
        d="M53.5831 52.7797C68.4163 44.5531 88.748 33.2578 88.748 0.437012H64.1538C64.1538 18.8081 55.2028 23.7951 41.6483 31.2969C26.8151 39.5235 6.4834 50.819 6.4834 83.6397H31.0776C31.0776 65.2685 40.0286 60.2816 53.5831 52.7797Z"
        fill="#E73C1F"
      />
      <path
        d="M96.1654 45.2344C96.1654 63.6054 87.2144 68.5925 73.66 76.0944C58.8268 84.3208 38.4951 95.6163 38.4951 128.437H63.0891C63.0891 110.066 72.0403 105.079 85.5948 97.577C100.428 89.3504 120.76 78.0551 120.76 45.2344H96.1654Z"
        fill="#E73C1F"
      />
    </svg>
  );
}
