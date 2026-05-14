'use client';

import {
  createContext,
  type ReactNode,
  useCallback,
  useContext,
  useMemo,
  useState
} from 'react';

// ---------------------------------------------------------------------------
// Types
// ---------------------------------------------------------------------------

export type SidebarTrigger = 'theme' | null;

export interface SidebarContextValue {
  /** The active sidebar trigger key, or null when the sidebar is closed. */
  trigger: SidebarTrigger;
  /** Whether the sidebar is currently open. */
  isOpen: boolean;
  /** Open the sidebar with the given trigger key. */
  open: (trigger: SidebarTrigger) => void;
  /** Close the sidebar. */
  close: () => void;
  /** Toggle the sidebar for a given trigger key.
   *  If that trigger is already active, close; otherwise open with the new trigger. */
  toggle: (trigger: SidebarTrigger) => void;
}

// ---------------------------------------------------------------------------
// Context
// ---------------------------------------------------------------------------

const SidebarContext = createContext<SidebarContextValue | null>(null);

// ---------------------------------------------------------------------------
// Provider
// ---------------------------------------------------------------------------

export function SidebarProvider({ children }: { children: ReactNode }) {
  const [trigger, setTrigger] = useState<SidebarTrigger>(null);

  const open = useCallback((key: string) => setTrigger(key), []);

  const close = useCallback(() => setTrigger(null), []);

  const toggle = useCallback(
    (key: string) => setTrigger((prev) => (prev === key ? null : key)),
    []
  );

  const value = useMemo<SidebarContextValue>(
    () => ({ trigger, isOpen: trigger !== null, open, close, toggle }),
    [trigger, open, close, toggle]
  );

  return (
    <SidebarContext.Provider value={value}>{children}</SidebarContext.Provider>
  );
}

// ---------------------------------------------------------------------------
// Hook
// ---------------------------------------------------------------------------

export function useSidebar(): SidebarContextValue {
  const ctx = useContext(SidebarContext);

  if (!ctx) {
    throw new Error('useSidebar must be used inside a <SidebarProvider>');
  }

  return ctx;
}
