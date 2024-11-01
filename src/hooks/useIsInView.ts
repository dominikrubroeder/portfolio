import React, { useEffect, useState } from 'react';

export const useIsInView = ({
  ref,
  options
}: {
  ref: React.MutableRefObject<HTMLElement | null>;
  options?: IntersectionObserverInit;
}) => {
  const [isIntersecting, setIntersecting] = useState(false);
  const threshold = options?.threshold ?? 1;

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          setIntersecting(entry.isIntersecting);
        });
      },
      {
        ...options
      }
    );

    if (ref.current) observer.observe(ref.current);

    return () => {
      observer.disconnect();
    };
  }, [options, ref, threshold]);

  return isIntersecting;
};
