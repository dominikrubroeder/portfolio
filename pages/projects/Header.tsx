import { useRouter } from 'next/router';
import React from 'react';
import Button from '../../components/ui/Button';
import { ArrowLeftIcon } from '@heroicons/react/24/solid';
import Select from '../../components/ui/Select';

const Header: React.FC = () => {
  const router = useRouter();

  return (
    <header className="sticky top-0 z-50 flex items-center justify-between border-b border-b-apple-gray-6 bg-theme-base/30 p-4 backdrop-blur-sm">
      <Button
        variant="text"
        icon={<ArrowLeftIcon className="h-5 w-5 text-accent" />}
        text="Back"
        onClick={() => router.back()}
      />
      <div className="flex max-w-3xl flex-1 items-center justify-between">
        {router.pathname !== '/projects' ? (
          <Select
            options={[
              {
                option: 'IU university projects.',
                value: 'IU university projects',
                href: '/projects/iu-university'
              },
              {
                option: 'frontendmentor.io projects.',
                value: 'frontendmentor.io projects',
                href: '/projects/frontendmentor.io'
              },
              {
                option: 'Work projects.',
                value: 'Work projects',
                href: '/projects/work'
              }
            ]}
          />
        ) : (
          <h1 className="font-semibold text-theme-contrary transition group-hover:text-theme-contrary">
            Projects.
          </h1>
        )}
        <span className="text-xs font-normal text-apple-gray-4">Projects</span>
      </div>
      <div></div>
    </header>
  );
};

export default Header;