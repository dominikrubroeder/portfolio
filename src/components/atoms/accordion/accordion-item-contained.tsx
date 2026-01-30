'use client';

import {
  ArrowRightIcon,
  ChevronDownIcon,
  MinusIcon,
  PlusIcon
} from '@heroicons/react/16/solid';

import { cn } from '@/lib/utils';
import {
  AccordionItemContainedProps,
  useAccordionItemContained
} from '@/components/atoms/accordion';
import { Button } from '@/components/atoms/button';
import { ButtonGroup } from '@/components/molecules/button-group';
import { ChevronRightIcon } from '@heroicons/react/20/solid';

export function AccordionItemContained({
  title,
  accordionGroupId,
  focusView,
  accordionIcon,
  buttonVariant,
  children,
  className
}: AccordionItemContainedProps) {
  const { isOpen, setIsOpen, ref } = useAccordionItemContained({
    accordionGroupId,
    focusView
  });

  return (
    <div
      ref={ref}
      className={cn('relative scroll-mt-responsive space-y-3 pt-4', className)}
    >
      <ButtonGroup className="group sticky top-28 z-10 mx-auto flex items-center justify-between gap-4 lg:top-4">
        {isOpen && (
          <div className="absolute -top-4 right-0 left-0 h-8 w-full bg-background" />
        )}

        <Button
          variant="contained-foreground"
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
          variant={buttonVariant?.variant || 'contained-primary'}
        >
          {isOpen && (
            <>
              {accordionIcon === 'plus-minus' && <MinusIcon />}
              {accordionIcon === 'chevron' && <ChevronRightIcon />}
              {accordionIcon === 'arrow-right' && <ArrowRightIcon />}
              <span className="sr-only">Close accordion</span>
            </>
          )}

          {!isOpen && (
            <>
              {accordionIcon === 'plus-minus' && <PlusIcon />}
              {accordionIcon === 'chevron' && <ChevronDownIcon />}
              {accordionIcon === 'arrow-right' && <ArrowRightIcon />}
              <span className="sr-only">Open accordion</span>
            </>
          )}
        </Button>
      </ButtonGroup>

      {isOpen && (
        <div className="mb-5 p-4 pt-2 motion-safe:animate-fade-up">
          {children}
        </div>
      )}
    </div>
  );
}
