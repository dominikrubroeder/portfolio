'use client';

import type { ReactNode } from 'react';

import { motion } from 'motion/react';

import { cn } from '@/lib/utils';
import { useTheme } from '@/components/organisms/theme';

export function Marker({
  variant = 'background',
  color = 'yellow',
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
  const { theme } = useTheme();
  const Comp = as;

  if (theme.key !== 'notes') return children;

  if (animate) {
    if (variant === 'underline') {
      return (
        <Comp className={cn('relative px-1 py-0.5', className)}>
          <motion.span
            animate={{ width: ['0%', '100%'], opacity: [0, 1] }}
            transition={{
              delay: 0.4,
              ease: 'easeOut',
              type: 'spring',
              duration: 0.72
            }}
            className={cn(
              'absolute inset-x-0 -bottom-2 z-10 opacity-0',
              underlineSize ?? 'h-1',
              color === 'yellow' && 'bg-signal-yellow',
              color === 'red' && 'bg-red-200',
              color === 'green' && 'bg-green-200',
              color === 'purple' && 'bg-purple-200',
              color === 'primary' && 'bg-primary'
            )}
          />
          {children}
        </Comp>
      );
    }

    return (
      <Comp className={cn('relative inline-flex', className)}>
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

  if (variant === 'underline') {
    return (
      <Comp className={cn('relative', className)}>
        <span
          className={cn(
            'absolute -bottom-2 size-full w-full',
            underlineSize ?? 'h-1',
            color === 'yellow' && 'bg-signal-yellow',
            color === 'red' && 'bg-red-200',
            color === 'green' && 'bg-green-200',
            color === 'purple' && 'bg-purple-200',
            color === 'primary' && 'bg-primary'
          )}
        />
        {children}
      </Comp>
    );
  }

  return (
    <Comp
      className={cn(
        'inline-block px-1',
        color === 'yellow' && 'bg-signal-yellow',
        color === 'red' && 'bg-red-200',
        color === 'green' && 'bg-green-200',
        color === 'purple' && 'bg-purple-200',
        color === 'primary' && 'bg-primary text-primary-foreground',
        className
      )}
    >
      {children}
    </Comp>
  );
}
