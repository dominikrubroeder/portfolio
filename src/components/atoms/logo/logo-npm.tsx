import { cn } from '@/lib/utils';

import { defaultLogoSquareSize, type LogoProps } from '@/components/atoms/logo';

export function LogoNpm({ id, className }: LogoProps) {
  return (
    <svg
      width="128"
      height="129"
      viewBox="0 0 128 129"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn(defaultLogoSquareSize, 'mt-1.5', className)}
    >
      <g clipPath={`url(#${id}-clip0_979_992)`}>
        <path
          d="M0 39H128V81.6667H64V88.7778H35.5556V81.6667H0V39ZM7.11111 74.5556H21.3333V53.2222H28.4444V74.5556H35.5556V46.1111H7.11111V74.5556ZM42.6667 46.1111V81.6667H56.8889V74.5556H71.1111V46.1111H42.6667ZM56.8889 53.2222H64V67.4444H56.8889V53.2222ZM78.2222 46.1111V74.5556H92.4444V53.2222H99.5556V74.5556H106.667V53.2222H113.778V74.5556H120.889V46.1111H78.2222Z"
          fill="#CB3837"
        />
        <path
          d="M7.11108 74.5553H21.3333V53.222H28.4444V74.5553H35.5555V46.1108H7.11108V74.5553Z"
          fill="white"
        />
        <path
          d="M42.6667 46.1108V81.6664H56.889V74.5553H71.1112V46.1108H42.6667ZM64.0001 67.4442H56.889V53.222H64.0001V67.4442Z"
          fill="white"
        />
        <path
          d="M78.2222 46.1108V74.5553H92.4444V53.222H99.5555V74.5553H106.667V53.222H113.778V74.5553H120.889V46.1108H78.2222Z"
          fill="white"
        />
      </g>
      <defs>
        <clipPath id={`${id}-clip0_979_992`}>
          <rect
            width="128"
            height="49.7778"
            fill="white"
            transform="translate(0 39)"
          />
        </clipPath>
      </defs>
    </svg>
  );
}
