'use client';

import * as React from 'react';
import { useCallback } from 'react';

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectSeparator,
  SelectTrigger,
  SelectValue
} from './select';
import { useUpdateSearchParams } from '@/hooks/useUpdateSearchParams';

export function ToolFilterSelect({ defaultValue }: { defaultValue?: string }) {
  const { updateSearchParams } = useUpdateSearchParams();

  const handleFilter = useCallback(
    (value: string) => {
      updateSearchParams({
        withName: 'tool-filter',
        withValue: value,
        scroll: false
      });
    },
    [updateSearchParams]
  );

  return (
    <Select defaultValue={defaultValue} onValueChange={handleFilter}>
      <SelectTrigger className="w-40">
        <SelectValue placeholder="Filter for" />
      </SelectTrigger>

      <SelectContent>
        <SelectGroup>
          <SelectItem value="none">None</SelectItem>
        </SelectGroup>

        <SelectSeparator />

        <SelectGroup>
          <SelectLabel>Knowledge</SelectLabel>
          <SelectItem value="not started">Not started</SelectItem>
          <SelectItem value="used">Used</SelectItem>
          <SelectItem value="experienced">Experienced</SelectItem>
          <SelectItem value="professional">Professional</SelectItem>
          <SelectItem value="daily">Daily</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}
