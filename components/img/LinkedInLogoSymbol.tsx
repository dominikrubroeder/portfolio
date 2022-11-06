import Image from 'next/image';
import React from 'react';

const LinkedInLogoSymbol: React.FC = () => {
  return (
    <Image
      src="/images/LinkedInLogoSymbol.png"
      alt="LinkedIn logo symbol"
      width={635}
      height={540}
      className="h-5 w-auto"
      priority
    />
  );
};

export default LinkedInLogoSymbol;
