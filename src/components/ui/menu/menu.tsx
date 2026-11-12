'use client';

import { Menu as MenuPrimitive } from '@base-ui/react/menu';

import type { ButtonProps } from '@/components/ui/button';
import { Button } from '@/components/ui/button';
import type { MenuItem } from '@/components/ui/menu';

export function Menu({
  trigger,
  items
}: {
  trigger: ButtonProps;
  /** Link options shown in the open menu. */
  items: MenuItem[];
}) {
  return (
    <MenuPrimitive.Root>
      <MenuPrimitive.Trigger
        render={(props) => <Button {...trigger} {...props} />}
      />

      <MenuPrimitive.Portal>
        <MenuPrimitive.Positioner side="top" sideOffset={8} className="z-max">
          <MenuPrimitive.Popup className="min-w-32 rounded-theme-md border bg-background px-3 py-2 outline-none in-data-[theme=wireframe]:rounded-(--sketch-button-radius)! in-data-[theme=wireframe]:border-[1.5px] in-data-[theme=wireframe]:border-foreground data-ending-style:opacity-0 data-starting-style:opacity-0 [html[data-theme-animations=on]_&]:motion-safe:transition-opacity [html[data-theme-animations=on]_&]:motion-safe:duration-150">
            {items.map(({ key, label, icon, href, newTab }) => (
              <MenuPrimitive.LinkItem
                key={key}
                href={href}
                {...(newTab && {
                  target: '_blank',
                  rel: 'noopener noreferrer'
                })}
                className="interactive-none flex min-h-11 w-full cursor-default items-center gap-2 rounded-xl px-2 py-2 text-foreground outline-none select-none in-data-[theme=wireframe]:rounded-(--sketch-button-radius)! data-highlighted:bg-muted"
              >
                {icon}

                <span>{label}</span>

                {newTab && (
                  <span className="sr-only">(opens in a new tab)</span>
                )}
              </MenuPrimitive.LinkItem>
            ))}
          </MenuPrimitive.Popup>
        </MenuPrimitive.Positioner>
      </MenuPrimitive.Portal>
    </MenuPrimitive.Root>
  );
}
