import Image from 'next/image';
import React from 'react';

interface AvatarProps {
  url?: string;
  size?: number;
}

const Avatar: React.FC<AvatarProps> = ({
  url = '/images/avatar-square.jpg',
  size = 100
}) => {
  return (
    <Image
      src={url}
      alt="Personal profile image Dominik Rubröder"
      width={size}
      height={size}
      priority
      className="rounded-full"
    />
  );
};

export default Avatar;
