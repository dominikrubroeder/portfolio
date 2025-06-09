import { HomeHero } from '@/components/organisms/home';
import { Introduction } from '@/components/organisms/introduction';
import { Tools } from '@/components/organisms/tools';
import { Technologies } from '@/components/organisms/technologies';
import { Socials } from '@/components/organisms/socials';
import { FAQ } from '@/components/organisms/faq';

export default async function HomePage() {
  return (
    <div className="animate-fade-up-1rem space-y-6">
      <HomeHero />

      <div className="mx-auto space-y-12 px-4 sm:max-w-(--readable-container) lg:px-0">
        <Introduction />

        <hr />

        <Tools />

        <hr />

        <Technologies />

        <hr />

        <Socials />

        <hr />

        <FAQ />
      </div>
    </div>
  );
}
