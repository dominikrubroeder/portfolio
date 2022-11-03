import React from 'react';

interface InlineBrandProps {
  logo?: JSX.Element;
  title?: string;
  href?: string;
  interactive?: boolean;
}

const InlineBrand: React.FC<InlineBrandProps> = ({
  logo,
  title,
  href,
  interactive = false
}) => {
  const outerClassName = 'inline-flex items-center gap-1 px-1 align-bottom';
  const innerClassName = 'w-max text-theme-contrary';

  if (href)
    return (
      <a
        href={href}
        className={`${outerClassName} ${interactive ? 'interactive' : ''}`}
        target="_blank"
        rel="noreferrer"
      >
        {logo}
        <span className={innerClassName}>{title}</span>
      </a>
    );

  return (
    <span className={outerClassName}>
      {logo}
      <span className={innerClassName}>{title}</span>
    </span>
  );
};

export default InlineBrand;
