import type { ReactNode } from 'react';

import { Blockquote } from '@/components/ui/blockquote';
import { Term } from '@/components/ui/term';

import { cn } from '@/lib/utils';

import type { IntroductionParagraph } from './introduction-content';

type IntroductionStatementParagraphsProps = {
  paragraphs?: IntroductionParagraph[];
  terms?: Record<string, string>;
  className?: string;
};

// Marks the first occurrence of each term with a dotted underline and a tooltip.
function TermText({
  text,
  terms
}: {
  text: string;
  terms?: Record<string, string>;
}): ReactNode {
  const entries = Object.entries(terms ?? {});
  const match = entries.find(([term]) => text.includes(term));

  if (!match) return text;

  const [term, hint] = match;
  const [before, ...rest] = text.split(term);
  const remaining = Object.fromEntries(entries.filter(([key]) => key !== term));

  return (
    <>
      <TermText text={before} terms={remaining} />
      <Term hint={hint}>{term}</Term>
      <TermText text={rest.join(term)} terms={remaining} />
    </>
  );
}

export function IntroductionStatementParagraphs({
  paragraphs,
  terms,
  className
}: IntroductionStatementParagraphsProps) {
  if (!paragraphs?.length) return null;

  return (
    <div className={cn('mt-5 space-y-3', className)}>
      {paragraphs.map((paragraph) =>
        typeof paragraph === 'string' ? (
          <p key={paragraph}>
            <TermText text={paragraph} terms={terms} />
          </p>
        ) : (
          <Blockquote
            key={paragraph.quote}
            author={paragraph.author}
            horizontalOffset={false}
            centered={false}
            className="my-5"
          >
            {paragraph.quote}
          </Blockquote>
        )
      )}
    </div>
  );
}
