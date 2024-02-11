import { useUpdateSearchParams } from '@/hooks/useUpdateSearchParams';
import SkillBadge from '@/components/skill-badge/skill-badge';

// To data.json?
// Create Type?
const skillBadges = [
  {
    id: 'interfacedesign',
    title: 'Interfacedesign',
    position: 'left-4 top-12'
    // scrollTo: 'tools'
  },
  {
    id: 'concept',
    title: 'Concept',
    position: 'left-4 top-48 lg:top-32 lg:left-1/2 lg:-translate-x-1/2'
  },
  {
    id: 'prototyping',
    title: 'Prototyping',
    position: 'top-64 right-4 lg:top-auto lg:bottom-32'
  },
  {
    id: 'microinteractions',
    title: 'Microinteractions',
    position: 'right-4 top-32 lg:top-40'
  },
  {
    id: 'transitions',
    title: 'Transitions',
    position: 'bottom-[15rem] right-4 lg:right-auto lg:left-16 lg:bottom-24'
  },
  {
    id: 'supportive-animations',
    title: 'Supportive Animations',
    position: 'bottom-80 left-4 lg:left-32 lg:bottom-72'
  },
  {
    id: 'frontend-development',
    title: 'Frontend Development',
    position: 'hidden lg:flex lg:right-4 lg:bottom-72'
  },
  {
    id: 'code-architecture',
    title: 'Code Architecture',
    position: 'hidden lg:flex lg:right-4 lg:top-72'
  },
  {
    id: 'design-patterns',
    title: 'Design Patterns',
    position: 'hidden lg:flex lg:right-96 lg:bottom-80'
  },
  {
    id: 'design-system',
    title: 'Design System',
    position: 'hidden lg:flex lg:left-72 lg:top-56'
  }
];

export default function SkillBadges() {
  const { searchParams } = useUpdateSearchParams();
  const designMode = searchParams.get('designMode');
  const devMode = searchParams.get('devMode');

  return skillBadges.map((skillBadge) => (
    <div
      key={skillBadge.id}
      className={`absolute ${
        skillBadge.position ? skillBadge.position : 'left-4 top-12'
      }`}
    >
      <SkillBadge
        key={skillBadge.id}
        label={skillBadge.title}
        designMode={designMode === 'true'}
        devMode={devMode === 'true'}
      />
    </div>
  ));
}
