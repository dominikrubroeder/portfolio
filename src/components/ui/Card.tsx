import React from 'react';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  alignment?: 'start' | 'center';
  animated?: boolean;
}

const Card: React.FC<CardProps> = ({
  children,
  className,
  alignment = 'center',
  animated = true
}) => {
  return (
    <div
      className={`${
        alignment === 'center' ? 'flex items-center justify-center' : ''
      } ${animated ? 'animate-fadeUp' : ''} rounded-2xl bg-apple-gray-6 p-8 ${
        className ? className : ''
      }`}
    >
      {children}
    </div>
  );
};

export default Card;
