import React from 'react';
import Footer from './Footer';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="grid min-h-screen grid-rows-[1fr_auto]">
      <main>
        <div className="fixed left-0 bottom-0 right-0 z-40 block h-16 w-full bg-gradient-to-t from-theme-base to-transparent"></div>
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
