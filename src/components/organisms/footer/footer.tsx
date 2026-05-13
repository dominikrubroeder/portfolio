import { ExternalLink } from '@/components/atoms/external-link';
import { EVENTS_WINTER_SCENE_ENABLED } from '@/components/organisms/events/winter/constants';
import { cn } from '@/lib/utils';
import { BrandLink } from '@/components/organisms/brand';
import { Ul } from '@/components/atoms/ul';
import { socials } from '@/components/organisms/socials';
import Link from 'next/link';
import { ArrowRightIcon } from '@heroicons/react/16/solid';
import { ButtonScrollToTop } from '@/components/atoms/button';

export function Footer() {
  return (
    <>
      <ul className="mx-auto mb-0 max-w-(--container) space-y-6 px-4">
        <li className="border-b pb-6">
          <Link
            href="/introduction"
            className="group flex items-center justify-between gap-2 sm:inline-flex sm:gap-4"
          >
            <div className="text-4xl font-black text-foreground xs:text-5xl sm:text-6xl">
              Introduction
            </div>
            <ArrowRightIcon className="size-8 text-primary sm:size-10" />
          </Link>
        </li>
        <li className="border-b pb-6">
          <Link
            href="/projects"
            className="group flex items-center justify-between gap-2 sm:inline-flex sm:gap-4"
          >
            <div className="text-4xl font-black text-foreground xs:text-5xl sm:text-6xl">
              Projects
            </div>
            <ArrowRightIcon className="size-8 text-primary sm:size-10 sm:translate-y-1/2 sm:opacity-0 sm:transition sm:group-hover:translate-y-0 sm:group-hover:opacity-100" />
          </Link>
        </li>
        <li className="border-b pb-6">
          <Link
            href="/tools"
            className="group flex items-center justify-between gap-2 sm:inline-flex sm:gap-4"
          >
            <div className="text-4xl font-black text-foreground xs:text-5xl sm:text-6xl">
              Tools
            </div>
            <ArrowRightIcon className="size-8 text-primary sm:size-10 sm:translate-y-1/2 sm:opacity-0 sm:transition sm:group-hover:translate-y-0 sm:group-hover:opacity-100" />
          </Link>
        </li>
        <li className="border-b pb-6">
          <Link
            href="/technologies"
            className="group flex items-center justify-between gap-2 sm:inline-flex sm:gap-4"
          >
            <div className="text-4xl font-black text-foreground xs:text-5xl sm:text-6xl">
              Technologies
            </div>
            <ArrowRightIcon className="size-8 text-primary sm:size-10 sm:translate-y-1/2 sm:opacity-0 sm:transition sm:group-hover:translate-y-0 sm:group-hover:opacity-100" />
          </Link>
        </li>
        <li>
          <Link
            href="/resources"
            className="group flex items-center justify-between gap-2 sm:inline-flex sm:gap-4"
          >
            <div className="text-4xl font-black text-foreground xs:text-5xl sm:text-6xl">
              Resources
            </div>
            <ArrowRightIcon className="size-8 text-primary sm:size-10 sm:translate-y-1/2 sm:opacity-0 sm:transition sm:group-hover:translate-y-0 sm:group-hover:opacity-100" />
          </Link>
        </li>
      </ul>

      <footer className="relative z-10 mt-8 space-y-3 border-t bg-background p-4 text-center text-xs md:pb-4">
        <ButtonScrollToTop className="absolute top-5 right-4" />

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
            Next.js 16.2.6
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

        <p>
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
