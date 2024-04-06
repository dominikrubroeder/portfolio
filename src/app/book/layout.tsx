import { ReactNode } from 'react';
import SecondaryNavigation from '@/components/layout/navigation/secondary-navigation';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title:
    'Book: The Path to Senior Product Designer | Portfolio | Dominik Rubröder',
  description:
    'The Path to Senior Product Designer, by Artiom Dashinsky reviewed by Dominik Rubröder in his Portfolio | dominikrubroeder.dev'
};

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <div>
      <SecondaryNavigation sticky backButton />
      {children}
    </div>
  );
}
