import React, { useContext, useState } from 'react';
import UiContext from '../../context/UiContext';

interface SwitchProps {
  data: string[];
  onClick?: () => void;
  isThemeSwitch?: boolean;
}

const Switch: React.FC<SwitchProps> = ({
  data = ['Placeholder', 'Placeholder'],
  onClick,
  isThemeSwitch = false
}) => {
  const uiCtx = useContext(UiContext);

  const [activeOption, setActiveOption] = useState({
    option: 0,
    value: 'Placeholder'
  });

  const onClickHandler = (index: number, value: string) => {
    setActiveOption({ option: index, value: value });

    if (isThemeSwitch) uiCtx?.setTheme(value);

    if (onClick) onClick();
  };

  return (
    <div>
      <ul className="flex items-center rounded-full bg-apple-gray-6 p-2">
        {data.map((switchOption, index) => (
          <li
            key={index}
            className={`flex cursor-pointer items-center justify-center gap-2 rounded-full px-3 py-2 ${
              index === activeOption.option
                ? 'bg-apple-gray-4 text-theme-contrary'
                : 'bg-transparent'
            }`}
            onClick={() => onClickHandler(index, switchOption)}
          >
            {switchOption}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Switch;
