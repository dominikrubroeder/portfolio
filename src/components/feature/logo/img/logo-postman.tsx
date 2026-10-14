import Image from 'next/image';

import {
  defaultLogoHeight,
  defaultLogoImageClassName,
  defaultLogoSquareSize,
  defaultLogoWidth
} from '@/components/feature/logo';
import type { LogoProps } from '@/components/feature/logo';

import { cn } from '@/lib/utils';

export function LogoPostman({ className }: LogoProps) {
  return (
    <Image
      width={defaultLogoWidth}
      height={defaultLogoHeight}
      src="/logos/logo-postman.png"
      alt="Postman Logo"
      className={cn(
        defaultLogoImageClassName,
        defaultLogoSquareSize,
        className
      )}
    />
  );
}
