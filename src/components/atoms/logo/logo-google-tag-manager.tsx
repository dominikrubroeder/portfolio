import { cn } from '@/lib/utils';

import { defaultLogoSquareSize } from '@/components/atoms/logo/config';
import type { LogoProps } from '@/components/atoms/logo/types';

export function LogoGoogleTagManager({ className }: LogoProps) {
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
        d="M75.129 122.536L52.9111 100.871L100.627 52.1445L123.63 74.6897L75.129 122.536Z"
        fill="#8AB4F8"
      />
      <path
        d="M75.2244 26.7488L53.0865 4.14551L4.67994 52.0939C-1.55998 58.3338 -1.55998 68.4501 4.67994 74.6973L52.3593 122.689L74.9044 101.599L38.5776 63.3956L75.2244 26.7488Z"
        fill="#4285F4"
      />
      <path
        d="M123.311 52.465L75.3115 4.46566C69.0643 -1.78152 58.9336 -1.78152 52.6864 4.46566C46.4392 10.7128 46.4392 20.8436 52.6864 27.0908L100.686 75.0901C106.933 81.3373 117.064 81.3373 123.311 75.0901C129.558 68.843 129.558 58.7122 123.311 52.465Z"
        fill="#8AB4F8"
      />
      <path
        d="M63.6313 127.78C72.2669 127.78 79.2674 120.78 79.2674 112.144C79.2674 103.508 72.2669 96.5078 63.6313 96.5078C54.9957 96.5078 47.9951 103.508 47.9951 112.144C47.9951 120.78 54.9957 127.78 63.6313 127.78Z"
        fill="#246FDB"
      />
    </svg>
  );
}
