import {
  EVENTS_WINTER_SCENE_ENABLED,
  Snowfall
} from '@/components/organisms/events';
import { ThemeNotesBackgroundCornellNotes } from '@/components/organisms/theme';

export function HomeTemplate() {
  return (
    <>
      {EVENTS_WINTER_SCENE_ENABLED && <Snowfall />}

      <ThemeNotesBackgroundCornellNotes />

      <div className="mx-auto mb-8 max-w-(--container) px-4 text-8xl font-black text-foreground sm:mb-12 sm:text-9xl">
        Design the thing. Code the thing. Make it good.
      </div>
    </>
  );
}
