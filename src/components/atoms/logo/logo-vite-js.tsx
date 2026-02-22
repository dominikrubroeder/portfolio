import { cn } from '@/lib/utils';
import { defaultLogoSquareSize } from '@/components/atoms/logo/config';
import { LogoProps } from '@/components/atoms/logo/types';

export function LogoViteJs({ id, className }: LogoProps) {
  return (
    <svg
      viewBox="0 0 128 129"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn(defaultLogoSquareSize, className)}
    >
      <g clipPath={`url(#${id}-clip0_1156_3294)`}>
        <path
          d="M127.416 19.2493L67.3636 126.634C66.1237 128.851 62.9382 128.864 61.6797 126.657L0.436545 19.2597C-0.934504 16.8554 1.12144 13.9431 3.84599 14.4301L63.9627 25.1756C64.3462 25.2441 64.7388 25.2435 65.1223 25.1736L123.982 14.4455C126.697 13.9506 128.763 16.8403 127.416 19.2493Z"
          fill={`url(#${id}-paint0_linear_1156_3294)`}
        />
        <path
          d="M92.5998 0.335834L48.1591 9.0438C47.4287 9.18691 46.8879 9.80592 46.8438 10.5488L44.1101 56.7191C44.0458 57.8065 45.0445 58.6505 46.1059 58.4058L58.4788 55.5503C59.6365 55.2833 60.6825 56.3029 60.4446 57.4671L56.7686 75.4677C56.5212 76.6792 57.6586 77.7151 58.8417 77.3558L66.4838 75.034C67.6686 74.6743 68.807 75.7131 68.5563 76.9256L62.7145 105.201C62.349 106.969 64.7015 107.934 65.6826 106.417L66.3379 105.405L102.551 33.1358C103.157 31.9258 102.111 30.546 100.782 30.8025L88.0465 33.2605C86.8497 33.4912 85.8314 32.3767 86.1692 31.2057L94.4816 2.38955C94.8198 1.21664 93.7979 0.101098 92.5998 0.335834Z"
          fill={`url(#${id}-paint1_linear_1156_3294)`}
        />
      </g>
      <defs>
        <linearGradient
          id={`${id}-paint0_linear_1156_3294`}
          x1="-1.05875"
          y1="10.5923"
          x2="73.6812"
          y2="112.095"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#41D1FF" />
          <stop offset="1" stopColor="#BD34FE" />
        </linearGradient>
        <linearGradient
          id={`${id}-paint1_linear_1156_3294`}
          x1="60.5125"
          y1="2.70003"
          x2="74.0326"
          y2="95.4465"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#FFEA83" />
          <stop offset="0.0833333" stopColor="#FFDD35" />
          <stop offset="1" stopColor="#FFA800" />
        </linearGradient>
        <clipPath id={`${id}-clip0_1156_3294`}>
          <rect
            width="127.839"
            height="128"
            fill="white"
            transform="translate(0 0.304321)"
          />
        </clipPath>
      </defs>
    </svg>
  );
}
