'use client';

import type { ReactNode } from 'react';

import { motion } from 'motion/react';

import { cn } from '@/lib/utils';

export function Marker({
  variant = 'primary',
  as = 'span',
  className,
  animate = true,
  children
}: {
  variant?: 'primary' | 'yellow' | 'red' | 'green' | 'purple';
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'div' | 'p' | 'span' | 'small';
  animate?: boolean;
  className?: string;
  children: ReactNode;
}) {
  const Comp = as;

  if (animate) {
    return (
      <Comp
        className={cn('relative inline-flex rounded-2xl pr-1.5', className)}
      >
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
            variant === 'primary' && 'bg-primary',
            variant === 'yellow' && 'bg-signal-yellow',
            variant === 'red' && 'bg-red-200',
            variant === 'green' && 'bg-green-200',
            variant === 'purple' && 'bg-purple-200'
          )}
        />

        <span
          className={cn(
            variant === 'primary' && 'text-primary-foreground',
            variant === 'yellow' && 'text-foreground',
            variant === 'red' && 'text-foreground',
            variant === 'green' && 'text-foreground',
            variant === 'purple' && 'text-foreground'
          )}
        >
          {children}
        </span>
      </Comp>
    );
  }

  return (
    <Comp
      className={cn(
        'my-1 inline-flex rounded px-1',
        variant === 'primary' && 'bg-primary text-primary-foreground',
        variant === 'yellow' && 'bg-signal-yellow text-foreground',
        variant === 'red' && 'bg-red-200 text-foreground',
        variant === 'green' && 'bg-green-200 text-foreground',
        variant === 'purple' && 'bg-purple-200 text-foreground',
        className
      )}
    >
      {children}
    </Comp>
  );
}
