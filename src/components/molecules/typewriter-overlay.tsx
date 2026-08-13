'use client';

import { Typewriter, TypewriterProps } from '@/components/atoms/typewriter';
import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';

/**
 *       <TypewriterOverlay
 *         phrases={['Hello, world!']}
 *         deleteLastPhrase={false}
 *         typeSpeed={60}
 *         delay={4200}
 *       />
 * */
export function TypewriterOverlay({ ...props }: TypewriterProps) {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    if (document) {
      document.body.classList.toggle('overflow-hidden');
    }
  }, []);

  useEffect(() => {
    const time = setTimeout(() => {
      setIsVisible(false);
      document.body.classList.remove('overflow-hidden');
    }, props.delay ?? 6200);

    return () => clearTimeout(time);
  }, [isVisible]);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          key="typewriter-overlay"
          className="fixed inset-0 top-0 right-0 bottom-0 left-0 z-100 flex size-full items-center justify-center bg-background"
        >
          <motion.div
            animate={{ scale: [0.2, 1], opacity: [0.8, 1] }}
            exit={{ scale: [1, 0.8], opacity: [1, 0] }}
            className="relative border p-4"
          >
            <motion.span
              animate={{ scale: [0.8, 1], opacity: [0.8, 1] }}
              exit={{ scale: [1, 0.6], opacity: [1, 0], rotate: 32 }}
              className="absolute -top-1 -left-1 size-2 border border-primary bg-primary"
            />
            <motion.span
              animate={{ scale: [0.8, 1], opacity: [0.8, 1] }}
              exit={{ scale: [1, 0.6], opacity: [1, 0], rotate: 32 }}
              className="absolute -top-1 -right-1 size-2 border border-primary bg-background"
            />
            <motion.span
              animate={{ scale: [0.8, 1], opacity: [0.8, 1] }}
              exit={{ scale: [1, 0.6], opacity: [1, 0], rotate: 32 }}
              className="absolute -bottom-1 -left-1 size-2 border border-primary bg-background"
            />
            <motion.span
              animate={{ scale: [0.8, 1], opacity: [0.8, 1] }}
              exit={{ scale: [1, 0.6], opacity: [1, 0], rotate: 32 }}
              className="absolute -right-1 -bottom-1 size-2 border border-primary bg-primary"
            />
            <Typewriter {...props} />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
