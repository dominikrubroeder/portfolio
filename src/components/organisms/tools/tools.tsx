import Link from 'next/link';
import type { Tools } from '@/components/organisms/tools/types';
import { getApiUrl } from '@/lib/api';
import { ToggleContent } from '@/components/organisms/toggle-content';
import { Brand } from '@/components/atoms/brand';
import { ArrowTopRightOnSquareIcon, StarIcon } from '@heroicons/react/24/solid';
import { ExperienceBar } from '@/components/atoms/experience-bar';
import { Button } from '@/components/atoms/button';
import Expandable from '@/components/molecules/expandable';
import {
  CraftLogo,
  FigmaLogo,
  GithubLogo,
  GitlabLogo,
  WebstormLogo
} from '@/components/atoms/logo';

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
    <div className="space-y-8">
      <div className="space-y-6">
        <h2 className="space-x-1 text-5xl leading-[1.2] font-bold text-foreground">
          <span>Tools</span>
          <span className="text-muted-foreground">
            help me <span className="text-black/90">visualizing</span> and
            <span className="mx-2 text-black/90">capturing</span>
            the things we are about to build. I use
          </span>
        </h2>

        <ul className="space-y-5">
          <li>
            <div className="group relative inline-flex cursor-pointer items-center gap-4">
              <FigmaLogo className="size-12" />

              <h3 className="space-x-1 font-bold text-foreground">
                <span>Figma</span>
                <span className="text-muted-foreground">
                  for user interface design and prototyping
                </span>
              </h3>
            </div>
          </li>

          <li>
            <div className="group relative inline-flex cursor-pointer items-center gap-4">
              <WebstormLogo className="size-12" />

              <h3 className="space-x-1 font-bold text-foreground">
                <span>WebStorm</span>
                <span className="text-muted-foreground">as IDE</span>
              </h3>
            </div>
          </li>

          <li>
            <div className="group relative inline-flex cursor-pointer items-center gap-4">
              <CraftLogo className="size-12" />

              <h3 className="space-x-1 font-bold text-foreground">
                <span>Craft</span>
                <span className="text-muted-foreground">
                  as my main note and docs tool
                </span>
              </h3>
            </div>
          </li>

          <li>
            <div className="group relative inline-flex cursor-pointer items-center gap-4">
              <GithubLogo className="size-12" />

              <h3 className="space-x-1 font-bold text-foreground">
                <span>GitHub</span>
                <span className="text-muted-foreground">
                  to store my private codebase
                </span>
              </h3>
            </div>
          </li>

          <li>
            <div className="group relative inline-flex cursor-pointer items-center gap-4">
              <GitlabLogo className="size-12" />

              <h3 className="space-x-1 font-bold text-foreground">
                <span>GitLab</span>
                <span className="text-muted-foreground">
                  is mainly used at workspace
                </span>
              </h3>
            </div>
          </li>
        </ul>
      </div>

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
    </div>
  );
}
