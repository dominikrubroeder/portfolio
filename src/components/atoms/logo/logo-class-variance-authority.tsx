import { LogoProps } from '@/components/atoms/logo/types';
import { cn } from '@/lib/utils';
import { defaultLogoSquareSize } from '@/components/atoms/logo/config';

export function LogoClassVarianceAuthority({ id, className }: LogoProps) {
  return (
    <svg
      viewBox="0 0 128 128"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      id={id}
      className={cn(defaultLogoSquareSize, className)}
    >
      <g clipPath={`url(#${id}-clip0_1185_3849)`}>
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M43.029 74.3203C51.6074 69.3605 57.3793 60.0871 57.3793 49.4655H78.3448L61.7931 78.1552H78.3448L61.7931 106.845L43.029 74.3203ZM43.029 74.3203C38.8103 76.7593 33.9129 78.1552 28.6897 78.1552C12.8448 78.1552 0 65.3104 0 49.4655C0 33.6207 12.8448 20.7759 28.6897 20.7759C44.5345 20.7759 57.3793 33.6207 57.3793 49.4655H28.6897L43.029 74.3203ZM78.3448 78.1552H128L94.8966 20.7759L78.3448 49.4655H94.8966L78.3448 78.1552Z"
          fill="url(#paint0_linear_1185_3849)"
        />
      </g>
      <defs>
        <linearGradient
          id={`${id}-paint0_linear_1185_3849`}
          x1="64"
          y1="20.7759"
          x2="64"
          y2="106.845"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0.145833" stopColor="white" />
          <stop offset="0.822917" />
        </linearGradient>
        <clipPath id={`${id}-clip0_1185_3849`}>
          <rect
            width="128"
            height="86.069"
            fill="white"
            transform="translate(0 20.7759)"
          />
        </clipPath>
      </defs>
    </svg>
  );
}
