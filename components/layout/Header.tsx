import React from 'react';
import NavigationPlaceholder from '../ui/placeholders/NavigationPlaceholder';

const Header: React.FC = () => {
  return (
    <header className="flex items-center justify-between bg-apple-gray-6 p-4">
      <div className="h-10 w-32 rounded-full bg-apple-gray-4"></div>

      <NavigationPlaceholder />
    </header>
  );
};

export default Header;
