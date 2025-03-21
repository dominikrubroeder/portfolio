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
    <div
      className={`absolute right-1/2 transition md:top-1 md:right-0 ${
        controlBar === 'collapsed'
          ? 'translate-x-1/2 scale-95 md:translate-x-0'
          : 'translate-x-24 scale-100 md:translate-x-16'
      }`}
    >
      <ControlBarAction type={rightControlAction} />
    </div>
  );
}
