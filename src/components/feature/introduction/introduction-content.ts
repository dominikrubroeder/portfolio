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
      'context-based':
        'Designed in context of the user, the environment, the brand',
      sustainable:
        'The system is documented, upgradable, durable and efficient',
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

export const introductionPrinciples = [
  'Design in context — of the environment, of the people, of the brand',
  'Design in system — streamline processes, principles, components as close as possible for one ecosystem',
  "Design problem-focused — know the problem you're solving, it is the root problem to be solved, not its symptoms",
  'Design business-aware — cover business cases the company and its users are about, to root your design in an economically supported background',
  'Design sustainable — make maintainable systems that are documented, upgradeable, durable and efficient',
  'Design the experience — make it enjoyable, with a satisfying, pleasurable ease of use, think about the product as a holistic whole'
];
