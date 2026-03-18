import { cn } from '@/lib/utils';
import {
  defaultLogoHeight,
  defaultLogoImageClassName,
  defaultLogoSquareSize,
  defaultLogoWidth,
  LogoProps
} from '@/components/atoms/logo';
import Image from 'next/image';

export function LogoNueJs({ id, className }: LogoProps) {
  return (
    <Image
      src="/logos/logo-nue-js.png"
      width={defaultLogoWidth}
      height={defaultLogoHeight}
      alt="Nue.js logo"
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
