import Image from 'next/image';

import { cn } from '@/lib/utils';

import {
  defaultLogoHeight,
  defaultLogoImageClassName,
  defaultLogoSquareSize,
  defaultLogoWidth,
  LogoProps
} from '@/components/atoms/logo';

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
