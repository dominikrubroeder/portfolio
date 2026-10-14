'use client';

import { ArrowUpIcon } from '@heroicons/react/16/solid';

import { Button } from '@/components/ui/button/button';

import { useScrollToTop } from '@/hooks/use-scroll-to-top';
import { cn } from '@/lib/utils';

export function ButtonScrollToTop({ className }: { className?: string }) {
  const { scrollToTop } = useScrollToTop();

  return (
    <Button
      iconOnly
      label="Scroll to the top of the page"
      className={cn(className)}
      onClick={() => scrollToTop()}
    >
      <ArrowUpIcon />
    </Button>
  );
}
