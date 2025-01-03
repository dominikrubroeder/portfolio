'use client';

import { useDebouncedCallback } from 'use-debounce';
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';
import { useUpdateSearchParams } from '@/hooks/useUpdateSearchParams';

export default function ToolSearch({ placeholder }: { placeholder: string }) {
  const { searchParams, updateSearchParams } = useUpdateSearchParams();

  const handleSearch = useDebouncedCallback((term: string) => {
    updateSearchParams({
      withName: 'tool-search',
      withValue: term,
      scroll: false
    });
  }, 300);

  return (
    <div className="relative flex flex-1 shrink-0">
      <label htmlFor="search" className="sr-only">
        Search
      </label>

      <input
        className="peer block h-11 w-full rounded-md border bg-background py-2 pl-10 font-semibold text-foreground placeholder:font-normal placeholder:text-muted-foreground"
        placeholder={placeholder}
        onChange={(e) => {
          handleSearch(e.target.value);
        }}
        defaultValue={searchParams.get('tool')?.toString()}
      />

      <MagnifyingGlassIcon className="absolute left-3 top-1/2 size-[1.125rem] -translate-y-1/2 text-muted-foreground peer-focus:text-foreground" />
    </div>
  );
}
