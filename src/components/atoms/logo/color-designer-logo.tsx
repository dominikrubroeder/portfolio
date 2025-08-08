import { cn } from '@/lib/utils';

import { defaultIconSize } from '@/components/atoms/logo/config';
import type { LogoProps } from '@/components/atoms/logo/types';

export function ColorDesignerLogo({ className }: LogoProps) {
  return (
    <svg
      width="128"
      height="129"
      viewBox="0 0 128 129"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn(defaultIconSize, className)}
    >
      <g clipPath="url(#clip0_1018_1253)">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M13.7734 29.6868L63.8413 0.780273L113.909 29.6868L63.8413 58.5932L13.7734 29.6868Z"
          fill="#DC3522"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M69.5621 126.315L69.5622 68.5013L119.63 39.5946L119.63 97.4078L69.5621 126.315Z"
          fill="#283593"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M8.03364 39.6071L58.1013 68.5138L58.1015 126.327L8.03382 97.4203L8.03364 39.6071Z"
          fill="#F9A825"
        />
      </g>
      <defs>
        <clipPath id="clip0_1018_1253">
          <rect
            width="128"
            height="128"
            fill="white"
            transform="translate(0 0.780273)"
          />
        </clipPath>
      </defs>
    </svg>
  );
}
