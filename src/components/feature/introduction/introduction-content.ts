import { getDesignPrincipleHint } from '@/components/feature/design-principles';

/** A body paragraph (plain string) or a blockquote with an optional author. */
export type IntroductionParagraph = string | { quote: string; author?: string };

export type IntroductionStatement = {
  text: string;
  /** Optional body copy shown under the statement; entries may be blockquotes. */
  paragraphs?: IntroductionParagraph[];
  /** Words in the paragraphs that get a dotted underline and a tooltip; the first match is marked. */
  terms?: Record<string, string>;
};

export const introductionStatements: IntroductionStatement[] = [
  {
    text: 'Design and code speak the same language',
    paragraphs: [
      { quote: 'I love crafting UIs, their patterns, principles and systems.' },
      'And I love concepts and prototyping a lot. Quickly testing new ideas or approaches in between brings creativity more into play and keeps it alive.',
      "Together with today's tools and technologies I build context-based, sustainable and purposive user interfaces.",
      'The user experience is the leading factor how well a UI is perceived, consumed and remembered by the user. It is the winning factor of how satisfied people are using (digital) products and services.'
    ],
    terms: {
      'context-based': getDesignPrincipleHint('context'),
      sustainable: getDesignPrincipleHint('sustainable'),
      purposive: 'Serving a specific goal or purpose'
    }
  },
  { text: 'I connect the worlds of design and code' },
  { text: "It's a craft about UI components and design systems" },
  { text: 'Building things is about composing things' },
  {
    text: 'Design is about care, acting with intention and purposeful thinking'
  },
  { text: 'Code is about functionality, efficiency and performance' },
  {
    text: 'The user experience is about positive feeling, user satisfaction and simple, playful delight'
  },
  { text: 'Agents are about orchestration and execution' },
  { text: 'We compose, direct and oversee' },
  { text: 'So we shape the core product UI' }
];
