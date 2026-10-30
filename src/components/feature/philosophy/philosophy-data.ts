export const philosophyCoreLabel = 'UI';

export const philosophyCoreTabLabels = ['Design', 'Code', 'UX'];

export const philosophyHolisticLabels = [
  'Design',
  'Code',
  'Marketing',
  'Sales',
  'Business',
  'Analytics',
  'Consulting',
  'UX'
];

export const philosophyTabs = [
  {
    title: 'Core product UI',
    labels: philosophyCoreTabLabels,
    core: philosophyCoreLabel
  },
  {
    title: 'Holistic product UI',
    labels: philosophyHolisticLabels,
    core: philosophyCoreLabel
  }
];

export type PhilosophyTopic = {
  characteristics: string[];
  purpose: string[];
  fields: string[];
};

/**
 * Topics that open one level deeper in the blossom. The topic becomes the new
 * center; its characteristics, purpose and fields become the petals, in that
 * order, clockwise from the top. Any number of petals works: the ring spaces
 * them evenly. A label without an entry here stays a plain circle.
 */
export const philosophyTopics: Record<string, PhilosophyTopic> = {
  Design: {
    characteristics: ['Visual', 'Systematic', 'Empathic'],
    purpose: ['Clarity', 'Identity'],
    fields: ['Branding', 'Interaction', 'Design systems']
  },
  Code: {
    characteristics: ['Logical', 'Precise', 'Reusable'],
    purpose: ['Function', 'Performance'],
    fields: ['Frontend', 'Architecture', 'Tooling']
  },
  UX: {
    characteristics: ['Human', 'Evidence-based', 'Iterative'],
    purpose: ['Usability', 'Flow'],
    fields: ['Research', 'Information architecture', 'Accessibility']
  }
};

export const philosophyTopicGroups = [
  { key: 'characteristics', title: 'Characteristics' },
  { key: 'purpose', title: 'Purpose' },
  { key: 'fields', title: 'Fields' }
] as const;
