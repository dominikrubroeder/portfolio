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
import { projects } from '@/components/organisms/projects/data';
import { BadgeHrGroup } from '@/components/molecules/badge-hr-group';
import { ToggleContent } from '@/components/molecules/toggle-content';
import { ArrowUpRightIcon } from '@heroicons/react/16/solid';

export function ProjectCarousel() {
  const { project, goNext, goPrevious, setActiveProject, activeProject } =
    useProjectCarousel();

  return (
    <div className="mx-auto space-y-4">
      <div className="relative flex items-center justify-center rounded bg-background">
        <Button
          variant="ghost-foreground"
          className="absolute right-14 -bottom-14 z-20 bg-background/80 backdrop-blur-sm hover:bg-background/90"
          title="Go to previous project"
          aria-label="Go to previous project"
          onClick={goPrevious}
        >
          <span className="sr-only">Previous project</span>
          <ChevronLeft className="h-4 w-4" />
        </Button>

        <Button
          variant="ghost-foreground"
          className="absolute right-0 -bottom-14 z-20 bg-background/80 backdrop-blur-sm hover:bg-background/90"
          title="Go to next project"
          aria-label="Go to next project"
          onClick={goNext}
        >
          <span className="sr-only">Next project</span>
          <ChevronRight className="h-4 w-4" />
        </Button>

        <Link
          key={project.title}
          href={project.url}
          title={`Go to external ${project.title} website`}
          aria-label={`Go to external ${project.title} website`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex h-92 w-full interactive items-center justify-center rounded border p-4 sm:h-120"
        >
          {project.previewImage ? (
            <figure>
              <Image
                src={project.previewImage}
                width={800}
                height={500}
                alt={`Preview image of project ${project.title}`}
                draggable={false}
                className="absolute top-0 left-0 h-full w-full rounded object-cover object-left md:relative md:object-contain"
                priority={true}
              />

              {project.previewImageTimestamp && (
                <figcaption className="space-x-1">
                  <span>Screenshot taken on</span>
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

      <div className="mx-auto max-w-(--readable-container) space-y-7">
        <ul className="flex h-4 items-center gap-3">
          {projects.map((_, index, array) => (
            <li key={`project-dot-indicator-${index}`}>
              <button
                className={cn(
                  'size-3 rounded-full bg-muted hover:scale-[1.4] motion-safe:transition',
                  activeProject === index && 'bg-primary'
                )}
                onClick={() => setActiveProject(index)}
              >
                <span className="sr-only">Project {array.length - index}</span>
              </button>
            </li>
          ))}
        </ul>

        <MotionConfig reducedMotion="user" transition={{ duration: 0.2 }}>
          <AnimatePresence mode="wait">
            <motion.div
              key={project.title}
              initial={{ y: 10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -10, opacity: 0 }}
            >
              <div className="space-y-2">
                <div className="space-y-1 xs:flex xs:flex-wrap xs:items-center xs:gap-2 xs:space-y-0">
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

                  {project.isCurrentProject && (
                    <Badge size="sm" className="self-center">
                      Current Project
                    </Badge>
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

                  <p>{project.readableTitle}</p>
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
                        <b>Role</b>
                        <div>{project.role?.join(', ')}</div>
                      </div>
                    ) : null}

                    {project.category.length ? (
                      <div>
                        <b>Category</b>
                        <div>{project.category?.join(', ')}</div>
                      </div>
                    ) : null}

                    {project.aspects?.length && (
                      <Ul
                        headline="Aspects"
                        listStyle="disc"
                        className="mt-0 leading-normal"
                      >
                        {project.aspects?.map((aspect, index) => (
                          <li key={index}>{aspect}</li>
                        ))}
                      </Ul>
                    )}

                    {project.caseStudyUrls?.length && (
                      <div className="space-y-4">
                        <div className="flex flex-wrap items-center gap-2">
                          <b className="block">Case Study</b>
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
                    )}

                    {project.demoUrls?.length && (
                      <div className="space-y-4">
                        <div className="flex flex-wrap items-center gap-2">
                          <b className="block">Further links</b>
                          <Badge
                            variant="foreground"
                            size="sm"
                            className="self-center"
                          >
                            {project.demoUrls?.length}
                          </Badge>
                        </div>

                        <Ul listStyle="disc">
                          {project.demoUrls?.map((url) => (
                            <li key={url}>
                              <ExternalLink href={url}>{url}</ExternalLink>
                            </li>
                          ))}
                        </Ul>
                      </div>
                    )}

                    {project.tools?.length ? (
                      <div className="space-y-4 pb-4">
                        <b className="block">Tools</b>

                        <ul className="-ml-2 flex flex-wrap gap-5">
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
                        </ul>
                      </div>
                    ) : null}

                    {project.technologies?.length ? (
                      <div className="space-y-4">
                        <b className="block">Technologies</b>

                        <ul className="-ml-2 flex flex-wrap gap-5">
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
                        </ul>
                      </div>
                    ) : null}
                  </div>
                </ToggleContent>

                <Button
                  variant="ghost-foreground"
                  href={project.url}
                  className="absolute top-4 right-0"
                >
                  <span className="sr-only">Open {project.readableTitle}</span>
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
