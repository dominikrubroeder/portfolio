'use client';

import { useCallback, useRef, useState } from 'react';

import type { AccordionItemContainedProps } from '@/components/atoms/accordion';
import { useEffectAfterMount } from '@/hooks/use-effect-after-mount';

export const useAccordionItemContained = ({
  accordionGroupId,
  focusView = 'start'
}: Pick<AccordionItemContainedProps, 'accordionGroupId' | 'focusView'>) => {
  const [isOpen, setIsOpen] = useState(false);
  const ref = useRef<HTMLDivElement | null>(null);

  const onOpen = useCallback(
    () =>
      ref.current?.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      }),
    []
  );

  const onClose = useCallback(() => {
    const accordionGroupElement = document.getElementById(accordionGroupId);

    accordionGroupElement?.scrollIntoView({
      behavior: 'smooth',
      block: focusView
    });
  }, [accordionGroupId, focusView]);

  useEffectAfterMount(() => {
    isOpen ? onOpen() : onClose();
  }, [isOpen, onOpen]);

  return {
    isOpen,
    setIsOpen,
    ref
  };
};
