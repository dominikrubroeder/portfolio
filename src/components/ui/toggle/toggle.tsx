'use client';

import { useState } from 'react';

export default function Toggle({
  onClick,
  label,
  className,
  enabled
}: {
  onClick: () => void;
  label?: string;
  className?: string;
  enabled?: boolean;
}) {
  const [isEnabled, setIsEnabled] = useState(enabled);
  const classes = className
    ? `flex items-center gap-2 cursor-pointer select-none ${className}`
    : 'flex items-center gap-2 cursor-pointer select-none';

  const handleOnClick = () => {
    setIsEnabled((prevState) => !prevState);
    onClick ? onClick() : null;
  };

  return (
    <div className={classes} onClick={handleOnClick}>
      {label && <span>{label}</span>}

      <div
        className={`relative flex h-8 w-14 items-center rounded-full px-1 transition ${
          isEnabled ? 'bg-accent-600' : 'bg-gray-5'
        }`}
      >
        <span
          className={`absolute h-6 w-6 rounded-full bg-white transition ${
            isEnabled ? 'translate-x-full' : 'translate-x-0'
          }`}
        ></span>
      </div>
    </div>
  );
}
