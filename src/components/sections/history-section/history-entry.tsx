'use client';

import { ReactNode, useState } from 'react';
import { ChevronUpIcon } from '@heroicons/react/24/outline';
import { clsx } from 'clsx';

export default function HistoryEntry({
  entryDate,
  exitDate,
  companyTitle,
  jobTitle,
  isCurrent,
  children
}: {
  entryDate: string;
  exitDate?: string;
  companyTitle: string;
  jobTitle: string;
  isCurrent?: boolean;
  children: ReactNode;
}) {
  const [state, setState] = useState<'expanded' | 'closed'>('expanded');

  const toggle = () => {
    setState((prevState) => (prevState === 'expanded' ? 'closed' : 'expanded'));
  };

  return (
    <div className="relative flex gap-4">
      <button
        className={clsx(
          'absolute -left-11 top-16 flex flex-none shrink-0 items-center justify-center self-start rounded-full p-4 transition',
          isCurrent ? 'bg-accent text-violet-200' : 'bg-gray-5'
        )}
        onClick={toggle}
      >
        <ChevronUpIcon
          className={clsx(
            'h-5 w-5 shrink-0 transition',
            state === 'expanded' ? 'rotate-0' : 'rotate-90'
          )}
        />
      </button>

      <div className="p-12">
        <p>
          <span>{entryDate}</span> {exitDate && <span>– {exitDate}</span>}
          {isCurrent && (
            <span className="mx-1 rounded-full border border-gray-4 px-2 py-1.5 text-foreground">
              Current
            </span>
          )}
        </p>
        <h3 className="font-bold text-foreground">{companyTitle}</h3>
        <p>{jobTitle}</p>

        {state === 'expanded' && (
          <div className="mt-4 animate-fadeUp">{children}</div>
        )}
      </div>
    </div>
  );
}
