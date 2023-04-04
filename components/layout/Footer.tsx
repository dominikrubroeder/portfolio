import React from 'react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="grid gap-2 p-4 text-center text-xs">
      <div className="flex items-center justify-center gap-4">
        <div className="flex flex-wrap gap-1">
          <div>
            <span className="mr-1">&copy; {currentYear}</span>
            <span className="text-black dark:text-white">Dominik Rubröder</span>
          </div>
          |
          <a
            href="https://github.com/dominikrubroeder"
            target="_blank"
            rel="noreferrer"
            className="text-black dark:text-white"
            title="GitHub | Dominik Rubröder"
          >
            GitHub
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
