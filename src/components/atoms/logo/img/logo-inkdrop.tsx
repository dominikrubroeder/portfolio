import Image from 'next/image';

import { cn } from '@/lib/utils';

import {
  defaultLogoHeight,
  defaultLogoSquareSize,
  defaultLogoWidth
} from '@/components/atoms/logo/config';
import { defaultLogoImageClassName } from '@/components/atoms/logo';

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
