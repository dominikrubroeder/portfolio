import Image from 'next/image';
import React from 'react';

const SwiftUILogoSymbol: React.FC = () => {
  return (
    <Image
      src="/images/swiftui-logo.png"
      alt="SwiftUI logo symbol"
      width={192}
      height={192}
      className="h-5 w-auto"
      priority
    />
  );
};

export default SwiftUILogoSymbol;
