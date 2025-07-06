'use client';

import { useCallback, useState } from 'react';

import { CheckIcon } from '@heroicons/react/16/solid';
import { ChevronDownIcon } from '@heroicons/react/24/outline';

import { cn } from '@/lib/utils';

import { Button } from '@/components/atoms/button';

export function Select({
  options,
  initialValue,
  onValueChange
}: {
  options: { label: string; value: string }[];
  initialValue?: string;
  onValueChange?: () => void;
}) {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [value, setValue] = useState<string>(initialValue || '');

  const handleSelection = useCallback(
    (value: string) => {
      setValue(value);
      setIsOpen(false);
      onValueChange ? onValueChange() : null;
    },
    [onValueChange]
  );

  return (
    <div className="relative w-max">
      <Button
        variant="ghost"
        className=""
        onClick={() => setIsOpen((prevState) => !prevState)}
      >
        <span>{value}</span> <ChevronDownIcon className="size-4" />
      </Button>

      {isOpen && (
        <div className="absolute top-12 left-1/2 z-max -translate-x-1/2 animate-fade-up-1rem rounded bg-background px-4 py-2 pr-3">
          {options.map((option) => (
            <button
              key={option.value}
              className={cn(
                'flex h-8 items-center gap-2',
                value !== option.label && 'pl-6'
              )}
              onClick={() => handleSelection(option.label)}
            >
              {value === option.label && (
                <CheckIcon className="size-4 shrink-0" />
              )}
              <span>{option.label}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
