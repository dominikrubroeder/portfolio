'use client';

import { motion } from 'motion/react';
import { useEffect, useState } from 'react';
import { cn } from '@/lib/utils';

export interface TypewriterProps {
  phrases: string[];
  cursorClassName?: string;
  typeSpeed?: number;
  deleteSpeed?: number;
  deleteLastPhrase?: boolean;
  pauseDuration?: number;
  startDelay?: number;
  loop?: boolean;
  showCursor?: boolean;
  className?: string;
  /** Called once, when typing (and deleting, if enabled) has finished. */
  onComplete?: () => void;
}

/** https://v0.app/chat/typewriter-effect-h76EGSmTotJ?ref=CD1BRV */
export function Typewriter({
  phrases,
  className,
  cursorClassName,
  typeSpeed = 80,
  deleteSpeed = 40,
  deleteLastPhrase = true,
  pauseDuration = 2000,
  startDelay = 1200,
  loop = true,
  showCursor = true,
  onComplete
}: TypewriterProps) {
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [isComplete, setIsComplete] = useState(false);
  const [hasStarted, setHasStarted] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setHasStarted(true);
    }, startDelay);
    return () => clearTimeout(timeout);
  }, [startDelay]);

  useEffect(() => {
    if (isComplete) onComplete?.();
    // Fire exactly once per completion, not on every `onComplete` identity change.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isComplete]);

  useEffect(() => {
    if (isComplete || !hasStarted) return;

    const currentPhrase = phrases[phraseIndex] || '';

    if (isDeleting) {
      if (displayText.length > 0) {
        const timeout = setTimeout(() => {
          setDisplayText(displayText.slice(0, -1));
        }, deleteSpeed);
        return () => clearTimeout(timeout);
      } else {
        setIsDeleting(false);
        setPhraseIndex((prev) => {
          const nextIndex = (prev + 1) % phrases.length;
          if (!loop && nextIndex === 0) {
            setIsComplete(true);
          }
          return nextIndex;
        });
      }
    } else {
      if (displayText.length < currentPhrase.length) {
        const timeout = setTimeout(
          () => {
            setDisplayText(currentPhrase.slice(0, displayText.length + 1));
          },
          typeSpeed + Math.random() * 50
        );
        return () => clearTimeout(timeout);
      } else {
        const isLastPhrase = phraseIndex === phrases.length - 1;

        if (isLastPhrase && !deleteLastPhrase) {
          setIsComplete(true);
          return;
        }

        if (phrases.length > 1 || loop) {
          const timeout = setTimeout(() => {
            setIsDeleting(true);
          }, pauseDuration);
          return () => clearTimeout(timeout);
        }
      }
    }
  }, [
    displayText,
    isDeleting,
    phraseIndex,
    phrases,
    typeSpeed,
    deleteSpeed,
    pauseDuration,
    loop,
    isComplete,
    hasStarted,
    deleteLastPhrase
  ]);

  return (
    <span className={cn('inline-flex items-baseline', className)}>
      <span className="whitespace-pre-wrap text-foreground">{displayText}</span>

      {showCursor && (
        <motion.span
          className={cn(
            'ml-0.5 inline-block h-4 w-0.75 bg-primary',
            cursorClassName
          )}
          animate={{ opacity: [1, 0] }}
          transition={{
            duration: 0.6,
            repeat: Infinity,
            repeatType: 'reverse',
            ease: 'easeInOut'
          }}
        />
      )}
    </span>
  );
}
