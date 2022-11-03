import React from 'react';

const Projects: React.FC = () => {
  return (
    <>
      <header className="sticky top-0 z-50 flex w-full gap-16 bg-theme-base/30 py-4 backdrop-blur-sm lg:hidden">
        <h2 className="text-3xl font-bold text-theme-contrary">Projects.</h2>

        <span className="relative top-0 -right-4 h-full w-full flex-1 rounded-full bg-gradient-to-t from-apple-purple to-apple-pink "></span>
      </header>

      <div className="mx-auto mt-64 grid w-full max-w-5xl gap-32">
        <div className="min-h-screen">Test</div>
      </div>
    </>
  );
};

export default Projects;
