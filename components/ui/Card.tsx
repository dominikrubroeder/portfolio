import React from 'react';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  alignment?: 'start' | 'center';
}

const Card: React.FC<CardProps> = ({
  children,
  className,
  alignment = 'center'
}) => {
  return (
    <div
      className={`${
        alignment === 'center' ? 'flex items-center justify-center' : ''
      } animate-fadeUp rounded-2xl bg-apple-gray-6 p-8 ${
        className ? className : ''
      }`}
    >
      {children}
    </div>
  );
};

export default Card;
