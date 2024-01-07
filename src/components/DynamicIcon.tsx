import React, { FC } from 'react';

interface DynamicIconProps {
  /** Provide as PascalCase; Example: `UserIcon` */
  name: string;
  className?: string;
  // Add any other props you want to pass to the underlying icon component
}

const DynamicIcon: FC<DynamicIconProps> = ({ name, className, ...props }) => {
  // Dynamically import the icon based on the name
  const HeroIcon = require(`@heroicons/react/24/outline`)[`${name}`];

  return <HeroIcon className={className} {...props} />;
};

export default DynamicIcon;
