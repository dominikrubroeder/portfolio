'use client';

import { useCallback, useEffect, useRef, useState } from 'react';

export const useAccordionContained = () => {
  const [isOpen, setIsOpen] = useState(false);
  const ref = useRef<HTMLDivElement | null>(null);

  const handleScroll = useCallback(
    () =>
      ref.current?.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      }),
    []
  );

  useEffect(() => {
    isOpen ? handleScroll() : null;
  }, [isOpen, handleScroll]);

  return {
    isOpen,
    setIsOpen,
    handleScroll,
    ref
  };
};
