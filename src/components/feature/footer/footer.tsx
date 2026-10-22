import type { ReactNode } from 'react';

import { Button } from '@/components/ui/button';
import { ButtonGroup } from '@/components/ui/button-group';
import { Container } from '@/components/ui/container';
import { ExternalLink } from '@/components/ui/external-link';
import { IconAtomicDesign, IconAtomicDesignTokens } from '@/components/ui/icon';

import { AgentViewLink } from '@/components/feature/agent-view';
import { EVENTS_WINTER_SCENE_ENABLED } from '@/components/feature/events/winter/events-constants';
import { footerCertifications } from '@/components/feature/footer/footer-content';

const CERTIFICATION_ICONS: Record<string, ReactNode> = {
  'Atomic Design': <IconAtomicDesign />,
  Subatomic: <IconAtomicDesignTokens id="footer-icon-atomic-design-tokens" />
};

export function Footer() {
  return (
    <>
      <footer className="relative z-200 space-y-4 border-t bg-background px-4 py-6 text-xs">
        <Container as="div">
          <div className="mx-auto max-w-container space-y-1 text-center">
            <span className="block">Certified in:</span>

            <ButtonGroup className="mx-auto inline-flex">
              {footerCertifications.map(({ name, href }) => (
                <Button
                  key={name}
                  variant="ghost-foreground"
                  href={href}
                  size="small"
                  className="gap-1.5"
                >
                  {CERTIFICATION_ICONS[name]}
                  <span>{name}</span>
                </Button>
              ))}
            </ButtonGroup>
          </div>
        </Container>

        <Container as="div" className="flex items-center justify-center">
          <AgentViewLink />
        </Container>

        <Container as="div" className="text-center">
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
