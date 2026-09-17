import type { Metadata } from 'next';
import { getProject } from '@/components/organisms/projects';
import { projects } from '@/components/organisms/projects/data';
import { PageTemplate } from '@/components/templates/page-template';
import { Hr } from '@/components/atoms/hr';
import { Container } from '@/components/organisms/layout';
import { H2, Ul } from '@/components/organisms/typography';
import { Fragment } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ExternalLink } from '@/components/atoms/external-link';
import { Badge } from '@/components/atoms/badge';
import { Button } from '@/components/atoms/button';
import { Divider } from '@/components/atoms/divider';
import { Animate } from '@/components/molecules/animate';
import { Avatar } from '@/components/atoms/avatar';
import { ButtonBack } from '@/components/atoms/button/button-back';

export const metadata: Metadata = {
  title: 'Projects | Dominik Rubröder, UX Engineer',
  description: 'Contributed projects from 2016 to 2026.'
};

export default function ProjectsPage() {
  const heroProject = getProject({ title: 'Value Booster' });

  return (
    <PageTemplate
      h1="Projects"
      heroBlockquote="I contributed as Frontend Designer and Frontend Engineer to the following projects. In the later projects starting around 2021, my role merged into a unified role as UX Engineer for headless frontends."
      heroDescription={
        <p>Only projects with a longer period than 3 months are listed.</p>
      }
    >
      {heroProject && (
        <Container
          as="section"
          size="container"
          className="animate-in-to-left-160 space-y-5"
        >
          {heroProject.previewImage && (
            <Link
              href={heroProject.url}
              title={`Open ${heroProject.title} in external tab`}
              aria-label={`Click to open ${heroProject.title} in an external tab`}
              target="_blank"
              className="relative block space-y-2 sm:space-y-0"
            >
              <Image
                src={heroProject.previewImage}
                alt={`${heroProject.title} preview image`}
                width={1920}
                height={630}
                className="max-w-panorama w-full scale-105 sm:scale-100"
                draggable={false}
                preload={true}
              />
            </Link>
          )}

          <div className="mx-auto max-w-(--container-readable)">
            <div>
              <H2 className="sticky-none mb-0">{heroProject.title}</H2>
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
                          color="muted"
                        >
                          <span>{company.label}</span>
                        </ExternalLink>
                      ) : (
                        <span>{company.label}</span>
                      )}
                    </li>
                  ))}
                </ul>

                <Divider variant="dot" />

                {heroProject.isActive ? (
                  <span>
                    <span>{heroProject.timeframe} – </span>
                    <Badge size="sm">Ongoing</Badge>
                  </span>
                ) : (
                  <span>{heroProject.timeframe}</span>
                )}
              </small>
            </div>

            {heroProject.description && (
              <p className="mt-2">{heroProject.description}</p>
            )}

            <p className="mt-2">{heroProject.subline}</p>

            <Hr className="my-3 w-4" />

            {heroProject.responsibilities?.length && (
              <Ul
                headline="Responsibilities"
                listStyle="disc"
                className="text-foreground"
              >
                {heroProject.responsibilities.map((aspect) => (
                  <li key={aspect}>{aspect}</li>
                ))}
              </Ul>
            )}

            <Button
              href={heroProject.url}
              title={`View ${heroProject.title}`}
              aria-label={`Click to view ${heroProject.title} in a new tab`}
            >
              View {heroProject.title}
            </Button>
          </div>
        </Container>
      )}

      <Hr variant="container-readable" />

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

                          <p className="text-muted-foreground">
                            {project.description}
                          </p>

                          <p className="text-muted-foreground">
                            {project.subline}
                          </p>

                          <Hr className="my-3 w-4" />

                          {project.responsibilities?.length && (
                            <Ul
                              headline="Responsibilities"
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
