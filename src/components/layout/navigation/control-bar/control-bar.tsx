'use client';

import React from 'react';
import type { ControlBar as IControlBar } from '@/interfaces';
import ControlBarList from '@/components/layout/navigation/control-bar/control-bar-list';
import ControlBarMobileTrigger from '@/components/layout/navigation/control-bar/control-bar-mobile-trigger';
import ControlBarActionLeft from '@/components/layout/navigation/control-bar/control-bar-action-left';
import ControlBarActionRight from '@/components/layout/navigation/control-bar/control-bar-action-right';
import { useControlBar } from '@/hooks/useControlBar';

export default function ControlBar({
  sections,
  collapse,
  leftControlAction,
  rightControlAction = 'Up'
}: IControlBar) {
  const { state, scrollIntoView, toggleMobileMenu, activeSection } =
    useControlBar(collapse);

  return (
    <nav className="fixed bottom-4 z-50 mx-auto flex w-full items-center justify-center gap-3 text-center md:sticky md:top-4 md:w-max">
      {leftControlAction && (
        <ControlBarActionLeft
          controlBar={state.controlBarVisibility}
          leftControlAction={leftControlAction}
        />
      )}

      <ControlBarList
        sections={sections}
        activeSection={activeSection}
        mobileMenu={state.mobileMenuVisibility}
        scrollIntoView={scrollIntoView}
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
