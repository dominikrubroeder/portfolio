import React from 'react';
import Logo from '../Logo';

const Header: React.FC = () => {
  return (
    <header className="flex items-center justify-between bg-apple-gray-6 p-4">
      <Logo />
    </header>
  );
};

export default Header;
