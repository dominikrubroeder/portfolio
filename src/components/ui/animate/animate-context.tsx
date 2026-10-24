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
