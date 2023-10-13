import React from 'react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="grid gap-2 p-4 text-center text-xs">
      <div>
        <span className="mr-2">&copy; {currentYear}</span>

        <a
          href="https://github.com/dominikrubroeder"
          target="_blank"
          rel="noreferrer"
          className=" text-black dark:text-white"
        >
          Dominik Rubröder
        </a>
      </div>
    </footer>
  );
};

export default Footer;
