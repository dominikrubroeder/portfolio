import React from 'react';

interface BoxedLogoProps {
  title: string;
  logoSymbol: JSX.Element;
  href: string;
}

const BoxedLogo: React.FC<BoxedLogoProps> = ({ title, logoSymbol, href }) => {
  return (
    <a
      key={title}
      className="interactive flex h-12 w-12 items-center justify-center rounded-lg border bg-white p-1 dark:border-none dark:bg-apple-gray-4 md:h-8 md:w-8"
      href={href}
      target="_blank"
      rel="noreferrer"
    >
      {logoSymbol}
    </a>
  );
};

export default BoxedLogo;
