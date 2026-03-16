'use client';

import Link from 'next/link';
import Image from 'next/image';

import { ChevronLeft, ChevronRight } from 'lucide-react';
import { AnimatePresence, motion, MotionConfig } from 'motion/react';

import { cn, formatDate } from '@/lib/utils';

import { Badge } from '@/components/atoms/badge';
import { Button } from '@/components/atoms/button';
import { ExternalLink } from '@/components/atoms/external-link';
import { Ul } from '@/components/atoms/ul';
import { BrandLink } from '@/components/organisms/brand';
import { useProjectCarousel } from '@/components/organisms/projects';
import { BadgeHrGroup } from '@/components/molecules/badge-hr-group';
import { ToggleContent } from '@/components/molecules/toggle-content';
import { ArrowUpRightIcon } from '@heroicons/react/16/solid';
import { InformationCircleIcon } from '@heroicons/react/24/outline';
import { Tooltip, TooltipContent, TooltipTrigger } from '@/components/atoms/tooltip/shadcnui/tooltip';
import { ButtonGroup } from '@/components/molecules/button-group';

export function ProjectCarousel() {
  const {
    projects,
    project,
    goNext,
    goPrevious,
    setActiveProject,
    activeProject,
    isShowCurrentProjectTooltip,
    isImageLoading,
    setIsImageLoading
  } = useProjectCarousel();

  return (
    <div className="mx-auto space-y-3">
      <div className="relative flex items-center justify-center rounded bg-background">
        <Link
          key={project.title}
          href={project.url}
          title={`Go to external ${project.title} website`}
          aria-label={`Go to external ${project.title} website`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex h-96 w-full interactive items-center justify-center rounded border p-4 md:h-112"
        >
          {project.previewImage ? (
            <figure className="relative h-full w-full md:h-auto">
              {isImageLoading && (
                <div
                  className="absolute inset-0 z-10 flex animate-pulse items-center justify-center rounded bg-muted"
                  aria-hidden="true"
                />
              )}

              <Image
                src={project.previewImage}
                width={800}
                height={500}
                alt={`Preview image of project ${project.title}`}
                draggable={false}
                className={cn(
                  'absolute top-0 left-0 h-full max-h-84 w-full rounded object-cover object-left md:relative md:max-h-none md:object-contain',
                  isImageLoading ? 'opacity-0' : 'opacity-100'
                )}
                loading="eager"
                onLoad={() => setIsImageLoading(false)}
              />

              {project.previewImageTimestamp && (
                <figcaption className="absolute -bottom-1 left-1/2 w-max -translate-x-1/2 space-x-1 md:relative md:bottom-auto md:left-auto md:w-auto md:translate-x-0">
                  <span>Screenshot from</span>
                  <span>
                    {formatDate({
                      dateString: project.previewImageTimestamp,
                      format: 'Month Day, Year'
                    })}
                  </span>
                </figcaption>
              )}
            </figure>
          ) : (
            <span>{project.logo}</span>
          )}
        </Link>
      </div>

      <div className="mx-auto max-w-(--readable-container) space-y-1">
        <div className="flex items-center justify-between gap-2">
          <div className="flex items-center text-sm xs:hidden">
            <span className="w-3">{activeProject + 1}</span>
            <span>/ {projects.length}</span>
          </div>

          <Ul
            className="my-0 hidden h-6 items-center gap-3 xs:flex"
            containerClassName="flex-1"
          >
            {projects.map((project, index) => (
              <li
                key={`project-dot-indicator-${index}`}
                className="my-0 flex items-center justify-center"
              >
                <button
                  className={cn(
                    'size-3 rounded-full bg-muted hover:scale-[1.4] motion-safe:transition',
                    activeProject === index && 'bg-primary'
                  )}
                  onClick={() => setActiveProject(index)}
                  aria-label={`Swipe to project ${project.title}`}
                >
                  <span className="sr-only">
                    Swipe to project {project.title}
                  </span>
                </button>
              </li>
            ))}
          </Ul>

          <ButtonGroup className="flex-nowrap">
            <Button
              variant="ghost-foreground"
              title="Go to previous project"
              aria-label="Go to previous project"
              onClick={goPrevious}
            >
              <span className="sr-only">Previous project</span>
              <ChevronLeft className="h-4 w-4" />
            </Button>

            <Button
              variant="ghost-foreground"
              title="Go to next project"
              aria-label="Go to next project"
              onClick={goNext}
            >
              <span className="sr-only">Next project</span>
              <ChevronRight className="h-4 w-4" />
            </Button>
          </ButtonGroup>
        </div>

        <MotionConfig reducedMotion="user" transition={{ duration: 0.2 }}>
          <AnimatePresence mode="wait">
            <motion.div
              key={project.title}
              initial={{ y: 10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -10, opacity: 0 }}
            >
              <div className="space-y-2">
                <div className="flex flex-wrap items-center gap-2">
                  <div>
                    <div className="flex items-center gap-2">
                      {activeProject === 0 && (
                        <span className="relative flex size-4 items-center justify-center rounded-full bg-primary/10">
                          <span className="size-2 rounded-full bg-primary motion-safe:animate-pulse" />
                          <span className="sr-only">Is current project</span>
                        </span>
                      )}

                      <Link
                        href={project.url}
                        title={`Go to external ${project.title} website`}
                        aria-label={`Go to external ${project.title} website`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-bold"
                      >
                        {project.title}
                      </Link>
                    </div>

                    {project.subline && <p>{project.subline}</p>}
                  </div>

                  {project.isCurrent && (
                    <div className="flex gap-1">
                      <Badge size="sm" className="self-center">
                        Current Project
                      </Badge>

                      {isShowCurrentProjectTooltip && (
                        <Tooltip>
                          <TooltipTrigger asChild>
                            <button className="flex size-6 items-center justify-center rounded-full bg-background text-muted-foreground hover:bg-muted motion-safe:transition">
                              <span className="sr-only">
                                Tooltip about the current project
                              </span>
                              <InformationCircleIcon className="size-4" />
                            </button>
                          </TooltipTrigger>
                          <TooltipContent>
                            <p className="mb-0">
                              Some projects are running in parallel, depending
                              on the scope and demands of each one.
                            </p>
                          </TooltipContent>
                        </Tooltip>
                      )}
                    </div>
                  )}
                </div>

                <div className="mb-3 inline-block w-full text-muted-foreground">
                  {project.timeframe && (
                    <BadgeHrGroup
                      badgeProps={[
                        {
                          variant: 'muted',
                          size: 'sm',
                          children: project.timeframe,
                          className: 'self-center'
                        }
                      ]}
                    />
                  )}

                  <p>{project.description}</p>
                </div>
              </div>

              <div className="relative">
                <ToggleContent
                  label="Read more"
                  id={`project-${activeProject}`}
                >
                  <div className="space-y-4">
                    {project.role?.length ? (
                      <div>
                        <small className="block text-muted-foreground">
                          Role
                        </small>

                        <div className="text-foreground">
                          {project.role?.join(', ')}
                        </div>
                      </div>
                    ) : null}

                    {project.companies?.length ? (
                      <div>
                        <small className="block text-muted-foreground">
                          Company
                        </small>

                        <div
                          className={cn(
                            'text-foreground',
                            project.companies.some((company) => !!company.href)
                              ? '-ml-1'
                              : ''
                          )}
                        >
                          {project.companies.map(({ href, label }, index) => {
                            if (href) {
                              return (
                                <ExternalLink
                                  key={href + index}
                                  href={href}
                                  aria-label={`Go to external ${label} website`}
                                  className="flex"
                                >
                                  {label}
                                </ExternalLink>
                              );
                            } else {
                              return label;
                            }
                          })}
                        </div>
                      </div>
                    ) : null}

                    {project.category.length ? (
                      <div>
                        <small className="block text-muted-foreground">
                          Category
                        </small>

                        <div className="text-foreground">
                          {project.category?.join(', ')}
                        </div>
                      </div>
                    ) : null}

                    {project.aspects?.length ? (
                      <Ul
                        headline="Aspects"
                        listStyle="disc"
                        headlineClassName="font-normal mb-1.5 text-sm text-muted-foreground"
                        className="mt-0 leading-normal"
                      >
                        {project.aspects?.map((aspect, index) => (
                          <li key={index} className="text-foreground">
                            {aspect}
                          </li>
                        ))}
                      </Ul>
                    ) : null}

                    {project.caseStudyUrls?.length ? (
                      <div className="space-y-4">
                        <div className="flex flex-wrap items-center gap-2">
                          <small className="block text-muted-foreground">
                            Case studies
                          </small>

                          <Badge
                            variant="foreground"
                            size="sm"
                            className="self-center"
                          >
                            {project.demoUrls?.length}
                          </Badge>
                        </div>

                        <Ul listStyle="disc">
                          {project.caseStudyUrls?.map((url) => (
                            <li key={url}>
                              <ExternalLink href={url}>{url}</ExternalLink>
                            </li>
                          ))}
                        </Ul>
                      </div>
                    ) : null}

                    {project.demoUrls?.length ? (
                      <div className="space-y-4">
                        <div className="flex flex-wrap items-center gap-2">
                          <small className="block text-muted-foreground">
                            Further links
                          </small>

                          <Badge
                            variant="foreground"
                            size="sm"
                            className="self-center"
                          >
                            {project.demoUrls?.length}
                          </Badge>
                        </div>

                        <Ul listStyle="disc">
                          {project.demoUrls?.map(({ label, src }) => (
                            <li key={src}>
                              <ExternalLink href={src}>{label}</ExternalLink>
                            </li>
                          ))}
                        </Ul>
                      </div>
                    ) : null}

                    {project.tools?.length ? (
                      <div className="space-y-4 pb-4">
                        <small className="block text-muted-foreground">
                          Tools
                        </small>

                        <Ul className="flex flex-wrap gap-5">
                          {project.tools?.map((tool, index) => {
                            if (tool && tool.name) {
                              return (
                                <li
                                  key={`project-tool-item-${tool.name}-${index}`}
                                >
                                  <BrandLink
                                    key={`bproject-tool-${tool.name}-${index}`}
                                    brandLogoId={`bproject-tool-${tool.name}-${index}`}
                                    brand={tool}
                                    showLabel
                                    labelPosition="bottom"
                                  />
                                </li>
                              );
                            }
                          })}
                        </Ul>
                      </div>
                    ) : null}

                    {project.technologies?.length ? (
                      <div className="space-y-4">
                        <small className="block text-muted-foreground">
                          Technologies
                        </small>

                        <Ul className="flex flex-wrap gap-5">
                          {project.technologies?.map((technology, index) => {
                            if (technology && technology.name) {
                              return (
                                <li
                                  key={`project-technology-item-${technology.name}-${index}`}
                                >
                                  <BrandLink
                                    key={`project-technology-${technology.name}-${index}`}
                                    brandLogoId={`project-technology-${technology.name}-${index}`}
                                    brand={technology}
                                    showLabel
                                    labelPosition="bottom"
                                  />
                                </li>
                              );
                            }
                          })}
                        </Ul>
                      </div>
                    ) : null}
                  </div>
                </ToggleContent>

                <Button
                  variant="ghost-foreground"
                  href={project.url}
                  className="absolute top-4 right-0"
                >
                  <span className="sr-only">Open {project.description}</span>
                  Open
                  <ArrowUpRightIcon />
                </Button>
              </div>
            </motion.div>
          </AnimatePresence>
        </MotionConfig>
      </div>
    </div>
  );
}
