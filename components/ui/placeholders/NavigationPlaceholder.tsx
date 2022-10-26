import React from 'react';

const NavigationPlaceholder: React.FC = () => {
  return (
    <nav>
      <ul className="flex items-center justify-start gap-2">
        <li className="h-2 w-8 rounded-full bg-apple-gray-4"></li>
        <li className="h-2 w-8 rounded-full bg-apple-gray-4"></li>
        <li className="h-2 w-8 rounded-full bg-apple-gray-4"></li>
      </ul>
    </nav>
  );
};

export default NavigationPlaceholder;
