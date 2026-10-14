'use client';

import { useState } from 'react';
import type { ReactNode } from 'react';

import { ArrowUturnLeftIcon, PlusIcon } from '@heroicons/react/16/solid';
import { InformationCircleIcon } from '@heroicons/react/24/outline';

import { Button } from '@/components/ui/button';
import type { ReducedButtonProps } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger
} from '@/components/ui/dialog';
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerFooter,
  DrawerTrigger
} from '@/components/ui/drawer';
import { Toggle } from '@/components/ui/toggle';

import { ThemeWinterToggle } from '@/components/feature/events';
import { useTheme } from '@/components/feature/theme';
import { ThemeAnimationSetting } from '@/components/feature/theme/theme-animation-setting';
import { ThemeAppearanceSelect } from '@/components/feature/theme/theme-appearance-select';
import { ThemeColorSetting } from '@/components/feature/theme/theme-color-setting';
import { ThemeFontSizeSetting } from '@/components/feature/theme/theme-font-size-setting';
import { ThemeSelect } from '@/components/feature/theme/theme-select';
import { ThemeSpacingContainerWidthSetting } from '@/components/feature/theme/theme-spacing-container-width-setting';
import { ThemeSpacingSectionBreakSetting } from '@/components/feature/theme/theme-spacing-section-break-setting';

import { useMediaQuery } from '@/hooks/use-media-query';

import { ThemeSettingOption } from './theme-setting-option';
import { ThemeSettingSection } from './theme-setting-section';

export function ThemeDrawer({
  trigger,
  buttonProps,
  buttonIconOnly
}: {
  trigger?: ReactNode;
  buttonProps?: ReducedButtonProps;
  buttonIconOnly?: boolean;
}) {
  const { themeMode, setThemeMode } = useTheme();
  const [open, setOpen] = useState<boolean>(false);
  const isDesktop = useMediaQuery('(min-width: 768px)');
  const defaultTrigger = (
    <Button variant="text-foreground" {...buttonProps}>
      {buttonIconOnly ? (
        <PlusIcon />
      ) : (
        <>
          <PlusIcon /> <span>Modify Theme</span>
        </>
      )}
    </Button>
  );

  const header = (
    <DialogHeader>
      <DialogTitle>Modify me</DialogTitle>
      <DialogDescription>
        Theme settings; apply them to your behalf.
      </DialogDescription>
    </DialogHeader>
  );

  const content = (
    <div className="space-y-6 px-4 md:px-0">
      <ThemeSettingSection title="Theme">
        <ThemeSettingOption>
          <div className="text-foreground">Theme</div>
          <ThemeSelect />
        </ThemeSettingOption>

        <ThemeSettingOption>
          <div className="text-foreground">Appearance</div>
          <ThemeAppearanceSelect />
        </ThemeSettingOption>

        <ThemeSettingOption>
          <div className="text-foreground">Color</div>
          <ThemeColorSetting />
        </ThemeSettingOption>
      </ThemeSettingSection>

      <ThemeSettingSection title="Font">
        <ThemeSettingOption>
          <div className="text-foreground">Size</div>
          <ThemeFontSizeSetting />
        </ThemeSettingOption>
      </ThemeSettingSection>

      <ThemeSettingSection title="Spacing">
        <ThemeSettingOption>
          <div className="text-foreground">Container Width</div>
          <ThemeSpacingContainerWidthSetting />
        </ThemeSettingOption>

        <ThemeSettingOption>
          <div className="text-foreground">Section Break</div>
          <ThemeSpacingSectionBreakSetting />
        </ThemeSettingOption>
      </ThemeSettingSection>

      <ThemeAnimationSetting />

      <ThemeSettingSection title="Border">
        <ThemeSettingOption>
          <div className="text-foreground">Color</div>
          <ThemeColorSetting />
        </ThemeSettingOption>

        <ThemeSettingOption>
          <div className="text-foreground">Radius</div>
          <ThemeColorSetting />
        </ThemeSettingOption>

        <ThemeSettingOption>
          <div className="text-foreground">Width</div>
          <ThemeFontSizeSetting />
        </ThemeSettingOption>

        <ThemeSettingOption>
          <div className="text-foreground">Style</div>
          <ThemeFontSizeSetting />
        </ThemeSettingOption>
      </ThemeSettingSection>

      <ThemeSettingSection title="Events">
        <ThemeSettingOption>
          <div className="text-foreground">Enable winter scene</div>
          <ThemeWinterToggle />
        </ThemeSettingOption>
      </ThemeSettingSection>

      <ThemeSettingSection title="Modes">
        <ThemeSettingOption>
          <div className="text-foreground">Dev Mode</div>
          <Toggle
            isEnabled={themeMode === 'dev'}
            onClick={() => setThemeMode('dev')}
          />
        </ThemeSettingOption>

        <ThemeSettingOption>
          <div className="text-foreground">Design Mode</div>
          <Toggle
            isEnabled={themeMode === 'design'}
            onClick={() => setThemeMode('design')}
          />
        </ThemeSettingOption>
      </ThemeSettingSection>
    </div>
  );

  const footer = (
    <DrawerFooter className="pt-2">
      <div className="grid gap-1">
        <DrawerClose>
          <Button variant="ghost-foreground">
            <ArrowUturnLeftIcon /> Reset to default
          </Button>
        </DrawerClose>

        <DrawerClose>
          <Button variant="ghost-foreground">Close</Button>
        </DrawerClose>
      </div>

      <p className="flex items-center justify-center gap-1 text-center text-xs text-muted-foreground">
        <InformationCircleIcon className="size-4" />
        Theme settings auto-apply
      </p>
    </DrawerFooter>
  );

  if (isDesktop) {
    return (
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger>{trigger ?? defaultTrigger}</DialogTrigger>

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
      <DrawerTrigger>{trigger ?? defaultTrigger}</DrawerTrigger>

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
