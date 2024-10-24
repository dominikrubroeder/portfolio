export default function Footer() {
  return (
    <footer className="mx-16 mt-16 border-t  p-4 pb-24 text-center text-xs md:pb-4">
      <p className="mb-1.5">
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
