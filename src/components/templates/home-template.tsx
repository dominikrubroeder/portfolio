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

      <div className="mx-auto -mt-4 mb-6 max-w-(--container) bg-primary px-4 pb-3.5 text-4xl leading-[1.1] font-black text-primary-foreground xs:text-7xl sm:mt-0 sm:mb-8 sm:pb-4 sm:text-9xl sm:leading-none">
        Design the thing. Code the thing. Make it good.
      </div>
    </>
  );
}
