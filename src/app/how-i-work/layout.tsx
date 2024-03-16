import { ReactNode } from 'react';
import SecondaryNavigation from '@/components/navigation/secondary-navigation';

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <div>
      <SecondaryNavigation />
      {children}
    </div>
  );
}
