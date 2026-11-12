'use client';

import { Select as SelectPrimitive } from '@base-ui/react/select';
import { CheckIcon, ChevronDownIcon } from '@heroicons/react/24/outline';

import type { ButtonProps } from '@/components/ui/button';
import { Button } from '@/components/ui/button';
import type { SelectOption } from '@/components/ui/select';

export function Select({
  trigger,
  placeholder,
  options,
  initialValue,
  value,
  label,
  onValueChange
}: {
  trigger: Omit<ButtonProps, 'children'>;
  placeholder: string;
  /** Uncontrolled start value (an option `key`). */
  initialValue?: string;
  /** Controlled value (an option `key`): the shown option follows it when the setting changes elsewhere. */
  value?: string;
  /** Names the control for assistive tech, together with the current option ("Radius: Medium"). */
  label?: string;
  options: SelectOption[];
  onValueChange?: (option: SelectOption) => void;
}) {
  const selected = options.find(
    (option) => option.key === (value ?? initialValue)
  );

  return (
    <SelectPrimitive.Root
      value={value}
      defaultValue={initialValue}
      onValueChange={(key) => {
        const option = options.find((item) => item.key === key);

        if (option) onValueChange?.(option);
      }}
    >
      <SelectPrimitive.Trigger
        render={(props) => (
          <Button
            {...trigger}
            {...props}
            aria-label={
              label ? `${label}: ${selected?.value ?? placeholder}` : undefined
            }
          >
            {selected?.icon}
            <span>{selected?.value ?? placeholder}</span>
            <ChevronDownIcon aria-hidden className="size-4 stroke-2" />
          </Button>
        )}
      />

      <SelectPrimitive.Portal>
        <SelectPrimitive.Positioner
          side="bottom"
          align="end"
          sideOffset={8}
          alignItemWithTrigger={false}
          className="z-max"
        >
          <SelectPrimitive.Popup className="max-h-(--available-height) min-w-(--anchor-width) overflow-y-auto overscroll-contain rounded-theme-md border bg-background px-3 py-2 outline-none in-data-[theme=wireframe]:rounded-(--sketch-button-radius)! in-data-[theme=wireframe]:border-[1.5px] in-data-[theme=wireframe]:border-foreground data-ending-style:opacity-0 data-starting-style:opacity-0 [html[data-theme-animations=on]_&]:motion-safe:transition-opacity [html[data-theme-animations=on]_&]:motion-safe:duration-150">
            <SelectPrimitive.List>
              {options.map((option) => (
                <SelectPrimitive.Item
                  key={option.key}
                  value={option.key}
                  className="interactive-none flex min-h-11 w-full cursor-default items-center gap-2 rounded-xl px-2 py-2 text-foreground outline-none select-none in-data-[theme=wireframe]:rounded-(--sketch-button-radius)! data-highlighted:bg-muted"
                >
                  <span className="size-4 shrink-0">
                    <SelectPrimitive.ItemIndicator>
                      <CheckIcon aria-hidden className="size-4 stroke-2" />
                    </SelectPrimitive.ItemIndicator>
                  </span>

                  {option.icon}

                  <SelectPrimitive.ItemText>
                    {option.value}
                  </SelectPrimitive.ItemText>

                  {option.isDefault && (
                    <span className="text-sm text-muted-foreground">
                      <span className="sr-only">, </span>Default
                    </span>
                  )}
                </SelectPrimitive.Item>
              ))}
            </SelectPrimitive.List>
          </SelectPrimitive.Popup>
        </SelectPrimitive.Positioner>
      </SelectPrimitive.Portal>
    </SelectPrimitive.Root>
  );
}
