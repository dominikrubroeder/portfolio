'use client';

import React from 'react';
import type { ControlBar as IControlBar } from '@/interfaces';
import ControlBarList from '@/components/molecules/control-bar/control-bar-list';
import ControlBarMobileTrigger from '@/components/molecules/control-bar/control-bar-mobile-trigger';
import ControlBarActionLeft from '@/components/molecules/control-bar/control-bar-action-left';
import ControlBarActionRight from '@/components/molecules/control-bar/control-bar-action-right';
import { useControlBar } from '@/components/molecules/control-bar/control-bar-context';

export default function ControlBar({
  sections,
  collapse,
  leftControlAction,
  rightControlAction
}: IControlBar) {
  const { state, toggleMobileMenu, activeSection, setActiveSection } =
    useControlBar(collapse);

  return (
    <nav className="no-scrollbar fixed bottom-4 z-50 mx-auto flex w-full items-center justify-center gap-3 text-center md:sticky md:top-4 md:w-max">
      {leftControlAction && (
        <ControlBarActionLeft
          controlBar={state.controlBarVisibility}
          leftControlAction={leftControlAction}
        />
      )}

      <ControlBarList
        sections={sections}
        setActiveSection={setActiveSection}
        activeSection={activeSection}
        mobileMenu={state.mobileMenuVisibility}
      />

      <ControlBarMobileTrigger toggleMobileMenu={toggleMobileMenu} />

      {rightControlAction && (
        <ControlBarActionRight
          controlBar={state.controlBarVisibility}
          rightControlAction={rightControlAction}
        />
      )}
    </nav>
  );
}
