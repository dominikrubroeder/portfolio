import { cn } from '@/lib/utils';

import { defaultLogoSquareSize } from '@/components/atoms/logo/config';
import type { LogoProps } from '@/components/atoms/logo/types';

export function CookiehubLogo({ className }: LogoProps) {
  return (
    <svg
      width="128"
      height="129"
      viewBox="0 0 128 129"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn(defaultLogoSquareSize, className)}
    >
      <path
        d="M104.626 86.2435C116.65 74.3897 116.65 55.1706 104.626 43.3168C92.6015 31.4627 73.1066 31.4627 61.0824 43.3168C49.0586 55.1706 49.0583 74.3897 61.0824 86.2435C73.1066 98.0976 92.6015 98.0976 104.626 86.2435Z"
        fill="none"
        className="fill-foreground"
      />
      <path
        d="M79.9191 106.537C68.6854 106.537 57.9119 102.137 49.9686 94.3062C42.0253 86.4754 37.5628 75.8544 37.5628 64.7799C37.5628 53.7052 42.0253 43.0845 49.9686 35.2534C57.9119 27.4226 68.6854 23.0232 79.9191 23.0232V0.779785C62.7013 0.779785 46.1889 7.52262 34.0143 19.525C21.8397 31.5273 15 47.806 15 64.7799C15 81.7538 21.8397 98.0325 34.0143 110.035C46.1889 122.037 62.7013 128.78 79.9191 128.78V106.537Z"
        fill="#E51E25"
      />
    </svg>
  );
}
