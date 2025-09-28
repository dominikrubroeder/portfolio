'use client';

import Link from 'next/link';

import { ChevronLeft, ChevronRight } from 'lucide-react';
import { AnimatePresence, motion } from 'motion/react';

import { cn } from '@/lib/utils';

import { Badge } from '@/components/atoms/badge';
import { Button } from '@/components/atoms/button';
import { ExternalLink } from '@/components/atoms/external-link';
import { Ul } from '@/components/atoms/ul';
import { BrandLink } from '@/components/organisms/brand';
import { useProjectCarousel } from '@/components/organisms/projects';
import { projects } from '@/components/organisms/projects/data';

export function ProjectCarousel() {
  const { project, goNext, goPrevious, setActiveProject, activeProject } =
    useProjectCarousel();

  // TODO: Implement swipe functionality here
  return (
    <div className="mx-auto space-y-4">
      <div className="relative flex h-[30svh] items-center justify-center rounded border">
        <Button
          variant="ghost"
          className="absolute top-1/2 left-4 z-20 -translate-y-1/2 bg-background/80 backdrop-blur-sm hover:bg-background/90"
          title="Go to previous project"
          aria-label="Go to previous project"
          onClick={goPrevious}
        >
          <span className="sr-only">Previous project</span>
          <ChevronLeft className="h-4 w-4" />
        </Button>

        <Button
          variant="ghost"
          className="absolute top-1/2 right-4 z-20 -translate-y-1/2 bg-background/80 backdrop-blur-sm hover:bg-background/90"
          title="Go to next project"
          aria-label="Go to next project"
          onClick={goNext}
        >
          <span className="sr-only">Next project</span>
          <ChevronRight className="h-4 w-4" />
        </Button>

        <Link
          href={project.url}
          title={`Go to external ${project.title} website`}
          aria-label={`Go to external ${project.title} website`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex interactive items-center justify-center"
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={project.title}
              initial={{ y: 10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -10, opacity: 0 }}
              transition={{ duration: 0.2 }}
              layout
            >
              <span>{project.logo}</span>
            </motion.div>
          </AnimatePresence>
        </Link>
      </div>

      <div className="space-y-7">
        <ul className="flex h-3 items-center justify-center gap-2.5">
          {projects.map((_, index, array) => (
            <li key={index}>
              <button
                className={cn(
                  'size-3 rounded-full bg-muted transition hover:scale-[1.4]',
                  activeProject === index && 'bg-primary'
                )}
                onClick={() => setActiveProject(index)}
              >
                <span className="sr-only">Project {array.length - index}</span>
              </button>
            </li>
          ))}
        </ul>

        <AnimatePresence mode="wait">
          <motion.div
            key={project.title}
            initial={{ y: 10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -10, opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            <div className="flex flex-wrap items-center gap-2">
              <div className="flex items-center gap-2">
                {activeProject === 0 && (
                  <span className="relative flex size-4 items-center justify-center rounded-full bg-primary/10">
                    <span className="size-2 animate-pulse rounded-full bg-primary" />
                    <span className="sr-only">{project.status}</span>
                  </span>
                )}

                <h3 className="mb-0">{project.title}</h3>
              </div>

              {project.status && (
                <Badge size="small" className="self-center">
                  {project.status}
                </Badge>
              )}
            </div>

            <h4 className="space-x-1.5 text-base font-normal text-muted-foreground">
              <span>{project.readableTitle}</span>
              <ExternalLink
                href={project.url}
                variant="unstyled"
                color="primary"
              >
                Show more
              </ExternalLink>
            </h4>

            <div className="space-y-4">
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
                    <Badge color="neutral" size="small" className="self-center">
                      {project.demoUrls?.length}
                    </Badge>
                  </div>

                  <Ul listStyle="disc">
                    {project.caseStudyUrls?.map((url) => (
                      <li key={url}>
                        <ExternalLink href={url} variant="unstyled">
                          {url}
                        </ExternalLink>
                      </li>
                    ))}
                  </Ul>
                </div>
              )}

              {project.demoUrls?.length && (
                <div className="space-y-4">
                  <div className="flex flex-wrap items-center gap-2">
                    <b className="block">Demos</b>
                    <Badge color="neutral" size="small" className="self-center">
                      {project.demoUrls?.length}
                    </Badge>
                  </div>

                  <Ul listStyle="disc">
                    {project.demoUrls?.map((url) => (
                      <li key={url}>
                        <ExternalLink href={url} variant="unstyled">
                          {url}
                        </ExternalLink>
                      </li>
                    ))}
                  </Ul>
                </div>
              )}

              <div className="space-y-4">
                <b className="block">Tools</b>

                <ul className="-ml-4 flex flex-wrap gap-2">
                  {project.tools?.map((tool, index) => {
                    if (tool && tool.name) {
                      return (
                        <li key={index}>
                          <BrandLink brand={tool} showLabel />
                        </li>
                      );
                    }
                  })}
                </ul>
              </div>

              <div className="space-y-4">
                <b className="block">Technologies</b>
                <ul className="-ml-4 flex flex-wrap gap-2">
                  {project.technologies?.map((technology, index) => {
                    if (technology && technology.name) {
                      return (
                        <li key={index}>
                          <BrandLink
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
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
