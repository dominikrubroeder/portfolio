import Image from 'next/image';
import { cn } from '@/lib/utils';
import {
  defaultLogoHeight,
  defaultLogoImageClassName,
  defaultLogoSquareSize,
  defaultLogoWidth
} from '@/components/atoms/logo';
import { BaseComponentProps } from '@/lib/types';

export function LogoInstagram({ className }: BaseComponentProps) {
  return (
    <Image
      src="/logos/logo-instagram.png"
      width={defaultLogoWidth}
      height={defaultLogoHeight}
      alt="Instagram logo"
      draggable={false}
      className={cn(
        defaultLogoImageClassName,
        defaultLogoSquareSize,
        className
      )}
    />
  );
}
