import { technologies } from '@/components/organisms/technologies/data';

export function getTechnologies({
  technologyNames
}: {
  technologyNames: string[];
}) {
  const allTechnologies = technologies.map((group) => group.children).flat();
  return allTechnologies.filter((technology) =>
    technologyNames.includes(technology.name)
  );
}
