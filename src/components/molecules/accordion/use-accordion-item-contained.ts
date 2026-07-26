'use client';

import { useCallback, useRef, useState } from 'react';
import { useReducedMotion } from 'framer-motion';

export const useAccordionItemContained = () => {
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

  const toggle = useCallback(
    () => setIsOpen((previousState) => !previousState),
    [onOpen]
  );

  return {
    isOpen,
    toggle,
    ref
  };
};
