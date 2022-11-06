import { useRouter } from 'next/router';
import React from 'react';
import Button from '../../components/ui/Button';
import { ArrowLeftIcon } from '@heroicons/react/24/solid';
import Select from '../../components/ui/Select';

const Header: React.FC = () => {
  const router = useRouter();
  return (
    <header className="sticky top-0 flex items-center justify-between border-b border-b-apple-gray-6 p-4">
      <Button
        variant="text"
        icon={<ArrowLeftIcon className="h-5 w-5 text-accent" />}
        text="Back"
        onClick={() => router.back()}
      />
      <div className="flex max-w-3xl flex-1 items-center justify-between">
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
              href: '/projects/frontendmentorio'
            },
            {
              option: 'Work projects.',
              value: 'Work projects',
              href: '/projects/work'
            }
          ]}
        />
        <span className="text-xs font-normal text-apple-gray-4">Projects</span>
      </div>
      <div></div>
    </header>
  );
};

export default Header;
