import { Button } from '@/components/ui/button';
import { ButtonGroup } from '@/components/ui/button-group';
import { Container } from '@/components/ui/container';
import { ExternalLink } from '@/components/ui/external-link';
import { IconAtomicDesign, IconAtomicDesignTokens } from '@/components/ui/icon';

import { EVENTS_WINTER_SCENE_ENABLED } from '@/components/feature/events/winter/events-constants';

export function Footer() {
  return (
    <>
      <footer className="relative z-200 space-y-6 border-t bg-background px-4 py-12 text-xs">
        <Container as="div">
          <div className="mx-auto max-w-container space-y-1 text-center">
            <span className="block">Certified in:</span>

            <ButtonGroup className="mx-auto inline-flex">
              <Button
                variant="ghost-foreground"
                href="/certificates/atomic-design.pdf"
                size="small"
                className="gap-1.5"
              >
                <IconAtomicDesign />
                <span>Atomic Design</span>
              </Button>

              <Button
                variant="ghost-foreground"
                href="/certificates/subatomic.pdf"
                size="small"
                className="gap-1.5"
              >
                <IconAtomicDesignTokens id="footer-icon-atomic-design-tokens" />
                <span>Subatomic</span>
              </Button>
            </ButtonGroup>
          </div>
        </Container>

        <Container as="div" className="text-center">
          <p className="flex flex-wrap items-center justify-center gap-2">
            <ExternalLink
              href="https://nextjs.org"
              title="Open Next.js website"
              aria-label="Click to open external Next.js website"
              size="xs"
              color="muted"
            >
              <span>Next.js 16.4.2</span>
            </ExternalLink>

            <span>|</span>

            <ExternalLink
              href="https://react.dev"
              title="Open React website"
              aria-label="Click to open external React website"
              size="xs"
              color="muted"
            >
              <span>React 19.3</span>
            </ExternalLink>

            <span>|</span>

            <ExternalLink
              href="https://tailwindcss.com"
              title="Open Tailwind CSS documentation"
              aria-label="Click to open external Tailwind CSS documentation"
              size="xs"
              color="muted"
            >
              <span>Tailwind CSS 4.3.3</span>
            </ExternalLink>
          </p>

          <p>
            &copy; 2026
            <span className="ml-1.5">Dominik Rubröder</span>
          </p>
        </Container>

        {EVENTS_WINTER_SCENE_ENABLED && (
          <p>
            Santa Clause cap:
            <ExternalLink
              color="muted"
              href="https://www.svgrepo.com/svg/206754/winter-hat-santa-claus"
              className="ml-1"
            >
              https://www.svgrepo.com/svg/206754/winter-hat-santa-claus
            </ExternalLink>
          </p>
        )}
      </footer>
    </>
  );
}
