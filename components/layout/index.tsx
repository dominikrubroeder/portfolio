import React from 'react';
import Footer from './Footer';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="grid min-h-screen grid-rows-[1fr_auto]">
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
