'use client';

import { CheckIcon, ChevronDownIcon } from '@heroicons/react/16/solid';

import { cn } from '@/lib/utils';

import { Button, ButtonProps } from '@/components/atoms/button';
import { SelectOption, useSelect } from '@/components/atoms/select';

export function Select({
  trigger,
  placeholder,
  options,
  initialValue,
  onValueChangeAction
}: {
  trigger: Omit<ButtonProps, 'children'>;
  placeholder: string;
  initialValue?: string;
  options: SelectOption[];
  onValueChangeAction?: (option: SelectOption) => void;
}) {
  const { value, isOpen, toggleOpen, handleSelection } = useSelect({
    initialValue,
    onValueChangeAction
  });

  return (
    <div className="relative w-max">
      <Button {...trigger} onClick={toggleOpen}>
        <span>{value ?? placeholder}</span>
        <ChevronDownIcon />
      </Button>

      {isOpen && (
        <div className="absolute top-14 right-0 z-max animate-fade-up-1rem rounded border bg-background px-3 py-2">
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
