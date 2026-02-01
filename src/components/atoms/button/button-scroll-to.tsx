'use client';

import type { ReactNode } from 'react';

import { Button } from '@/components/atoms/button/button';

import type { UseScrollInViewProps } from '@/hooks/use-scroll-into-view';
import { useScrollIntoView } from '@/hooks/use-scroll-into-view';
import { ButtonProps } from '@/components/atoms/button/types';

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
