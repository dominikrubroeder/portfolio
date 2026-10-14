import Image from 'next/image';

import {
  defaultLogoHeight,
  defaultLogoImageClassName,
  defaultLogoSquareSize,
  defaultLogoWidth
} from '@/components/feature/logo';
import type { LogoProps } from '@/components/feature/logo';

import { cn } from '@/lib/utils';

export function LogoProcreate({ id, className }: LogoProps) {
  return (
    <Image
      src="/logos/logo-procreate.png"
      width={defaultLogoWidth}
      height={defaultLogoHeight}
      alt="Procreate logo"
      className={cn(
        defaultLogoImageClassName,
        defaultLogoSquareSize,
        className
      )}
      id={id}
    />
  );
}
