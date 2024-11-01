'use client';

import { useState } from 'react';

export default function Toggle({
  label,
  className,
  enabled,
  onClick
}: {
  label?: string;
  className?: string;
  enabled?: boolean;
  onClick?: () => void;
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
          isEnabled ? 'bg-accent' : 'bg-muted'
        }`}
      >
        <span
          className={`absolute size-6 rounded-full bg-white transition ${
            isEnabled ? 'translate-x-full' : 'translate-x-0'
          }`}
        ></span>
      </div>
    </div>
  );
}
