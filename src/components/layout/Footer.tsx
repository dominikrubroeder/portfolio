export default function Footer() {
  return (
    <footer className="p-4 pb-24 text-center text-xs">
      &copy; {new Date().getFullYear()}
      <span className="ml-1.5 text-theme-contrary">Dominik Rubröder</span>
    </footer>
  );
}
