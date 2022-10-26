import React from 'react';

interface CardProps {
  children: React.ReactNode;
}

const Card: React.FC<CardProps> = ({ children }) => {
  return <div className="rounded-full bg-apple-gray-6 p-4">{children}</div>;
};

export default Card;
