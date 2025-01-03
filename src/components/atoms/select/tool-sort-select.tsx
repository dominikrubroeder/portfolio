'use client';

import * as React from 'react';
import { useCallback } from 'react';

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue
} from './select';
import { useUpdateSearchParams } from '@/hooks/useUpdateSearchParams';

export function ToolSortSelect() {
  const { updateSearchParams } = useUpdateSearchParams();

  const handleSort = useCallback(
    (value: string) => {
      updateSearchParams({
        withName: 'tool-sort',
        withValue: value,
        scroll: false
      });
    },
    [updateSearchParams]
  );

  return (
    <Select onValueChange={handleSort}>
      <SelectTrigger className="w-40">
        <SelectValue placeholder="Sort by" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>Alphabetically</SelectLabel>
          <SelectItem value="a-z">A – Z</SelectItem>
          <SelectItem value="z-a">Z – A</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}
