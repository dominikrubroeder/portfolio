import { Fragment } from 'react';

import type { Metadata } from 'next';

import Image, { getImageProps } from 'next/image';
import Link from 'next/link';

import { preload } from 'react-dom';

import { Animate } from '@/components/ui/animate';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Container } from '@/components/ui/container';
import { Divider } from '@/components/ui/divider';
import { DotsDivider } from '@/components/ui/dots-divider';
import { ExternalLink } from '@/components/ui/external-link';
import { Hr } from '@/components/ui/hr';
import { PageTemplate } from '@/components/ui/page-template';

import {
  getProject,
  HERO_PROJECT_TITLE,
  projectsHeroBlockquote
} from '@/components/feature/projects';
import { projects } from '@/components/feature/projects/projects-data';
import { H2, Ul } from '@/components/feature/typography';

export const instant = false;

export const metadata: Metadata = {
  title: 'Projects | Dominik Rubröder, UX Engineer',
  description: 'Project contributions from 2016 to 2026'
};

// Number of list images (after the hero) preloaded in the server HTML.
// The rest load lazily, so the 3-6 MB wallpapers do not compete with the hero.
const PRELOADED_LIST_IMAGES = 1;

// The images render inside client reveal wrappers, so `preload` on <Image>
// emits no <link> in the server HTML. Preload the above-the-fold ones here.
function preloadProjectImages() {
  const listProjects = projects.filter(
    (project) => project.title !== HERO_PROJECT_TITLE && project.previewImage
  );
  const heroProject = getProject({ title: HERO_PROJECT_TITLE });

  const targets = [
    ...(heroProject?.previewImage
      ? [{ project: heroProject, isHero: true }]
      : []),
    ...listProjects
      .slice(0, PRELOADED_LIST_IMAGES)
      .map((project) => ({ project, isHero: false }))
  ];

  for (const { project, isHero } of targets) {
    if (!project.previewImage) continue;

    const { props } = getImageProps({
      src: project.previewImage,
      alt: '',
      width: isHero ? 1920 : 800,
      height: isHero ? 630 : 600
    });

    preload(props.src, {
      as: 'image',
      imageSrcSet: props.srcSet,
      imageSizes: props.sizes,
      fetchPriority: isHero ? 'high' : 'auto'
    });
  }
}

export default function ProjectsPage() {
  preloadProjectImages();

  const heroProject = getProject({ title: HERO_PROJECT_TITLE });

  return (
    <PageTemplate
      h1="Projects"
      heroBlockquote={projectsHeroBlockquote.map((sentence, index) => (
        <p key={`project-blockquote-sentence-${index}`}>{sentence}</p>
      ))}
    >
      <DotsDivider />

      {heroProject && (
        <Animate>
          <Container
            as="section"
            size="full-width"
            className="z-100 animate-in-to-left-100 space-y-5 bg-primary py-12"
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
                  placeholder="blur"
                  preload
                />
              </Link>
            )}

            <Container as="div">
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
            </Container>
          </Container>
        </Animate>
      )}

      <Container as="section">
        <Ul className="space-y-10 sm:space-y-12">
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
                            placeholder="blur"
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
                  <li
                    key={`${project.title}-divider-${index + 1}`}
                    role="separator"
                  >
                    <DotsDivider />
                  </li>
                )}
              </Fragment>
            ))}
        </Ul>
      </Container>
    </PageTemplate>
  );
}
