import type { ReactNode } from 'react';

import {
  CodeBracketIcon,
  DocumentTextIcon,
  EllipsisHorizontalIcon
} from '@heroicons/react/24/outline';

import { Button } from '@/components/ui/button';
import { ButtonGroup } from '@/components/ui/button-group';
import { Container } from '@/components/ui/container';
import { ExternalLink } from '@/components/ui/external-link';
import { IconAtomicDesign, IconAtomicDesignTokens } from '@/components/ui/icon';
import { Menu } from '@/components/ui/menu';

import { AgentViewLink } from '@/components/feature/agent-view';
import { EVENTS_WINTER_SCENE_ENABLED } from '@/components/feature/events';

import { footerCertifications, footerResumeLinks } from './footer-content';

const CERTIFICATION_ICONS: Record<string, ReactNode> = {
  'Atomic Design': <IconAtomicDesign />,
  Subatomic: <IconAtomicDesignTokens id="footer-icon-atomic-design-tokens" />
};

const RESUME_ICONS: Record<string, ReactNode> = {
  pdf: <DocumentTextIcon className="size-4 shrink-0 stroke-2" aria-hidden />,
  json: <CodeBracketIcon className="size-4 shrink-0 stroke-2" aria-hidden />
};

export function Footer() {
  return (
    <>
      <footer className="relative z-200 space-y-4 border-t bg-background py-6 text-xs">
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

        <Container
          as="div"
          className="flex flex-wrap items-center justify-center gap-x-4"
        >
          <AgentViewLink />
          <Menu
            trigger={{
              variant: 'text-foreground',
              size: 'small',
              children: (
                <>
                  <span>Résumé</span>
                  <EllipsisHorizontalIcon
                    className="size-4 stroke-2"
                    aria-hidden
                  />
                </>
              )
            }}
            items={footerResumeLinks.map((item) => ({
              ...item,
              icon: RESUME_ICONS[item.key]
            }))}
          />
        </Container>

        <Container as="div" className="text-center">
          <p>
            &copy; 2026
            <span className="ml-1.5">Dominik Rubröder</span>
          </p>
        </Container>

        {EVENTS_WINTER_SCENE_ENABLED && (
          <Container as="div">
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
          </Container>
        )}
      </footer>
    </>
  );
}
