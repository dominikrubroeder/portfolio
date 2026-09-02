import { Container } from '@/components/organisms/layout';
import Link from 'next/link';
import Image from 'next/image';
import { ExternalLink } from '@/components/atoms/external-link';
import { Badge } from '@/components/atoms/badge';

import type { Project } from '@/components/organisms/projects';
import { cn } from '@/lib/utils';
import { H2, Ul } from '@/components/organisms/typography';
import { Button } from '@/components/atoms/button';
import { Hr } from '@/components/atoms/hr';

export function ProjectHero({
  project,
  className
}: {
  project: Project;
  className?: string;
}) {
  return (
    <div className={cn(className)}>
      <Container as="section" size="container">
        {project.previewImage && (
          <Link
            href={project.url}
            title={`Open ${project.title} in external tab`}
            aria-label={`Click to open ${project.title} in an external tab`}
            target="_blank"
            className="relative"
          >
            <Image
              src={project.previewImage}
              alt={`${project.title} preview image`}
              width={1920}
              height={630}
              className="max-w-panorama w-full"
              draggable={false}
              loading="eager"
            />
          </Link>
        )}

        <div className="mx-auto max-w-(--container-readable)">
          <div>
            <H2 className="sticky-none mb-0">{project.title}</H2>
            <small className="flex flex-wrap items-center gap-2">
              <ul className="my-0 -mr-1">
                {project.companies?.map((company) => (
                  <li key={`Project ${project.title} company ${company.label}`}>
                    {company.href ? (
                      <ExternalLink
                        variant="text"
                        href={company.href}
                        size="sm"
                        className="mr-0 -ml-1"
                        showExternalIndicator={false}
                      >
                        {company.label}
                      </ExternalLink>
                    ) : (
                      <span>{company.label}</span>
                    )}
                  </li>
                ))}
              </ul>

              <span className="size-1 rounded-full bg-primary-foreground" />

              <span>{project.timeframe}</span>

              {project.isActive && (
                <>
                  <span className="size-1 rounded-full bg-primary-foreground" />
                  <Badge size="sm">Ongoing</Badge>
                </>
              )}
            </small>
          </div>

          <Hr className="my-3 w-4" />

          {project.description && <p>{project.description}</p>}

          <p>{project.subline}</p>

          {project.responsibilities?.length && (
            <Ul
              headline="Responsibilities"
              listStyle="disc"
              className=""
              containerClassName=""
            >
              {project.responsibilities.map((aspect) => (
                <li key={aspect}>{aspect}</li>
              ))}
            </Ul>
          )}

          <Button
            href={project.url}
            title={`View ${project.title}`}
            aria-label={`Click to view ${project.title} in a new tab`}
          >
            View {project.title}
          </Button>
        </div>
      </Container>
    </div>
  );
}
