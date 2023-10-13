import { useRouter } from 'next/router';
import React from 'react';
import Button from '../ui/Button';
import { ArrowLeftIcon } from '@heroicons/react/24/solid';
import Logo from '../Logo';

const Header: React.FC = () => {
  const router = useRouter();

  return (
    <header className="sticky top-0 z-50 flex items-center justify-between border-b border-b-apple-gray-6 bg-theme-base/30 p-4 backdrop-blur-sm">
      <div className="flex gap-2">
        <Button
          variant="text"
          icon={<ArrowLeftIcon className="h-5 w-5 text-accent" />}
          text="Back"
          onClick={() => router.back()}
        />

        <span className="text-apple-gray-6">|</span>

        <Button variant="text" text="Home" onClick={() => router.push('/')} />
      </div>

      <div className="flex w-full max-w-3xl flex-1 items-center justify-between">
        <div className="flex items-center gap-2 font-semibold text-theme-contrary transition group-hover:text-theme-contrary">
          <Logo /> Dominik Rubröder
        </div>
      </div>
      <div></div>
    </header>
  );
};

export default Header;
