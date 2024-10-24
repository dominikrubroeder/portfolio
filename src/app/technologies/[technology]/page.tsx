import ControlBar from '@/components/navigation/control-bar/control-bar';
import { redirect } from 'next/navigation';
import ItemHeroSection from '@/components/heros/item-hero-section';
import Link from 'next/link';
import { technologies } from '@/components/sections/technology-section/data';
import { formatTitle } from '@/lib/helpers';

export default function TechnologyPage({
  params
}: {
  params: { technology: string };
}) {
  const technology = technologies.find(
    (currentTechnology) =>
      formatTitle(currentTechnology.title) === formatTitle(params.technology)
  );

  if (technology === null || technology === undefined) redirect('/');

  const sections = [
    {
      id: 'projects',
      label: `Projects with ${technology?.title}`,
      icon: 'DocumentDuplicateIcon',
      className: '',
      defaultActive: false
    },
    {
      id: 'experience',
      label: 'Experience',
      icon: 'CheckCircleIcon',
      className: '',
      defaultActive: false
    },
    {
      id: 'usage',
      label: 'Usage',
      icon: 'ArrowUturnRightIcon',
      className: '',
      defaultActive: false
    },
    {
      id: 'related-usage',
      label: 'Related usage',
      icon: 'PlusIcon',
      className: '',
      defaultActive: false
    }
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
