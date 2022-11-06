import Image from 'next/image';
import React from 'react';

const LinkedInLogo: React.FC = () => {
  return (
    <Image
      src="/images/LinkedInLogo.png"
      alt="LinkedIn Logo"
      width={635}
      height={540}
      className="h-5 w-auto"
      priority
    />
  );
};

export default LinkedInLogo;
