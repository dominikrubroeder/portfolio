import Link from 'next/link';

import { ArrowTopRightOnSquareIcon } from '@heroicons/react/24/solid';
import { Button } from '@/components/atoms/button';
import { Brand } from '@/components/atoms/brand';
import { ExperienceBar } from '@/components/atoms/experience-bar';
import { ToggleContent } from '@/components/organisms/toggle-content';
import { tools } from '@/components/organisms/tools';

export function ToolsOverview() {
  return (
    <ToggleContent label="All tools">
      <ul className="grid animate-fade-up-1rem gap-10">
        {tools
          .sort((a, b) => {
            return a.group.localeCompare(b.group);
          })
          .map((item, index) => (
            <li key={item.group} className="space-y-6">
              <div className="space-y-6">
                <div className="relative flex justify-between gap-4">
                  <h3 className="text-base">{item.group}</h3>

                  {index === 0 && (
                    <span className="absolute top-2 right-20 text-xs">
                      Experience level
                    </span>
                  )}
                </div>

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

                        <div className="flex flex-1 items-center justify-between gap-2">
                          <Link
                            href={item.website}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group"
                          >
                            <h3 className="mb-0 text-base">{item.title}</h3>
                          </Link>

                          <div className="flex items-center justify-between gap-4 bg-background">
                            <ExperienceBar progress={item.knowledge} />

                            <Button
                              variant="ghost"
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
