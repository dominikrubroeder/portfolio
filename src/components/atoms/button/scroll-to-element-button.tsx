'use client';

import { ReactNode } from 'react';
import { Button } from '@/components/atoms/button';
import { useScrollIntoView } from '@/hooks/use-scroll-into-view';
import { ButtonVariant } from '@/components/atoms/button/types';

export function ScrollToElementButton({
  variant,
  id,
  options,
  className,
  children,
  ...rest
}: {
  variant: ButtonVariant;
  id: string;
  options?: ScrollIntoViewOptions;
  className?: string;
  children: ReactNode;
} & React.HTMLAttributes<HTMLButtonElement>) {
  const { scrollIntoView } = useScrollIntoView();

  return (
    <Button
      {...rest}
      variant={variant}
      className={className}
      onClick={() => scrollIntoView({ id, options })}
    >
      {children}
    </Button>
  );
}
