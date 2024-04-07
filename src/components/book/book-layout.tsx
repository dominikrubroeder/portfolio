import { ReactNode } from 'react';
import Divider from '@/components/ui/divider';
import Image from 'next/image';
import Blockquote from '@/components/ui/blockquote';

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
  const dateFormattingOptions: Intl.DateTimeFormatOptions = {
    year: 'numeric',
    month: 'long',
    day: '2-digit'
  };

  const released = releaseDate.toLocaleDateString(
    'en-US',
    dateFormattingOptions
  );
  const updated = updateDate?.toLocaleDateString(
    'en-US',
    dateFormattingOptions
  );

  return (
    <div>
      <section className="mx-auto flex flex-col items-center justify-center pt-12">
        <Image
          src={cover}
          width={375}
          height={480}
          className="mx-auto h-auto max-w-64 object-contain shadow-2xl xl:max-w-none"
          alt={`${title} book cover`}
        />

        <div className="mx-auto my-16 grid max-w-screen-sm gap-4 px-4 text-center">
          <Blockquote>{summaryQuote}</Blockquote>
        </div>
      </section>

      <div className="space-y-32">
        <section className="mx-auto max-w-screen-sm px-4" id="introduction">
          <h1 className="mb-4 border-b border-b-gray-5 pb-4 text-4xl font-bold text-theme-contrary">
            {title}
          </h1>
          <p>
            by
            <i className="ml-1">{author}</i>,
          </p>

          <p className="flex items-center justify-between gap-4">
            <span>
              reviewed at <i>{released}</i>
            </span>
            <span className="rounded-full bg-accent-100 p-2 text-xs text-accent">
              Recommended read
            </span>
          </p>

          <p>Dominik Rubröder</p>

          {updated && <p>{updated}</p>}

          <div className="mt-16">{summaryDescription}</div>
        </section>

        <section
          className="relative mx-auto max-w-screen-sm px-4"
          id="learnings"
        >
          <h2 className="sticky top-[4.75rem] mb-6 border-b border-gray-5 bg-gray-6 py-3">
            <b className="text-theme-contrary">Learnings</b> on <i>{title}</i>
          </h2>

          {learnings}
        </section>

        <section className="mx-auto max-w-screen-sm px-4" id="outcome">
          <h2 className="sticky top-[4.75rem] mb-6 border-b border-gray-5 bg-gray-6 py-3">
            <b className="text-theme-contrary">Outcome</b> on <i>{title}</i>
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
    </div>
  );
}
