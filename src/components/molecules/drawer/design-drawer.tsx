'use client';

import { useState } from 'react';

import { PlusIcon } from '@heroicons/react/16/solid';

import { cn } from '@/lib/utils';

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

export function DesignDrawer({ className }: { className?: string }) {
  const [open, setOpen] = useState(false);
  const isDesktop = false;

  if (isDesktop) {
    return (
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger asChild>
          <span
            className={cn(
              'flex size-8 shrink-0 interactive items-center justify-center rounded-full border bg-muted hover:border-2 hover:border-primary',
              className
            )}
          >
            <span className="sr-only">Open design and theme settings</span>
            <PlusIcon className="size-4 shrink-0 text-current" />
          </span>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Edit profile</DialogTitle>
            <DialogDescription>
              Make changes to your profile here. Click save when you&#39;re
              done.
            </DialogDescription>
          </DialogHeader>
          <ProfileForm />
        </DialogContent>
      </Dialog>
    );
  }

  return (
    <Drawer open={open} onOpenChange={setOpen}>
      <DrawerTrigger asChild>
        <span
          className={cn(
            'flex size-8 shrink-0 interactive items-center justify-center rounded-full border bg-muted hover:border-2 hover:border-primary',
            className
          )}
        >
          <span className="sr-only">Open design and theme settings</span>
          <PlusIcon className="size-4 shrink-0 text-current" />
        </span>
      </DrawerTrigger>
      <DrawerContent>
        <DrawerHeader className="text-left">
          <DrawerTitle className="text-4xl font-bold">
            Design and theme settings
          </DrawerTitle>
          <DrawerDescription>
            Make changes to your profile here. Click save when you&#39;re done.
          </DrawerDescription>
        </DrawerHeader>
        <ProfileForm className="px-4" />
        <DrawerFooter className="pt-2">
          <DrawerClose asChild>
            <Button variant="ghost-foreground">Cancel</Button>
          </DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
}

function ProfileForm({ className }: React.ComponentProps<'form'>) {
  return (
    <div className={cn('grid items-start gap-4', className)}>
      Design Settings
    </div>
  );
}
