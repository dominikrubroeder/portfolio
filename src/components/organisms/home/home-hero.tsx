import { Button, ScrollToElementButton } from '@/components/atoms/button';
import { Container } from '@/components/atoms/container';
import { DocumentTextIcon } from '@heroicons/react/24/outline';
import { ArrowRightIcon } from '@heroicons/react/20/solid';
import { DesignShowcase } from '@/components/design-showcase';

export function HomeHero() {
  return (
    <Container
      className="flex min-h-[80vh] flex-col items-center justify-center py-8"
      id="hero"
    >
      <div className="space-y-8 sm:max-w-(--breakpoint-lg)">
        <div className="space-y-6">
          <h2 className="text-7xl font-bold text-foreground select-none">
            <code className="group relative mr-4 overflow-hidden">
              Coding
              <span className="absolute -top-1 right-0 z-10 rounded border bg-primary px-1 py-0.5 text-xs text-primary-foreground transition group-hover:-translate-y-1.5">
                .tsx
              </span>
              <span className="invisible absolute inset-0 translate-y-4 border opacity-0 transition group-hover:visible group-hover:translate-y-0 group-hover:opacity-100" />
              <span className="invisible absolute -top-6 left-2 translate-y-2 rounded-tl rounded-tr bg-primary px-1 py-1 text-xs font-light text-primary-foreground opacity-0 transition-all group-hover:visible group-hover:translate-y-0 group-hover:opacity-100">
                span | home-hero.tsx
              </span>
            </code>
            and
            <DesignShowcase />
            ,
            <br className="hidden sm:block" />
            rooted in the frontend team.
          </h2>

          <h3 className="space-y-8 text-4xl leading-[1.325] font-semibold text-foreground sm:max-w-(--breakpoint-md)">
            As a UX Design Engineer, i am working for a good user interface with
            specialty in UI components and design systems.
          </h3>
        </div>

        <div className="flex flex-wrap items-center gap-2">
          <ScrollToElementButton variant="primary" id="introduction">
            <DocumentTextIcon className="size-5" /> More about my vision
          </ScrollToElementButton>

          <Button variant="secondary">
            Component showcase <ArrowRightIcon className="size-5" />
          </Button>
        </div>
      </div>
    </Container>
  );
}
