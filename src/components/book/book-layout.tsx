import { ReactNode } from 'react';
import Divider from '@/components/ui/divider';
import Image from 'next/image';
import ControlBar from '@/components/layout/navigation/control-bar/control-bar';

const sections = [
  { id: 'introduction', label: 'Introduction', icon: 'DocumentDuplicateIcon' },
  { id: 'learnings', label: 'Learnings', icon: 'PaintBrushIcon' },
  { id: 'outcome', label: 'Outcome', icon: 'Cog6ToothIcon' },
  { id: 'further', label: 'Further reading', icon: 'CheckBadgeIcon' }
];

export default function BookLayout({
  title,
  author,
  cover,
  releaseDate,
  updateDate,
  summaryQuote,
  summaryDescription,
  learnings,
  outcome,
  furtherReading
}: {
  title: string;
  author: string;
  cover: string;
  releaseDate: Date;
  updateDate?: Date;
  summaryQuote: ReactNode;
  summaryDescription: ReactNode;
  learnings: ReactNode;
  outcome: ReactNode;
  furtherReading?: ReactNode;
}) {
  const released = releaseDate.toLocaleDateString('de-DE');
  const updated = updateDate?.toLocaleDateString('de-DE');

  return (
    <div className="space-y-32">
      <section className="mx-auto">
        <Image
          src={cover}
          width={320}
          height={415}
          className="mx-auto object-contain"
          alt={`${title} book cover`}
        />

        <div className="mx-auto my-16  max-w-screen-sm px-4 text-center">
          <blockquote className="border-l-4 border-l-black pl-4 text-left">
            {summaryQuote}
          </blockquote>

          <div className="mt-4">
            <button className="text-accent">Read more</button>
          </div>
        </div>
      </section>

      <ControlBar sections={sections} collapse={false} />

      <section className="mx-auto max-w-screen-sm px-4" id="introduction">
        <h1 className="mb-4 border-b border-b-gray-5 pb-4 text-4xl font-bold text-theme-contrary">
          {title}
        </h1>

        <p>
          by
          <i className="ml-1">{author}</i>, reviewed at {released}
        </p>

        {updated && <p>{updated}</p>}

        <div className="mt-16">{summaryDescription}</div>
      </section>

      <section className="mx-auto max-w-screen-sm px-4" id="learnings">
        <h2 className="sticky top-0 mb-4 bg-gray-6 py-2">
          Learnings on <i>{title}</i>
        </h2>
        <h3>
          <b className="text-theme-contrary">My takes on</b> <i>{title}</i>
        </h3>
        {learnings}
      </section>

      <section className="mx-auto max-w-screen-sm px-4" id="outcome">
        <h2 className="mb-4">
          Outcome on <i>{title}</i>
        </h2>
        {outcome}
      </section>

      {furtherReading && (
        <section className="mx-auto max-w-screen-sm px-4">
          <Divider />
          {furtherReading}
        </section>
      )}
    </div>
  );
}
