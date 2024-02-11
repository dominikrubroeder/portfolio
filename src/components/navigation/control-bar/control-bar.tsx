'use client';

import React, { useEffect, useState } from 'react';
import type { ControlBar as IControlBar } from '@/interfaces';
import ControlBarList from '@/components/navigation/control-bar/control-bar-list';
import ControlBarMobileTrigger from '@/components/navigation/control-bar/control-bar-mobile-trigger';
import ControlBarActionLeft from '@/components/navigation/control-bar/control-bar-action-left';
import ControlBarActionRight from '@/components/navigation/control-bar/control-bar-action-right';

export default function ControlBar({
  sections,
  collapse,
  leftControlAction = 'Avatar',
  rightControlAction = 'Up'
}: IControlBar) {
  const [state, setState] = useState<{
    controlBar: 'collapsed' | 'expanded';
    activeTab: string | null;
    mobileMenu: 'visible' | 'invisible';
  }>({ controlBar: 'collapsed', activeTab: null, mobileMenu: 'invisible' });

  useEffect(
    () =>
      setState((prevState) => {
        return {
          activeTab: collapse ? null : prevState.activeTab,
          controlBar: collapse ? 'collapsed' : 'expanded',
          mobileMenu: 'invisible'
        };
      }),
    [collapse]
  );

  return (
    <nav className="fixed bottom-4 z-50 mx-auto flex w-full items-center justify-center gap-3 text-center md:sticky md:top-4 md:w-max">
      <ControlBarActionLeft
        controlBar={state.controlBar}
        leftControlAction={leftControlAction}
      />

      <ControlBarList
        sections={sections}
        activeTab={state.activeTab}
        mobileMenu={state.mobileMenu}
        setState={setState}
      />

      <ControlBarMobileTrigger
        activeTab={state.activeTab}
        setState={setState}
      />

      <ControlBarActionRight
        controlBar={state.controlBar}
        rightControlAction={rightControlAction}
      />
    </nav>
  );
}
