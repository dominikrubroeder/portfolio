import Image from 'next/image';

import { cn } from '@/lib/utils';

import { defaultIconSize } from '@/components/atoms/logo';

export function AuthjsLogo({ className }: { className?: string }) {
  return (
    <Image
      src="/auth-js.png"
      width={128}
      height={128}
      alt="Auth.js logo"
      draggable={false}
      className={cn('shrink-0 object-contain', defaultIconSize, className)}
    />
  );
}
