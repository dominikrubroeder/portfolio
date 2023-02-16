import React, { useContext, useState } from 'react';
import UiContext from '../../context/UiContext';

interface SwitchProps {
  data: { option: string | JSX.Element; value: string }[];
  as: 'default' | 'theme-switch';
  activeOption?: number;
  className?: string;
}

const Switch: React.FC<SwitchProps> = ({
  data = [
    { option: 'Placeholder', value: 'Placeholder' },
    { option: 'Placeholder', value: 'Placeholder' }
  ],
  as = 'default',
  activeOption = 0,
  className = ''
}) => {
  const uiCtx = useContext(UiContext);

  const [active, setActive] = useState({
    option: activeOption,
    value: 'Placeholder'
  });

  const onClickHandler = (index: number, value: string) => {
    setActive({ option: index, value: value });

    if (as === 'theme-switch') uiCtx?.setTheme(value);
  };

  return (
    <div className={`relative ${className ? className : ''}`}>
      <span className="absolute top-0 -left-2.5 h-full w-12 rounded-l-full bg-apple-gray-6"></span>

      <ul
        className="relative grid items-center overflow-hidden rounded-full bg-apple-gray-6"
        style={{ gridTemplateColumns: `repeat(${data.length}, 1fr)` }}
      >
        {data.map(({ option, value }, index) => (
          <li
            key={index}
            className={`switch__option text-sm ${
              index === active.option ? 'text-theme-contrary' : ''
            }`}
            onClick={() => onClickHandler(index, value)}
          >
            {option}
          </li>
        ))}

        <span
          className="switch__indicator"
          style={{
            width: `${100 / data.length}%`,
            transform: `translate(${
              active.option === 0 ? '0' : active.option * 100
            }%, -50%)`
          }}
        ></span>
      </ul>

      <span className="absolute top-0 -right-2.5 h-full w-12 rounded-r-full bg-apple-gray-6"></span>
    </div>
  );
};

export default Switch;
