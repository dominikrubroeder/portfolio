'use client';

import { ArrowUpIcon } from '@heroicons/react/16/solid';

import { Button } from '@/components/atoms/button/button';
import { cn } from '@/lib/utils';
import { useScrollToTop } from '@/hooks/use-scroll-to-top';

export function ButtonScrollToTop({ className }: { className?: string }) {
  const { scrollToTop } = useScrollToTop();

  return (
    <Button className={cn(className)} onClick={() => scrollToTop()}>
      <ArrowUpIcon />
      <span className="sr-only">Scroll to the top of the page</span>
    </Button>
  );
}
