'use client';

import { MinusIcon, PlusIcon } from '@heroicons/react/16/solid';

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

import { BrandRow } from '@/components/feature/brand';
import { tools } from '@/components/feature/tools';
import { Ul } from '@/components/feature/typography';

export function DrawerTools({
  drawerTriggerLabel
}: {
  drawerTriggerLabel?: string;
}) {
  return (
    <Drawer showSwipeHandle>
      <DrawerTrigger
        render={
          <Button
            variant="ghost-foreground"
            iconOnly={!drawerTriggerLabel}
            label="Open more tools"
          >
            {drawerTriggerLabel || <PlusIcon />}
          </Button>
        }
      />
      <DrawerContent>
        <DrawerHeader>
          <DrawerTitle>More tools I&apos;ve worked with</DrawerTitle>
          <DrawerDescription className="sr-only">
            More tools I&apos;ve worked with during the last years
          </DrawerDescription>
        </DrawerHeader>
        <div className="flex-1 space-y-4 p-4 xl:px-6">
          <Ul className="grid w-full gap-6 sm:gap-10">
            {tools
              .slice()
              .sort((a, b) => {
                return a.group.localeCompare(b.group);
              })
              .map((item, index) => (
                <li key={`all-tools-${item.group}`}>
                  <div className="space-y-3 sm:space-y-4">
                    <div className="relative flex justify-between gap-4">
                      <div className="font-bold">{item.group}</div>
                    </div>

                    <div className="space-y-2">
                      <Ul className="mb-0 space-y-5 rounded border bg-background p-4 sm:-ml-2 sm:space-y-3 sm:border-none sm:p-0">
                        {item.children
                          .slice()
                          .sort((a, b) => a.name.localeCompare(b.name))
                          .map((child) => (
                            <li key={`${item.group}-${child.name}`}>
                              <BrandRow
                                brand={child}
                                index={index}
                                showDescription={false}
                              />
                            </li>
                          ))}
                      </Ul>
                    </div>
                  </div>
                </li>
              ))}
          </Ul>
        </div>
        <DrawerFooter>
          <DrawerClose
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
