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
        className="mx-4 mb-4 flex cursor-pointer select-none items-center gap-3 sm:ml-16"
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

        <Button variant="secondary" aria-label="Hide and show more items">
          {state.isVisible ? 'Less' : 'More'}
        </Button>
      </div>

      {state.isVisible && (
        <ul className="mx-4 grid animate-fadeUp gap-12 sm:mx-16 md:grid-cols-2 md:gap-6 lg:grid-cols-3">
          {items.map((item) => {
            if (item.priority === 'low')
              return (
                <li key={item.title}>
                  <SliderItem
                    className="w-full md:max-w-sm"
                    sliderItem={item}
                    type="Tool"
                  />
                </li>
              );
          })}
        </ul>
      )}
    </div>
  );
}
