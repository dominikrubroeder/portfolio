import { ExternalLink } from '@/components/atoms/external-link';
import { EVENTS_WINTER_SCENE_ENABLED } from '@/components/organisms/events/winter/constants';
import { cn } from '@/lib/utils';
import { BrandLink } from '@/components/organisms/brand';
import { Ul } from '@/components/organisms/typography';
import { socials } from '@/components/organisms/socials';
import { Button, ButtonScrollToTop } from '@/components/atoms/button';
import {
  IconAtomicDesign,
  IconAtomicDesignTokens
} from '@/components/atoms/icon';
import { ButtonGroup } from '@/components/molecules/button-group';
import { Container } from '@/components/organisms/layout';

export function Footer() {
  return (
    <>
      <footer className="relative z-10 mt-8 space-y-4 border-t bg-background px-4 py-8 text-xs">
        <ButtonScrollToTop className="absolute top-5 right-4" />

        <Container as="div" className="text-center">
          <Ul className={cn('my-0 mb-0 inline-flex w-auto')}>
            {socials.map((brand, index) => (
              <li key={`brand-link-${brand.name}-${index}`} className="mb-0">
                <BrandLink
                  brandLogoId={`brand-link-${brand.name}-${index}`}
                  brand={brand}
                  size="small"
                />
              </li>
            ))}
          </Ul>
        </Container>

        <Container as="div">
          <div className="max-w-container mx-auto space-y-1 text-center">
            <span className="block">Certified in:</span>

            <ButtonGroup className="mx-auto inline-flex">
              <Button
                variant="ghost-foreground"
                href="/certificates/Atomic-Design-Certificate-Dominik-Rubröder.pdf"
                size="small"
                className="gap-1.5"
              >
                <IconAtomicDesign />
                <span>Atomic Design</span>
              </Button>

              <Button
                variant="ghost-foreground"
                href="/certificates/subatomic-brad-ian-frost-dominik-rubröder-2025-11-25-certificate.pdf"
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
              <span>Next.js 16.3.5</span>
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
