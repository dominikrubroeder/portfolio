import { Fragment } from 'react';
import type { ReactNode } from 'react';

import { Button } from '@/components/ui/button';
import { Code } from '@/components/ui/code';

import { Ul } from '@/components/feature/typography';

import { getResponsibilityText } from './selected-works-helper';

import type { ProjectResponsibility } from './selected-works-types';

// Text between backticks renders as inline code, like in Slack or Markdown.
function InlineCode({ text }: { text: string }): ReactNode {
  return text
    .split('`')
    .map((part, index) =>
      index % 2 === 1 ? (
        <Code key={index}>{part}</Code>
      ) : (
        <Fragment key={index}>{part}</Fragment>
      )
    );
}

// Plain text, or text with the first occurrence of `link.label` turned into an external link.
export function ProjectResponsibilityText({
  responsibility
}: {
  responsibility: ProjectResponsibility;
}) {
  if (typeof responsibility === 'string')
    return <InlineCode text={responsibility} />;

  if (!responsibility.link) return <InlineCode text={responsibility.text} />;

  const { label, href } = responsibility.link;
  const [before, ...rest] = responsibility.text.split(label);

  return (
    <>
      <InlineCode text={before} />
      <Button variant="text-primary" href={href}>
        {label}
      </Button>
      <InlineCode text={rest.join(label)} />
    </>
  );
}

// One `li` of a responsibilities list: the text plus its nested sublist, if any.
export function ProjectResponsibilityItem({
  responsibility,
  keyPrefix
}: {
  responsibility: ProjectResponsibility;
  keyPrefix: string;
}) {
  const items =
    typeof responsibility === 'string' ? undefined : responsibility.items;

  return (
    <li>
      <ProjectResponsibilityText responsibility={responsibility} />

      {items?.length ? (
        <Ul listStyle="disc" className="my-2">
          {items.map((item) => {
            const key = `${keyPrefix}-${getResponsibilityText(item)}`;

            return (
              <ProjectResponsibilityItem
                key={key}
                responsibility={item}
                keyPrefix={key}
              />
            );
          })}
        </Ul>
      ) : null}
    </li>
  );
}
