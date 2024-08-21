'use client';

import { useState } from 'react';
import { Technology, Tool } from '@/interfaces';
import { PlusIcon } from '@heroicons/react/24/solid';
import { MinusIcon } from '@heroicons/react/20/solid';
import Button from '@/components/atoms/button';
import SliderItem from '@/components/slider-item';

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
    <div className="space-y-8">
      <div
        className="mb-4 mr-4 flex cursor-pointer select-none items-center gap-3"
        onClick={() =>
          setState((prevState) => {
            return { isVisible: !prevState.isVisible };
          })
        }
      >
        <button
          aria-label="Hide and show more items"
          className="flex size-14 items-center justify-center rounded-full bg-accent font-bold text-white transition"
        >
          {state.isVisible && <MinusIcon className="size-5" />}
          {!state.isVisible && <PlusIcon className="size-5" />}
        </button>

        <Button priority="secondary" aria-label="Hide and show more items">
          {state.isVisible ? 'Less' : 'More'}
        </Button>
      </div>

      {state.isVisible && (
        <ul className="grid animate-fadeUp grid-cols-4 gap-4">
          {items.map((item) => {
            if (item.priority === 'low')
              return (
                <li key={item.title}>
                  <SliderItem sliderItem={item} type="Tool" />
                </li>
              );
          })}
        </ul>
      )}
    </div>
  );
}
