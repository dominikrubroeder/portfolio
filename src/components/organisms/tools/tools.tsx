import Link from 'next/link';
import type { Tools } from '@/components/organisms/tools/types';
import { Container } from '@/components/atoms/container';
import { getApiUrl } from '@/lib/api';
import { Marker } from '@/components/atoms/marker';
import { ToggleContent } from '@/components/organisms/toggle-content';
import { Brand } from '@/components/atoms/brand';
import { ArrowTopRightOnSquareIcon, StarIcon } from '@heroicons/react/24/solid';
import { ExperienceBar } from '@/components/atoms/experience-bar';
import { Button } from '@/components/atoms/button';
import { ArrowRightIcon } from '@heroicons/react/16/solid';
import Expandable from '@/components/molecules/expandable';

async function getTools() {
  const res = await fetch(`${getApiUrl()}/api/tools`, {
    next: { revalidate: 60 }
  });

  if (!res.ok) {
    throw new Error('Failed to fetch tools data');
  }

  return res.json();
}

export default async function Tools() {
  const data = await getTools();
  const highlightTools: Tools = data.highlightTools;
  const tools: Tools = data.tools;

  if (highlightTools.length === 0 || tools.length === 0) return null;

  return (
    <Container tag="section" id="tools" className="space-y-8">
      <ul className="flex flex-wrap gap-8">
        {highlightTools.map((item) =>
          item.children.map((nestedItem) => (
            <li key={nestedItem.title} className="inline-flex">
              <Link
                href={nestedItem.website}
                className="group relative inline-flex text-muted-foreground"
                target="_blank"
                rel="noopener noreferrer"
              >
                <ArrowRightIcon className="absolute -top-[5.25rem] -right-1.5 z-20 hidden size-6 -rotate-45 rounded bg-primary p-1 text-primary-foreground opacity-0 group-hover:opacity-100 md:block" />

                <span className="absolute -top-10 left-1/2 z-20 hidden w-max -translate-x-1/2 rounded border-primary bg-primary px-1 py-0.5 text-xs text-primary-foreground opacity-0 group-hover:opacity-100 md:block">
                  New tab
                </span>

                <div className="absolute -top-[4.75rem] left-1/2 z-10 hidden w-max -translate-x-1/2 rounded border bg-muted px-3.5 py-2 opacity-0 select-none group-hover:opacity-100 md:block">
                  {nestedItem.title}
                </div>

                <Brand
                  brand={nestedItem.title}
                  className="h-16 w-auto interactive transition group-hover:scale-105"
                  aria-label={`${nestedItem.title} logo`}
                />
              </Link>
            </li>
          ))
        )}
      </ul>

      <header className="space-y-6">
        <div className="space-y-4 lg:inline-flex lg:flex-wrap lg:items-end lg:gap-4 lg:space-y-0">
          <h2 className="max-w-[70rem] space-x-2 text-5xl leading-[1.2] font-bold text-foreground">
            <span>Tools</span>
            <span className="text-muted-foreground">
              help me
              <Marker animate className="mx-2 pr-3 pl-1 text-black/90">
                visualizing
              </Marker>
              and
              <Marker animate className="mx-2 pr-3 pl-1 text-black/90">
                capturing
              </Marker>
              the things we are about to build. I use
            </span>
          </h2>
        </div>
      </header>

      <ToggleContent label="All tools">
        <div className="animate-fade-up-1rem justify-end space-y-4 md:flex md:items-start md:gap-8 md:space-y-0">
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

        <ul className="grid animate-fade-up-1rem gap-8 md:grid-cols-2 md:gap-10 xl:grid-cols-3">
          {tools
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
      </ToggleContent>
    </Container>
  );
}
