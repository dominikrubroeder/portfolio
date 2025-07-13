import Link from 'next/link';

import { ArrowTopRightOnSquareIcon } from '@heroicons/react/24/solid';

import { Badge } from '@/components/atoms/badge';
import { BrandLogo } from '@/components/atoms/brand-logo';
import { Button } from '@/components/atoms/button';
import { Ul } from '@/components/atoms/ul';
import { projects } from '@/components/organisms/projects/data';

export function Projects() {
  const project = projects[0];

  return (
    <div className="space-y-6">
      <h2>
        Projects
        <span className="ml-2 font-medium text-muted-foreground">
          show you, in which teams i participated yet
        </span>
      </h2>

      <div className="space-y-4">
        <div className="relative flex h-[50svh] items-center justify-center rounded border">
          <Link
            href={project.url}
            title={`Go to external ${project.title} website`}
            aria-label={`Go to external ${project.title} website`}
            target="_blank"
            rel="noopener noreferrer"
            className="absolute inset-0 flex size-full items-center justify-center"
          >
            <span className="sr-only">Go to {project.title} website</span>
            {project.logo}
          </Link>

          <Button
            variant="ghost"
            href={project.url}
            title={`Go to external ${project.title} website`}
            aria-label={`Go to external ${project.title} website`}
            className="absolute right-3.5 bottom-3"
          >
            <ArrowTopRightOnSquareIcon />
          </Button>
        </div>

        <div>
          <div className="flex flex-wrap items-center gap-2">
            <div className="flex items-center gap-2">
              <span className="relative flex size-4 items-center justify-center rounded-full bg-primary/10">
                <span className="size-2 animate-pulse rounded-full bg-primary" />
                <span className="sr-only">{project.status}</span>
              </span>
              <h3 className="mb-0">{project.title}</h3>
            </div>

            <Badge size="small">{project.status}</Badge>
          </div>
          <h4 className="text-base font-normal text-muted-foreground">
            {project.readableTitle}
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

            <Ul headline="Aspects" className="mt-0">
              {project.aspects?.map((aspect, index) => (
                <li key={index}>{aspect}</li>
              ))}
            </Ul>

            <div className="space-y-4">
              <b className="block">Tools</b>
              <ul className="flex flex-wrap gap-6">
                {project.tools?.map((tool, index) => {
                  if (tool && tool.title) {
                    return (
                      <li key={index}>
                        <Link
                          href={tool.website}
                          title={tool.title}
                          aria-label={`Open ${tool.title} website`}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <span className="sr-only">{tool.title}</span>
                          <BrandLogo brand={tool.title} className="size-12" />
                        </Link>
                      </li>
                    );
                  }
                })}
              </ul>
            </div>

            <div className="space-y-4">
              <b className="block">Technologies</b>
              <ul className="flex flex-wrap gap-6">
                {project.technologies?.map((technology, index) => {
                  if (technology && technology.title) {
                    return (
                      <li key={index}>
                        <Link
                          href={technology.website}
                          title={technology.title}
                          aria-label={`Open ${technology.title} website`}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <span className="sr-only">{technology.title}</span>
                          <BrandLogo
                            brand={technology.title}
                            className="size-12"
                          />
                        </Link>
                      </li>
                    );
                  }
                })}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
