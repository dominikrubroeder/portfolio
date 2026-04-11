import {
  EVENTS_WINTER_SCENE_ENABLED,
  Snowfall
} from '@/components/organisms/events';
import {
  ThemeNotesBackgroundCornellNotes,
  ThemeWireframeBackground
} from '@/components/organisms/theme';
import { HomeHero } from '@/components/organisms/home';

export function HomeTemplate() {
  return (
    <>
      {EVENTS_WINTER_SCENE_ENABLED && <Snowfall />}

      <ThemeNotesBackgroundCornellNotes />

      <ThemeWireframeBackground />

      <HomeHero />
    </>
  );
}
