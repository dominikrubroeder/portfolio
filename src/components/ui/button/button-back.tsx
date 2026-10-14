'use client';

import type { ReactNode } from 'react';

import { useRouter } from 'next/navigation';

import { ArrowLeftIcon } from 'lucide-react';

import { Button } from '@/components/ui/button/button';
import type { ButtonProps } from '@/components/ui/button/types';

export function ButtonBack({
  buttonProps,
  children
}: {
  buttonProps?: Omit<ButtonProps, 'children'>;
  children: ReactNode;
}) {
  const { back } = useRouter();

  return (
    <Button {...buttonProps} onClick={back}>
      <ArrowLeftIcon />
      {children}
    </Button>
  );
}
