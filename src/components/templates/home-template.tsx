import {
  EVENTS_WINTER_SCENE_ENABLED,
  Snowfall
} from '@/components/organisms/events';
import { ThemeNotesBackgroundCornellNotes } from '@/components/organisms/theme';
import { projects } from '@/components/organisms/projects/data';
import { preload } from 'react-dom';

export function HomeTemplate() {
  projects.forEach((project) => {
    if (project.previewImage) {
      preload(project.previewImage, {
        as: 'image',
        fetchPriority: 'high'
      });
    }
  });

  return (
    <>
      {EVENTS_WINTER_SCENE_ENABLED && <Snowfall />}

      <ThemeNotesBackgroundCornellNotes />

      <div className="mx-auto mb-6 max-w-(--container) px-4 text-4xl font-black text-foreground xs:text-7xl sm:mb-8 sm:text-9xl">
        Design the thing. Code the thing. Make it good.
      </div>
    </>
  );
}
