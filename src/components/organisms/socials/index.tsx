import { Suspense } from 'react';
import LoadingList from '@/components/atoms/loading-list';
import SocialList from '@/components/organisms/socials/social-list';
import Section from '@/components/organisms/section';

export default function SocialSection() {
  return (
    <Section id="socials" className="md:pb-4">
      <header className="flex gap-1 px-4 xl:px-16">
        <h2 className="text-foreground font-bold">Social Accounts</h2>
        <span>I use</span>
      </header>

      <Suspense fallback={<LoadingList />}>
        <SocialList />
      </Suspense>
    </Section>
  );
}
