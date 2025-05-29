import { Button } from '@/components/atoms/button';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/16/solid';
import { cn } from '@/lib/utils';

const projects = [
  {
    title: 'sautershop',
    category: 'DIY workers',
    url: 'https://www.sautershop.de',
    readableTitle: 'Home wood-working tools',
    status: 'Active'
  },
  {
    title: 'Segmüller',
    category: 'Furniture',
    url: 'https://www.segmueller.de',
    readableTitle: 'Home furniture from Germany',
    status: '2021 - 2023'
  },
  {
    title: 'alles auto',
    category: 'Car dealer',
    url: 'https://www.alles.auto',
    readableTitle: '',
    status: '2021'
  }
];

export function Projects() {
  return (
    <div className="space-y-6">
      <h2>
        <span>Projects</span>
        <span className="text-muted-foreground">
          show you, in which teams i have participated and build
        </span>
      </h2>

      <div className="space-y-4">
        <div className="relative h-[50svh] rounded border">
          <Button
            variant="secondary"
            className="absolute top-1/2 left-2 -translate-y-1/2"
          >
            <ChevronLeftIcon />
          </Button>

          <Button
            variant="secondary"
            className="absolute top-1/2 right-2 -translate-y-1/2"
          >
            <ChevronRightIcon />
          </Button>
        </div>

        <ul className="mx-auto flex items-center justify-center gap-3">
          {projects.map((_, index) => (
            <li key={index}>
              <span
                className={cn(
                  'block size-3 rounded-full',
                  index === 0 ? 'bg-primary' : 'bg-muted'
                )}
              />
            </li>
          ))}
        </ul>

        <div>
          <div>
            <h3 className="mb-0">{projects[0].title}</h3>
            <div>{projects[0].readableTitle}</div>
          </div>
        </div>
      </div>
    </div>
  );
}
