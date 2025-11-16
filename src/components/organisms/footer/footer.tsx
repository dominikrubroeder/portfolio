import { ExternalLink } from '@/components/atoms/external-link';

export function Footer() {
  return (
    <footer className="mt-16 space-y-3 border-t p-4 text-center text-xs md:pb-4">
      <p>Build your vision. Do it with style.</p>
      <p>Live your balance.</p>
      <p className="space-x-2">
        <ExternalLink
          href="https://nextjs.org"
          variant="unstyled"
          title="Open Next.js website"
          aria-label="Open Next.js website"
        >
          Next.js 16.0.3
        </ExternalLink>

        <span>|</span>

        <ExternalLink
          href="https://react.dev"
          variant="unstyled"
          title="Open React website"
          aria-label="Open React website"
        >
          React 19.2.0
        </ExternalLink>

        <span>|</span>

        <ExternalLink
          href="https://tailwindcss.com/docs"
          variant="unstyled"
          title="Open Tailwind CSS documentation"
          aria-label="Open Tailwind CSS documentation"
        >
          Tailwind CSS 4.1.17
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
        &copy; 2025
        <span className="ml-1.5">Dominik Rubröder</span>
      </p>
    </footer>
  );
}
