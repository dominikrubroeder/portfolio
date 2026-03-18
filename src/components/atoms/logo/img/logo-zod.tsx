import { cn } from '@/lib/utils';
import { defaultLogoSquareSize, LogoProps } from '@/components/atoms/logo';
import Image from 'next/image';

export function LogoZod({ id, className }: LogoProps) {
  return (
    <Image
      src="/logos/logo-zod.png"
      width={128}
      height={128}
      alt="zod logo"
      draggable={false}
      className={cn(defaultLogoSquareSize, className)}
      id={id}
    />
  );
}
