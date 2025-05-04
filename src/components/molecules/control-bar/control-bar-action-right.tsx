import type {
  ControlBarActionType,
  ControlBarVisibility
} from '@/components/molecules/control-bar';
import { ControlBarAction } from '@/components/molecules/control-bar';

export function ControlBarActionRight({
  controlBar,
  rightControlAction = 'Up'
}: {
  controlBar: ControlBarVisibility;
  rightControlAction: ControlBarActionType;
}) {
  return (
    <div>
      <ControlBarAction type={rightControlAction} />
    </div>
  );
}
