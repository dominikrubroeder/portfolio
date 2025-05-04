'use client';

import { useInView } from 'motion/react';
import { useEffect, useRef } from 'react';

export function InViewButton() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref);

  useEffect(() => console.log('is in view', isInView), [isInView]);

  return <div ref={ref}>Hello</div>;
}
