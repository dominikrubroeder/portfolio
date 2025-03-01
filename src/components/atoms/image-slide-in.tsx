'use client';

import { useInView } from 'motion/react';
import Avatar from '@/components/atoms/avatar';
import { useRef } from 'react';
import { cn } from '@/lib/utils';

export default function ImageSlideIn() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <div ref={ref} className="size-11 overflow-hidden">
      <Avatar
        width={44}
        height={44}
        className={cn(
          'size-11 transition duration-300',
          isInView ? 'translate-x-0' : '-translate-x-11'
        )}
        as="Image"
      />
    </div>
  );
}
