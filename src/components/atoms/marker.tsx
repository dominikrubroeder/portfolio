'use client';

import type { ReactNode } from 'react';

import { motion } from 'motion/react';

import { cn } from '@/lib/utils';

export function Marker({
  variant = 'background',
  color = 'primary',
  as = 'span',
  className,
  animate,
  underlineSize,
  children
}: {
  variant?: 'background' | 'underline';
  color?: 'yellow' | 'red' | 'green' | 'purple' | 'primary';
  as?: 'div' | 'p' | 'span';
  animate?: boolean;
  underlineSize?: string;
  className?: string;
  children: ReactNode;
}) {
  const Comp = as;

  if (animate) {
    return (
      <Comp className={cn('relative inline-flex rounded', className)}>
        <motion.span
          animate={{ width: ['0%', '102%'], opacity: [0, 1] }}
          transition={{
            delay: 0.4,
            ease: 'easeOut',
            type: 'spring',
            duration: 0.72
          }}
          className={cn(
            'absolute -top-1 -left-2 -z-10 m-1 h-full opacity-0',
            color === 'primary' && 'bg-primary text-primary-foreground',
            color === 'yellow' && 'bg-signal-yellow',
            color === 'red' && 'bg-red-200',
            color === 'green' && 'bg-green-200',
            color === 'purple' && 'bg-purple-200'
          )}
        />
        <span className="text-signal-yellow-foreground">{children}</span>
      </Comp>
    );
  }

  return (
    <Comp
      className={cn(
        'my-1 inline-flex rounded px-1',
        color === 'primary' && 'bg-primary text-primary-foreground',
        color === 'yellow' && 'bg-signal-yellow',
        color === 'red' && 'bg-red-200',
        color === 'green' && 'bg-green-200',
        color === 'purple' && 'bg-purple-200',
        className
      )}
    >
      {children}
    </Comp>
  );
}
