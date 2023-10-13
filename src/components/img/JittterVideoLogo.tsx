import Image from 'next/image';
import React from 'react';

const JitterVideoLogo: React.FC = () => {
  return (
    <Image
      src="/images/jitter-video.png"
      alt="Jitter video logo"
      width={32}
      height={32}
      className="h-5 w-auto"
      priority
    />
  );
};

export default JitterVideoLogo;
