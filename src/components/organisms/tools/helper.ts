import { tools } from '@/components/organisms/tools/data';

export function getTools({
  names,
  sortBy = 'like-input'
}: {
  names: string[];
  sortBy?: 'A-Z' | 'Z-A' | 'like-input';
}) {
  const allTools = tools.map((group) => group.children).flat();

  const filteredTools = allTools.filter((tool) => names.includes(tool.name));

  switch (sortBy) {
    case 'A-Z':
      return filteredTools.sort((a, b) => {
        return a.name.localeCompare(b.name);
      });
    case 'Z-A':
      return filteredTools.sort((a, b) => {
        return b.name.localeCompare(a.name);
      });
    default: {
      const byName = new Map(filteredTools.map((tool) => [tool.name, tool]));

      return names
        .map((name) => byName.get(name))
        .filter(
          (tool): tool is (typeof filteredTools)[number] => tool !== undefined
        );
    }
  }
}
