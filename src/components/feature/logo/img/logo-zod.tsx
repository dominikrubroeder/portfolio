import Image from 'next/image';

import { defaultLogoSquareSize } from '@/components/feature/logo';
import type { LogoProps } from '@/components/feature/logo';

import { cn } from '@/lib/utils';

export function LogoZod({ id, className }: LogoProps) {
  return (
    <Image
      src="/logos/logo-zod.png"
      width={128}
      height={128}
      alt="zod logo"
      draggable={false}
      className={cn(defaultLogoSquareSize, className)}
      id={id}
    />
  );
}
