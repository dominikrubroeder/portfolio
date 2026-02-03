'use client';

import { useCallback, useRef, useState } from 'react';

import type { AccordionItemContainedProps } from '@/components/atoms/accordion';
import { useEffectAfterMount } from '@/hooks/use-effect-after-mount';
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

  useEffectAfterMount(() => {
    isOpen ? onOpen() : onClose();
  }, [isOpen, onOpen]);

  return {
    isOpen,
    setIsOpen,
    ref
  };
};
