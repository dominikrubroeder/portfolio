import { Badge } from '@/components/atoms/badge';
import { MediawaveLogo } from '@/components/atoms/logo';
import Link from 'next/link';
import { Button } from '@/components/atoms/button';
import { ArrowTopRightOnSquareIcon } from '@heroicons/react/24/solid';
import { technologies } from '@/components/organisms/technologies';
import { Ul } from '@/components/atoms/ul';
import { Brand } from '@/components/atoms/brand';
import { tools } from '@/components/organisms/tools';

const projects = [
  {
    title: 'Value Booster',
    category: ['Headless', 'Ecommerce'],
    url: 'https://www.mediawave.de/value-booster',
    readableTitle: 'Kick start in your headless ecommerce project',
    status: 'Currently developing',
    logo: <MediawaveLogo className="h-14 w-auto" />,
    role: ['Frontend Development', 'Design Consulting'],
    aspects: [
      'Build user interface based on design files',
      'Connect several headless systems into one centric user interface',
      'Maintain and build up design system to ensure flexibility and reusability'
    ],
    tools: [
      tools
        .find((technologyGroup) =>
          technologyGroup.children.find(
            (technology) => technology.title === 'Figma'
          )
        )
        ?.children.find((technology) => technology.title === 'Figma'),
      tools
        .find((technologyGroup) =>
          technologyGroup.children.find(
            (technology) => technology.title === 'WebStorm'
          )
        )
        ?.children.find((technology) => technology.title === 'WebStorm'),
      tools
        .find((technologyGroup) =>
          technologyGroup.children.find(
            (technology) => technology.title === 'Jira'
          )
        )
        ?.children.find((technology) => technology.title === 'Jira'),
      tools
        .find((technologyGroup) =>
          technologyGroup.children.find(
            (technology) => technology.title === 'Teams'
          )
        )
        ?.children.find((technology) => technology.title === 'Teams'),
      tools
        .find((technologyGroup) =>
          technologyGroup.children.find(
            (technology) => technology.title === 'GitLab'
          )
        )
        ?.children.find((technology) => technology.title === 'GitLab'),
      tools
        .find((technologyGroup) =>
          technologyGroup.children.find(
            (technology) => technology.title === 'Craft'
          )
        )
        ?.children.find((technology) => technology.title === 'Craft')
    ],
    technologies: [
      technologies
        .find((technologyGroup) =>
          technologyGroup.children.find(
            (technology) => technology.title === 'Next.js'
          )
        )
        ?.children.find((technology) => technology.title === 'Next.js'),
      technologies
        .find((technologyGroup) =>
          technologyGroup.children.find(
            (technology) => technology.title === 'React'
          )
        )
        ?.children.find((technology) => technology.title === 'React'),
      technologies
        .find((technologyGroup) =>
          technologyGroup.children.find(
            (technology) => technology.title === 'TypeScript'
          )
        )
        ?.children.find((technology) => technology.title === 'TypeScript'),
      technologies
        .find((technologyGroup) =>
          technologyGroup.children.find(
            (technology) => technology.title === 'Tailwind CSS'
          )
        )
        ?.children.find((technology) => technology.title === 'Tailwind CSS')
    ]
  },
  {
    title: 'sautershop',
    category: ['DIY workers'],
    url: 'https://www.sautershop.de',
    readableTitle: 'Home wood-working tools',
    status: '2024 – Today'
  },
  {
    title: 'HD+',
    category: ['TV'],
    url: 'https://www.hd-plus.de',
    readableTitle: 'Everything you need for good television',
    status: '2021 - 2023'
  },
  {
    title: 'Segmüller',
    category: ['Furniture'],
    url: 'https://www.segmueller.de',
    readableTitle: 'Home furniture from Germany',
    status: '2021 - 2023'
  },
  {
    title: 'alles auto',
    category: ['Car dealer'],
    url: 'https://www.alles.auto',
    readableTitle: '',
    status: '2021'
  }
];

export function Projects() {
  const project = projects[0];

  console.log(project.tools);

  return (
    <div className="space-y-6">
      <h2>
        Projects
        <span className="ml-2 font-medium text-muted-foreground">
          show you, in which teams i participated
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
              <div className="flex flex-wrap gap-6">
                {project.tools?.map((technology, index) => (
                  <Brand
                    key={index}
                    brand={technology?.title ?? 'Next.js'}
                    className="size-12"
                  />
                ))}
              </div>
            </div>

            <div className="space-y-4">
              <b className="block">Technologies</b>
              <div className="flex flex-wrap gap-6">
                {project.technologies?.map((technology, index) => (
                  <Brand
                    key={index}
                    brand={technology?.title ?? 'Next.js'}
                    className="size-12"
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
