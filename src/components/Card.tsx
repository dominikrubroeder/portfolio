import { ReactNode } from 'react';

export default function Card({
  children,
  className
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`rounded-2xl bg-apple-gray-6 p-8 ${
        className ? className : ''
      }`}
    >
      {children}
    </div>
  );
}
