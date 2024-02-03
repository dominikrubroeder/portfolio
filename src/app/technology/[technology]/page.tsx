import ControlBar from '@/components/navigation/control-bar/ControlBar';
import { getTechnology } from '@/lib';
import { redirect } from 'next/navigation';
import ItemHeroSection from '@/components/heros/ItemHeroSection';
import Link from 'next/link';

export default async function TechnologyPage({
  params
}: {
  params: { technology: string };
}) {
  const technology = await getTechnology(params.technology);

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
          className="absolute bottom-24 mx-auto flex gap-1 text-violet-400"
          target="_blank"
        >
          {technology.website}
        </Link>
      </section>
    </>
  );
}
