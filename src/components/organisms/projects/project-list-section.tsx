import { H2, Ul } from '@/components/organisms/typography';
import { projects } from '@/components/organisms/projects/data';
import Link from 'next/link';
import Image from 'next/image';
import { Badge } from '@/components/atoms/badge';
import { Container } from '@/components/organisms/layout';
import { Button } from '@/components/atoms/button';
import { Hr } from '@/components/atoms/hr';
import { formatDate } from '@/lib/utils';
import { ExternalLink } from '@/components/atoms/external-link';
import { Fragment } from 'react';

export function ProjectListSection({
  projectHeroTitle
}: {
  projectHeroTitle: string | undefined;
}) {
  return (
    <Container as="section">
      <Ul className="space-y-5 sm:space-y-12 md:-mx-6">
        {projects
          .filter((project) => project.title !== projectHeroTitle)
          .map((project, index, array) => (
            <Fragment key={project.title}>
              <li key={`ljdkfajslfkdsfjlsadfjsdf-${index}`}>
                <div className="grid gap-2">
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
                        className="w-full scale-105"
                        draggable={false}
                        loading="eager"
                      />
                    ) : (
                      <div className="flex h-44 w-full items-center justify-center [&>svg]:max-h-32 [&>svg]:max-w-60">
                        {project.logo}
                      </div>
                    )}

                    {project.previewImageTimestamp && (
                      <small className="block text-center">
                        Screenshot taken on
                        <span className="ml-1">
                          {formatDate({
                            dateString: project.previewImageTimestamp
                          })}
                        </span>
                      </small>
                    )}
                  </Link>

                  <div className="flex-1">
                    <div className="space-y-2">
                      <div>
                        <H2 className="sticky-none mb-2">{project.title}</H2>
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

                      <div>
                        <p className="text-muted-foreground">
                          {project.description}
                        </p>

                        <p className="text-muted-foreground">
                          {project.subline}
                        </p>

                        {project.aspects?.length && (
                          <Ul headline="Responsibilities" listStyle="disc">
                            {project.aspects.map((aspect) => (
                              <li key={`${project.title}-${aspect}`}>
                                {aspect}
                              </li>
                            ))}
                          </Ul>
                        )}
                      </div>
                    </div>

                    <Button
                      variant="ghost-primary"
                      href={project.url}
                      title={`View ${project.title}`}
                      aria-label={`Click to view ${project.title} in an external tab`}
                      className="-ml-1 sm:-ml-3"
                    >
                      View {project.title}
                    </Button>
                  </div>
                </div>
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
  );
}
