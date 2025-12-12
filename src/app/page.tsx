import { Container } from '@/components/atoms/container';
import { Hr } from '@/components/atoms/hr';
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
import { LiveEditToolbar } from '@/components/organisms/live-edit';

export default async function HomePage() {
  return (
    <Container
      as="div"
      size="container"
      horizontalPadding
      className="space-y-12"
    >
      {EVENTS_WINTER_SCENE_ENABLED && <Snowfall />}

      <ThemeWireframeBackground />

      <ThemeNotesBackgroundCornellNotes />

      <HomeHero />

      <Projects />

      <Hr />

      <Tools />

      <Hr />

      <Technologies />

      <Hr />

      <Socials />

      <Hr />

      <FAQ />

      <Hr />

      <ContactSection />

      <LiveEditToolbar />
    </Container>
  );
}
