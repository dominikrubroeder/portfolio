import { ExternalLink } from '@/components/atoms/external-link';
import { EVENTS_WINTER_SCENE_ENABLED } from '@/components/organisms/events/winter/constants';
import { cn } from '@/lib/utils';
import { BrandLink } from '@/components/organisms/brand';
import { Ul } from '@/components/atoms/ul';
import { socials } from '@/components/organisms/socials';
import Link from 'next/link';
import { ArrowRightIcon } from '@heroicons/react/16/solid';
import { ThemeDrawer } from '@/components/organisms/theme';
import { ButtonScrollToTop } from '@/components/atoms/button';

export function Footer() {
  return (
    <>
      <ul className="mb-0 px-4">
        <li>
          <Link
            href="/introduction"
            className="group inline-flex items-center justify-between gap-4"
          >
            <div className="text-6xl font-black text-foreground">
              Introduction
            </div>
            <ArrowRightIcon className="size-10 translate-y-1/2 text-primary opacity-0 transition group-hover:translate-y-0 group-hover:opacity-100" />
          </Link>
        </li>
        <li>
          <Link
            href="/projects"
            className="group inline-flex items-center justify-between gap-4"
          >
            <div className="text-6xl font-black text-foreground">Projects</div>
            <ArrowRightIcon className="size-10 translate-y-1/2 text-primary opacity-0 transition group-hover:translate-y-0 group-hover:opacity-100" />
          </Link>
        </li>
        <li>
          <Link
            href="/technologies"
            className="group inline-flex items-center justify-between gap-4"
          >
            <div className="text-6xl font-black text-foreground">
              Technologies
            </div>
            <ArrowRightIcon className="size-10 translate-y-1/2 text-primary opacity-0 transition group-hover:translate-y-0 group-hover:opacity-100" />
          </Link>
        </li>
        <li>
          <Link
            href="/tools"
            className="group inline-flex items-center justify-between gap-4"
          >
            <div className="text-6xl font-black text-foreground">Tools</div>
            <ArrowRightIcon className="size-10 translate-y-1/2 text-primary opacity-0 transition group-hover:translate-y-0 group-hover:opacity-100" />
          </Link>
        </li>
        <li>
          <Link
            href="/resources"
            className="group inline-flex items-center justify-between gap-4"
          >
            <div className="text-6xl font-black text-foreground">Resources</div>
            <ArrowRightIcon className="size-10 translate-y-1/2 text-primary opacity-0 transition group-hover:translate-y-0 group-hover:opacity-100" />
          </Link>
        </li>
      </ul>

      <footer className="relative z-10 mt-16 space-y-3 border-t bg-background p-4 text-center text-xs md:pb-4">
        <ButtonScrollToTop className="absolute top-5 right-4" />

        <Ul className={cn('my-0 mb-0 inline-flex')}>
          <li className="mb-0">
            <ThemeDrawer
              buttonProps={{ variant: 'text-muted', size: 'small' }}
            />
          </li>
        </Ul>

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

        <p>Design your vision</p>

        <p className="flex flex-wrap items-center justify-center gap-2">
          <ExternalLink
            href="https://nextjs.org"
            title="Open Next.js website"
            aria-label="Click to open external Next.js website"
            size="xs"
            color="muted"
          >
            Next.js 16.2.4
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
            Tailwind CSS 4.2.4
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
