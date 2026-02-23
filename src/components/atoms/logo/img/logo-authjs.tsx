import Image from 'next/image';

import { cn } from '@/lib/utils';

import {
  defaultLogoHeight,
  defaultLogoSquareSize,
  defaultLogoWidth
} from '@/components/atoms/logo';

export function LogoAuthjs({ className }: { className?: string }) {
  return (
    <Image
      src="/logos/logo-auth-js.png"
      width={defaultLogoWidth}
      height={defaultLogoHeight}
      alt="Auth.js logo"
      draggable={false}
      className={cn(
        'shrink-0 object-contain',
        defaultLogoSquareSize,
        className
      )}
    />
  );
}
