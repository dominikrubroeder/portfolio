import Image from 'next/image';

import { cn } from '@/lib/utils';

import { defaultIconSize } from '@/components/atoms/logo/config';

export function InkdropLogo({ className }: { className?: string }) {
  return (
    <Image
      src="/tools/inkdrop.png"
      width={128}
      height={128}
      alt="Inkdrop logo"
      className={cn(defaultIconSize, className)}
    />
  );
}
