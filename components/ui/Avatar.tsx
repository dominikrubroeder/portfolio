import Image from 'next/image';
import React from 'react';

interface AvatarProps {
  url?: string;
  width?: number;
  height?: number;
}

const Avatar: React.FC<AvatarProps> = ({
  url = '/images/avatar-square.jpg',
  width = 100,
  height = 100,
}) => {
  return (
    <Image
      src={url}
      alt="Personal profile image Dominik Rubröder"
      width={width}
      height={height}
      priority
      className="rounded-full"
    />
  );
};

export default Avatar;
