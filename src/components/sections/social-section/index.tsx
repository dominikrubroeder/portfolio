import { Suspense } from 'react';
import LoadingList from '@/components/ui/loading-list';
import SocialList from '@/components/sections/social-section/social-list';
import Section from '@/components/sections/section';

export default function SocialSection() {
  return (
    <Section id="socials" className="md:pb-4">
      <header className="flex gap-1 px-4 md:px-16">
        <h2 className="font-bold text-foreground">Social Accounts</h2>
        <span>I use</span>
      </header>

      <Suspense fallback={<LoadingList />}>
        <SocialList />
      </Suspense>
    </Section>
  );
}
