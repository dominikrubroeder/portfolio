'use client';

import { useEffect } from 'react';

import { MinusIcon } from '@heroicons/react/16/solid';

import { Button } from '@/components/ui/button';
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle
} from '@/components/ui/drawer';

import { ThemeSettings } from '@/components/feature/theme/theme-settings';
import { ThemeSettingsAnnouncer } from '@/components/feature/theme/theme-settings-announcer';

export function ThemeDrawer({
  open,
  onOpenChange,
  finalFocus,
  onMounted
}: {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  /** The element that gets focus back when the drawer closes (the header trigger). */
  finalFocus: () => HTMLElement | null;
  /** Called once the closed drawer is on screen, so the caller can open it with a slide. */
  onMounted?: () => void;
}) {
  useEffect(() => {
    onMounted?.();
  }, [onMounted]);

  return (
    <Drawer open={open} onOpenChange={onOpenChange} showSwipeHandle>
      <DrawerContent finalFocus={finalFocus}>
        <DrawerHeader>
          <DrawerTitle>Theme settings</DrawerTitle>
          <DrawerDescription className="sr-only">
            Choose theme, appearance, color, font size, animations, radius and
            container width. Changes apply immediately.
          </DrawerDescription>
        </DrawerHeader>

        <div className="flex-1 space-y-6 p-4 xl:px-6">
          <ThemeSettings />
          <ThemeSettingsAnnouncer />
        </div>

        <DrawerFooter>
          <DrawerClose
            className="w-full"
            render={
              <Button variant="text-muted" aria-label="Close" title="close">
                <MinusIcon />
              </Button>
            }
          />
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
}
