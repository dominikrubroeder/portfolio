import { technologies } from '@/components/organisms/technologies/data';

export function getTechnologies({ names }: { names: string[] }) {
  const allTechnologies = technologies.map((group) => group.children).flat();

  return allTechnologies.filter((technology) =>
    names.includes(technology.name)
  );
}
