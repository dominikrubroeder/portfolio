import { Bars3Icon } from '@heroicons/react/24/outline';
import React from 'react';

export default function ControlBarMobileTrigger({
  toggleMobileMenu
}: {
  toggleMobileMenu: () => void;
}) {
  return (
    <div className="flex items-center gap-2 rounded-full bg-gray-5 pl-0 transition md:hidden">
      <button
        aria-label="Open mobile menu"
        className="z-50 flex h-14 w-14 cursor-pointer items-center justify-center gap-4 rounded-full bg-gray-5 transition hover:bg-gray-4"
        onClick={() => toggleMobileMenu()}
      >
        <div className="rounded-full bg-gray-4 p-2">
          <Bars3Icon className="h-5 w-5 text-theme-contrary transition" />
        </div>
      </button>
    </div>
  );
}
