import { EVENTS_WINTER_SCENE_ENABLED, Snowfall } from '@/components/organisms/events';
import { ThemeNotesBackgroundCornellNotes } from '@/components/organisms/theme';
import { projects } from '@/components/organisms/projects/data';
import { preload } from 'react-dom';
import { Mission, Vision, Why } from '@/components/organisms/foundation';
import { Container } from '@/components/organisms/layout';

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

      <div className="mx-auto -mt-4 mb-6 bg-primary px-4 pb-3.5 text-4xl leading-[1.1] font-black text-primary-foreground xs:text-7xl sm:mb-8 sm:pb-4 sm:text-9xl sm:leading-none xl:mt-0">
        <div className="mx-auto max-w-(--container)">
          Design the thing. Code the thing. Make it good.
        </div>
      </div>

      <Container size="container">
        <Vision />
        <Mission />
        <Why />
      </Container>
    </>
  );
}
