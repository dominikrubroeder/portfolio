import Image from 'next/image';
import { cn } from '@/lib/utils';
import { defaultLogoSquareSize } from '@/components/atoms/logo';
import { BaseProps } from '@/lib/types';

export function LogoInstagram({ className }: BaseProps) {
  return (
    <Image
      src="/instagram.png"
      width={128}
      height={128}
      alt="Instagram logo"
      draggable={false}
      className={cn(defaultLogoSquareSize, className)}
    />
  );
}
