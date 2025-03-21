'use client';

import {
  ControlBarActionLeft,
  ControlBarActionRight,
  ControlBarList,
  ControlBarMobileTrigger,
  useControlBar
} from '@/components/molecules/control-bar';

import { ControlBar as ControlBarType } from '@/components/molecules/control-bar/types/types';

export function ControlBar({
  sections,
  collapse,
  leftControlAction,
  rightControlAction
}: ControlBarType) {
  const { state, toggleMobileMenu, activeSection, setActiveSection } =
    useControlBar(collapse);

  return (
    <nav className="no-scrollbar z-50 mx-auto flex w-full items-center justify-center gap-3 text-center md:sticky md:top-4 md:-mt-6 md:w-max">
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
