import { technologies } from '@/components/organisms/technologies/data';
import { Brand } from '@/components/atoms/brand';
import { ToggleContent } from '@/components/organisms/toggle-content';
import Link from 'next/link';
import { ArrowTopRightOnSquareIcon } from '@heroicons/react/24/solid';
import { ExperienceBar } from '@/components/atoms/experience-bar';
import { Button } from '@/components/atoms/button';
import {
  JavascriptLogo,
  MotionLogo,
  NextjsLogo,
  ReactLogo,
  TailwindCssLogo,
  TypescriptLogo
} from '@/components/atoms/logo';

export default function Technologies() {
  return (
    <div className="space-y-8">
      <h2>
        Technologies
        <span className="ml-2 font-medium text-muted-foreground">
          are the foundation of writing production-ready code. I use
        </span>
      </h2>

      <ul className="space-y-5">
        <li>
          <div className="group relative inline-flex items-center gap-4">
            <ReactLogo className="size-12" />

            <h3 className="mb-0 space-x-1 text-base">
              <span>React</span>
              <span className="font-medium text-muted-foreground">
                as frontend web library
              </span>
            </h3>
          </div>
        </li>

        <li>
          <div className="group relative inline-flex items-center gap-4">
            <NextjsLogo className="size-12" />

            <h3 className="mb-0 space-x-1 text-base">
              <span>Next.js</span>
              <span className="font-medium text-muted-foreground">
                as fullstack web application framework
              </span>
            </h3>
          </div>
        </li>

        <li>
          <div className="group relative inline-flex items-center gap-4">
            <TypescriptLogo className="size-12" />

            <h3 className="mb-0 space-x-1 text-base">
              <span>TypeScript</span>
              <span className="font-medium text-muted-foreground">
                as superset to JavaScript
              </span>
            </h3>
          </div>
        </li>

        <li>
          <div className="group relative inline-flex items-center gap-4">
            <JavascriptLogo className="size-12" />

            <h3 className="mb-0 space-x-1 text-base">
              <span>JavaScript</span>
              <span className="font-medium text-muted-foreground">
                handling interactivity on the web
              </span>
            </h3>
          </div>
        </li>

        <li>
          <div className="group relative inline-flex items-center gap-4">
            <TailwindCssLogo className="size-12" />

            <h3 className="mb-0 space-x-1 text-base">
              <span>Tailwind CSS</span>
              <span className="font-medium text-muted-foreground">
                as superset to CSS
              </span>
            </h3>
          </div>
        </li>

        <li>
          <div className="group relative inline-flex items-center gap-4">
            <MotionLogo className="size-12" />

            <h3 className="mb-0 space-x-1 text-base">
              <span>Motion</span>
              <span className="font-medium text-muted-foreground">
                as animation library
              </span>
            </h3>
          </div>
        </li>
      </ul>

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
    </div>
  );
}
