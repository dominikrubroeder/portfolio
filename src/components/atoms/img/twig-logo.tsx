import Image from 'next/image';

import { cn } from '@/lib/utils';

import type { LogoProps } from '@/components/atoms/logo';
import { defaultLogoSquareSize } from '@/components/atoms/logo';

export function TwigLogo({ className }: LogoProps) {
  return (
    <Image
      src="/technologies/twig-logo.png"
      width={128}
      height={128}
      alt="Twig logo"
      className={cn(defaultLogoSquareSize, className)}
    />
  );
}
