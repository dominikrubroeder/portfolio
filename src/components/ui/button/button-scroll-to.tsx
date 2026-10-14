'use client';

import type { ReactNode } from 'react';

import { Button } from '@/components/ui/button/button';
import type { ButtonProps } from '@/components/ui/button/types';

import { useScrollIntoView } from '@/hooks/use-scroll-into-view';

import type { UseScrollInViewProps } from '@/hooks/use-scroll-into-view';

interface ScrollToButtonProps extends Omit<ButtonProps, 'children'> {
  children?: ReactNode;
}

export function ButtonScrollTo({
  scrollIntoViewProps,
  buttonProps,
  children
}: {
  scrollIntoViewProps: UseScrollInViewProps;
  buttonProps?: ScrollToButtonProps;
  children: ReactNode;
}) {
  const { scrollIntoView } = useScrollIntoView();

  return (
    <Button
      onClick={() => scrollIntoView({ ...scrollIntoViewProps })}
      {...buttonProps}
    >
      {children}
    </Button>
  );
}
