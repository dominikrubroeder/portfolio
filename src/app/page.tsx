import TechnologySection from '@/components/technology/technology-section';
import ToolSection from '@/components/tool/tool-section';
import SocialSection from '@/components/social/social-section';
import ProjectSection from '@/components/projects/project-section';
import HomeHeroSection from '@/components/heros/home-hero-section';
import NotesSection from '@/components/notes/notes-section';
import { Suspense } from 'react';

export default function HomePage() {
  return (
    <>
      <Suspense>
        <HomeHeroSection />
      </Suspense>

      <ProjectSection />

      <ToolSection />

      <TechnologySection />

      <SocialSection />

      <NotesSection />
    </>
  );
}
