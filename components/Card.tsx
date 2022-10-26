import React from 'react';

interface CardProps {
  children: React.ReactNode;
  className?: string;
}

const Card: React.FC<CardProps> = ({ children, className }) => {
  return (
    <div
      className={`rounded-2xl bg-apple-gray-6 p-8 ${
        className ? className : ''
      }`}
    >
      {children}
    </div>
  );
};

export default Card;
