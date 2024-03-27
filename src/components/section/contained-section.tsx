import { ReactNode } from 'react';
import { clsx } from 'clsx';

export default function ContainedSection({
  children,
  className
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <section
      className={clsx(
        'mx-auto w-full max-w-screen-lg px-4',
        className && className
      )}
    >
      {children}
    </section>
  );
}
