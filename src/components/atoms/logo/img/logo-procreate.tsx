import { cn } from '@/lib/utils';
import {
  defaultLogoHeight,
  defaultLogoSquareSize,
  defaultLogoWidth,
  LogoProps
} from '@/components/atoms/logo';
import Image from 'next/image';

export function LogoProcreate({ id, className }: LogoProps) {
  return (
    <Image
      src="/logos/logo-procreate.png"
      width={defaultLogoWidth}
      height={defaultLogoHeight}
      alt="Procreate logo"
      className={cn(defaultLogoSquareSize, 'object-contain', className)}
      id={id}
    />
  );
}
