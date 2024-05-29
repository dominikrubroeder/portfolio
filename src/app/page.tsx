import IntroductionSection from '../components/sections/introduction-section';
import { Suspense } from 'react';
import HomeHeroSectionLoading from '@/components/home-page/home-hero-section-loading';
import HomeHeroSection from '@/components/home-page/home-hero-section';
import ProjectSection from '@/components/sections/project-section';
import ToolSection from '@/components/sections/tool-section';
import TechnologySection from '@/components/sections/technology-section';
import SocialSection from '@/components/sections/social-section';
import { ArrowDownIcon, EnvelopeIcon } from '@heroicons/react/24/outline';

export default function HomePage() {
  return (
    <>
      <Suspense fallback={<HomeHeroSectionLoading />}>
        <HomeHeroSection />
      </Suspense>

      <IntroductionSection />

      <section className="mx-auto my-8 flex w-full max-w-screen-sm items-center justify-center gap-4 border-t border-gray-5 py-16 text-center">
        <button className="flex items-center gap-2 rounded-2xl bg-accent px-4 py-3 text-white hover:bg-violet-500">
          <EnvelopeIcon className="size-4 shrink-0" /> Contact
        </button>

        <button className="flex items-center gap-2 rounded-2xl px-4 py-3">
          Go further <ArrowDownIcon className="size-4 shrink-0" />
        </button>
      </section>

      <ProjectSection />

      <ToolSection />

      <TechnologySection />

      <SocialSection />
    </>
  );
}
