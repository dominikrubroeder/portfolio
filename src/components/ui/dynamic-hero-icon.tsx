import React from 'react';

/**
 * Provide `name` as PascalCase – Example: `UserIcon`
 * @type {string}
 * */
export default function DynamicHeroIcon({
  name,
  className,
  ...props
}: {
  name: string;
  className?: string;
}) {
  if (name.trim() === '') return null;

  // Dynamically import the icon based on the name
  const HeroIcon = require(`@heroicons/react/24/outline`)[`${name}`];

  return <HeroIcon className={className} {...props} />;
}
