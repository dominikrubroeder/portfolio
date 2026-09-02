'use client';

import {
  createContext,
  type ReactNode,
  useCallback,
  useContext,
  useMemo,
  useState
} from 'react';

export type SidebarKey = 'theme' | null;

export interface SidebarContextValue {
  /** The active sidebar key, or `null` when the sidebar is closed. */
  key: SidebarKey;
  /** Whether the sidebar is currently open. */
  isOpen: boolean;
  /** Open the sidebar with the given trigger key. */
  open: (trigger: SidebarKey) => void;
  /** Close the sidebar. */
  close: () => void;
  /** Toggle the sidebar for a given trigger key.
   *  If that trigger is already active, close; otherwise open with the new trigger. */
  toggle: (trigger: SidebarKey) => void;
}

const SidebarContext = createContext<SidebarContextValue | null>(null);

export function SidebarProvider({ children }: { children: ReactNode }) {
  const [key, setKey] = useState<SidebarKey>(null);

  const open = useCallback((key: SidebarKey) => setKey(key), []);

  const close = useCallback(() => setKey(null), []);

  const toggle = useCallback(
    (key: SidebarKey) => setKey((prev) => (prev === key ? null : key)),
    []
  );

  const value = useMemo<SidebarContextValue>(
    () => ({ key: key, isOpen: key !== null, open, close, toggle }),
    [key, open, close, toggle]
  );

  return (
    <SidebarContext.Provider value={value}>{children}</SidebarContext.Provider>
  );
}

export function useSidebar(): SidebarContextValue {
  const ctx = useContext(SidebarContext);

  if (!ctx) {
    throw new Error('useSidebar must be used inside a <SidebarProvider>');
  }

  return ctx;
}
