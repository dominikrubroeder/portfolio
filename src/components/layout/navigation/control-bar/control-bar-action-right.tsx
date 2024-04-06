import React from 'react';
import type {
  ControlBarAction as ControlBarActionType,
  ControlBarVisibility
} from '@/types';
import ControlBarAction from '@/components/layout/navigation/control-bar/control-bar-action';

export default function ControlBarActionRight({
  controlBar,
  rightControlAction
}: {
  controlBar: ControlBarVisibility;
  rightControlAction: ControlBarActionType;
}) {
  return (
    <div
      className={`absolute right-1/2 transition md:right-0 md:top-1 ${
        controlBar === 'collapsed'
          ? 'translate-x-1/2 scale-95 md:translate-x-0'
          : 'translate-x-24 scale-100 md:translate-x-16'
      }`}
    >
      <ControlBarAction type={rightControlAction} />
    </div>
  );
}
