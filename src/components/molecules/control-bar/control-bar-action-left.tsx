import React from 'react';
import type {
  ControlBarActionType,
  ControlBarVisibility
} from '@/components/molecules/control-bar/types/types';
import { ControlBarAction } from '@/components/molecules/control-bar';

export function ControlBarActionLeft({
  controlBar,
  leftControlAction
}: {
  controlBar: ControlBarVisibility;
  leftControlAction: ControlBarActionType;
}) {
  return <ControlBarAction type={leftControlAction} />;
}
