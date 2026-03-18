import { cn } from '@/lib/utils';
import {
  defaultLogoHeight,
  defaultLogoImageClassName,
  defaultLogoSquareSize,
  defaultLogoWidth,
  LogoProps
} from '@/components/atoms/logo';
import Image from 'next/image';

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
