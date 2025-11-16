import { Container } from '@/components/atoms/container';
import { Hr } from '@/components/atoms/hr';
import { ContactSection } from '@/components/organisms/contact';
import { FAQ } from '@/components/organisms/faq';
import { HomeHero } from '@/components/organisms/home';
import { Introduction } from '@/components/organisms/introduction';
import { Projects } from '@/components/organisms/projects';
import { Socials } from '@/components/organisms/socials';
import { Technologies } from '@/components/organisms/technologies';
import { Tools } from '@/components/organisms/tools';

export default async function HomePage() {
  return (
    <Container as="div" horizontalPadding className="space-y-12">
      <HomeHero />

      <Introduction />

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
    </Container>
  );
}
