import { technologies } from '@/components/organisms/technologies/data';
import { Container } from '@/components/atoms/container';
import { Marker } from '@/components/atoms/marker';
import { Brand } from '@/components/atoms/brand';
import { ToggleContent } from '@/components/organisms/toggle-content';
import { ArrowRightIcon } from '@heroicons/react/16/solid';
import Link from 'next/link';
import { ArrowTopRightOnSquareIcon, StarIcon } from '@heroicons/react/24/solid';
import { ExperienceBar } from '@/components/atoms/experience-bar';
import { Button } from '@/components/atoms/button';

export default function Technologies() {
  return (
    <Container tag="section" id="technologies" className="space-y-8">
      <ul className="flex flex-wrap gap-8">
        {technologies.map((item) =>
          item.children.map((nestedItem) => {
            return (
              nestedItem.knowledge === 'Daily' && (
                <li key={nestedItem.title} className="inline-flex">
                  <Link
                    href={nestedItem.website}
                    className="group relative inline-flex text-muted-foreground"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <ArrowRightIcon className="absolute -top-[5.25rem] -right-1.5 z-20 hidden size-6 -rotate-45 rounded bg-primary p-1 text-primary-foreground opacity-0 group-hover:opacity-100 sm:block" />

                    <span className="absolute -top-10 left-1/2 z-20 hidden w-max -translate-x-1/2 rounded border-primary bg-primary px-1 py-0.5 text-xs text-primary-foreground opacity-0 group-hover:opacity-100 sm:block">
                      New tab
                    </span>

                    <div className="absolute -top-[4.75rem] left-1/2 z-10 hidden w-max -translate-x-1/2 rounded border bg-muted px-3.5 py-2 opacity-0 select-none group-hover:opacity-100 sm:block">
                      {nestedItem.title}
                    </div>

                    <Brand
                      brand={nestedItem.title}
                      className="h-16 w-auto transition group-hover:scale-105"
                      aria-label={`${nestedItem.title} logo`}
                    />
                  </Link>
                </li>
              )
            );
          })
        )}
      </ul>

      <header className="space-y-6">
        <div className="space-y-4 lg:inline-flex lg:flex-wrap lg:items-end lg:gap-4 lg:space-y-0">
          <h2 className="max-w-[70rem] space-x-2 text-5xl leading-[1.2] font-bold text-foreground">
            <span>Technologies</span>
            <span className="text-muted-foreground">
              are the foundation or writing
              <Marker animate className="mx-2 pr-3 pl-1 text-black/90">
                production-ready
              </Marker>
              code.
              <span className="mx-2 text-foreground">
                In other words, that&#39;s how we build our application!
              </span>
              I use
            </span>
          </h2>
        </div>
      </header>

      <ToggleContent label="All technologies">
        <ul className="grid animate-fade-up-1rem gap-8 md:grid-cols-2 md:gap-10 xl:grid-cols-3">
          {technologies
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
      </ToggleContent>
    </Container>
  );
}
