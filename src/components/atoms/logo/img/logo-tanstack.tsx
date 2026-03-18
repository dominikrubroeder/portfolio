import { cn } from '@/lib/utils';
import {
  defaultLogoHeight,
  defaultLogoImageClassName,
  defaultLogoSquareSize,
  defaultLogoWidth,
  LogoProps
} from '@/components/atoms/logo';
import Image from 'next/image';

export function LogoTanStack({ id, className }: LogoProps) {
  return (
    <Image
      src="/logos/logo-tanstack.png"
      width={defaultLogoWidth}
      height={defaultLogoHeight}
      alt="TanStack logo"
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
