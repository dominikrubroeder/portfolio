import { capitalize } from '@/lib/helpers';
import { Bars3Icon } from '@heroicons/react/24/outline';
import React from 'react';

export default function ControlBarMobileTrigger({
  activeTab,
  setState
}: {
  activeTab: string | null;
  setState: React.Dispatch<
    React.SetStateAction<{
      controlBar: 'collapsed' | 'expanded';
      activeTab: string | null;
      mobileMenu: 'visible' | 'invisible';
    }>
  >;
}) {
  return (
    <div
      className={`flex items-center gap-2 rounded-full bg-gray-5 transition ${
        activeTab ? 'pl-4' : 'pl-0'
      } md:hidden`}
    >
      {activeTab && <h3>{capitalize(activeTab ?? '')}</h3>}
      <button
        aria-label="Open mobile menu"
        className="z-50 flex h-14 w-14 cursor-pointer items-center justify-center gap-4 rounded-full bg-gray-5 transition hover:bg-gray-4"
        onClick={() =>
          setState((prevState) => {
            return {
              ...prevState,
              controlBar: prevState.controlBar,
              mobileMenu:
                prevState.mobileMenu === 'invisible' ? 'visible' : 'invisible'
            };
          })
        }
      >
        <div className="rounded-full bg-gray-4 p-2">
          <Bars3Icon className="h-5 w-5 text-theme-contrary transition" />
        </div>
      </button>
    </div>
  );
}
