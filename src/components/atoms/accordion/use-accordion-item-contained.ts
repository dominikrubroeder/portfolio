'use client';

import { useCallback, useEffect, useRef, useState } from 'react';

import type { AccordionItemContainedProps } from '@/components/atoms/accordion';

export const useAccordionItemContained = ({
  accordionGroupId,
  focusView = 'start'
}: Pick<AccordionItemContainedProps, 'accordionGroupId' | 'focusView'>) => {
  const [isOpen, setIsOpen] = useState(false);
  const ref = useRef<HTMLDivElement | null>(null);

  const handleScroll = useCallback(
    () =>
      ref.current?.scrollIntoView({
        behavior: 'smooth',
        block: focusView
      }),
    [focusView]
  );

  const handleScrollToGroup = useCallback(() => {
    const accordionGroupElement = document.getElementById(accordionGroupId);

    console.log(accordionGroupElement);

    accordionGroupElement?.scrollIntoView({
      behavior: 'smooth',
      block: focusView
    });
  }, [accordionGroupId, focusView]);

  useEffect(() => {
    isOpen ? handleScroll() : handleScrollToGroup();
  }, [isOpen, handleScroll]);

  return {
    isOpen,
    setIsOpen,
    handleScroll,
    ref
  };
};
