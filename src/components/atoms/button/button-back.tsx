'use client';

import { ArrowLeftIcon } from 'lucide-react';
import { Button } from '@/components/atoms/button/button';
import type { ButtonProps } from '@/components/atoms/button/types';
import { useRouter } from 'next/navigation';
import { ReactNode } from 'react';

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
