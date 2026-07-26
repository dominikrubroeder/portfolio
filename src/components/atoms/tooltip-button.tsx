'use client';

import { Button } from '@/components/atoms/button';
import { ReactNode, useState } from 'react';

export function TooltipButton({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Button
      variant="ghost-foreground"
      onClick={() => setIsOpen((prevState) => !prevState)}
    >
      {children}
    </Button>
  );
}
