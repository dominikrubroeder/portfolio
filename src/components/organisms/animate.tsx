'use client';

import { ReactNode, useEffect } from 'react';
import { motion, useAnimate, useInView } from 'motion/react';
import { cn } from '@/lib/utils';
import { useTheme } from '@/components/organisms/app-context';

export default function Animate({
  direction = 'up',
  delay = 0.16,
  className,
  children
}: {
  direction: 'up' | 'left' | 'right' | 'down';
  delay?: number;
  className?: string;
  children: ReactNode;
}) {
  const [scope, animate] = useAnimate();
  const isInView = useInView(scope, {
    once: true,
    amount: 0.04 // Trigger when 4% of the element is in view
  });
  const { theme } = useTheme();

  // Define animation variants based on direction
  const variants = {
    hidden: {
      opacity: 0,
      x: direction === 'left' ? -32 : direction === 'right' ? 32 : 0,
      y: direction === 'up' ? 32 : direction === 'down' ? -32 : 0
    },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: {
        duration: 0.8,
        delay,
        ease: [0.22, 1, 0.36, 1] // Custom ease curve
      }
    }
  };

  useEffect(() => {
    console.log('isInView', isInView, 'theme', theme);

    if (isInView && theme === 'design') {
      animate(scope.current, isInView ? variants.visible : variants.hidden);
    }
  }, [animate, isInView, scope, theme, variants.visible, variants.hidden]);

  return (
    <div ref={scope}>
      <motion.div
        initial={theme === 'design' ? 'hidden' : 'visible'}
        animate={isInView ? 'visible' : 'hidden'}
        variants={variants}
        className={cn(className)}
      >
        {children}
      </motion.div>
    </div>
  );
}
