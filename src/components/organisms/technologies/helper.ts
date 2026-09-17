import { technologies } from '@/components/organisms/technologies/data';

export function getTechnologies({ names }: { names: string[] }) {
  const allTechnologies = technologies.map((group) => group.children).flat();
  const byName = new Map(
    allTechnologies.map((technology) => [technology.name, technology])
  );

  return names
    .map((name) => byName.get(name))
    .filter(
      (technology): technology is (typeof allTechnologies)[number] =>
        technology !== undefined
    );
}
