import { tools } from '@/components/organisms/tools/data';

export function getTools({
  toolNames,
  sortBy = 'like-input'
}: {
  toolNames: string[];
  sortBy?: 'A-Z' | 'Z-A' | 'like-input';
}) {
  const allTools = tools.map((group) => group.children).flat();
  const filteredTools = allTools.filter((tool) =>
    toolNames.includes(tool.name)
  );

  switch (sortBy) {
    case 'A-Z':
      return filteredTools.sort((a, b) => {
        return a.name.localeCompare(b.name);
      });
    case 'Z-A':
      return filteredTools.sort((a, b) => {
        return b.name.localeCompare(a.name);
      });
    default:
      // Create a lookup map for constant-time position lookup
      const orderMap = new Map(
        filteredTools.map((name, index) => [name, index])
      );

      return [...filteredTools].sort((a, b) => {
        const indexA = orderMap.get(a);
        const indexB = orderMap.get(b);

        // Both in order list
        if (indexA !== undefined && indexB !== undefined) {
          return indexA - indexB;
        }
        // Only A missing
        if (indexA === undefined && indexB !== undefined) return 1;
        // Only B missing
        if (indexB === undefined && indexA !== undefined) return -1;
        // Both missing — keep original order (stable sort)
        return 0;
      });
  }
}

export function getToolGroups({ sortBy = 'A-Z' }: { sortBy?: 'A-Z' | 'Z-A' }) {
  const defaultSorted = tools.sort((a, b) => {
    return a.group.localeCompare(b.group);
  });

  switch (sortBy) {
    case 'A-Z':
      return defaultSorted;
    case 'Z-A':
      return tools.sort((a, b) => {
        return b.group.localeCompare(a.group);
      });
    default:
      return defaultSorted;
  }
}
