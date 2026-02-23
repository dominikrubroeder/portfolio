import Image from 'next/image';

import { cn } from '@/lib/utils';

import type { LogoProps } from '@/components/atoms/logo';
import { defaultLogoSquareSize } from '@/components/atoms/logo';

export function LogoTwig({ className }: LogoProps) {
  return (
    <Image
      src="/technologies/logo-twig.png"
      width={128}
      height={128}
      alt="Twig logo"
      className={cn(defaultLogoSquareSize, className)}
    />
  );
}
