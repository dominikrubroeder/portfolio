import Image from 'next/image';

import {
  defaultLogoHeight,
  defaultLogoImageClassName,
  defaultLogoSquareSize,
  defaultLogoWidth
} from '@/components/feature/logo';

import { cn } from '@/lib/utils';

export function LogoAuthjs({ className }: { className?: string }) {
  return (
    <Image
      src="/logos/logo-auth-js.png"
      width={defaultLogoWidth}
      height={defaultLogoHeight}
      alt="Auth.js logo"
      draggable={false}
      className={cn(
        defaultLogoImageClassName,
        defaultLogoSquareSize,
        className
      )}
    />
  );
}
