import {
  defaultLogoHeight,
  defaultLogoImageClassName,
  defaultLogoSquareSize,
  defaultLogoWidth,
  LogoProps
} from '@/components/atoms/logo';
import Image from 'next/image';
import { cn } from '@/lib/utils';

export function LogoCodex({ className }: LogoProps) {
  return (
    <Image
      width={defaultLogoWidth}
      height={defaultLogoHeight}
      src="/logos/logo-codex.png"
      alt="Codex Logo"
      className={cn(
        defaultLogoImageClassName,
        defaultLogoSquareSize,
        className
      )}
      draggable={false}
    />
  );
}
