import { useCallback } from 'react';

export interface UseScrollInViewProps {
  id: string;
  options?: ScrollIntoViewOptions;
}

export const useScrollIntoView = () => {
  const scrollIntoView = useCallback(
    ({ id, options }: UseScrollInViewProps) => {
      const element = document.getElementById(id);

      element?.scrollIntoView(
        options ?? {
          behavior: 'smooth',
          block: 'start'
        }
      );
    },
    []
  );

  return { scrollIntoView };
};
