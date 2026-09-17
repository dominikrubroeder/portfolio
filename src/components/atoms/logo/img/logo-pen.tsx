import {
  defaultLogoHeight,
  defaultLogoImageClassName,
  defaultLogoSquareSize,
  defaultLogoWidth,
  LogoProps
} from '@/components/atoms/logo';
import Image from 'next/image';
import { cn } from '@/lib/utils';

export function LogoPen({ className }: LogoProps) {
  return (
    <Image
      width={defaultLogoWidth}
      height={defaultLogoHeight}
      src="/logos/logo-pen.png"
      alt="Pen Logo"
      className={cn(
        defaultLogoImageClassName,
        defaultLogoSquareSize,
        className
      )}
      draggable={false}
    />
  );
}
