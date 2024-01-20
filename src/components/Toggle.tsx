'use client';
import { useState } from 'react';

export default function Toggle({
  enabled,
  onClick,
  label,
  className
}: {
  enabled: boolean;
  onClick: () => void;
  label?: string;
  className?: string;
}) {
  const [isEnabled, setIsEnabled] = useState(false);
  const classes = className
    ? `flex items-center gap-2 ${className}`
    : 'flex items-center gap-2';

  const handleOnClick = () => {
    setIsEnabled((prevState) => !prevState);
    onClick ? onClick() : null;
  };

  return (
    <div className={classes}>
      {label && <span>{label}</span>}
      <div
        className={`relative flex h-6 w-10 cursor-pointer items-center rounded-full px-1 transition ${
          isEnabled ? 'bg-green' : 'bg-gray-5'
        }`}
        onClick={handleOnClick}
      >
        <span
          className={`absolute h-4 w-4 rounded-full bg-white transition ${
            isEnabled ? 'translate-x-full' : 'translate-x-0'
          }`}
        ></span>
      </div>
    </div>
  );
}
