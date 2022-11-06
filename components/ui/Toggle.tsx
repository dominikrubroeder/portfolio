import React, { useState } from 'react';

interface ToggleProps {
  label?: string;
  enabled?: boolean;
  onClick?: (() => void) | undefined;
  enabledIcon?: JSX.Element;
  disabledIcon?: JSX.Element;
}

const Toggle: React.FC<ToggleProps> = ({
  label,
  enabled = false,
  onClick,
  enabledIcon,
  disabledIcon
}) => {
  const [isEnabled, setIsEnabled] = useState(enabled);

  const onClickHandler = () => {
    setIsEnabled((previousState) => !previousState);

    if (onClick) onClick();
  };

  return (
    <div
      className="flex cursor-pointer items-center gap-1 text-xs text-accent"
      onClick={onClickHandler}
    >
      {label && <span className="themed:text-white">{label}</span>}

      <div
        className={`flex w-10 rounded-full p-1 transition-all ${
          isEnabled ? 'bg-accent' : 'themed:bg-accent bg-apple-gray-6'
        }`}
      >
        <span
          className={`flex h-4 w-4 items-center justify-center rounded-full bg-white transition-all ${
            isEnabled ? 'translate-x-full' : ''
          }`}
        >
          {isEnabled ? enabledIcon : disabledIcon}
        </span>
      </div>
    </div>
  );
};

export default Toggle;
