'use client';

import type { ReactNode } from 'react';

import { MinusIcon, PlusIcon } from '@heroicons/react/16/solid';

import { cn } from '@/lib/utils';
import { useAccordionContained } from '@/components/atoms/accordion';
import { Button } from '@/components/atoms/button';
import { ButtonGroup } from '@/components/molecules/button-group';

export function AccordionContained({
  title,
  children,
  restrictHeight,
  className
}: {
  title: ReactNode;
  children: ReactNode;
  focusView?: 'start' | 'center';
  restrictHeight?: boolean;
  className?: string;
}) {
  const { isOpen, setIsOpen, ref } = useAccordionContained();

  return (
    <div
      ref={ref}
      className={cn('relative scroll-mt-3 space-y-3 pt-4', className)}
    >
      <ButtonGroup className="group sticky top-28 z-10 mx-auto flex items-center justify-between gap-4 md:top-16 lg:top-4">
        {isOpen && (
          <div className="absolute -top-4 right-0 left-0 h-8 w-full bg-background" />
        )}

        <Button
          variant="contained-muted"
          title={
            isOpen ? `Close accordion: ${title}` : `Open accordion: ${title}`
          }
          aria-label={
            isOpen ? `Close accordion: ${title}` : `Open accordion: ${title}`
          }
          onClick={() => setIsOpen((prevState) => !prevState)}
          className="flex-1 justify-start text-left"
        >
          {title}
        </Button>

        <Button
          title={
            isOpen ? `Close accordion: ${title}` : `Open accordion: ${title}`
          }
          aria-label={
            isOpen ? `Close accordion: ${title}` : `Open accordion: ${title}`
          }
          onClick={() => setIsOpen((prevState) => !prevState)}
        >
          {isOpen && (
            <>
              <MinusIcon />
              <span className="sr-only">Close accordion</span>
            </>
          )}

          {!isOpen && (
            <>
              <PlusIcon />
              <span className="sr-only">Open accordion</span>
            </>
          )}
        </Button>
      </ButtonGroup>

      {isOpen && (
        <div
          className={cn(
            'mb-5 p-4 pt-20 motion-safe:animate-fade-up sm:pt-0',
            restrictHeight && 'scrollbar-none pt-22 sm:pt-4'
          )}
        >
          {children}
        </div>
      )}
    </div>
  );
}
