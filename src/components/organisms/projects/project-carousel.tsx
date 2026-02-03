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
import { ButtonGroup } from '@/components/molecules/button-group';
import {
  ArrowUpRightIcon,
  MinusIcon,
  PlusIcon
} from '@heroicons/react/16/solid';
import { Hr } from '@/components/atoms/hr';

export function ProjectCarousel() {
  const {
    project,
    goNext,
    goPrevious,
    setActiveProject,
    activeProject,
    isReadMore,
    setIsReadMore
  } = useProjectCarousel();

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

                  <div className="flex flex-wrap items-center gap-2">
                    {project.isCurrentProject && (
                      <Badge size="sm" className="self-center">
                        Current Project
                      </Badge>
                    )}
                  </div>
                </div>

                <div className="mb-3 inline-block w-full text-muted-foreground">
                  {project.timeframe && (
                    <div className="mb-3 flex items-center justify-center gap-4">
                      <Badge
                        variant="muted"
                        size="sm"
                        className="w-max shrink-0 self-center"
                      >
                        {project.timeframe}
                      </Badge>
                      <Hr className="my-0 inline-block h-1 w-full" />
                    </div>
                  )}

                  <p>{project.readableTitle}</p>
                </div>
              </div>

              <ButtonGroup className="w-full justify-between">
                <ButtonGroup className="inline-flex">
                  <Button
                    title={`Read more on ${project.title}`}
                    aria-label={`Read more on ${project.title}`}
                    onClick={() =>
                      setIsReadMore((previousState) => !previousState)
                    }
                  >
                    {isReadMore ? <MinusIcon /> : <PlusIcon />}
                  </Button>

                  <Button
                    variant="ghost-foreground"
                    title={`Read more on ${project.title}`}
                    aria-label={`Read more on ${project.title}`}
                    onClick={() =>
                      setIsReadMore((previousState) => !previousState)
                    }
                  >
                    Read more
                  </Button>
                </ButtonGroup>

                <Button variant="ghost-foreground" href={project.url}>
                  <span className="sr-only">Open {project.readableTitle}</span>
                  Open
                  <ArrowUpRightIcon />
                </Button>
              </ButtonGroup>

              {isReadMore && (
                <div className="mt-4 space-y-3 motion-safe:animate-fade-up-1rem">
                  <div>
                    <b>Role</b>
                    <div>{project.role?.join(', ')}</div>
                  </div>

                  <div>
                    <b>Category</b>
                    <div>{project.category?.join(', ')}</div>
                  </div>

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

                  <div className="space-y-4 pb-4">
                    <b className="block">Tools</b>

                    <ul className="ml-1 flex flex-wrap gap-5">
                      {project.tools?.map((tool, index) => {
                        if (tool && tool.name) {
                          return (
                            <li
                              key={`list-item-project-tool-item-${index}-${tool.name}`}
                            >
                              <BrandLink
                                key={`brand-link-project-tool-item-${index}-${tool.name}`}
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

                  <div className="space-y-4">
                    <b className="block">Technologies</b>
                    <ul className="flex flex-wrap gap-5">
                      {project.technologies?.map((technology, index) => {
                        if (technology && technology.name) {
                          return (
                            <li
                              key={`list-item-project-technology-item-${index}-${technology.name}`}
                            >
                              <BrandLink
                                key={`brand-link-project-technology-item-${index}-${technology.name}`}
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
                </div>
              )}
            </motion.div>
          </AnimatePresence>
        </MotionConfig>
      </div>
    </div>
  );
}
