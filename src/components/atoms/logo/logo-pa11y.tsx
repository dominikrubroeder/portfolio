import { cn } from '@/lib/utils';

import { defaultLogoSquareSize } from '@/components/atoms/logo/config';
import type { LogoProps } from '@/components/atoms/logo/types';

export function LogoPa11y({ id, className }: LogoProps) {
  return (
    <svg
      width="128"
      height="129"
      viewBox="0 0 128 129"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn(defaultLogoSquareSize, className)}
    >
      <g clipPath={`url(#${id}-clip0_1018_1253)`}>
        <path
          d="M32.1215 0.780273H20.4077C18.4908 0.780273 17 2.27112 17 4.18793V23.7819C17 25.6987 18.4908 27.1896 20.4077 27.1896H32.1215V125.373C32.1215 127.289 33.6123 128.78 35.5291 128.78H58.9567C60.8735 128.78 62.3644 127.289 62.3644 125.373V4.18793C62.3644 2.27112 60.8735 0.780273 58.9567 0.780273L32.1215 0.780273Z"
          fill="#3498DB"
        />
        <path
          d="M80.892 0.780273H69.1782C67.2614 0.780273 65.7705 2.27112 65.7705 4.18793V23.7819C65.7705 25.6987 67.2614 27.1896 69.1782 27.1896H80.892V50.1913C80.892 52.1081 82.3828 53.5989 84.2996 53.5989H107.727C109.644 53.5989 111.135 52.1081 111.135 50.1913V4.18793C111.135 2.27112 109.644 0.780273 107.727 0.780273L80.892 0.780273Z"
          fill="#F39C12"
        />
        <path
          opacity="0.4"
          d="M80.8916 48.9139L111.135 34.0054L80.8916 40.6077V48.9139Z"
          fill="black"
        />
        <g opacity="0.4">
          <path
            d="M62.1501 85.7588L32.1201 100.667L62.1501 94.0649V85.7588Z"
            fill="black"
          />
        </g>
        <path
          d="M111.135 33.792L32.1201 67.2296V100.88L109.005 68.5075C110.283 68.0815 111.135 66.8036 111.135 65.5258V33.792Z"
          fill="#E74C3C"
        />
      </g>
      <defs>
        <clipPath id={`${id}-clip0_1018_1253`}>
          <rect
            width="94.1351"
            height="128"
            fill="white"
            transform="translate(17 0.780273)"
          />
        </clipPath>
      </defs>
    </svg>
  );
}
