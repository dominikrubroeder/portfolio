'use client';

import { Button } from '@/components/atoms/button';
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

export function DrawerPhilosophy() {
  return (
    <Drawer showSwipeHandle>
      <DrawerTrigger
        render={<Button variant="ghost-foreground">1 + 1 = 3</Button>}
      />
      <DrawerContent>
        <DrawerHeader>
          <DrawerTitle>Philosophy</DrawerTitle>
          <DrawerDescription className="sr-only">
            My background in design and engineering
          </DrawerDescription>
        </DrawerHeader>
        <div className="flex-1 p-4 xl:px-6">
          <p>
            My personal core is: I am a designer. I learned it, studied it, was
            a trainee, student and on full-time job on designing user
            interfaces.
          </p>
        </div>
        <DrawerFooter>
          <DrawerClose render={<Button>Close</Button>} />
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
}
