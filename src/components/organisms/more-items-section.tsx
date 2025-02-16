'use client';

import { useState } from 'react';
import { Technology } from '@/interfaces';
import Button from '@/components/atoms/button';
import Brand from '@/components/atoms/brand';
import { MinusIcon, PlusIcon } from '@heroicons/react/20/solid';
import { ArrowTopRightOnSquareIcon, StarIcon } from '@heroicons/react/24/solid';
import ExperienceBar from '@/components/atoms/experience-bar';
import { Tool } from '@/components/organisms/tools/types';
import { useSearchParams } from 'next/navigation';
import { useScrollIntoView } from '@/hooks/useScrollIntoView';

export default function MoreItemsSection({
  items
}: {
  items: { group: string; children: (Tool | Technology)[] }[];
}) {
  const { scrollIntoView } = useScrollIntoView();
  const [state, setState] = useState<{ isVisible: boolean }>({
    isVisible: false
  });
  const searchParams = useSearchParams();
  const searchTerm = searchParams.get('tool-search')?.toLowerCase();
  const filter = searchParams.get('tool-filter');
  const sorting = searchParams.get('tool-sort');

  const length = items.reduce(
    (previousValue, currentValue, currentIndex, array) => {
      return currentValue.children?.length + previousValue;
    },
    0
  );

  return (
    <div className="scroll-mt-24 space-y-8 px-4 xl:ml-12" id="tool-list">
      <div className="block">
        <Button
          variant="primary"
          className="mx-auto inline-flex justify-center"
          onClick={() => {
            setState((prevState) => {
              return { isVisible: !prevState.isVisible };
            });

            scrollIntoView({ id: 'tool-list' });
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
      </div>

      {state.isVisible && (
        <div
          className="mx-auto w-full space-y-8 md:max-w-(--breakpoint-sm)"
          id="tool-list"
        >
          <ul className="animate-fade-up-1rem space-y-8">
            {items
              .filter((item) =>
                searchTerm
                  ? item.children.some((nestedTool) =>
                      nestedTool.title.toLowerCase().includes(searchTerm)
                    )
                  : item
              )
              .filter((item) =>
                filter
                  ? item.children.some((nestedTool) =>
                      item.children.some((nestedTool) =>
                        nestedTool.knowledge.toLowerCase().includes(filter)
                      )
                    )
                  : item
              )
              .sort((a, b) => {
                if (sorting === 'a-z') {
                  return a.group.localeCompare(b.group);
                }

                if (sorting === 'z-a') {
                  return b.group.localeCompare(a.group);
                }

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
                        .filter((nestedItem) =>
                          searchTerm
                            ? nestedItem.title
                                .toLowerCase()
                                .includes(searchTerm)
                            : nestedItem
                        )
                        .filter((item) =>
                          filter
                            ? item.knowledge.toLowerCase().includes(filter)
                            : item
                        )
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
        </div>
      )}
    </div>
  );
}
