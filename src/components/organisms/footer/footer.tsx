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
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger
} from '@/components/atoms/tooltip';
import { ArrowRightIcon, ArrowUpRightIcon } from '@heroicons/react/16/solid';

export function Footer() {
  return (
    <>
      <footer className="relative z-10 mt-8 space-y-3 border-t bg-background px-4 py-6 text-center text-xs">
        <ButtonScrollToTop className="absolute top-5 right-4" />

        <div className="space-y-1">
          <div className="flex items-center justify-center gap-1">
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
          </div>

          <div className="max-w-container mx-auto space-y-0.5 pt-2 pb-0.5">
            <span className="block">Certified in:</span>

            <ButtonGroup minimizeSpacing className="mx-auto inline-flex gap-6">
              <Tooltip>
                <TooltipTrigger asChild>
                  <div className="flex items-center gap-0">
                    <Button
                      variant="ghost-foreground"
                      href="/certificates/Atomic-Design-Certificate-Dominik-Rubröder.pdf"
                      hideExternalIndicator
                    >
                      <IconAtomicDesign />
                    </Button>
                    Atomic Design
                  </div>
                </TooltipTrigger>

                <TooltipContent>
                  <p>
                    <b>by Brad Frost</b>
                  </p>

                  <a
                    href="/certificates/Atomic-Design-Certificate-Dominik-Rubröder.pdf"
                    className="mt-2 flex items-center gap-1"
                    target="_blank"
                  >
                    See more <ArrowUpRightIcon className="size-3" />
                  </a>
                </TooltipContent>
              </Tooltip>

              <Tooltip>
                <TooltipTrigger asChild>
                  <div className="flex items-center gap-0">
                    <Button
                      variant="ghost-foreground"
                      href="/certificates/subatomic-brad-ian-frost-dominik-rubröder-2025-11-25-certificate.pdf"
                      hideExternalIndicator
                    >
                      <IconAtomicDesignTokens id="footer-icon-atomic-design-tokens" />
                    </Button>
                    Subatomic
                  </div>
                </TooltipTrigger>

                <TooltipContent>
                  <p>by Brad and Ian Frost</p>
                  <p className="flex gap-3">
                    <a
                      href="/certificates/subatomic-brad-ian-frost-dominik-rubröder-2025-11-25-certificate.pdf"
                      className="mt-2 flex items-center gap-1"
                      target="_blank"
                    >
                      See certificate <ArrowRightIcon className="size-3" />
                    </a>

                    <a
                      href="/certificates/subatomic-brad-ian-frost-dominik-rubröder-2025-11-25-certificate.pdf"
                      className="mt-2 flex items-center gap-1"
                      target="_blank"
                    >
                      See more <ArrowUpRightIcon className="size-3" />
                    </a>
                  </p>
                </TooltipContent>
              </Tooltip>
            </ButtonGroup>
          </div>

          <p className="mx-auto max-w-sm">
            Design your vision. Live your balance.
          </p>
        </div>

        <div>
          <p className="flex flex-wrap items-center justify-center gap-2">
            <ExternalLink
              href="https://nextjs.org"
              title="Open Next.js website"
              aria-label="Click to open external Next.js website"
              size="xs"
              color="muted"
            >
              <span>Next.js 16.3.0</span>
            </ExternalLink>

            <span>|</span>

            <ExternalLink
              href="https://react.dev"
              title="Open React website"
              aria-label="Click to open external React website"
              size="xs"
              color="muted"
            >
              <span>React 19.2.8</span>
            </ExternalLink>

            <span>|</span>

            <ExternalLink
              href="https://tailwindcss.com/docs"
              title="Open Tailwind CSS documentation"
              aria-label="Click to open external Tailwind CSS documentation"
              size="xs"
              color="muted"
            >
              <span>Tailwind CSS 4.3.3</span>
            </ExternalLink>
          </p>

          <p className="space-x-0.5">
            <span>Contact:</span>
            <a
              href="mailto:dominik.rubroeder@icloud.com?subject=I want to write you about..."
              title="Send mail to dominik.rubroeder@icloud.com"
              aria-label="Send mail to dominik.rubroeder@icloud.com"
            >
              dominik.rubroeder@icloud.com
            </a>
          </p>

          <p>
            &copy; 2026
            <span className="ml-1.5">Dominik Rubröder</span>
          </p>
        </div>

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
