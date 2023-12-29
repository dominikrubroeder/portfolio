import { Suspense } from 'react';
import LoadingList from '@/components/LoadingList';
import SocialList from '@/components/social/SocialList';

export default function SocialSection() {
  return (
    <section
      id="socials"
      className="min-h-dvh flex flex-col justify-center py-16 gap-8"
    >
      <header className="flex gap-1 px-16">
        <h2 className="text-white font-bold">Social Accounts</h2>
        <span>I use</span>
      </header>

      <Suspense fallback={<LoadingList />}>
        <SocialList />
      </Suspense>
    </section>
  );
}
