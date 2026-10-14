import { Fragment } from 'react';

import type { Metadata } from 'next';

import Image from 'next/image';
import Link from 'next/link';

import { Animate } from '@/components/ui/animate';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ButtonBack } from '@/components/ui/button/button-back';
import { Container } from '@/components/ui/container';
import { Divider } from '@/components/ui/divider';
import { ExternalLink } from '@/components/ui/external-link';
import { Hr } from '@/components/ui/hr';
import { PageTemplate } from '@/components/ui/page-template';

import { Avatar } from '@/components/feature/avatar';
import { getProject } from '@/components/feature/projects';
import { projects } from '@/components/feature/projects/projects-data';
import { H2, Ul } from '@/components/feature/typography';

export const instant = false;

export const metadata: Metadata = {
  title: 'Projects | Dominik Rubröder, UX Engineer',
  description: 'Project contributions from 2016 to 2026'
};

export default function ProjectsPage() {
  const heroProject = getProject({ title: 'Value Booster' });

  return (
    <PageTemplate
      h1="Projects"
      heroBlockquote="Roles are changing. During the last year, roles and job descriptions were more distinct and self-contained. Now the lines are blurring more and more. In my first years, I contributed as Frontend Designer or Frontend Engineer, then as Frontend Designer and Frontend Engineer. This merged into a unified role as UX Engineer, especially for headless frontends and UX concepts, now everything moves more onto holistic product UI thinking and execution – Product Design Engineer."
    >
      <Animate>
        <div className="relative flex h-24 items-center justify-center">
          <span className="absolute top-0 left-1/2 block -translate-x-1/2 rotate-90 text-9xl text-primary">{`}`}</span>
        </div>
      </Animate>

      {heroProject && (
        <Container
          as="section"
          size="full-width"
          className="animate-in-to-left-100 space-y-5 bg-primary py-12"
        >
          {heroProject.previewImage && (
            <Link
              href={heroProject.url}
              title={`Open ${heroProject.title} in external tab`}
              aria-label={`Click to open ${heroProject.title} in an external tab`}
              target="_blank"
              className="relative mx-auto block max-w-container-panorama space-y-2 sm:space-y-0"
            >
              <Image
                src={heroProject.previewImage}
                alt={`${heroProject.title} preview image`}
                width={1920}
                height={630}
                draggable={false}
                preload
              />
            </Link>
          )}

          <div className="mx-auto max-w-(--container-readable) px-4 xl:px-0">
            <div>
              <H2 className="sticky-none mb-0 text-primary-foreground">
                {heroProject.title}
              </H2>

              <small className="flex flex-wrap items-center gap-2">
                <ul className="my-0 -mr-1">
                  {heroProject.companies?.map((company) => (
                    <li
                      key={`Project ${heroProject.title} company ${company.label}`}
                    >
                      {company.href ? (
                        <ExternalLink
                          href={company.href}
                          size="sm"
                          className="mr-0 -ml-1"
                          color="primary-foreground"
                        >
                          <span>{company.label}</span>
                        </ExternalLink>
                      ) : (
                        <span className="text-primary-foreground">
                          {company.label}
                        </span>
                      )}
                    </li>
                  ))}
                </ul>

                <Divider variant="dot" className="bg-white" />

                {heroProject.isActive ? (
                  <span className="text-primary-foreground">
                    <span className="text-primary-foreground">
                      {heroProject.timeframe} –{' '}
                    </span>
                    <Badge size="sm" variant="white">
                      Ongoing
                    </Badge>
                  </span>
                ) : (
                  <span className="text-primary-foreground">
                    {heroProject.timeframe}
                  </span>
                )}
              </small>
            </div>

            {heroProject.description && (
              <p className="mt-2 text-primary-foreground">
                {heroProject.description}
              </p>
            )}

            <p className="mt-2">{heroProject.subline}</p>

            <Hr className="my-3 w-4 border-primary-foreground/16" />

            {heroProject.responsibilities?.length && (
              <Ul
                headline="Fields"
                listStyle="disc"
                className="text-primary-foreground"
                headlineClassName="text-primary-foreground"
              >
                {heroProject.responsibilities.map((aspect) => (
                  <li key={aspect}>{aspect}</li>
                ))}
              </Ul>
            )}

            <Button
              variant="contained-white"
              href={heroProject.url}
              title={`View ${heroProject.title}`}
              aria-label={`Click to view ${heroProject.title} in a new tab`}
            >
              View {heroProject.title}
            </Button>
          </div>
        </Container>
      )}

      <Container as="section">
        <Ul className="space-y-5 sm:space-y-12">
          {projects
            .filter((project) => project.title !== heroProject?.title)
            .map((project, index, array) => (
              <Fragment key={project.title}>
                <li key={`project-${index}`}>
                  <Animate>
                    <div className="grid gap-4">
                      <Link
                        href={project.url}
                        title={`Open ${project.title} in external tab`}
                        aria-label={`Click to open ${project.title} in an external tab`}
                        className="space-y-2"
                        target="_blank"
                      >
                        {project.previewImage ? (
                          <Image
                            src={project.previewImage}
                            alt={`${project.title} preview image`}
                            width={800}
                            height={600}
                            className="block w-full scale-105"
                            draggable={false}
                            preload={true}
                          />
                        ) : (
                          <div className="flex h-44 w-full items-center justify-center [&>svg]:max-h-32 [&>svg]:max-w-60">
                            {project.logo}
                          </div>
                        )}
                      </Link>

                      <div className="flex-1">
                        <div className="space-y-2">
                          <div>
                            <H2 className="sticky-none mb-2">
                              {project.title}
                            </H2>
                            <small className="flex flex-wrap items-center gap-2">
                              <ul className="my-0 -mr-1">
                                {project.companies?.map((company, index) => (
                                  <li
                                    key={`Project ${project.title} company ${company.label} ${index}`}
                                  >
                                    {company.href ? (
                                      <ExternalLink
                                        variant="text"
                                        href={company.href}
                                        size="sm"
                                        color="muted"
                                        className="mr-0 -ml-1"
                                      >
                                        <span>{company.label}</span>
                                      </ExternalLink>
                                    ) : (
                                      <span>{company.label}</span>
                                    )}
                                  </li>
                                ))}
                              </ul>
                              <span className="size-1 rounded-full bg-muted-foreground" />
                              <span>{project.timeframe}</span>
                              {project.isActive && (
                                <>
                                  <span className="size-1 rounded-full bg-muted-foreground" />
                                  <Badge variant="muted" size="sm">
                                    Ongoing
                                  </Badge>
                                </>
                              )}
                            </small>
                          </div>

                          <p className="text-foreground">
                            {project.description}
                          </p>

                          <p className="text-foreground">{project.subline}</p>

                          <Hr className="my-3 w-4" />

                          {project.responsibilities?.length && (
                            <Ul
                              headline="Fields"
                              listStyle="disc"
                              className="text-foreground"
                            >
                              {project.responsibilities.map((aspect) => (
                                <li key={`${project.title}-${aspect}`}>
                                  {aspect}
                                </li>
                              ))}
                            </Ul>
                          )}
                        </div>

                        <Button
                          variant="text-primary"
                          href={project.url}
                          title={`View ${project.title}`}
                          aria-label={`Click to view ${project.title} in an external tab`}
                        >
                          View {project.title}
                        </Button>
                      </div>
                    </div>
                  </Animate>
                </li>

                {index + 1 !== array.length && (
                  <li key={`${project.title}-divider-${index + 1}`}>
                    <Hr />
                  </li>
                )}
              </Fragment>
            ))}
        </Ul>
      </Container>

      <Container className="mb-0">
        <Hr />

        <ButtonBack
          buttonProps={{
            variant: 'ghost-foreground',
            className: 'xl:-ml-2 gap-4'
          }}
        >
          <div className="flex items-center gap-2">
            <Avatar width={24} height={24} as="Image" />
            Home
          </div>
        </ButtonBack>
      </Container>
    </PageTemplate>
  );
}
