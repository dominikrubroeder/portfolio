'use client';

import { useCallback, useState } from 'react';
import { SelectOption } from '@/components/atoms/select/types';

export const useSelect = ({
  initialValue,
  onValueChangeAction
}: {
  initialValue: string | undefined;
  onValueChangeAction?: (options: SelectOption) => void;
}) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [value, setValue] = useState<string | undefined>(initialValue);

  const handleSelection = useCallback(
    (option: SelectOption) => {
      setValue(option.value);
      setIsOpen(false);
      onValueChangeAction ? onValueChangeAction(option) : null;
    },
    [onValueChangeAction]
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
