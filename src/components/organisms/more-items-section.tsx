'use client';

import { useState } from 'react';
import { Technology, Tool } from '@/interfaces';
import Button from '@/components/atoms/button';
import Brand from '@/components/atoms/brand';
import { MinusIcon, PlusIcon } from '@heroicons/react/20/solid';
import { ArrowTopRightOnSquareIcon } from '@heroicons/react/24/solid';
import { BrandType } from '@/types';
import ExperienceBar from '@/components/organisms/tool-section/experience-bar';

export default function MoreItemsSection({
  items
}: {
  items: { group: string; children: (Tool | Technology)[] }[];
}) {
  const [state, setState] = useState<{ isVisible: boolean }>({
    isVisible: false
  });

  const length = items.reduce(
    (previousValue, currentValue, currentIndex, array) => {
      return currentValue.children?.length + previousValue;
    },
    0
  );

  return (
    <div className="space-y-8 px-4 xl:ml-12">
      <Button
        variant="outline"
        className="gap-3"
        aria-label="Hide and show more items"
        onClick={() =>
          setState((prevState) => {
            return { isVisible: !prevState.isVisible };
          })
        }
      >
        {state.isVisible && (
          <MinusIcon className="size-6 rounded-full bg-primary/10 p-1 text-primary" />
        )}
        {!state.isVisible && (
          <PlusIcon className="size-6 rounded-full bg-primary p-1 text-primary-foreground" />
        )}
        <span>{state.isVisible ? 'Done' : `More items`}</span>
      </Button>

      {state.isVisible && (
        <div className="mx-auto w-full space-y-8 md:max-w-screen-sm md:pl-16">
          <h3 className="flex items-center justify-between gap-4">
            I also work, plan to work or worked with
            <span className="mr-5 text-sm font-normal text-muted-foreground">
              {length} more
            </span>
          </h3>

          <ul className="animate-fade-up-1rem space-y-8">
            {items
              .sort((a, b) => a.group.localeCompare(b.group))
              .map((item) => (
                <li key={item.group} className="space-y-6">
                  <div className="space-y-6">
                    <h3 className="font-semibold text-foreground">
                      {item.group}
                    </h3>

                    <ul className="space-y-5 rounded border p-4">
                      {item.children
                        .sort((a, b) => a.title.localeCompare(b.title))
                        .map((item, index) => (
                          <li key={index} className="flex gap-4">
                            <Brand
                              brand={item.title as BrandType}
                              className="size-10 shrink-0"
                            />

                            <div className="flex-1">
                              <div className="flex flex-wrap items-center justify-between gap-2">
                                <h3 className="flex-1 font-bold text-foreground">
                                  {item.title}
                                </h3>

                                <div className="flex items-center justify-center gap-4">
                                  <ExperienceBar progress={item.knowledge} />

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
                          </li>
                        ))}
                    </ul>
                  </div>
                </li>
              ))}
          </ul>
        </div>
      )}
    </div>
  );
}
