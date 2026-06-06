import { ExternalLink } from '@/components/atoms/external-link';
import { EVENTS_WINTER_SCENE_ENABLED } from '@/components/organisms/events/winter/constants';
import { cn } from '@/lib/utils';
import { BrandLink } from '@/components/organisms/brand';
import { Ul } from '@/components/organisms/typography';
import { socials } from '@/components/organisms/socials';
import { ButtonScrollToTop } from '@/components/atoms/button';
import { ThemeSidebarTrigger } from '@/components/organisms/theme';

export function Footer() {
  return (
    <>
      <footer className="relative z-10 mt-8 space-y-3 border-t bg-background p-4 text-center text-xs md:pb-4">
        <ButtonScrollToTop className="absolute top-5 right-4" />

        <ThemeSidebarTrigger />

        <Ul className={cn('my-0 mb-0 inline-flex')}>
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

        <p>Design your vision. Live your balance.</p>

        <p className="flex flex-wrap items-center justify-center gap-2">
          <ExternalLink
            href="https://nextjs.org"
            title="Open Next.js website"
            aria-label="Click to open external Next.js website"
            size="xs"
            color="muted"
          >
            Next.js 16.2.7
          </ExternalLink>

          <span>|</span>

          <ExternalLink
            href="https://react.dev"
            title="Open React website"
            aria-label="Click to open external React website"
            size="xs"
            color="muted"
          >
            React 19.2.5
          </ExternalLink>

          <span>|</span>

          <ExternalLink
            href="https://tailwindcss.com/docs"
            title="Open Tailwind CSS documentation"
            aria-label="Click to open external Tailwind CSS documentation"
            size="xs"
            color="muted"
          >
            Tailwind CSS 4.3
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
