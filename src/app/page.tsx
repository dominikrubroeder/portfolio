import { Container } from '@/components/atoms/container';
import { ContactSection } from '@/components/organisms/contact';
import { FAQ } from '@/components/organisms/faq';
import { HomeHero } from '@/components/organisms/home';
import { Projects } from '@/components/organisms/projects';
import { Socials } from '@/components/organisms/socials';
import { Technologies } from '@/components/organisms/technologies';
import { Tools } from '@/components/organisms/tools';
import {
  EVENTS_WINTER_SCENE_ENABLED,
  Snowfall
} from '@/components/organisms/events';
import {
  ThemeNotesBackgroundCornellNotes,
  ThemeWireframeBackground
} from '@/components/organisms/theme';

export default async function HomePage() {
  return (
    <Container
      as="div"
      size="container"
      horizontalPadding
      className="space-y-24"
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
