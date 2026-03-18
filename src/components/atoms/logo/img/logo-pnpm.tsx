import { cn } from '@/lib/utils';
import {
  defaultLogoHeight,
  defaultLogoImageClassName,
  defaultLogoSquareSize,
  defaultLogoWidth,
  LogoProps
} from '@/components/atoms/logo';
import Image from 'next/image';

export function LogoPnpm({ id, className }: LogoProps) {
  return (
    <Image
      src="/logos/logo-pnpm.png"
      width={defaultLogoWidth}
      height={defaultLogoHeight}
      alt="pnpm logo"
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
