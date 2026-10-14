'use client';

import { Tooltip as TooltipPrimitive } from '@base-ui/react/tooltip';

import type { TooltipProps } from '@/components/ui/tooltip/types';

import { cn } from '@/lib/utils';

export function Tooltip({
  content,
  render,
  children,
  side = 'top',
  className
}: TooltipProps) {
  return (
    <TooltipPrimitive.Root>
      <TooltipPrimitive.Trigger render={render}>
        {children}
      </TooltipPrimitive.Trigger>
      <TooltipPrimitive.Portal>
        <TooltipPrimitive.Positioner
          side={side}
          sideOffset={8}
          className="z-max"
        >
          <TooltipPrimitive.Popup
            className={cn(
              'max-w-64 rounded-xl bg-popover px-2.5 py-1.5 text-sm text-popover-foreground ring-1 ring-foreground/10 data-ending-style:opacity-0 data-starting-style:opacity-0 motion-safe:transition-opacity motion-safe:duration-150',
              className
            )}
          >
            {content}
          </TooltipPrimitive.Popup>
        </TooltipPrimitive.Positioner>
      </TooltipPrimitive.Portal>
    </TooltipPrimitive.Root>
  );
}
