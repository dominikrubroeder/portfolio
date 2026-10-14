'use client';

import { useCallback, useState } from 'react';

import type { SelectOption } from '@/components/ui/select/types';

export const useSelect = ({
  initialValue,
  onValueChange
}: {
  initialValue: string | undefined;
  onValueChange?: (options: SelectOption) => void;
}) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [value, setValue] = useState<string | undefined>(initialValue);

  const handleSelection = useCallback(
    (option: SelectOption) => {
      setValue(option.value);
      setIsOpen(false);
      onValueChange ? onValueChange(option) : null;
    },
    [onValueChange]
  );

  const toggleOpen = useCallback(
    () => setIsOpen((prevState) => !prevState),
    []
  );

  return {
    isOpen,
    setIsOpen,
    toggleOpen,
    value,
    setValue,
    handleSelection
  };
};
