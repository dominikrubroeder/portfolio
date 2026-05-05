import { Animate } from '@/components/molecules/animate';
import { Container } from '@/components/atoms/container';
import Link from 'next/link';
import Image from 'next/image';
import { ExternalLink } from '@/components/atoms/external-link';
import { Hr } from '@/components/atoms/hr';
import { Ul } from '@/components/atoms/ul';
import { projects } from '@/components/organisms/projects/data';
import { Badge } from '@/components/atoms/badge';
import { preload } from 'react-dom';
import { Blockquote } from '@/components/atoms/blockquote';

export function ProjectsTemplate() {
  const heroProject = projects[0];

  projects.forEach((project) => {
    if (project.previewImage) {
      preload(project.previewImage, {
        as: 'image',
        fetchPriority: 'high'
      });
    }
  });

  return (
    <>
      <Animate delay={0.1}>
        <Container as="section" className="space-y-2">
          <h1 className="text-6xl font-black">Projects</h1>
          <Blockquote className="mt-3 sm:mt-5">
            I contributed either as designer or engineer to the following
            projects; in the later projects starting around 2020, my role merged
            into a hybrid role of design engineering.
          </Blockquote>

          <p>Only projects with a longer period than 3 months are listed.</p>
        </Container>
      </Animate>

      <Animate delay={0.16} className="-mt-6">
        <Container as="section" size="container">
          <Link
            href={heroProject.url}
            title={`Open ${heroProject.title} in external tab`}
            aria-label={`Click to open ${heroProject.title} in an external tab`}
            target="_blank"
          >
            {heroProject.previewImage ? (
              <Image
                src={heroProject.previewImage}
                alt={`${heroProject.title} preview image`}
                width={1920}
                height={630}
                className="max-w-panorama w-full"
                draggable={false}
                loading="eager"
              />
            ) : null}
          </Link>

          <div className="mx-auto max-w-(--container-readable)">
            <div>
              <h3 className="mb-0">{heroProject.title}</h3>
              <small className="flex flex-wrap items-center gap-2">
                <ul className="my-0 -mr-1">
                  {heroProject.companies?.map((company) => (
                    <li
                      key={`Project ${heroProject.title} company ${company.label}`}
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
                <span>{heroProject.timeframe}</span>
                {heroProject.isActive && (
                  <>
                    <span className="size-1 rounded-full bg-muted-foreground" />
                    <Badge variant="muted" size="sm">
                      Ongoing
                    </Badge>
                  </>
                )}
              </small>
            </div>

            {heroProject.description && <p>{heroProject.description}</p>}

            <p className="text-muted-foreground">{heroProject.subline}</p>

            <ExternalLink
              href={heroProject.url}
              color="primary"
              title={`View ${heroProject.title}`}
              aria-label={`Click to view ${heroProject.title} in a new tab`}
              className="-ml-1"
            >
              View {heroProject.title}
            </ExternalLink>
          </div>
        </Container>
      </Animate>

      <Hr />

      <Container as="section">
        <Ul className="space-y-5 sm:space-y-12 md:-mx-6">
          {projects
            .filter((_, index) => index !== 0)
            .map((project) => (
              <li key={project.title}>
                <div className="grid gap-2 sm:flex sm:gap-5">
                  <Link
                    href={project.url}
                    title={`Open ${project.title} in external tab`}
                    aria-label={`Click to open ${project.title} in an external tab`}
                    target="_blank"
                  >
                    {project.previewImage ? (
                      <Image
                        src={project.previewImage}
                        alt={`${project.title} preview image`}
                        width={800}
                        height={600}
                        className="h-auto w-full sm:h-44 sm:w-80 sm:object-contain sm:object-left"
                        draggable={false}
                        loading="eager"
                      />
                    ) : (
                      <div className="flex h-32 w-full items-center justify-center sm:h-60 sm:w-80 [&>svg]:max-h-32 [&>svg]:max-w-60">
                        {project.logo}
                      </div>
                    )}
                  </Link>

                  <div className="flex-1">
                    <div className="space-y-2">
                      <div>
                        <h3 className="mb-0">{project.title}</h3>
                        <small className="flex flex-wrap items-center gap-2">
                          <ul className="my-0 -mr-1">
                            {project.companies?.map((company) => (
                              <li
                                key={`Project ${project.title} company ${company.label}`}
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
                      </div>
                    </div>

                    <ExternalLink
                      href={project.url}
                      color="primary"
                      title={`View ${project.title}`}
                      aria-label={`Click to view ${project.title} in an external tab`}
                      className="-ml-1"
                    >
                      View {project.title}
                    </ExternalLink>
                  </div>
                </div>
              </li>
            ))}
        </Ul>
      </Container>

      <Hr />
    </>
  );
}
