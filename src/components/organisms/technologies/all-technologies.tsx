import Link from 'next/link';

import { BrandLogo } from '@/components/atoms/brand-logo';
import { Button } from '@/components/atoms/button';
import { ExperienceBar } from '@/components/atoms/experience-bar';
import { ToggleContent } from '@/components/molecules/toggle-content';
import { technologies } from '@/components/organisms/technologies';
import { ArrowUpRightIcon } from '@heroicons/react/20/solid';

export function AllTechnologies() {
  return (
    <ToggleContent label="All technologies">
      <ul className="grid gap-10">
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

                <ul className="space-y-5 rounded border bg-background p-4">
                  {item.children
                    .sort((a, b) => a.name.localeCompare(b.name))
                    .map((child, index) => (
                      <li
                        key={index}
                        className="group relative flex justify-between gap-3 rounded pr-2 transition hover:bg-muted xs:gap-4"
                      >
                        <Link
                          href={child.href}
                          target="_blank"
                          className="flex items-center gap-3 xs:gap-4"
                        >
                          <Button
                            variant="ghost"
                            className="size-14 [&>svg]:size-10"
                          >
                            <BrandLogo
                              brand={child.name}
                              group={item.group}
                              className="size-10"
                            />
                          </Button>

                          <h3 className="mb-0 max-w-24 self-center overflow-hidden text-base text-ellipsis whitespace-nowrap xs:max-w-30 sm:max-w-none">
                            {child.name}
                          </h3>
                        </Link>

                        <div className="flex items-center justify-between gap-2 sm:gap-4">
                          <ExperienceBar progress={child.knowledge} />

                          <Button
                            variant="link-muted"
                            href={child.href}
                            title={`Go to external ${child.name} website`}
                            aria-label={`Go to external ${child.name} website`}
                            className="hidden sm:flex"
                          >
                            <ArrowUpRightIcon className="size-5" />
                            <span className="sr-only">{`Go to external ${child.name} website`}</span>
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
