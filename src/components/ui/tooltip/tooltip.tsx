'use client';

import { Tooltip as TooltipPrimitive } from '@base-ui/react/tooltip';

import { cn } from '@/lib/utils';

import type { TooltipProps } from './types';

export function Tooltip({
  content,
  render,
  children,
  side = 'top',
  open,
  onOpenChange,
  closeOnClick,
  className
}: TooltipProps) {
  return (
    <TooltipPrimitive.Root
      open={open}
      onOpenChange={onOpenChange ? (next) => onOpenChange(next) : undefined}
    >
      <TooltipPrimitive.Trigger render={render} closeOnClick={closeOnClick}>
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
              'max-w-64 rounded-xl bg-popover px-2.5 py-1.5 text-sm text-popover-foreground ring-1 ring-foreground/10 in-data-[theme=wireframe]:rounded-(--sketch-button-radius)! in-data-[theme=wireframe]:border-[1.5px] in-data-[theme=wireframe]:border-foreground in-data-[theme=wireframe]:ring-0 data-ending-style:opacity-0 data-starting-style:opacity-0 motion-safe:transition-opacity motion-safe:duration-150',
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
