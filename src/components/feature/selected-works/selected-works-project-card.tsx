import Image from 'next/image';

import { Animate } from '@/components/ui/animate';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Container } from '@/components/ui/container';
import { Divider } from '@/components/ui/divider';
import { ExternalLink } from '@/components/ui/external-link';
import { Hr } from '@/components/ui/hr';
import { Tooltip } from '@/components/ui/tooltip';

import { H2, Ul } from '@/components/feature/typography';

import { cn } from '@/lib/utils';

import {
  getProjectImageSize,
  getResponsibilityText
} from './selected-works-helper';
import { ProjectResponsibilityItem } from './selected-works-responsibility';

import type { Project, ProjectCardVariant } from './selected-works-types';

// Project card of `/selected-works`. `hero` is the full-bleed `bg-primary` band
// with the featured project, `list` is the quiet card of the other projects.
export function ProjectCard({
  project,
  variant = 'list'
}: {
  project: Project;
  variant?: ProjectCardVariant;
}) {
  const isHero = variant === 'hero';
  const openLabel = `Open ${project.title} in a new tab`;

  // The preview (or the logo) is an image-only link, so a tooltip names its action.
  const visual = project.previewImage ? (
    <Image
      src={project.previewImage}
      alt={`${project.title} preview image`}
      {...getProjectImageSize(project.previewImage, variant)}
      className={cn(!isHero && 'block w-full scale-105')}
      draggable={false}
      placeholder="blur"
      preload={isHero}
    />
  ) : (
    <div className="flex h-44 w-full items-center justify-center [&>svg]:max-h-32 [&>svg]:max-w-60">
      {project.logo}
    </div>
  );

  const visualLink = (
    <Tooltip
      content={openLabel}
      render={
        <a
          href={project.url}
          aria-label={openLabel}
          target="_blank"
          rel="noopener noreferrer"
          className={cn(
            isHero
              ? 'relative mx-auto block max-w-container-panorama space-y-2 sm:space-y-0'
              : 'space-y-2'
          )}
        />
      }
    >
      {visual}
    </Tooltip>
  );

  const header = (
    <div>
      <H2
        className={cn(
          'sticky-none',
          isHero ? 'mb-0 text-primary-foreground' : 'mb-2'
        )}
      >
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
                  variant={isHero ? undefined : 'text'}
                  href={company.href}
                  size="sm"
                  color={isHero ? 'primary-foreground' : 'muted'}
                  className="mr-0 -ml-1"
                >
                  <span>{company.label}</span>
                </ExternalLink>
              ) : (
                <span className={cn(isHero && 'text-primary-foreground')}>
                  {company.label}
                </span>
              )}
            </li>
          ))}
        </ul>

        <Divider variant="dot" className={cn(isHero && 'bg-white')} />

        <span className={cn(isHero && 'text-primary-foreground')}>
          {project.timeframe}
          {project.isActive && (
            <>
              {' – '}
              <Badge size="sm" variant={isHero ? 'white' : 'muted'}>
                Ongoing
              </Badge>
            </>
          )}
        </span>
      </small>
    </div>
  );

  const responsibilities = project.responsibilities?.length ? (
    <Ul
      headline="Responsible fields"
      listStyle="disc"
      className={isHero ? 'text-primary-foreground' : 'text-foreground'}
      headlineClassName={isHero ? 'text-primary-foreground' : undefined}
    >
      {project.responsibilities.map((aspect) => (
        <ProjectResponsibilityItem
          key={`${project.title}-${getResponsibilityText(aspect)}`}
          responsibility={aspect}
          keyPrefix={project.title}
        />
      ))}
    </Ul>
  ) : null;

  const cta = (
    <Button
      variant={isHero ? 'contained-white' : 'text-primary'}
      href={project.url}
    >
      View {project.title}
    </Button>
  );

  if (isHero) {
    return (
      <Animate>
        <Container
          as="section"
          size="full-width"
          className="z-100 animate-in-to-left-100 space-y-5 bg-primary py-12"
        >
          {project.previewImage && visualLink}

          <Container as="div">
            {header}

            {project.description && (
              <p className="mt-2 text-primary-foreground">
                {project.description}
              </p>
            )}

            <p className="mt-2">{project.subline}</p>

            <Hr className="my-3 w-4 border-primary-foreground/16 text-primary-foreground" />

            {responsibilities}

            {cta}

            {project.notes && (
              <small className="mt-3 block text-primary-foreground">
                {project.notes}
              </small>
            )}
          </Container>
        </Container>
      </Animate>
    );
  }

  return (
    <Animate>
      <div className="grid gap-4">
        {visualLink}

        <div className="flex-1">
          <div className="space-y-2">
            {header}

            <p className="text-foreground">{project.description}</p>

            <p className="text-foreground">{project.subline}</p>

            <Hr className="my-3 w-4" />

            {responsibilities}
          </div>

          {cta}

          {project.notes && (
            <small className="mt-3 block">{project.notes}</small>
          )}
        </div>
      </div>
    </Animate>
  );
}
