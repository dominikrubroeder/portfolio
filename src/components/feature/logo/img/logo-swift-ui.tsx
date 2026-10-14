import Image from 'next/image';

import {
  defaultLogoHeight,
  defaultLogoImageClassName,
  defaultLogoSquareSize,
  defaultLogoWidth
} from '@/components/feature/logo';
import type { LogoProps } from '@/components/feature/logo';

import { cn } from '@/lib/utils';

export function LogoSwiftUi({ id, className }: LogoProps) {
  return (
    <Image
      src="/logos/logo-swift-ui.png"
      width={defaultLogoWidth}
      height={defaultLogoHeight}
      alt="SwiftUI logo"
      draggable={false}
      className={cn(
        defaultLogoImageClassName,
        defaultLogoSquareSize,
        className
      )}
      id={id}
    />
  );
}
