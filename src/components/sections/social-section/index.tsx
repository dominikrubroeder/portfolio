import { Suspense } from 'react';
import LoadingList from '@/components/ui/loading-list';
import SocialList from '@/components/sections/social-section/social-list';

export default function SocialSection() {
  return (
    <section id="socials" className="flex flex-col justify-center gap-8 py-16">
      <header className="flex gap-1 px-4 sm:px-16">
        <h2 className="font-bold text-theme-contrary">Social Accounts</h2>
        <span>I use</span>
      </header>

      <Suspense fallback={<LoadingList />}>
        <SocialList />
      </Suspense>
    </section>
  );
}
