'use client';

import { createContext, use } from 'react';
import type { ReactNode } from 'react';

const AnimationsContext = createContext(true);

/**
 * JS fallback for the animation switch. CSS decides what the visitor sees
 * (`html[data-theme-animations='off']`); this only stops `motion` from doing work.
 */
export function AnimationsProvider({
  enabled,
  children
}: {
  enabled: boolean;
  children: ReactNode;
}) {
  return <AnimationsContext value={enabled}>{children}</AnimationsContext>;
}

/** `true` outside a provider, so stories and tests animate by default. */
export const useAnimationsEnabled = () => use(AnimationsContext);

const AnimateHoldContext = createContext(false);

/**
 * Holds every viewport-triggered `Animate` below it in its hidden state while `hold` is `true`,
 * and releases them when it turns `false`. Content stays mounted (and in the server HTML) while
 * something covers it, such as the intro, and still reveals once the cover is gone.
 */
export function AnimateHold({
  hold,
  children
}: {
  hold: boolean;
  children: ReactNode;
}) {
  return <AnimateHoldContext value={hold}>{children}</AnimateHoldContext>;
}

/** `false` outside a provider, so reveals trigger on scroll by default. */
export const useAnimateHold = () => use(AnimateHoldContext);
