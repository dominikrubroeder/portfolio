'use client';

import { useCallback, useRef, useState } from 'react';

import type { AccordionItemContainedProps } from '@/components/molecules/accordion/index';
import { useReducedMotion } from 'framer-motion';

export const useAccordionItemContained = ({
  accordionGroupId,
  focusView = 'start'
}: Pick<AccordionItemContainedProps, 'accordionGroupId' | 'focusView'>) => {
  const [isOpen, setIsOpen] = useState(false);
  const ref = useRef<HTMLDivElement | null>(null);
  const isReducedMotion = useReducedMotion();

  const onOpen = useCallback(
    () =>
      ref.current?.scrollIntoView({
        behavior: isReducedMotion ? 'instant' : 'smooth',
        block: 'start'
      }),
    [isReducedMotion]
  );

  const onClose = useCallback(() => {
    const accordionGroupElement = document.getElementById(accordionGroupId);

    accordionGroupElement?.scrollIntoView({
      behavior: isReducedMotion ? 'instant' : 'smooth',
      block: focusView
    });
  }, [accordionGroupId, focusView, isReducedMotion]);

  const toggle = useCallback(() => {
    setIsOpen((prev) => {
      const next = !prev;

      if (next) {
        setTimeout(onOpen, 0);
      } else {
        setTimeout(onClose, 0);
      }
      return next;
    });
  }, [onOpen, onClose]);

  return {
    isOpen,
    toggle,
    ref
  };
};
