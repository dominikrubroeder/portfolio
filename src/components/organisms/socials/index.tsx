import { Suspense } from 'react';
import LoadingList from '@/components/atoms/loading-list';
import SocialList from '@/components/organisms/socials/social-list';
import Section from '@/components/organisms/section';

export default function SocialSection() {
  return (
    <Section id="socials" className="md:pb-4">
      <header className="space-y-2 px-4 xl:px-16">
        <h2 className="text-3xl font-bold text-foreground">Social accounts</h2>
        <h3>
          Tools help me building, visualizing and capturing the things we are
          about to build want. Therefore i use:
        </h3>
      </header>

      <Suspense fallback={<LoadingList />}>
        <SocialList />
      </Suspense>
    </Section>
  );
}
