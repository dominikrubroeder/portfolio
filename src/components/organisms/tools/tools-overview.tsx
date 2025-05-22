import Link from 'next/link';

import { ArrowTopRightOnSquareIcon, StarIcon } from '@heroicons/react/24/solid';
import { Button } from '@/components/atoms/button';
import { Brand } from '@/components/atoms/brand';
import { ExperienceBar } from '@/components/atoms/experience-bar';
import { Expandable } from '@/components/molecules/expandable';
import { ToggleContent } from '@/components/organisms/toggle-content';
import { tools } from '@/components/organisms/tools';

export function ToolsOverview() {
  return (
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
            alwaysVisible={
              <ExperienceBar hideFavoriteMarker={true} progress="Daily" />
            }
          >
            <ExperienceBar progress="Professional" />
            <ExperienceBar progress="Experienced" />
            <ExperienceBar progress="Used" />
            <ExperienceBar progress="Not started" />
          </Expandable>
          <span className="pt-4">Level of experience</span>
        </div>
      </div>

      <ul className="grid animate-fade-up-1rem gap-10">
        {tools
          .sort((a, b) => {
            return a.group.localeCompare(b.group);
          })
          .map((item) => (
            <li key={item.group} className="space-y-6">
              <div className="space-y-6">
                <h3 className="font-semibold text-foreground">{item.group}</h3>

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

                        <div className="flex flex-1 items-center justify-between gap-2 sm:overflow-hidden sm:whitespace-nowrap">
                          <Link
                            href={item.website}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="overflow-hidden"
                          >
                            <h3 className="font-bold text-foreground sm:overflow-hidden sm:text-ellipsis">
                              {item.title}
                            </h3>
                          </Link>

                          <div className="flex items-center justify-between gap-4 bg-background">
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
  );
}
