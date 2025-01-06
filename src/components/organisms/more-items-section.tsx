'use client';

import { useState } from 'react';
import { Technology } from '@/interfaces';
import Button from '@/components/atoms/button';
import Brand from '@/components/atoms/brand';
import { MinusIcon, PlusIcon } from '@heroicons/react/20/solid';
import { ArrowTopRightOnSquareIcon, StarIcon } from '@heroicons/react/24/solid';
import { BrandType } from '@/types';
import ExperienceBar from '@/components/atoms/experience-bar';
import ToolSearch from '@/components/atoms/tool-search';
import { Tool } from '@/components/organisms/tools/types';
import { ToolFilterSelect } from '@/components/atoms/select/tool-filter-select';
import { ToolSortSelect } from '@/components/atoms/select/tool-sort-select';
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
    <div className="scroll-mt-24 space-y-4 px-4 xl:ml-12" id="tools-list">
      <div className="mx-auto flex w-full items-center justify-between gap-4 md:max-w-screen-sm">
        <h3 className="flex flex-1 items-center justify-between gap-4">
          I also work, plan to work or worked with
          <span className="font-normal text-muted-foreground">
            {length} more
          </span>
        </h3>

        <Button
          variant="outline"
          className="gap-3"
          aria-label="Hide and show more items"
          onClick={() => {
            setState((prevState) => {
              return { isVisible: !prevState.isVisible };
            });

            scrollIntoView({ id: 'tools-list' });
          }}
        >
          {state.isVisible && (
            <MinusIcon className="size-6 rounded-full bg-primary/10 p-1 text-primary" />
          )}
          {!state.isVisible && (
            <PlusIcon className="size-6 rounded-full bg-primary p-1 text-primary-foreground" />
          )}
          <span>{state.isVisible ? 'Done' : 'Show them'}</span>
        </Button>
      </div>

      {state.isVisible && (
        <div
          className="mx-auto w-full space-y-8 md:max-w-screen-sm"
          id="tool-list"
        >
          <div className="sticky z-10 flex items-center gap-2 lg:top-24">
            <ToolSearch placeholder="Search tools ..." />

            <ToolFilterSelect defaultValue={filter ?? undefined} />

            <ToolSortSelect defaultValue={sorting ?? undefined} />
          </div>

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
                              <StarIcon className="absolute -left-12 top-1/2 -mt-1 size-5 -translate-y-1/2 text-primary" />
                            )}

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
