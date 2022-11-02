import React from 'react';
import AppleLogo from './svg/AppleLogo';

interface InlineBrandProps {
  logo?: JSX.Element;
  title?: string;
  href?: string;
}

const InlineBrand: React.FC<InlineBrandProps> = ({
  logo = <AppleLogo />,
  title = 'Apple',
  href = ''
}) => {
  const outerClassName = 'inline-flex items-center gap-1 px-1 align-bottom';
  const innerClassName = 'w-max text-theme-contrary';

  if (href)
    return (
      <a
        href={href}
        className={outerClassName}
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
