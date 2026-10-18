'use client';

import { useCallback, useState } from 'react';

import dynamic from 'next/dynamic';

import { Palette } from 'lucide-react';

import { Button } from '@/components/ui/button';

// `ssr: false` is not allowed in Server Components, so this wrapper is a client component.
// The drawer and its controls load the first time a visitor opens it, not with every page.
const ThemeDrawer = dynamic(
  () => import('./theme-drawer').then((module) => module.ThemeDrawer),
  { ssr: false }
);

const THEME_DRAWER_TRIGGER_ID = 'theme-drawer-trigger';

export function ThemeDrawerTrigger() {
  const [hasOpened, setHasOpened] = useState(false);
  const [open, setOpen] = useState(false);

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
        label="Theme settings"
        aria-haspopup="dialog"
        aria-expanded={open}
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
