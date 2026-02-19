import { cn } from '@/lib/utils';

import { defaultLogoSquareSize } from '@/components/atoms/logo/config';
import type { LogoProps } from '@/components/atoms/logo/types';

export function LogoV0({ id, className }: LogoProps) {
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
        d="M48.7619 77.7142V46.1904H60.9524V86.3809C60.9524 91.1148 57.1148 94.9523 52.3809 94.9523C50.1207 94.9523 47.8896 94.0809 46.2857 92.4771L0 46.1904H17.2381L48.7619 77.7142Z"
        fill="none"
        className="fill-foreground"
      />
      <path
        d="M128 82.7619H115.81V54.8571L87.9049 82.7619H115.81V94.9524H84.1907C74.723 94.9524 67.0479 87.2773 67.0479 77.8095V46.1905H79.2383V74.1904L107.238 46.1905H79.2383V34H110.857C120.325 34 128 41.6751 128 51.1429V82.7619Z"
        fill="none"
        className="fill-foreground"
      />
    </svg>
  );
}
