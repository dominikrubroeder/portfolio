import React from 'react';
import AppleLogo from './svg/AppleLogo';

interface InlineBrandProps {
  logo?: JSX.Element;
  title?: string;
}

const InlineBrand: React.FC<InlineBrandProps> = ({
  logo = <AppleLogo />,
  title = 'Apple'
}) => {
  return (
    <span className="inline-flex items-center gap-1 px-1 align-bottom">
      {logo}
      <span className="w-max text-theme-contrary">{title}</span>
    </span>
  );
};

export default InlineBrand;
