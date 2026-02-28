import { cn } from '@/lib/utils';
import { defaultLogoSquareSize, LogoProps } from '@/components/atoms/logo';
import Image from 'next/image';

export function LogoPnpm({ id, className }: LogoProps) {
  return (
    <Image
      src="/logos/logo-pnpm.png"
      width={128}
      height={128}
      alt="pnpm logo"
      draggable={false}
      className={cn(defaultLogoSquareSize, className)}
      id={id}
    />
  );
}
