import React, { useEffect, useState } from 'react';

export const useIsInView = (
  ref: React.MutableRefObject<HTMLElement | null>,
  threshold = 1
) => {
  const [isIntersecting, setIntersecting] = useState(false);
  const thresholdValue = threshold;

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          setIntersecting(entry.isIntersecting);
        });
      },
      {
        threshold: thresholdValue
      }
    );

    if (ref.current) observer.observe(ref.current);

    // Remove the observer as soon as the component is unmounted
    return () => {
      observer.disconnect();
    };
  }, [ref, thresholdValue]);

  return isIntersecting;
};
