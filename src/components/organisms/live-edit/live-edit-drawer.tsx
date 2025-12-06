'use client';

import type { ReactNode } from 'react';

import type { ReducedButtonProps } from '@/components/atoms/button';
import { Button } from '@/components/atoms/button';
import {
  DialogDescription,
  DialogHeader,
  DialogTitle
} from '@/components/molecules/dialog';
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerFooter,
  DrawerTrigger
} from '@/components/molecules/drawer';

import { useMediaQuery } from '@/hooks/use-media-query';
import { ThemeDrawerSection } from '@/components/organisms/theme/theme-drawer-section';
import { ThemeDrawerOption } from '@/components/organisms/theme/theme-drawer-option';
import { ThemeSpacingContainerWidthSetting } from '@/components/organisms/theme/theme-spacing-container-width-setting';
import { ThemeSpacingSectionBreakSetting } from '@/components/organisms/theme/theme-spacing-section-break-setting';
import {
  ArrowsRightLeftIcon,
  ArrowUturnLeftIcon
} from '@heroicons/react/16/solid';
import { InformationCircleIcon } from '@heroicons/react/24/outline';
import { EllipsisVertical } from 'lucide-react';
import { useLiveEdit } from '@/components/organisms/live-edit/live-edit-context';

export function LiveEditDrawer({
  trigger,
  buttonProps,
  buttonIconOnly,
  componentName
}: {
  trigger?: ReactNode;
  buttonProps?: ReducedButtonProps;
  buttonIconOnly?: boolean;
  componentName: string;
}) {
  const { isOpenDrawer, setIsOpenDrawer } = useLiveEdit();
  const isDesktop = useMediaQuery('(min-width: 1280px)');
  const defaultTrigger = (
    <Button {...buttonProps}>
      {buttonIconOnly ? (
        <ArrowsRightLeftIcon />
      ) : (
        <>
          <EllipsisVertical /> <span className="sr-only">Live edit</span>
        </>
      )}
    </Button>
  );

  const header = (
    <DialogHeader>
      <div>
        <div className="font-semibold text-foreground">Live edit</div>
        <DialogTitle>{componentName}</DialogTitle>
      </div>

      <DialogDescription>
        A component, live edited on the page
      </DialogDescription>
    </DialogHeader>
  );

  const content = (
    <div className="space-y-6 px-4 md:px-0">
      <ThemeDrawerSection
        title="Spacing"
        description="Spacing changes may not be visible on mobile devices"
      >
        <ThemeDrawerOption>
          <div className="text-foreground">Width</div>
          <ThemeSpacingContainerWidthSetting />
        </ThemeDrawerOption>

        <ThemeDrawerOption>
          <div className="text-foreground">Section Break</div>
          <ThemeSpacingSectionBreakSetting />
        </ThemeDrawerOption>
      </ThemeDrawerSection>
    </div>
  );

  const footer = (
    <DrawerFooter className="pt-2">
      <p className="flex items-center justify-center gap-1 text-center text-xs text-muted-foreground">
        <InformationCircleIcon className="size-4" />
        Live edit settings do auto-apply
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

  return (
    <Drawer
      open={isOpenDrawer}
      onOpenChange={setIsOpenDrawer}
      direction={isDesktop ? 'right' : undefined}
    >
      <DrawerTrigger asChild>{trigger ?? defaultTrigger}</DrawerTrigger>

      <DrawerContent>
        <div className="space-y-6 overflow-y-auto p-4">
          {header}

          {content}

          {footer}
        </div>
      </DrawerContent>
    </Drawer>
  );
}
