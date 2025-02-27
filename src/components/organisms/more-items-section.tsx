'use client';

import { useEffect, useState } from 'react';
import { Technology } from '@/interfaces';
import Button from '@/components/atoms/button';
import Brand from '@/components/atoms/brand';
import { MinusIcon, PlusIcon } from '@heroicons/react/20/solid';
import { ArrowTopRightOnSquareIcon, StarIcon } from '@heroicons/react/24/solid';
import ExperienceBar from '@/components/atoms/experience-bar';
import { Tool } from '@/components/organisms/tools/types';
import { useScrollIntoView } from '@/hooks/useScrollIntoView';

export default function MoreItemsSection({
  items
}: {
  items: { group: string; children: (Tool | Technology)[] }[];
}) {
  const { scrollIntoView } = useScrollIntoView();
  const [state, setState] = useState<{ isVisible: undefined | boolean }>({
    isVisible: undefined
  });

  useEffect(
    () =>
      state.isVisible
        ? scrollIntoView({ id: 'tool-list' })
        : state.isVisible === false
          ? scrollIntoView({ id: 'tools' })
          : undefined,
    [state.isVisible]
  );

  return (
    <div className="scroll-mt-24 space-y-8 px-4 xl:ml-12" id="tool-list">
      <Button
        variant="primary"
        className="mx-auto inline-flex justify-center"
        onClick={() => {
          setState((prevState) => {
            return { isVisible: !prevState.isVisible };
          });
        }}
      >
        {state.isVisible && (
          <MinusIcon className="size-6 text-primary-foreground" />
        )}
        {!state.isVisible && (
          <PlusIcon className="size-6 text-primary-foreground" />
        )}
        I also work, plan to work or worked with {length} more
      </Button>

      {state.isVisible && (
        <div
          className="mx-auto w-full space-y-8 md:max-w-(--breakpoint-sm)"
          id="tool-list"
        >
          <ul className="animate-fade-up-1rem space-y-8">
            {items
              .sort((a, b) => {
                return a.group.localeCompare(b.group);
              })
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
                          <li key={index} className="relative flex gap-4">
                            {item.knowledge === 'Daily' && (
                              <StarIcon className="absolute top-1/2 -left-12 -mt-1 size-5 -translate-y-1/2 text-primary" />
                            )}

                            <Brand
                              brand={item.title}
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

          <Button
            variant="primary"
            className="mx-auto inline-flex w-full justify-center"
            onClick={() => {
              setState((prevState) => {
                return { isVisible: !prevState.isVisible };
              });
            }}
          >
            {state.isVisible && (
              <MinusIcon className="size-6 text-primary-foreground" />
            )}
            {!state.isVisible && (
              <PlusIcon className="size-6 text-primary-foreground" />
            )}
            Close
          </Button>
        </div>
      )}
    </div>
  );
}
