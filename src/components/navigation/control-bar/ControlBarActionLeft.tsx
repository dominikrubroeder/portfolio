import React from 'react';
import type { ControlBarAction as ControlBarActionType } from '@/types';
import ControlBarAction from '@/components/navigation/control-bar/ControlBarAction';

export default function ControlBarActionLeft({
  controlBar,
  leftControlAction
}: {
  controlBar: 'collapsed' | 'expanded';
  leftControlAction: ControlBarActionType;
}) {
  return (
    <div
      className={`absolute left-1/2 top-0 transition md:left-0 ${
        controlBar === 'collapsed'
          ? '-translate-x-1/2 scale-95 md:translate-x-0'
          : '-translate-x-24 scale-100 md:-translate-x-16'
      }`}
    >
      <ControlBarAction type={leftControlAction} />
    </div>
  );
}
