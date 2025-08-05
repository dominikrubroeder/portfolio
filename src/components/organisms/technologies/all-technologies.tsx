import Link from 'next/link';

import { ArrowTopRightOnSquareIcon } from '@heroicons/react/24/solid';

import { BrandLogo } from '@/components/atoms/brand-logo';
import { Button } from '@/components/atoms/button';
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
          .map((item, index) => (
            <li key={item.group}>
              <div className="space-y-3 sm:space-y-6">
                <div className="relative flex justify-between gap-4">
                  <h3 className="mb-0 text-base">{item.group}</h3>

                  {index === 0 && (
                    <span className="absolute top-1 right-4 text-xs xs:right-18 sm:right-21">
                      Experience level
                    </span>
                  )}
                </div>

                <ul className="space-y-5 rounded border p-4">
                  {item.children
                    .sort((a, b) => a.title.localeCompare(b.title))
                    .map((child, index) => (
                      <li
                        key={index}
                        className="relative flex justify-between gap-3 pr-2 xs:gap-4"
                      >
                        <Link
                          href={child.website}
                          target="_blank"
                          className="group flex items-center gap-3 xs:gap-4"
                        >
                          <Button
                            variant="ghost"
                            className="size-14 [&>svg]:size-10"
                          >
                            <BrandLogo
                              brand={child.title}
                              group={item.group}
                              className="size-10"
                            />
                          </Button>

                          <h3 className="mb-0 max-w-24 self-center overflow-hidden text-base text-ellipsis whitespace-nowrap xs:max-w-30 sm:max-w-none">
                            {child.title}
                          </h3>
                        </Link>

                        <div className="flex items-center justify-between gap-2 bg-background sm:gap-4">
                          <ExperienceBar progress={child.knowledge} />

                          <Button
                            variant="ghost"
                            href={child.website}
                            title={`Go to external ${child.title} website`}
                            aria-label={`Go to external ${child.title} website`}
                            className="hidden sm:flex"
                          >
                            <ArrowTopRightOnSquareIcon className="size-5" />
                          </Button>
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
