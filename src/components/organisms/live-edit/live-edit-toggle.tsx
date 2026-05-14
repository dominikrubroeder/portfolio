'use client';

import { Toggle } from '@/components/atoms/toggle';
import { useLiveEdit } from '@/components/organisms/live-edit';

export function LiveEditToggle() {
  const { liveEditEnabled, setLiveEditEnabled } = useLiveEdit();

  return (
    <Toggle
      label="Enable live edit"
      className="justify-between"
      isEnabled={liveEditEnabled}
      onClick={() => setLiveEditEnabled((previousState) => !previousState)}
    />
  );
}
