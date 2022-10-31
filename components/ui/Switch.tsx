import React, { useContext, useState } from 'react';
import UiContext from '../../context/UiContext';

interface SwitchProps {
  data: { option: string; value: string }[];
  onClick?: () => void;
  as: 'theme-switch' | 'page-navigation';
  activeOption?: number;
  activateSection: (index: number) => void;
  className?: string;
}

const Switch: React.FC<SwitchProps> = ({
  data = [
    { option: 'Placeholder', value: 'Placeholder' },
    { option: 'Placeholder', value: 'Placeholder' }
  ],
  onClick,
  as,
  activeOption = 0,
  activateSection,
  className = ''
}) => {
  const uiCtx = useContext(UiContext);

  const [active, setActive] = useState({
    option: activeOption,
    value: 'Placeholder'
  });

  const onClickHandler = (index: number, value: string) => {
    setActive({ option: index, value: value });

    switch (as) {
      case 'theme-switch':
        uiCtx?.setTheme(value);
        break;
      case 'page-navigation':
        activateSection(index + 1);
        break;
      default:
        break;
    }

    if (onClick) onClick();
  };

  return (
    <div className={`${className ? className : ''}`}>
      <ul className="flex items-center rounded-full bg-apple-gray-6 p-2">
        {data.map(({ option, value }, index) => (
          <li
            key={index}
            className={`flex cursor-pointer items-center justify-center gap-2 rounded-full px-3 py-2 transition active:scale-95 ${
              index === activeOption - 1
                ? 'bg-apple-gray-4 text-theme-contrary'
                : 'bg-transparent'
            }`}
            onClick={() => onClickHandler(index, value)}
          >
            {option}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Switch;
