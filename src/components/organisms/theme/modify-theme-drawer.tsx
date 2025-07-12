'use client';

import type { ReactNode } from 'react';
import { useState } from 'react';

import { SparklesIcon } from '@heroicons/react/24/outline';

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
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger
} from '@/components/molecules/drawer';

import { useMediaQuery } from '@/hooks/use-media-query';

export function ModifyThemeDrawer({
  trigger,
  buttonProps,
  buttonIconOnly
}: {
  trigger?: ReactNode;
  buttonProps?: ReducedButtonProps;
  buttonIconOnly?: boolean;
}) {
  const [open, setOpen] = useState<boolean>(false);
  const isDesktop = useMediaQuery('(min-width: 768px)');
  const defaultTrigger = (
    <Button {...buttonProps}>
      {buttonIconOnly ? (
        <SparklesIcon />
      ) : (
        <>
          <SparklesIcon /> <span>Modify Theme</span>
        </>
      )}
    </Button>
  );

  if (isDesktop) {
    return (
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger asChild>{trigger ?? defaultTrigger}</DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Edit profile</DialogTitle>
            <DialogDescription>
              Make changes to your profile here. Click save when you&apos;re
              done.
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    );
  }

  return (
    <Drawer open={open} onOpenChange={setOpen}>
      <DrawerTrigger asChild>{trigger ?? defaultTrigger}</DrawerTrigger>
      <DrawerContent>
        <DrawerHeader className="text-left">
          <DrawerTitle>Edit profile</DrawerTitle>
          <DrawerDescription>
            Make changes to your profile here. Click save when you&apos;re done.
          </DrawerDescription>
        </DrawerHeader>
        <DrawerFooter className="pt-2">
          <DrawerClose asChild>
            <Button variant="ghost">Close</Button>
          </DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
}
