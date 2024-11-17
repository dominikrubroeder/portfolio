'use client';

import { useState } from 'react';
import { Technology, Tool } from '@/interfaces';
import Button from '@/components/atoms/button';
import Brand from '@/components/atoms/brand';
import { MinusIcon, PlusIcon } from '@heroicons/react/20/solid';
import { ArrowTopRightOnSquareIcon } from '@heroicons/react/24/solid';
import { BrandType } from '@/types';

export default function MoreItemsSection({
  items
}: {
  items: Tool[] | Technology[];
}) {
  const [state, setState] = useState<{ isVisible: boolean }>({
    isVisible: false
  });

  if (!items.some((item) => item.priority === 'normal')) return null;

  return (
    <div className="ml-2 space-y-8 xl:ml-12">
      <div
        className="mb-4 flex cursor-pointer select-none items-center gap-3 md:mr-20"
        onClick={() =>
          setState((prevState) => {
            return { isVisible: !prevState.isVisible };
          })
        }
      >
        <Button
          variant="secondary"
          className="gap-3"
          aria-label="Hide and show more items"
        >
          {state.isVisible && (
            <MinusIcon className="size-6 rounded-full bg-primary/10 p-1 text-primary" />
          )}
          {!state.isVisible && (
            <PlusIcon className="size-6 rounded-full bg-primary p-1 text-primary-foreground" />
          )}
          <span>{state.isVisible ? 'Done' : `More items`}</span>
        </Button>
      </div>

      {state.isVisible && (
        <div className="mx-auto w-full max-w-screen-sm space-y-8 px-4 md:pl-16">
          <h3 className="flex items-center justify-between gap-4 font-bold text-foreground">
            Tools
            <span className="mr-5 text-sm font-normal text-muted-foreground">
              {items.filter((item) => item.priority === 'normal').length} more
            </span>
          </h3>

          <ul className="animate-fade-up space-y-8">
            {items
              .sort((a, b) => a.title.localeCompare(b.title))
              .map((item) => {
                if (item.priority === 'normal')
                  return (
                    <li key={item.title} className="space-y-6">
                      <div>
                        <div className="flex gap-4">
                          <Brand
                            brand={item.title as BrandType}
                            className="size-10 shrink-0"
                          />
                          <div className="flex-1">
                            <div className="flex flex-wrap items-center justify-between gap-2">
                              <h3 className="flex-1 font-bold text-foreground">
                                {item.title}
                              </h3>

                              <div className="inline-flex rounded-full border px-3 py-2">
                                {item.keyword}
                              </div>
                              <Button
                                variant="secondary"
                                href={item.website}
                                title={`Go to external ${item.title} website`}
                                aria-label={`Go to external ${item.title} website`}
                                asLink
                              >
                                <ArrowTopRightOnSquareIcon className="size-5 shrink-0" />
                              </Button>
                            </div>
                          </div>
                        </div>
                      </div>
                      <hr className="ml-16" />
                    </li>
                  );
              })}
          </ul>
        </div>
      )}
    </div>
  );
}
