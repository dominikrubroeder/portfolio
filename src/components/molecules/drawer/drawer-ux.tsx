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

export function DrawerUx() {
  return (
    <Drawer showSwipeHandle>
      <DrawerTrigger
        render={<Button variant="link-foreground">user experience</Button>}
      />
      <DrawerContent>
        <DrawerHeader>
          <DrawerTitle>About the users experience</DrawerTitle>
          <DrawerDescription className="sr-only">
            Drawer with a swipe handle.
          </DrawerDescription>
        </DrawerHeader>
        <div className="flex-1 p-4 xl:px-6">
          <p>
            The user experience has many touchpoints: before, while and after
            the interaction of a user with a product or service. It is the
            overall satisfaction of the user about this interaction, what gets
            remembered and felt about the usage, consciously and unconsciously,
            physically and mentally, joyful or frustrating. It is our job as
            interface and experience designers to build a great experience, and
            to build up the details that make this experience a delightful and
            easy to use one.
          </p>
          <p>
            And there are more types of "users" than the regular user on
            websites, apps and ecommerce shops. Also the developer is a user, a
            user of the codebase. The marketer is a user, a user of a content
            management system, preparing a new landing page. The CEO is a user,
            a user of a concept that is provided to him when evaluating a new
            feature. In all of these areas, it is again the job for us designers
            to make a great interaction possible, provide good, understandable,
            comprehensive and justified concepts for these integrations.
          </p>
        </div>
        <DrawerFooter>
          <DrawerClose render={<Button>Close</Button>} />
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
}
