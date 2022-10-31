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

  const [, setActive] = useState({
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
    <div className={`relative ${className ? className : ''}`}>
      <span className="absolute top-0 -left-4 h-full w-12 rounded-l-full bg-apple-gray-6"></span>

      <ul
        className="relative grid items-center overflow-hidden rounded-full bg-apple-gray-6"
        style={{ gridTemplateColumns: `repeat(${data.length}, 1fr)` }}
      >
        {data.map(({ option, value }, index) => (
          <li
            key={index}
            className="z-20 flex cursor-pointer items-center justify-center gap-2 rounded-full bg-transparent py-4 px-6 transition active:scale-95"
            onClick={() => onClickHandler(index, value)}
          >
            {option}
          </li>
        ))}

        <span
          className={`absolute top-1/2 z-10 h-10 rounded-full bg-apple-gray-4 p-4 py-2 transition`}
          style={{
            width: `${100 / data.length}%`,
            transform: `translate(${
              activeOption === 0
                ? '-100'
                : activeOption === 1
                ? '0'
                : (activeOption - 1) * 100
            }%, -50%)`
          }}
        ></span>
      </ul>

      <span className="absolute top-0 -right-4 h-full w-12 rounded-r-full bg-apple-gray-6"></span>
    </div>
  );
};

export default Switch;
