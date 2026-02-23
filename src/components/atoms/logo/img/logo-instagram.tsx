import Image from 'next/image';
import { cn } from '@/lib/utils';
import { defaultLogoSquareSize } from '@/components/atoms/logo';
import { BaseComponentProps } from '@/lib/types';

export function LogoInstagram({ className }: BaseComponentProps) {
  return (
    <Image
      src="/logos/logo-instagram.png"
      width={128}
      height={128}
      alt="Instagram logo"
      draggable={false}
      className={cn(defaultLogoSquareSize, className)}
    />
  );
}
