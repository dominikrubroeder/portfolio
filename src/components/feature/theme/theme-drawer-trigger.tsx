'use client';

import { useCallback, useEffect, useRef, useState } from 'react';

import { Palette } from 'lucide-react';

import { Button } from '@/components/ui/button';

import type { ThemeDrawer } from './theme-drawer';

// The drawer and its controls load after the first paint, not with the page bundle.
const loadThemeDrawer = () => import('./theme-drawer');

type ThemeDrawerComponent = typeof ThemeDrawer;

const THEME_DRAWER_TRIGGER_ID = 'theme-drawer-trigger';

// The intro keeps the main thread busy for seconds, so an idle callback alone fires late.
const THEME_DRAWER_PRELOAD_TIMEOUT_MS = 2000;

export function ThemeDrawerTrigger() {
  // Not `next/dynamic`: it wraps the component in `Suspense`, and React holds back revealing
  // that boundary for 300 ms after its fallback, even when the chunk is already loaded.
  const [Drawer, setDrawer] = useState<ThemeDrawerComponent | null>(null);
  const [open, setOpen] = useState(false);
  const openWhenMounted = useRef(false);

  const load = useCallback(() => {
    void loadThemeDrawer().then((module) =>
      setDrawer(() => module.ThemeDrawer)
    );
  }, []);

  // Load the chunk and mount the drawer closed (kept mounted) before the click, so every open,
  // the first included, only flips `open` and the content is already rendered.
  useEffect(() => {
    if (typeof requestIdleCallback === 'function') {
      const id = requestIdleCallback(load, {
        timeout: THEME_DRAWER_PRELOAD_TIMEOUT_MS
      });
      return () => cancelIdleCallback(id);
    }
    const id = setTimeout(load, THEME_DRAWER_PRELOAD_TIMEOUT_MS);
    return () => clearTimeout(id);
  }, [load]);

  // A click before the drawer is ready opens it once it is on screen, closed first, so it
  // still slides in (opening in the commit that mounts it would skip the slide).
  const openIfRequested = useCallback(() => {
    if (!openWhenMounted.current) return;

    openWhenMounted.current = false;
    requestAnimationFrame(() => setOpen(true));
  }, []);

  const handleClick = () => {
    if (Drawer) {
      setOpen(true);
      return;
    }

    openWhenMounted.current = true;
    load();
  };

  return (
    <>
      <Button
        id={THEME_DRAWER_TRIGGER_ID}
        variant="ghost-foreground"
        iconOnly
        label="Open theme settings"
        aria-haspopup="dialog"
        aria-expanded={open}
        onPointerEnter={load}
        onPointerDown={load}
        onFocus={load}
        onClick={handleClick}
      >
        <Palette />
      </Button>

      {Drawer && (
        <Drawer
          open={open}
          onMounted={openIfRequested}
          onOpenChange={setOpen}
          finalFocus={() => document.getElementById(THEME_DRAWER_TRIGGER_ID)}
        />
      )}
    </>
  );
}
