import Image from 'next/image';

import { cn } from '@/lib/utils';

import { defaultLogoSquareSize } from '@/components/atoms/logo/config';

export function LogoInkdrop({ className }: { className?: string }) {
  return (
    <Image
      src="/logos/logo-inkdrop.png"
      width={128}
      height={128}
      alt="Inkdrop logo"
      className={cn(defaultLogoSquareSize, 'object-contain', className)}
    />
  );
}
