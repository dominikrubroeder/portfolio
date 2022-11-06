import Link from 'next/link';
import React from 'react';
import Avatar from './ui/Avatar';

const Logo: React.FC = () => {
  return (
    <Link href="/">
      <Avatar />
    </Link>
  );
};

export default Logo;
