'use client';

import { ArrowUpIcon } from '@heroicons/react/16/solid';

import { Button } from '@/components/atoms/button/button';

import { useScrollIntoView } from '@/hooks/use-scroll-into-view';

export function ScrollToTopButton() {
  const { scrollIntoView } = useScrollIntoView();

  return (
    <Button
      className="sticky top-0 right-0"
      rounded
      onClick={() => scrollIntoView({ id: 'header' })}
    >
      <ArrowUpIcon />
      <span className="sr-only">Scroll to the top of the page</span>
    </Button>
  );
}
