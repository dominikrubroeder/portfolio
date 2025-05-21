import { Button } from '@/components/atoms/button';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/16/solid';

export function Projects() {
  return (
    <div className="space-y-6">
      <h2 className="space-x-1 text-5xl leading-[1.2] font-bold text-foreground">
        <span>Projects</span>
        <span className="text-muted-foreground">
          show you, on which projects i participated or build with
        </span>
      </h2>

      <div className="space-y-4">
        <div className="relative h-[50svh] rounded border">
          <Button
            variant="secondary"
            className="absolute top-1/2 left-1 -translate-y-1/2"
          >
            <ChevronLeftIcon />
          </Button>

          <Button
            variant="secondary"
            className="absolute top-1/2 right-1 -translate-y-1/2"
          >
            <ChevronRightIcon />
          </Button>
        </div>

        <ul className="mx-auto flex items-center justify-center gap-3">
          <li>
            <span className="block size-3 rounded-full bg-primary" />
          </li>
          <li>
            <span className="block size-3 rounded-full bg-muted" />
          </li>
          <li>
            <span className="block size-3 rounded-full bg-muted" />
          </li>
        </ul>

        <div>
          <h3>Title</h3>
          <div>Project</div>
        </div>
      </div>
    </div>
  );
}
