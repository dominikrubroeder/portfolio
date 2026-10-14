'use client';

import { CheckIcon, ChevronDownIcon } from '@heroicons/react/16/solid';

import { Button } from '@/components/ui/button';
import type { ButtonProps } from '@/components/ui/button';
import { useSelect } from '@/components/ui/select';
import type { SelectOption } from '@/components/ui/select';

import { cn } from '@/lib/utils';

export function Select({
  trigger,
  placeholder,
  options,
  initialValue,
  onValueChange
}: {
  trigger: Omit<ButtonProps, 'children'>;
  placeholder: string;
  initialValue?: string;
  options: SelectOption[];
  onValueChange?: (option: SelectOption) => void;
}) {
  const { value, isOpen, toggleOpen, handleSelection } = useSelect({
    initialValue,
    onValueChange: onValueChange
  });

  return (
    <div className="relative w-max">
      <Button {...trigger} onClick={toggleOpen}>
        <span>{value ?? placeholder}</span>
        <ChevronDownIcon />
      </Button>

      {isOpen && (
        <div className="[html[data-theme=default]_&]:motion-safe:animate-fade-up-1rem absolute top-14 right-0 z-max rounded border bg-background px-3 py-2">
          {options.map((option) => (
            <Button
              key={option.key}
              variant="ghost-foreground"
              className={cn('w-max', value !== option.value && 'pl-6')}
              onClick={() => handleSelection(option)}
            >
              {value === option.value && (
                <CheckIcon className="size-4 shrink-0" />
              )}

              <span>{option.value}</span>
            </Button>
          ))}
        </div>
      )}
    </div>
  );
}
