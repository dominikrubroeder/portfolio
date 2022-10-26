import React from 'react';
import { ArrowDownTrayIcon } from '@heroicons/react/24/solid';

const socialLinks = [
  {
    title: 'GitHub',
    href: 'https://github.com/dominikrubroeder',
    isExternal: true,
  },
];

const downloadLinks = [
  {
    title: 'CV',
    href: '/',
  },
];

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="grid gap-2 p-4 text-center text-xs">
      <div className="flex justify-between gap-4">
        <div className="flex flex-1 items-start gap-2">
          <span>Downloads:</span>
          <ul>
            {downloadLinks.map(({ title, href }, i) => (
              <li key={i}>
                <a
                  href={href}
                  className="interactive hover:text-black dark:hover:text-white"
                  download
                >
                  <span className="flex items-start gap-1">
                    {title}
                    <ArrowDownTrayIcon className="h-4 w-4" />
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </div>

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

        <div className="flex-1 text-right">
          {socialLinks.map(({ title, href, isExternal }, i) => (
            <a
              key={i}
              href={href}
              className="interactive hover:text-black dark:hover:text-white"
              target={isExternal ? '_blank' : '_self'}
              rel="noreferrer"
            >
              {title}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
