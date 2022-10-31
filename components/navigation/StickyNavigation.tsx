import React from 'react';

const StickyNavigation: React.FC = () => {
  return (
    <nav className="sticky top-4 w-full">
      <ul className="flex items-center justify-center gap-2">
        <li className="h-2 w-8 rounded-full bg-apple-gray-4"></li>
        <li className="h-2 w-8 rounded-full bg-apple-gray-4"></li>
        <li className="h-2 w-8 rounded-full bg-apple-gray-4"></li>
      </ul>
    </nav>
  );
};

export default StickyNavigation;
