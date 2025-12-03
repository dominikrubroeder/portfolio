import Link from 'next/link';

import { BrandLogo } from '@/components/atoms/brand-logo';
import { Button } from '@/components/atoms/button';
import { ToggleContent } from '@/components/molecules/toggle-content';
import { tools } from '@/components/organisms/tools';
import { ArrowUpRightIcon } from '@heroicons/react/20/solid';

export function AllTools() {
  return (
    <ToggleContent label="All tools">
      <ul className="grid gap-6 sm:gap-10">
        {tools
          .sort((a, b) => {
            return a.group.localeCompare(b.group);
          })
          .map((item, index) => (
            <li key={item.group}>
              <div className="space-y-3 sm:space-y-6">
                <div className="relative flex justify-between gap-4">
                  <h3 className="mb-0 text-base">{item.group}</h3>
                </div>

                <ul className="space-y-3 rounded border bg-background p-4">
                  {item.children
                    .sort((a, b) => a.name.localeCompare(b.name))
                    .map((child, index) => (
                      <li
                        key={index}
                        className="group relative flex justify-between gap-3 rounded py-2 pr-2 transition hover:bg-muted xs:gap-4"
                      >
                        <Link
                          href={child.href}
                          title={`Go to external ${child.name} website`}
                          aria-label={`Go to external ${child.name} website`}
                          target="_blank"
                          className="flex w-full gap-3 xs:gap-4"
                        >
                          <Button
                            variant="ghost"
                            className="size-14 [&>svg]:size-10"
                          >
                            <span className="sr-only">{`Go to external ${child.name} website`}</span>
                            <BrandLogo
                              brand={child.name}
                              group={item.group}
                              className="size-10"
                            />
                          </Button>

                          <div className="flex-1">
                            <h3 className="mb-0 self-center text-base">
                              {child.name}
                            </h3>

                            {child.description && (
                              <p className="leading-normal text-muted-foreground">
                                {child.description}
                              </p>
                            )}
                          </div>

                          <Button
                            variant="link-muted"
                            className="hidden sm:flex"
                          >
                            <ArrowUpRightIcon className="size-5" />
                            <span className="sr-only">{`Go to external ${child.name} website`}</span>
                          </Button>
                        </Link>
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
