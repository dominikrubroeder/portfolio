export type DesignPrincipleId =
  | 'context'
  | 'system'
  | 'problem'
  | 'business'
  | 'sustainable'
  | 'experience';

export type DesignPrinciple = {
  id: DesignPrincipleId;
  /** The principle as a short imperative: "Design in context". */
  title: string;
  /** What it asks for, written to follow the title after a dash. */
  description: string;
  /** Short phrase for a `Term` tooltip where the principle appears inline. */
  hint?: string;
};

/**
 * The six core design principles. One source for the home page, `/agent-view`,
 * `/api/introduction` and the inline term hints. DESIGN.md §1.1 and
 * UX_PRINCIPLES.md describe how they apply to a UI decision.
 */
export const designPrinciples: DesignPrinciple[] = [
  {
    id: 'context',
    title: 'Design in context',
    description: 'of the environment, of the people, of the brand',
    hint: 'Designed in context of the user, the environment, the brand'
  },
  {
    id: 'system',
    title: 'Design in system',
    description:
      'streamline processes, principles, components as close as possible for one ecosystem'
  },
  {
    id: 'problem',
    title: 'Design problem-focused',
    description:
      "know the problem you're solving, it is the root problem to be solved, not its symptoms"
  },
  {
    id: 'business',
    title: 'Design business-aware',
    description:
      'cover business cases the company and its users are about, to root your design in an economically supported background'
  },
  {
    id: 'sustainable',
    title: 'Design sustainable',
    description:
      'make maintainable systems that are documented, upgradeable, durable and efficient',
    hint: 'The system is documented, upgradable, durable and efficient'
  },
  {
    id: 'experience',
    title: 'Design the experience',
    description:
      'make it enjoyable, with a satisfying, pleasurable ease of use, think about the product as a holistic whole'
  }
];

export const getDesignPrinciple = (id: DesignPrincipleId): DesignPrinciple => {
  const principle = designPrinciples.find((item) => item.id === id);

  if (!principle) throw new Error(`Unknown design principle: ${id}`);

  return principle;
};

/** The hint of a principle for a `Term` tooltip. */
export const getDesignPrincipleHint = (id: DesignPrincipleId): string =>
  getDesignPrinciple(id).hint ?? getDesignPrincipleText(getDesignPrinciple(id));

/** Title and description as one line: "Design in context — of the environment, …". */
export const getDesignPrincipleText = ({
  title,
  description
}: DesignPrinciple): string => `${title} — ${description}`;

export const toDesignPrincipleApi = ({
  id,
  title,
  description
}: DesignPrinciple) => ({ id, title, description });
