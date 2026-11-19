import { Container } from '@/components/ui/container';
import { ExternalLink } from '@/components/ui/external-link';

import { AgentViewLink } from '@/components/feature/agent-view';
import { EVENTS_WINTER_SCENE_ENABLED } from '@/components/feature/events';

export function Footer() {
  return (
    <>
      <footer className="relative z-200 space-y-4 bg-background pb-6 text-xs">
        <Container
          as="div"
          className="flex flex-wrap items-center justify-center gap-x-4"
        >
          <AgentViewLink />
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
