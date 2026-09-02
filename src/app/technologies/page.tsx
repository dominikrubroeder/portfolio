import { Container } from '@/components/organisms/layout/container';
import { BrandList } from '@/components/organisms/brand';
import { mainTechnologies } from '@/components/organisms/technologies';
import type { Metadata } from 'next';
import { PageTemplate } from '@/components/templates/page-template';

export const metadata: Metadata = {
  title: 'Technologies | Dominik Rubröder, UX Engineer',
  description:
    'Coding technologies; languages that bring design to life with code.'
};

export default function TechnologiesPage() {
  return (
    <PageTemplate
      h1="Technologies"
      heroBlockquote="Technologies are the foundation of writing production-ready code. There is a wide array of frameworks out there, this is what i use in daily coding:"
      heroNavigationHiddenLink="/technologies"
    >
      <Container
        as="section"
        size="container-readable"
        className="animate-in-to-left-160"
      >
        <BrandList brands={mainTechnologies} />
      </Container>
    </PageTemplate>
  );
}
