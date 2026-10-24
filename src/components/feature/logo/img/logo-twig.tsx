import Image from 'next/image';

import {
  defaultLogoHeight,
  defaultLogoImageClassName,
  defaultLogoSquareSize,
  defaultLogoWidth
} from '@/components/feature/logo';
import type { LogoProps } from '@/components/feature/logo';

import { cn } from '@/lib/utils';

export function LogoTwig({ className }: LogoProps) {
  return (
    <Image
      src="/logos/logo-twig.png"
      width={defaultLogoWidth}
      height={defaultLogoHeight}
      alt="Twig logo"
      className={cn(
        defaultLogoImageClassName,
        defaultLogoSquareSize,
        className
      )}
    />
  );
}
