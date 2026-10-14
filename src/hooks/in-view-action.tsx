'use client';

import { useEffect, useRef } from 'react';
import type { ReactNode } from 'react';

import { cn } from 'cn';
import { useInView } from 'motion/react';

import type { UseInViewOptions } from 'motion/react';

export function InViewAction({
  action,
  useInViewOptions,
  children,
  className
}: {
  /** The function that fires when the element is in view */
  action: () => void;
  useInViewOptions?: UseInViewOptions;
  children: ReactNode;
  className?: string;
}) {
  const isInViewContainer = useRef(null);
  const isInViewRef = useRef(null);
  const isInView = useInView(isInViewRef, {
    root: isInViewContainer,
    ...useInViewOptions
  });

  useEffect(() => {
    console.log('isInView', isInView);

    if (isInView) {
      action();
    }
  }, [isInView]);

  return (
    <div ref={isInViewContainer} className={cn(className)}>
      <div ref={isInViewRef}>{children}</div>
    </div>
  );
}
