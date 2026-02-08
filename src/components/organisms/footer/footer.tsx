import { ExternalLink } from '@/components/atoms/external-link';
import { EVENTS_WINTER_SCENE_ENABLED } from '@/components/organisms/events/winter/constants';
import { formatDate } from '@/lib/utils';

export function Footer() {
  return (
    <footer className="mt-16 space-y-3 border-t p-4 text-center text-xs md:pb-4">
      <p>Build your vision. Do it with style.</p>
      <p>Live your balance.</p>
      <p className="flex flex-wrap items-center justify-center gap-2">
        <ExternalLink
          href="https://nextjs.org"
          title="Open Next.js website"
          aria-label="Open Next.js website"
          size="xs"
        >
          Next.js 16.1.6
        </ExternalLink>

        <span>|</span>

        <ExternalLink
          href="https://react.dev"
          title="Open React website"
          aria-label="Open React website"
          size="xs"
        >
          React 19.2.4
        </ExternalLink>

        <span>|</span>

        <ExternalLink
          href="https://tailwindcss.com/docs"
          title="Open Tailwind CSS documentation"
          aria-label="Open Tailwind CSS documentation"
          size="xs"
        >
          Tailwind CSS 4.1.18
        </ExternalLink>
      </p>

      <p className="space-x-1">
        <span>Last updated:</span>
        <span>
          {formatDate({ dateString: '2026-02-08', format: 'Month Day, Year' })}
        </span>
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
  );
}
