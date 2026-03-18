import { LogoProps } from '@/components/atoms/logo/types';
import { cn } from '@/lib/utils';

export function LogoTrello({ id, className }: LogoProps) {
  return (
    <svg
      viewBox="0 0 128 129"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      id={id}
      className={cn('size-8', className)}
    >
      <g clipPath={`url(#${id}-clip0_1185_3849)`}>
        <path
          d="M112.615 0.425781H15.1795C6.76923 0.425781 0 7.19501 0 15.6053V113.246C0 121.657 6.76923 128.426 15.1795 128.426H112.615C121.026 128.426 127.795 121.657 127.795 113.246V15.6053C127.795 7.19501 121.026 0.425781 112.615 0.425781ZM54.9744 92.5283C54.9744 95.4001 52.7179 97.6565 49.8462 97.6565H28.5128C25.641 97.6565 23.3846 95.4001 23.3846 92.5283V29.1437C23.3846 26.2719 25.641 24.0155 28.5128 24.0155H49.8462C52.7179 24.0155 54.9744 26.2719 54.9744 29.1437V92.5283ZM104.205 63.4001C104.205 66.2719 101.949 68.5284 99.282 68.5284H77.7436C74.8718 68.5284 72.6154 66.2719 72.6154 63.4001V29.1437C72.6154 26.2719 74.8718 24.0155 77.7436 24.0155H99.0769C101.949 24.0155 104.205 26.2719 104.205 29.1437V63.4001Z"
          fill={`url(#${id}-paint0_linear_1185_3849)`}
        />
      </g>
      <defs>
        <linearGradient
          id={`${id}-paint0_linear_1185_3849`}
          x1="19932.8"
          y1="13440.4"
          x2="19932.8"
          y2="2.57555"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#0052CC" />
          <stop offset="1" stopColor="#2684FF" />
        </linearGradient>
        <clipPath id={`${id}-clip0_1185_3849`}>
          <rect
            width="127.795"
            height="128"
            fill="none"
            transform="translate(0 0.425781)"
            className="fill-white dark:fill-black"
          />
        </clipPath>
      </defs>
    </svg>
  );
}
