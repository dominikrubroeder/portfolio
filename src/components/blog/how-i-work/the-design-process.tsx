import { LockClosedIcon } from '@heroicons/react/24/outline';
import TextBlockPlaceholder from '@/components/ui/placeholder/text-block';
import ContainedSection from '@/components/section/contained-section';

export default function TheDesignProcess() {
  return (
    <div className="space-y-32">
      <ContainedSection className="grid gap-8">
        <div className="grid gap-2">
          <h2>How i work</h2>
          <h1 className="text-6xl font-bold text-theme-contrary">
            The Design Process
          </h1>
        </div>

        <p>
          Depending on the project requirements and needs, there are several
          steps to take in order to make a good, fitting design concept to an
          upcoming project. Where to start? As you may know, again – depending
          on the project you&apos;re about to build – you often have to combine
          the project requirements from the customer with budget, time and
          resources. You also have to bring together different departments in
          your team or agency you are working in (except you are a standalone,
          self-working team): Management, design, development, engineering, IT
          security, PMs, POs, ... the list is long.
          <br />
          <br />I discovered having a roadmap, especially when working in teams,
          brings transparency and structure into the workflow of design. It also
          makes it easier for others to follow your working items and visualize
          crucial events that are planned to happen in the process.
        </p>
      </ContainedSection>

      <div className="mx-auto h-96 w-full max-w-screen-2xl animate-fadeUp rounded-2xl bg-gray-5 px-4"></div>

      <ContainedSection className="grid gap-8">
        <div className="flex items-center gap-2">
          <LockClosedIcon className="h-4 w-4" />
          Description follows
        </div>

        <TextBlockPlaceholder />
      </ContainedSection>
    </div>
  );
}
