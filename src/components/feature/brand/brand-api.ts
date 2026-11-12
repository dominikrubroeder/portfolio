import type { Brand } from './brand-types';

// Serializable part of a `Brand`: the logo is a React node and stays out.
export const toBrandApi = ({ name, description, href, usageLevel }: Brand) => ({
  name,
  href,
  ...(description && { description }),
  ...(usageLevel && { usageLevel })
});

export const toBrandGroupsApi = (
  groups: { group: string; children: Brand[] }[]
) =>
  groups.map(({ group, children }) => ({
    group,
    items: children.map(toBrandApi)
  }));
