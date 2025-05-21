'use client';

import Link from 'next/link';
import { useEffect, useMemo, useState } from 'react';
import { Button } from '@/components/atoms/button';
import { Brand } from '@/components/atoms/brand';
import { MinusIcon, PlusIcon } from '@heroicons/react/20/solid';
import { ArrowTopRightOnSquareIcon, StarIcon } from '@heroicons/react/24/solid';
import { ExperienceBar } from '@/components/atoms/experience-bar';
import { Tool } from '@/components/organisms/tools/types';
import { useScrollIntoView } from '@/hooks/use-scroll-into-view';
import Expandable from '@/components/molecules/expandable';
import { Technology } from '@/components/organisms/technologies/types';
import { Container } from '@/components/atoms/container';

export default function MoreItems({
  items,
  openScrollToId,
  closedScrollToId
}: {
  items: { group: string; children: (Tool | Technology)[] }[];
  openScrollToId: string;
  closedScrollToId: string;
}) {
  const { scrollIntoView } = useScrollIntoView();
  const [state, setState] = useState<{ isVisible: undefined | boolean }>({
    isVisible: undefined
  });

  const count = useMemo(
    () =>
      items.reduce((acc, item) => {
        if (item.children) {
          acc += item.children.length;
        }

        return acc;
      }, 0),
    [items]
  );

  useEffect(
    () =>
      state.isVisible
        ? scrollIntoView({ id: openScrollToId })
        : state.isVisible === false
          ? scrollIntoView({ id: closedScrollToId })
          : undefined,
    [closedScrollToId, openScrollToId, scrollIntoView, state.isVisible]
  );

  return (
    <Container as="div" className="space-y-8 lg:px-0" id={openScrollToId}>
      <div className="flex w-full flex-wrap justify-between gap-6 md:gap-8">
        <Button
          variant="primary"
          className="inline-flex scroll-mt-28 self-start"
          onClick={() => {
            setState((prevState) => {
              return { isVisible: !prevState.isVisible };
            });
          }}
          id={closedScrollToId}
        >
          {state.isVisible && (
            <MinusIcon className="size-6 text-primary-foreground" />
          )}
          {!state.isVisible && (
            <PlusIcon className="size-6 text-primary-foreground" />
          )}
          I also work, plan to work or worked with {count} more
        </Button>

        {state.isVisible && (
          <div className="animate-fade-up-1rem space-y-4 md:flex md:items-start md:gap-8 md:space-y-0">
            <div className="flex items-center gap-4">
              <div className="rounded border p-4">
                <StarIcon className="size-5 text-primary" />
              </div>
              <span>Favorites (= daily usage)</span>
            </div>

            <div className="flex gap-4">
              <Expandable
                className="space-y-2"
                alwaysVisible={<ExperienceBar progress="Daily" />}
              >
                <ExperienceBar progress="Professional" />
                <ExperienceBar progress="Experienced" />
                <ExperienceBar progress="Used" />
                <ExperienceBar progress="Not started" />
              </Expandable>
              <span className="pt-4">Level of experience</span>
            </div>
          </div>
        )}
      </div>

      {state.isVisible && (
        <div className="mx-auto w-full space-y-6 px-6">
          <ul className="grid animate-fade-up-1rem gap-8 md:grid-cols-2 md:gap-10 xl:grid-cols-3">
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

                            <Link
                              href={item.website}
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              <Brand
                                brand={item.title}
                                className="size-10 shrink-0"
                              />
                            </Link>

                            <div className="flex flex-1 flex-wrap items-center justify-between gap-2 sm:overflow-hidden sm:whitespace-nowrap">
                              <Link
                                href={item.website}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="sm:overflow-hidden"
                              >
                                <h3 className="font-bold text-foreground sm:overflow-hidden sm:text-ellipsis">
                                  {item.title}
                                </h3>
                              </Link>

                              <div className="flex items-center justify-between gap-4">
                                <ExperienceBar progress={item.knowledge} />

                                <Button
                                  variant="secondary"
                                  href={item.website}
                                  title={`Go to external ${item.title} website`}
                                  aria-label={`Go to external ${item.title} website`}
                                >
                                  <ArrowTopRightOnSquareIcon className="size-5" />
                                </Button>
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
            className="mx-auto inline-flex"
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
    </Container>
  );
}
