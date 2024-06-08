import ControlBar from '@/components/navigation/control-bar/control-bar';
import { redirect } from 'next/navigation';
import ItemHeroSection from '@/components/heros/item-hero-section';
import Link from 'next/link';
import { fetchTechnology } from '@/lib/technologies';

export default async function TechnologyPage({
  params
}: {
  params: { technology: string };
}) {
  const technology = await fetchTechnology(params.technology);

  if (technology === null || technology === undefined) redirect('/');

  const sections = [
    {
      id: 'projects',
      label: `Projects with ${technology?.title}`,
      icon: 'DocumentDuplicateIcon'
    },
    { id: 'experience', label: 'Experience', icon: 'CheckCircleIcon' },
    { id: 'usage', label: 'Usage', icon: 'ArrowUturnRightIcon' },
    { id: 'related-usage', label: 'Related usage', icon: 'PlusIcon' }
  ];

  return (
    <>
      <ItemHeroSection item={technology} />

      <ControlBar
        sections={sections}
        collapse={false}
        leftControlAction="Back"
        rightControlAction="Avatar"
      />

      <section className="flex min-h-dvh items-center justify-center">
        <Link
          href={technology.website}
          className="absolute bottom-24 mx-auto flex gap-1 text-accent"
          target="_blank"
        >
          {technology.website}
        </Link>
      </section>
    </>
  );
}
