'use client';

import { useCallback, useEffect, useState } from 'react';

import dynamic from 'next/dynamic';

import { Palette } from 'lucide-react';

import { Button } from '@/components/ui/button';

// `ssr: false` is not allowed in Server Components, so this wrapper is a client component.
// The drawer and its controls load the first time a visitor opens it, not with every page.
const loadThemeDrawer = () => import('./theme-drawer');

const ThemeDrawer = dynamic(
  () => loadThemeDrawer().then((module) => module.ThemeDrawer),
  { ssr: false }
);

const THEME_DRAWER_TRIGGER_ID = 'theme-drawer-trigger';

export function ThemeDrawerTrigger() {
  const [hasOpened, setHasOpened] = useState(false);
  const [open, setOpen] = useState(false);

  // Fetch the chunk before the click (idle, hover, focus), so the first open does not wait for the network.
  useEffect(() => {
    if (typeof requestIdleCallback === 'function') {
      const id = requestIdleCallback(() => void loadThemeDrawer());
      return () => cancelIdleCallback(id);
    }
    const id = setTimeout(() => void loadThemeDrawer(), 2000);
    return () => clearTimeout(id);
  }, []);

  // The drawer mounts closed and opens on the next frame once it is on screen, so the first open
  // slides in like the later ones (opening before the lazy chunk has mounted would skip the slide).
  const openOnNextFrame = useCallback(() => {
    requestAnimationFrame(() => setOpen(true));
  }, []);

  return (
    <>
      <Button
        id={THEME_DRAWER_TRIGGER_ID}
        variant="ghost-foreground"
        iconOnly
        label="Open theme settings"
        aria-haspopup="dialog"
        aria-expanded={open}
        onPointerEnter={() => void loadThemeDrawer()}
        onFocus={() => void loadThemeDrawer()}
        onClick={() => (hasOpened ? setOpen(true) : setHasOpened(true))}
      >
        <Palette />
      </Button>

      {hasOpened && (
        <ThemeDrawer
          open={open}
          onMounted={openOnNextFrame}
          onOpenChange={setOpen}
          finalFocus={() => document.getElementById(THEME_DRAWER_TRIGGER_ID)}
        />
      )}
    </>
  );
}
