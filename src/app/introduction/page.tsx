import {
  MyBackgroundSection,
  MyEducationSection,
  MyPrinciplesAndWorkApproachSection,
  MyTechStackSection,
  MyWorkHistorySection
} from '@/components/organisms/sections';
import { PageTemplate } from '@/components/templates/page-template';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Introduction | Dominik Rubröder, UX Design Engineer',
  description: 'Design and code synergy since 2016.'
};

export default function IntroductionPage() {
  return (
    <PageTemplate
      h1="Introduction"
      heroBlockquote={
        <>
          <p>1 + 1 = 3.</p>
          <p>
            An important statement to think about. It refers to the term
            <i className="ml-1">synergy</i>, which basically says{' '}
            <i>the whole is greater than the sum of its individual parts</i> –
            what a great philosophy to believe in.
          </p>

          <p>
            This is why <i>design and code synergy</i> relates much to me and my
            work. Since my training in 2016 i connect design with code in my
            workflow to create user interfaces.
          </p>

          <p></p>
        </>
      }
      heroNavigationHiddenLink="/introduction"
    >
      <MyBackgroundSection />

      <MyEducationSection />

      <MyPrinciplesAndWorkApproachSection />

      <MyWorkHistorySection />

      <MyTechStackSection />
    </PageTemplate>
  );
}
