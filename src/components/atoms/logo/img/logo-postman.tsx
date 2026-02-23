import Image from 'next/image';

import { cn } from '@/lib/utils';

import type { LogoProps } from '@/components/atoms/logo';
import { defaultLogoSquareSize } from '@/components/atoms/logo';

export function LogoPostman({ className }: LogoProps) {
  return (
    <Image
      width={128}
      height={128}
      src="/tools/logo-postman.png"
      alt="Postman Logo"
      className={cn('object-contain', defaultLogoSquareSize, className)}
    />
  );
}
