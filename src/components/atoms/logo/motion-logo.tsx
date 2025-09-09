import { cn } from '@/lib/utils';

import { defaultIconSize } from '@/components/atoms/logo/config';

export function MotionLogo({ className }: { className?: string }) {
  return (
    <svg
      width="128"
      height="128"
      viewBox="0 0 128 128"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn(defaultIconSize, className)}
    >
      <g clipPath="url(#clip0_657_558)">
        <rect width="128" height="128" fill="#FFF312" />
        <path
          d="M53.2347 48L35.32 79.9707H19L32.9867 55.008C35.1573 51.136 40.568 48 45.0747 48H53.2347ZM93.256 55.992C93.256 51.5787 96.9093 48 101.416 48C105.923 48 109.576 51.5787 109.576 55.992C109.576 60.408 105.923 63.9867 101.416 63.9867C96.9093 63.9867 93.256 60.408 93.256 55.992ZM56.2933 48H72.6133L54.6987 79.9707H38.3787L56.2933 48ZM75.5707 48H91.8907L77.9013 72.9653C75.7333 76.8347 70.3227 79.9707 65.816 79.9707H57.656L75.5707 48Z"
          fill="black"
        />
      </g>
      <defs>
        <clipPath id="clip0_657_558">
          <rect width="128" height="128" rx="28.4444" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
}
