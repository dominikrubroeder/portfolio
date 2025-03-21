'use client';

import { Button } from '@/components/atoms/button';
import { useScrollIntoView } from '@/hooks/useScrollIntoView';
import { ReactNode } from 'react';
import { cn } from '@/lib/utils';

export function ScrollIntoViewButton({
  id,
  options,
  className,
  children,
  ...rest
}: {
  id: string;
  options?: ScrollIntoViewOptions;
  className?: string;
  children: ReactNode;
} & React.HTMLAttributes<HTMLButtonElement>) {
  const { scrollIntoView } = useScrollIntoView();

  return (
    <Button
      {...rest}
      variant="primary"
      className={cn(className)}
      onClick={() => scrollIntoView({ id, options })}
    >
      {children}
    </Button>
  );
}
