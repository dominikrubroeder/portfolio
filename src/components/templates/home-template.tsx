import {
  EVENTS_WINTER_SCENE_ENABLED,
  Snowfall
} from '@/components/organisms/events';
import {
  ThemeNotesBackgroundCornellNotes,
  ThemeWireframeBackground
} from '@/components/organisms/theme';
import { HomeHero } from '@/components/organisms/home';
import { Projects } from '@/components/organisms/projects';
import { Tools } from '@/components/organisms/tools';
import { Technologies } from '@/components/organisms/technologies';
import { Socials } from '@/components/organisms/socials';
import { FAQ } from '@/components/organisms/faq';
import { ContactSection } from '@/components/organisms/contact';
import { Container } from '@/components/atoms/container';

export function HomeTemplate() {
  return (
    <Container
      as="div"
      size="container"
      horizontalPadding
      className="space-y-12 sm:space-y-24"
    >
      {EVENTS_WINTER_SCENE_ENABLED && <Snowfall />}

      <ThemeWireframeBackground />

      <ThemeNotesBackgroundCornellNotes />

      <HomeHero />

      <Projects />

      <Tools />

      <Technologies />

      <Socials />

      <FAQ />

      <ContactSection />
    </Container>
  );
}
