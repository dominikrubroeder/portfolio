import { Container } from '@/components/organisms/layout/container';
import { BrandList } from '@/components/organisms/brand';
import { Hr } from '@/components/atoms/hr';
import { mainTechnologies } from '@/components/organisms/technologies';
import type { Metadata } from 'next';
import { Blockquote } from '@/components/atoms/blockquote';
import { HeroNavigation } from '@/components/molecules/hero-navigation/hero-navigation';

export const metadata: Metadata = {
  title: 'Technologies | Dominik Rubröder, UX Design Engineer',
  description:
    'Coding technologies; languages that bring design to life with code.'
};

export default function TechnologiesPage() {
  return (
    <>
      <div className="animate-in-to-left-100">
        <Container as="section" size="container-readable" className="space-y-2">
          <h1>Technologies</h1>
          <Blockquote className="mt-3 sm:mt-5">
            Technologies; languages that bring design to life with code. There
            is a wide array of frameworks out there, here is what i use for
            daily coding tasks:
          </Blockquote>
        </Container>
      </div>

      <div className="animate-in-to-left-160">
        <Container as="section" size="container-readable">
          <BrandList brands={mainTechnologies} />
        </Container>
      </div>

      <Hr variant="container" />

      <HeroNavigation hiddenLink="/technologies" />
    </>
  );
}
