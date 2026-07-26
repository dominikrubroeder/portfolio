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
  delay?: number;
  loop?: boolean;
  showCursor?: boolean;
  className?: string;
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
  delay = 0,
  loop = true,
  showCursor = true
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

interface CharacterTypewriterProps {
  text: string;
  className?: string;
  charClassName?: string;
  delay?: number;
  staggerDelay?: number;
}

export function CharacterTypewriter({
  text,
  className,
  charClassName,
  delay = 0,
  staggerDelay = 0.05
}: CharacterTypewriterProps) {
  const characters = text.split('');

  return (
    <span className={cn('inline-flex flex-wrap', className)}>
      {characters.map((char, index) => (
        <motion.span
          key={`${char}-${index}`}
          className={cn(charClassName)}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.1,
            delay: delay + index * staggerDelay,
            ease: 'easeOut'
          }}
        >
          {char === ' ' ? '\u00A0' : char}
        </motion.span>
      ))}
    </span>
  );
}

interface WordTypewriterProps {
  text: string;
  className?: string;
  wordClassName?: string;
  delay?: number;
  staggerDelay?: number;
}

export function WordTypewriter({
  text,
  className,
  wordClassName,
  delay = 0,
  staggerDelay = 0.15
}: WordTypewriterProps) {
  const words = text.split(' ');

  return (
    <span className={cn('inline-flex flex-wrap gap-x-2', className)}>
      {words.map((word, index) => (
        <motion.span
          key={`${word}-${index}`}
          className={cn(wordClassName)}
          initial={{ opacity: 0, filter: 'blur(4px)' }}
          animate={{ opacity: 1, filter: 'blur(0px)' }}
          transition={{
            duration: 0.3,
            delay: delay + index * staggerDelay,
            ease: 'easeOut'
          }}
        >
          {word}
        </motion.span>
      ))}
    </span>
  );
}

interface RevealTypewriterProps {
  text: string;
  className?: string;
  delay?: number;
  duration?: number;
}

export function RevealTypewriter({
  text,
  className,
  delay = 0,
  duration = 2
}: RevealTypewriterProps) {
  return (
    <span className={cn('relative inline-block overflow-hidden', className)}>
      <span className="invisible">{text}</span>
      <motion.span
        className="absolute inset-0"
        initial={{ clipPath: 'inset(0 100% 0 0)' }}
        animate={{ clipPath: 'inset(0 0% 0 0)' }}
        transition={{
          duration,
          delay,
          ease: [0.65, 0, 0.35, 1]
        }}
      >
        {text}
      </motion.span>
    </span>
  );
}
