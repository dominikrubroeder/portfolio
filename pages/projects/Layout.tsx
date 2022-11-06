import React from 'react';
import Header from './Header';

interface LayoutProps {
  children: React.ReactNode;
}

const ProjectNavigationLayout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <Header />
      {children}
    </>
  );
};

export default ProjectNavigationLayout;
