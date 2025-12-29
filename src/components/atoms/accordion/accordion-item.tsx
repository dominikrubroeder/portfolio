'use client';

import { useState } from 'react';

import { ChevronRightIcon } from '@heroicons/react/20/solid';

import { cn } from '@/lib/utils';

import { Button } from '@/components/atoms/button';
import { ButtonGroup } from '@/components/molecules/button-group';
import { useTheme } from '@/components/organisms/theme';
import type { AccordionItemProps } from '@/components/atoms/accordion';
import { ArrowRightIcon, MinusIcon, PlusIcon } from '@heroicons/react/16/solid';

export function AccordionItem({
  title,
  defaultOpen,
  offsetInnerContent,
  accordionIcon,
  children,
  className
}: AccordionItemProps) {
  const [isOpen, setIsOpen] = useState(defaultOpen);
  const { theme } = useTheme();

  return (
    <div className={cn('space-y-4', className)}>
      <ButtonGroup
        className={cn(
          '-ml-2.5 gap-0',
          theme.key === 'wireframe' && 'ml-0 gap-2'
        )}
      >
        <Button
          variant="ghost"
          className="text-foreground"
          onClick={() => setIsOpen((previousState) => !previousState)}
        >
          <span className="sr-only">Toggle accordion</span>
          {accordionIcon === 'plus-minus' && isOpen ? (
            <MinusIcon />
          ) : (
            <PlusIcon />
          )}
          {accordionIcon === 'chevron' && (
            <ChevronRightIcon
              className={cn('text-primary transition', isOpen && 'rotate-90')}
            />
          )}
          {accordionIcon === 'arrow-right' && (
            <ArrowRightIcon
              className={cn('text-primary transition', isOpen && 'rotate-90')}
            />
          )}
        </Button>

        <Button
          variant="ghost"
          className="text-foreground"
          onClick={() => setIsOpen((previousState) => !previousState)}
        >
          {title}
        </Button>
      </ButtonGroup>

      {isOpen && (
        <div
          className={cn(
            'motion-safe:animate-fade-up-1rem',
            offsetInnerContent && 'pl-9'
          )}
        >
          {children}
        </div>
      )}
    </div>
  );
}
