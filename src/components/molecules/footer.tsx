export default function Footer() {
  return (
    <footer className="mt-16 space-y-3 border-t p-4 pb-24 text-center text-xs md:pb-4">
      <p>Build your vision. Do it with style.</p>
      <p>Live your balance.</p>
      <p className="space-x-2">
        <a href="https://nextjs.org" target="_blank" rel="nofollow">
          Next.js 15.2.2
        </a>
        <span>|</span>
        <a
          href="https://react.dev/versions"
          target="_blank"
          title="Open React version docs"
          aria-label="Open React version docs"
          rel="nofollow"
        >
          React 19.0
        </a>
        <span>|</span>
        <a href="https://tailwindcss.com/docs/installation/using-vite">
          Tailwind CSS 4.0.9
        </a>
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
        &copy; {new Date().getFullYear()}
        <span className="ml-1.5 text-foreground">Dominik Rubröder</span>
      </p>
    </footer>
  );
}
