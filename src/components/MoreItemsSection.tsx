'use client';
import { useState } from 'react';
import { Technology, Tool } from '@/lib/interfaces';
import { PlusIcon } from '@heroicons/react/24/solid';
import { MinusIcon } from '@heroicons/react/20/solid';
import RowItem from '@/components/RowItem';

export default function MoreItemsSection({
  items
}: {
  items: Tool[] | Technology[];
}) {
  const [state, setState] = useState<{ isVisible: boolean }>({
    isVisible: false
  });

  if (!items.some((item) => item.priority === 'low')) return null;

  return (
    <div>
      <div
        className="mb-4 flex cursor-pointer select-none items-center gap-4"
        onClick={() =>
          setState((prevState) => {
            return { isVisible: !prevState.isVisible };
          })
        }
      >
        <button
          aria-label="Hide and show more items"
          className="flex h-14 w-14 items-center justify-center rounded-full bg-gray-5 transition hover:bg-gray-4 hover:text-theme-contrary"
        >
          {state.isVisible && <MinusIcon className="h-4 w-4" />}
          {!state.isVisible && <PlusIcon className="h-4 w-4" />}
        </button>
        <button
          aria-label="Hide and show more items"
          className="rounded-full bg-gray-5 p-4 px-6 transition hover:text-theme-contrary"
        >
          {state.isVisible ? 'Hide' : 'More on items'}
        </button>
      </div>

      <ul
        className={`transition ${
          state.isVisible ? 'visible translate-y-0' : 'invisible translate-y-6'
        }`}
      >
        {items.map((item) => {
          if (item.priority === 'low')
            return (
              <li key={item.title}>
                <RowItem rowItem={item} />
              </li>
            );
        })}
      </ul>
    </div>
  );
}
