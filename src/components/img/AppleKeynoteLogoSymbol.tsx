import Image from 'next/image';
import React from 'react';

const AppleKeynoteLogoSymbol: React.FC = () => {
  return (
    <Image
      width={64}
      height={64}
      src="/images/AppleKeynoteLogoSymbol.png"
      alt="Apple Keynote app icon"
      className="h-5 w-auto"
    />
  );
};

export default AppleKeynoteLogoSymbol;
