import Link from 'next/link';

import { ArrowTopRightOnSquareIcon } from '@heroicons/react/24/solid';
import { Button } from '@/components/atoms/button';
import { Brand } from '@/components/atoms/brand';
import { ExperienceBar } from '@/components/atoms/experience-bar';
import { technologies } from '@/components/organisms/technologies';
import { ToggleContent } from '@/components/organisms/toggle-content';

export function AllTechnologies() {
  return (
    <ToggleContent label="All technologies">
      <ul className="grid animate-fade-up-1rem gap-10">
        {technologies
          .sort((a, b) => {
            return a.group.localeCompare(b.group);
          })
          .map((item) => (
            <li key={item.group} className="space-y-6">
              <div className="space-y-6">
                <h3 className="mb-0 text-base">{item.group}</h3>

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
                            <h3 className="mb-0 text-base">{item.title}</h3>
                          </Link>

                          <div className="flex items-center justify-between gap-4">
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
