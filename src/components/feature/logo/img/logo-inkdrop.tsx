import Image from 'next/image';

import { defaultLogoImageClassName } from '@/components/feature/logo';
import {
  defaultLogoHeight,
  defaultLogoSquareSize,
  defaultLogoWidth
} from '@/components/feature/logo/logo-config';

import { cn } from '@/lib/utils';

export function LogoInkdrop({ className }: { className?: string }) {
  return (
    <Image
      src="/logos/logo-inkdrop.png"
      width={defaultLogoWidth}
      height={defaultLogoHeight}
      alt="Inkdrop logo"
      className={cn(
        defaultLogoImageClassName,
        defaultLogoSquareSize,
        className
      )}
    />
  );
}
