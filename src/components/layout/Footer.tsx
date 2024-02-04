export default function Footer() {
  return (
    <footer className="p-4 pb-24 text-center text-xs md:pb-4">
      <p>
        <a
          href="mailto:dominik.rubroeder@icloud.com"
          title="Send mail to dominik.rubroeder@icloud.com"
          aria-label="Send mail to dominik.rubroeder@icloud.com"
        >
          dominik.rubroeder@icloud.com
        </a>
      </p>
      <p>
        &copy; {new Date().getFullYear()}
        <span className="ml-1.5 text-theme-contrary">Dominik Rubröder</span>
      </p>
    </footer>
  );
}
