'use client';

import type { ReactNode } from 'react';
import { useState } from 'react';

import type { ReducedButtonProps } from '@/components/atoms/button';
import { Button } from '@/components/atoms/button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger
} from '@/components/molecules/dialog';
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerFooter,
  DrawerTrigger
} from '@/components/molecules/drawer';

import { useMediaQuery } from '@/hooks/use-media-query';
import { ThemeWinterToggle } from '@/components/organisms/events';
import { ThemeDrawerSection } from '@/components/organisms/theme/theme-drawer-section';
import { ThemeDrawerOption } from '@/components/organisms/theme/theme-drawer-option';
import { ThemeSelect } from '@/components/organisms/theme/theme-select';
import { ThemeAppearanceSelect } from '@/components/organisms/theme/theme-appearance-select';
import { ThemeColorSetting } from '@/components/organisms/theme/theme-color-setting';
import { ThemeFontSizeSetting } from '@/components/organisms/theme/theme-font-size-setting';
import { Toggle } from '@/components/atoms/toggle';
import { ThemeSpacingContainerWidthSetting } from '@/components/organisms/theme/theme-spacing-container-width-setting';
import { ThemeSpacingSectionBreakSetting } from '@/components/organisms/theme/theme-spacing-section-break-setting';
import {
  ArrowsRightLeftIcon,
  ArrowUturnLeftIcon
} from '@heroicons/react/16/solid';
import { ThemeAnimationSetting } from '@/components/organisms/theme/theme-animation-setting';
import { InformationCircleIcon } from '@heroicons/react/24/outline';
import { useTheme } from '@/components/organisms/theme/theme-context';

export function ThemeDrawer({
  trigger,
  buttonProps,
  buttonIconOnly
}: {
  trigger?: ReactNode;
  buttonProps?: ReducedButtonProps;
  buttonIconOnly?: boolean;
}) {
  const [open, setOpen] = useState<boolean>(false);
  const { theme } = useTheme();
  const isDesktop = useMediaQuery('(min-width: 768px)');
  const defaultTrigger = (
    <Button {...buttonProps}>
      {buttonIconOnly ? (
        <ArrowsRightLeftIcon />
      ) : (
        <>
          <ArrowsRightLeftIcon /> <span>Modify Theme: {theme.value}</span>
        </>
      )}
    </Button>
  );

  const header = (
    <DialogHeader>
      <DialogTitle>Modify this beautiful page</DialogTitle>
      <DialogDescription>
        Feel free to edit this theme to your behalfs. Change colors, set a new
        theme overall, or play around with current events to see how the app
        behaves on those changes.
      </DialogDescription>
    </DialogHeader>
  );

  const content = (
    <div className="space-y-6 px-4 md:px-0">
      <ThemeDrawerSection title="Theme">
        <ThemeDrawerOption>
          <div className="text-foreground">Theme</div>
          <ThemeSelect />
        </ThemeDrawerOption>

        <ThemeDrawerOption>
          <div className="text-foreground">Appearance</div>
          <ThemeAppearanceSelect />
        </ThemeDrawerOption>

        <ThemeDrawerOption>
          <div className="text-foreground">Color</div>
          <ThemeColorSetting />
        </ThemeDrawerOption>
      </ThemeDrawerSection>

      <ThemeDrawerSection title="Font">
        <ThemeDrawerOption>
          <div className="text-foreground">Size</div>
          <ThemeFontSizeSetting />
        </ThemeDrawerOption>
      </ThemeDrawerSection>

      <ThemeDrawerSection title="Spacing">
        <ThemeDrawerOption>
          <div className="text-foreground">Container Width</div>
          <ThemeSpacingContainerWidthSetting />
        </ThemeDrawerOption>

        <ThemeDrawerOption>
          <div className="text-foreground">Section Break</div>
          <ThemeSpacingSectionBreakSetting />
        </ThemeDrawerOption>
      </ThemeDrawerSection>

      <ThemeAnimationSetting />

      <ThemeDrawerSection title="Border">
        <ThemeDrawerOption>
          <div className="text-foreground">Color</div>
          <ThemeColorSetting />
        </ThemeDrawerOption>

        <ThemeDrawerOption>
          <div className="text-foreground">Radius</div>
          <ThemeColorSetting />
        </ThemeDrawerOption>

        <ThemeDrawerOption>
          <div className="text-foreground">Width</div>
          <ThemeFontSizeSetting />
        </ThemeDrawerOption>

        <ThemeDrawerOption>
          <div className="text-foreground">Style</div>
          <ThemeFontSizeSetting />
        </ThemeDrawerOption>
      </ThemeDrawerSection>

      <ThemeDrawerSection title="Events">
        <ThemeDrawerOption>
          <div className="text-foreground">Enable winter scene</div>
          <ThemeWinterToggle />
        </ThemeDrawerOption>
      </ThemeDrawerSection>

      <ThemeDrawerSection title="Modes">
        <ThemeDrawerOption>
          <div className="text-foreground">Dev Mode</div>
          <Toggle />
        </ThemeDrawerOption>

        <ThemeDrawerOption>
          <div className="text-foreground">Design Mode</div>
          <Toggle />
        </ThemeDrawerOption>
      </ThemeDrawerSection>
    </div>
  );

  const footer = (
    <DrawerFooter className="pt-2">
      <p className="flex items-center justify-center gap-1 text-center text-xs text-muted-foreground">
        <InformationCircleIcon className="size-4" />
        Theme settings do auto-apply
      </p>

      <div className="grid gap-1">
        <DrawerClose asChild>
          <Button variant="ghost">
            <ArrowUturnLeftIcon /> Reset to default
          </Button>
        </DrawerClose>

        <DrawerClose asChild>
          <Button variant="ghost">Close</Button>
        </DrawerClose>
      </div>
    </DrawerFooter>
  );

  if (isDesktop) {
    return (
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger asChild>{trigger ?? defaultTrigger}</DialogTrigger>

        <DialogContent>
          {header}

          {content}

          {footer}
        </DialogContent>
      </Dialog>
    );
  }

  return (
    <Drawer open={open} onOpenChange={setOpen}>
      <DrawerTrigger asChild>{trigger ?? defaultTrigger}</DrawerTrigger>

      <DrawerContent>
        <div className="space-y-6 overflow-y-auto">
          {header}

          {content}

          {footer}
        </div>
      </DrawerContent>
    </Drawer>
  );
}
