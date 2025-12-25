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
              <div className="space-y-3 sm:space-y-4">
                <div className="font-bold">{item.group}</div>

                <ul className="space-y-3 rounded border bg-background p-4">
                  {item.children
                    .sort((a, b) => a.name.localeCompare(b.name))
                    .map((child, index) => (
                      <li key={index}>
                        <Link
                          href={child.href}
                          title={`Go to external ${child.name} website`}
                          aria-label={`Go to external ${child.name} website`}
                          target="_blank"
                          className="group relative flex w-full justify-between gap-3 rounded p-2 transition hover:bg-muted xs:gap-4"
                        >
                          <div className="flex size-14 items-center justify-center [&>svg]:size-10">
                            <span className="sr-only">{`Go to external ${child.name} website`}</span>
                            <BrandLogo
                              brand={child.name}
                              group={item.group}
                              className="size-10"
                            />
                          </div>

                          <div className="flex-1">
                            <div className="self-center font-bold">
                              {child.name}
                            </div>

                            {child.description && (
                              <p className="leading-normal text-muted-foreground">
                                {child.description}
                              </p>
                            )}
                          </div>

                          <Button
                            variant="text-muted"
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
