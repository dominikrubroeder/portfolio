import Image from 'next/image';

import { cn } from '@/lib/utils';

import type { LogoProps } from '@/components/atoms/logo';
import { defaultIconSize } from '@/components/atoms/logo';

export function PostmanLogo({ className }: LogoProps) {
  return (
    <Image
      width={128}
      height={128}
      src="/postman-logo.png"
      alt="Postman Logo"
      className={cn(defaultIconSize, className)}
    />
  );
}
