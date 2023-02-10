import Link from 'next/link';
import React from 'react';
import Avatar from './ui/Avatar';

const Logo: React.FC = () => {
  return (
    <Link href="/">
      <Avatar size={32} />
    </Link>
  );
};

export default Logo;
