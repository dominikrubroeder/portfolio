'use client';

import { BadgeHr } from '@/components/ui/badge-hr';
import { Button } from '@/components/ui/button';
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger
} from '@/components/ui/drawer';

import { LogoIu } from '@/components/feature/logo';

export function DrawerEducation({
  drawerTriggerLabel = 'background in design'
}: {
  drawerTriggerLabel?: string;
}) {
  return (
    <Drawer showSwipeHandle>
      <DrawerTrigger
        render={<Button variant="link-foreground">{drawerTriggerLabel}</Button>}
      />
      <DrawerContent>
        <DrawerHeader>
          <DrawerTitle>Education</DrawerTitle>
          <DrawerDescription className="sr-only">
            My education
          </DrawerDescription>
        </DrawerHeader>
        <div className="flex-1 space-y-4 p-4 xl:px-6">
          <div className="space-y-3">
            <BadgeHr badge={{ children: '2019 - 2023' }} />
            <div>
              <LogoIu id="my-education-iu-logo" className="size-16" />
              <div>
                <b>B. A. Media Design</b>, International University of Applied
                Sciences
              </div>
            </div>
          </div>

          <div className="space-y-3">
            <BadgeHr badge={{ children: '2016 - 2019' }} />
            <div>
              <b>Trainee Media Design</b>, International University of Applied
              Sciences
            </div>
          </div>
        </div>
        <DrawerFooter>
          <DrawerClose render={<Button>Close</Button>} />
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
}
